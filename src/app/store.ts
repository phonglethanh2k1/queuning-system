import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'redux/slices/dataSlice';
import serviceReducer from 'redux/slices/serviceSlice';
import levelNoReducer from 'redux/slices/levelNoSlices';
import reportReducer from 'redux/slices/reportSlices';
import roleReducer from 'redux/slices/roleSlices';
export const store = configureStore({
  reducer: {
    data: dataReducer,
    service: serviceReducer,
    levelNo: levelNoReducer,
    report: reportReducer,
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = any;
