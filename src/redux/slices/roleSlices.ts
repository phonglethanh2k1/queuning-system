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
  updateDoc,
} from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
interface UpdateDataPayload {
  id: string;
  values: any;
}
export interface Data {
  id: string;
  roleName: string;
  numberOfUsers: string;
  descrip: string;
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

const roleSlices = createSlice({
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
    UpdateRole(state, action: PayloadAction<{ id: string; data: Partial<Data> }>) {
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

export const { dataRequested, dataReceived, dataRequestFailed, UpdateRole, setCount } = roleSlices.actions;

export default roleSlices.reducer;

export const fetchData = (): AppThunk => async (dispatch: any) => {
  dispatch(dataRequested());
  try {
    const equipment = collection(firebaseDatabase, 'roleSetting');
    const itemsPerPage = 10;
    let queryString = query(equipment, limit(10));
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
  const equipment = collection(firebaseDatabase, 'roleSetting');

  const snapshot = await addDoc(equipment, data);
};

export const addRoleAsync = createAsyncThunk('data/addRole', async (data: any) => {
  const { roleName, descrip, checkboxA, checkboxB, numberOfUsers } = data;
  const role = {
    roleName,
    descrip,
    numberOfUsers,
    checkboxA,
    checkboxB,
  };
  handleCreate(role);
});

export const updateRoleAsync = createAsyncThunk('data/updateRole', async (payload: UpdateDataPayload) => {
  const { id, values } = payload;
  const documentRef = doc(firebaseDatabase, 'roleSetting', id);
  // const checkboxDocs = values.checkbox.map((checkboxItem: any, index: any) => {
  //   return {
  //     id: `checkbox_${index}`,
  //     value: checkboxItem,
  //   };
  // });
  try {
    await updateDoc(documentRef, {
      roleName: values.roleName,
      descrip: values.descrip,
      // operationStt: values.operationStt,
      // checkbox: checkboxDocs,
    });
  } catch (error) {
    console.log(error);
  }
});

export const fetchSearchRole =
  (searchTerm: string): AppThunk =>
  async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, 'roleSetting');
      const searchQuery = query(equipment);
      const snapshot = await getDocs(searchQuery);
      const result = snapshot.docs
        .map((docSnap: QueryDocumentSnapshot<any>) => ({
          ...docSnap.data(),
          id: docSnap.id,
        }))
        .filter(
          (doc: any) =>
            doc.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.descrip.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.numberOfUsers.toLowerCase().includes(searchTerm.toLowerCase())
        );
      dispatch(dataReceived(result));
    } catch (error) {
      dispatch(dataRequestFailed(error.message));
    }
  };
