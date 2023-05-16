import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "redux/slices/dataSlice";
import serviceReducer from "redux/slices/serviceSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = any;
