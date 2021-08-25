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

const initialState = {
  userShows: initialUserData,
  selectedShow: null
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      state.userShows.push([userShows.length - 1, newShow]);
    },
    removeEntry: (state, action) => {
      // var unwantedShowIndex = state.userShows.indexOf(action.payload);
      delete userShows[action.payload[0]];
      for (var index = action.payload[0] + 1; index < Object.keys(state.userShows).length; index++) {
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
      var selectedShow = action.payload;

      state.selectedShow = action.payload;
    },
  }
})

export const {addEntry, removeEntry, updateEntry, selectEntry} = listSlice.actions;

export default listSlice.reducer;