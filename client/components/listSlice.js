import { createSlice } from '@reduxjs/toolkit';
import exampleData from '../public/exampledata';

var allShowData = [];
var initialUserData = {
  0: exampleData.avatar,
  1: exampleData.adventureTime,
};
const initialState = {
  userShows: initialUserData,
  allShows: allShowData,
  selectedShow: null
}

for (var title in exampleData) {
  allShowData.push(exampleData[title]);
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      var newIndex = Object.keys(state.userShows).length;
      var currentShows = Object.values(state.userShows);
      var exists = false;

      for (var index = 0; index < currentShows.length; index++) {
        if (JSON.stringify(newShow) === JSON.stringify(currentShows[index])) {
          exists = true;
        }
      }
      if (!exists) {
        state.userShows[newIndex] = newShow;
      }
    },
    removeEntry: (state, action) => {
      var delIndex = action.payload[0];
      var userShowCount = Object.keys(state.userShows).length;

      delete state.userShows[delIndex];
      for (var index = delIndex + 1; index < userShowCount; index++) {
        state.userShows[index - 1] = state.userShows[index];
      }
      delete state.userShows[userShowCount - 1];
    },
    updateEntry: (state, action) => {
      state.userShows[action.payload[0]].userInfo = action.payload[1];
    },
    selectEntry: (state, action) => {
      var selectedShow = action.payload;
      state.selectedShow = action.payload;
    },
  }
})

export const {addEntry, removeEntry, updateEntry, selectEntry} = listSlice.actions;
export default listSlice.reducer;