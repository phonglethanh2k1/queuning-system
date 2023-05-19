import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
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
} from "firebase/firestore";
import { firebaseDatabase } from "firebaseApp/config";
import { operationStatus } from "types/service";
interface UpdateDataPayload {
  id: string;
  values: any;
}
export interface Data {
  stt: string;
  customerName: string;
  serviceName: string;
  timeLevel: string;
  expiry: string;
  status: number;
  powerSupply: string
  id: string
}

interface DataState {
  data: Data[];
  count: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: [],
  count: 0,
  status: "idle",
  error: null,
};

const levelNoSlices= createSlice({
  name: "data",
  initialState,
  reducers: {
    dataRequested(state) {
      state.status = "loading";
    },
    dataReceived(state, action: PayloadAction<Data[]>) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    dataRequestFailed(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    updateService(
      state,
      action: PayloadAction<{ id: string; data: Partial<Data> }>
    ) {
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

export const { dataRequested, dataReceived, dataRequestFailed, updateService,setCount } =
levelNoSlices.actions;

export default levelNoSlices.reducer;

export const fetchData =
  (selectedOperationStt: any,page: number): AppThunk =>
  async (dispatch: any) => {
    dispatch(dataRequested());
    try {
      const equipment = collection(firebaseDatabase, "levelNo");
      const itemsPerPage = 10;
      let queryString = query(equipment, limit(10));
      if (selectedOperationStt !== operationStatus.ALL) {
        queryString = query(
          equipment,
          where("operationStt", "==", selectedOperationStt),
          limit(10)
        );
      }
      

      if (page > 1) {
        const snapshot = await getDocs(queryString);
        const lastVisibleDocument = snapshot.docs[snapshot.docs.length - 1];
        queryString = query(equipment, startAfter(lastVisibleDocument), limit(itemsPerPage));
      }
      const snapshot = await getDocs(queryString);

      const result = snapshot.docs.map(
        (docSnap: QueryDocumentSnapshot<any>) => ({
          ...docSnap.data(),
          id: docSnap.id,
        })
      );

      dispatch(dataReceived(result));
    } catch (error) {
      dispatch(dataRequestFailed(error.message));
    }
  };

const handleCreate = async (data: any) => {
  const equipment = collection(firebaseDatabase, "service");

  const snapshot = await addDoc(equipment, data);
};

export const addServiceAsync = createAsyncThunk(
  "data/addService",
  async (data: any) => {
    const {
      serviceCode,
      serviceName,
      descrip,
      increaseVerb,
      to,
      prefix,
      surfix,
      operationStt,
      checkbox,
    } = data;
    const service = {
      serviceCode,
      serviceName,
      descrip,
      increaseVerb,
      to,
      prefix,
      surfix,
      operationStt,
      checkbox,
    };
    handleCreate(service);
  }
);

export const updateServiceAsync = createAsyncThunk(
  "data/updateService",
  async (payload: UpdateDataPayload) => {
    const { id, values } = payload;
    const documentRef = doc(firebaseDatabase, "service", id); // Thay collection-name bằng tên collection của bạn
    const checkboxDocs = values.checkbox.map((checkboxItem: any, index: any) => {
      return {
        id: `checkbox_${index}`,
        value: checkboxItem
      };
    });
    try {
      await updateDoc(documentRef, {
        ...values,
        checkbox: checkboxDocs
      });
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchCount = (): AppThunk => async (dispatch: any) => {
  try {
    const equipment = collection(firebaseDatabase, 'service');
    let queryString = query(equipment, limit(10));
    const coll = collection(firebaseDatabase, 'service');
    const countSnapshot = await getCountFromServer(coll);
    dispatch(setCount(countSnapshot.data()?.count));
  } catch (error) {
    // Xử lý lỗi
  }
};

