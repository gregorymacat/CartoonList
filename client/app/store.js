import {configureStore} from '@reduxjs/toolkit';
import listReducer from '../components/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer
  },
})