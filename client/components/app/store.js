import {configureStore} from '@reduxjs/toolkit';
import listReducer from '../list/listSlice';
import navReducer from '../nav/navSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    nav: navReducer
  },
})