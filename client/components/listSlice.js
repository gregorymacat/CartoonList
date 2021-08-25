import { createSlice } from '@reduxjs/toolkit';
import exampleData from '../public/exampledata';

var initialUserData = {
  0: exampleData.avatar,
  1: exampleData.adventureTime,
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
  allShows: allShowData,
  selectedShow: null
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      // console.log('payload ', newShow);
      var newIndex = Object.keys(state.userShows).length;
      var currentShows = Object.values(state.userShows);
      var exists = false;

      for (var index = 0; index < currentShows.length; index++) {
        // console.log(JSON.stringify(currentShows[index]));
        // console.log('the new show ', JSON.stringify(newShow));
        if (JSON.stringify(newShow) === JSON.stringify(currentShows[index])) {
          exists = true;
        }
      }
      if (!exists) {
        // console.log('placing at ', newIndex)
        state.userShows[newIndex] = newShow;
      }
    },
    removeEntry: (state, action) => {
      // var unwantedShowIndex = state.userShows.indexOf(action.payload);
      var delIndex = action.payload[0];
      var userShowCount = Object.keys(state.userShows).length;

      delete state.userShows[delIndex];
      for (var index = delIndex + 1; index < userShowCount; index++) {
        state.userShows[index - 1] = state.userShows[index];
      }
      delete state.userShows[userShowCount - 1];
    },
    updateEntry: (state, action) => {
      // var changeIndex = state.userShows.findIndex((stateShow) => {
      //   stateShow.name === action.payload[0];
      // });
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