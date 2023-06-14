import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import {
  QueryDocumentSnapshot,
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import { nameService, powerSupply, status } from 'types/levelNo';
interface UpdateDataPayload {
  id: string;
  values: any;
}
export interface Data {
  id: string;
  stt: string;
  customerName: string;
  serviceName: string;
  timeLevel: string;
  expiry: string;
  status: number;
  powerSupply: string;
}

interface DataState {
  data: Data[];
  count: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: [],
  count: 0,
  status: 'idle',
  error: null,
};

const levelNoSlices = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataRequested(state) {
      state.status = 'loading';
    },
    dataReceived(state, action: PayloadAction<Data[]>) {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    dataRequestFailed(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateService(state, action: PayloadAction<{ id: string; data: Partial<Data> }>) {
      const { id, data } = action.payload;
      const index = state.data.findIndex((device) => device.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...data };
      }
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { dataRequested, dataReceived, dataRequestFailed, updateService, setCount } = levelNoSlices.actions;

export default levelNoSlices.reducer;

export const fetchData =
  (
    selectedServiceName: nameService,
    selectedStatus: status,
    selectedPowerSupply: powerSupply,
    page: number
  ): AppThunk =>
  async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, 'levelNo');
      const itemsPerPage = 10;
      let queryString = query(equipment, limit(10));
      if (selectedServiceName !== nameService.ALL) {
        queryString = query(equipment, where('serviceName', '==', selectedServiceName), limit(10));
      }
      if (selectedStatus !== status.ALL) {
        queryString = query(equipment, where('status', '==', selectedStatus), limit(10));
      }

      if (selectedPowerSupply !== powerSupply.ALL) {
        queryString = query(equipment, where('powerSupply', '==', selectedPowerSupply), limit(10));
      }

      if (page > 1) {
        const snapshot = await getDocs(queryString);
        const lastVisibleDocument = snapshot.docs[snapshot.docs.length - 1];
        queryString = query(equipment, startAfter(lastVisibleDocument), limit(itemsPerPage));
      }
      const snapshot = await getDocs(queryString);

      const result = snapshot.docs.map((docSnap: QueryDocumentSnapshot<any>) => ({
        ...docSnap.data(),
        id: docSnap.id,
      }));

      dispatch(dataReceived(result));
    } catch (error) {
      dispatch(dataRequestFailed(error.message));
    }
  };

export const fetchCount = (): AppThunk => async (dispatch: any) => {
  try {
    const equipment = collection(firebaseDatabase, 'levelNo');
    let queryString = query(equipment, limit(10));
    const coll = collection(firebaseDatabase, 'levelNo');
    const countSnapshot = await getCountFromServer(coll);
    dispatch(setCount(countSnapshot.data()?.count));
  } catch (error) {
    // Xử lý lỗi
  }
};

export const fetchSearchLevelNo =
  (searchTerm: string): AppThunk =>
  async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, 'levelNo');
      const searchQuery = query(equipment);
      const snapshot = await getDocs(searchQuery);
      const result = snapshot.docs
        .map((docSnap: QueryDocumentSnapshot<any>) => ({
          ...docSnap.data(),
          id: docSnap.id,
        }))
        .filter(
          (doc: any) =>
            doc.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.stt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      dispatch(dataReceived(result));
    } catch (error) {
      dispatch(dataRequestFailed(error.message));
    }
  };
