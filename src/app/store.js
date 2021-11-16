import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../features/counter/infoSlice';

export const store = configureStore({
  reducer: {
    mainInfo: infoReducer,
  },
});
