import { createSlice } from '@reduxjs/toolkit';
import exampleData from '../public/exampledata';

var initialUserData = {
  0: exampleData.avatar,
  1: exampleData.adventureTime,
  2: exampleData.gardenWall,
  3: exampleData.gumball,
  4: exampleData.steven,
  5: exampleData.infinity,
  6: exampleData.bears
};

var allShowData = [
  exampleData.avatar,
  exampleData.adventureTime,
  exampleData.gardenWall,
  exampleData.gumball,
  exampleData.steven,
  exampleData.infinity,
  exampleData.bears
];

const initialState = {
  userShows: initialUserData,
  allShows: initialUserData,
  selectedShow: null
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      var newIndex = Object.keys(state.userShows).length;

      state.userShows[newIndex] = newShow[Object.keys(newShow)[0]];
    },
    removeEntry: (state, action) => {
      // var unwantedShowIndex = state.userShows.indexOf(action.payload);
      var delIndex = action.payload[0];
      delete state.userShows[delIndex];
      for (var index = delIndex + 1; index < Object.keys(state.userShows).length; index++) {
        state.userShows[index - 1] = state.userShows[index];
      }
      delete state.userShows[Object.keys(state.userShows).length - 1];
    },
    updateEntry: (state, action) => {
      // var changeIndex = state.userShows.findIndex((stateShow) => {
      //   stateShow.name === action.payload[0];
      // });
      console.log(state.userShows)
      console.log(typeof action.payload[0])

      state.userShows[action.payload[0]].userInfo = action.payload[1];
    },
    selectEntry: (state, action) => {
      console.log(action.payload)
      var selectedShow = action.payload;

      state.selectedShow = action.payload;
    },
  }
})

export const {addEntry, removeEntry, updateEntry, selectEntry} = listSlice.actions;

export default listSlice.reducer;