import { createSlice } from '@reduxjs/toolkit';
import exampleData from '../public/exampledata';

var initialUserData = [
  [0, exampleData.avatar],
  [1, exampleData.adventureTime],
  [2, exampleData.gardenWall]
];
var stateMap = new Map(initialUserData);

console.log(stateMap);

const initialState = {
  userShows: stateMap,
  selectedShow: {}
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      var newShow = action.payload;
      var keyFinder = state.userShows.keys();
      var newKey = -1;

      while (keyFinder !== undefined) {
        if (keyFinder > newKey) {
          newKey = keyFinder;
        }
      }
      state.userShows.set(newKey + 1, newShow);
    },
    removeEntry: (state, action) => {
      var unwantedShowIndex = action.payload;
      state.delete(unwantedShowIndex);
    },
    updateEntry: (state, action) => {
      var changeIndex = action.payload.index;
      var changedScore = action.payload.score;

      var changedShow = state.userShows.get(changeIndex);
      changedShow.score = changedScore;

      state.userShows.set(changeIndex, changedShow);
    },
    selectEntry: (state, action) => {
      var selectedShow = action.payload;

      state.selectedShow = action.payload;
    },
  }
})

export const {addEntry, removeEntry, updateEntry, selectEntry} = listSlice.actions;

export default listSlice.reducer;