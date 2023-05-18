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
  updateDoc,
  where,
} from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import { connectionStatus, operationStatus } from 'types/device';

interface UpdateDataPayload {
  id: string;
  values: any;
}
export interface Data {
  deviceCode: string;
  deviceName: string;
  addressIP: string;
  operationStt: operationStatus;
  connectionStt: connectionStatus;
  serviceUsed: string;
  password: string;
  id: string;
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
const dataSlice = createSlice({
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
    updateDevice(state, action: PayloadAction<{ id: string; data: Partial<Data> }>) {
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

export const { dataRequested, dataReceived, dataRequestFailed, updateDevice, setCount } = dataSlice.actions;

export default dataSlice.reducer;

export const fetchData =
  (selectedOperationStt: any, selectedConnectionStt: any ,page: number): AppThunk =>
    async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, 'device');
      const itemsPerPage = 10;
      let queryString = query(equipment, limit(itemsPerPage) );
      if (selectedOperationStt !== operationStatus.ALL) {
        queryString = query(equipment, where('operationStt', '==', selectedOperationStt), limit(itemsPerPage));
      }
      if (selectedConnectionStt !== connectionStatus.ALL) {
        queryString = query(equipment, where('connectionStt', '==', selectedConnectionStt), limit(itemsPerPage));
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

const handleCreate = async (data: any) => {
  const equipment = collection(firebaseDatabase, 'device');

  const snapshot = await addDoc(equipment, data);

};

export const addDeviceAsync = createAsyncThunk('data/addDevice', async (data: any) => {
  const {
    deviceCode,
    typeofDevice,
    deviceName,
    userName,
    addressIP,
    serviceUsed,
    operationStt,
    connectionStt,
    password,
  } = data;
  const device = {
    deviceCode,
    typeofDevice,
    deviceName,
    userName,
    addressIP,
    serviceUsed,
    operationStt,
    connectionStt,
    password,
  };
  handleCreate(device);
});

export const updateDeviceAsync = createAsyncThunk('data/updateDevice', async (payload: UpdateDataPayload) => {
  const { id, values } = payload;
  console.log(payload);
  const documentRef = doc(firebaseDatabase, 'device', id); // Thay collection-name bằng tên collection của bạn
  try {
    await updateDoc(documentRef, values);
  } catch (error) {
    console.log(error);
  }
});
export const fetchCount = (): AppThunk => async (dispatch: any) => {
  try {
    const equipment = collection(firebaseDatabase, 'device');
    let queryString = query(equipment, limit(10));
    const coll = collection(firebaseDatabase, 'device');
    const countSnapshot = await getCountFromServer(coll);
    dispatch(setCount(countSnapshot.data()?.count));
  } catch (error) {
    // Xử lý lỗi
  }
};

