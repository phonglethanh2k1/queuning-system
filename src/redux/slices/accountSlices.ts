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
import { Role, RoleOptions, Status, StatusOptions } from 'types/account';
interface UpdateDataPayload {
  id: string;
  values: any;
}
export interface Data {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  role: { id: Role.ACCOUNTANT; label: any };
  status: number;
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

const accountSlices = createSlice({
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
    updateAccount(state, action: PayloadAction<{ id: string; data: Partial<Data> }>) {
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

export const { dataRequested, dataReceived, dataRequestFailed, updateAccount, setCount } = accountSlices.actions;

export default accountSlices.reducer;

export const fetchData =
  (selectedRole: Role, offset: number): AppThunk =>
  async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, 'accountSetting');
      const itemsPerPage = 10;
      let queryString = query(equipment, limit(itemsPerPage));
      if (selectedRole !== Role.ALL) {
        queryString = query(equipment, where('role', '==', selectedRole), limit(itemsPerPage));
      }

      if (offset > 1) {
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
  const equipment = collection(firebaseDatabase, 'accountSetting');

  const snapshot = await addDoc(equipment, data);
};

export const addAccountAsync = createAsyncThunk('data/addAccount', async (data: any) => {
  const { fullName, userName, phoneNumber, password, email, retypePassword, role, status } = data;
  const account = {
    fullName,
    userName,
    phoneNumber,
    password,
    email,
    retypePassword,
    role,
    status,
  };
  handleCreate(account);
  return account;
});

export const updateAccountAsync = createAsyncThunk('data/updateAccount', async (payload: UpdateDataPayload) => {
  const { id, values } = payload;
  const documentRef = doc(firebaseDatabase, 'accountSetting', id); // Thay collection-name bằng tên collection của bạn
  const checkboxDocs = values.checkbox.map((checkboxItem: any, index: any) => {
    return {
      id: `checkbox_${index}`,
      value: checkboxItem,
    };
  });
  try {
    await updateDoc(documentRef, values);
  } catch (error) {
    console.log(error);
  }
});
export const fetchCount = (): AppThunk => async (dispatch: any) => {
  try {
    const equipment = collection(firebaseDatabase, 'report');
    let queryString = query(equipment, limit(10));
    const coll = collection(firebaseDatabase, 'report');
    const countSnapshot = await getCountFromServer(coll);
    dispatch(setCount(countSnapshot.data()?.count));
  } catch (error) {
    // Xử lý lỗi
  }
};
