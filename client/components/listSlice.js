import { createSlice } from '@reduxjs/toolkit';
import exampleData from '../public/exampledata';

var initialUserData = [
  exampleData.avatar,
  exampleData.adventureTime,
  exampleData.gardenWall,
  exampleData.gumball,
  exampleData.steven,
  exampleData.infinity,
  exampleData.bears,
];

const initialState = {
  userShows: initialUserData,
  selectedShow: {}
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      state.userShows.push(newShow);
    },
    removeEntry: (state, action) => {
      var unwantedShowIndex = state.userShows.indexOf(action.payload);
      state.userShows.splice(unwantedShowIndex, 1);
    },
    updateEntry: (state, action) => {
      var changeIndex = state.userShows.indexOf(action.payload.show);
      var changedScore = action.payload.score;

      state.userShows[changeIndex].score = changedScore;
    },
    selectEntry: (state, action) => {
      var selectedShow = action.payload;

      state.selectedShow = action.payload;
    },
  }
})

export const {addEntry, removeEntry, updateEntry, selectEntry} = listSlice.actions;

export default listSlice.reducer;