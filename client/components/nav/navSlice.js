import {createSlice} from '@reduxjs/toolkit';

var initialState = {
  username: '',
  password: '',
  email: '',
  age: -1
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    createAccount: (state, action) => {
      if (action.payload.username !== undefined) {
        state.username = action.payload.username;
      }
      if (action.payload.password !== undefined) {
        state.password = action.payload.password;
      }
      if (action.payload.email !== undefined) {
        state.email = action.payload.email;
      }
      if (action.payload.age !== undefined) {
        state.age = action.payload.age;
      }
    }
  }
})

export const { createAccount } = navSlice.actions;
export default navSlice.reducer;