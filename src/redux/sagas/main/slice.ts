import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './state';
import {RootState} from '../../store';

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
});

//#region Reducer
const mainReducer = mainSlice.reducer;
//#endregion Reducer

//#region Actions
export const timeEntriesActions = mainSlice.actions;

//#endregion Actions

//#region Selectors
export const selectIsDarkMode = (state: RootState) => state.main.isDarkMode;
//#endregion Selectors

export default mainReducer;
