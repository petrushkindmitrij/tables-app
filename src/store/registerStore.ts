import { combineReducers } from '@reduxjs/toolkit';
import { createClearAllStateFunc } from '../utils/redux/createClearAllState';

import { controlSlice } from './controls';
import { pageControlSlice } from './pageControl';
import { entitiesSlice } from './entities';

export const reducers = {
  // reducer for tracking fetch status and request errors
  [controlSlice.name]: controlSlice.reducer,
  [pageControlSlice.name]: pageControlSlice.reducer,
  [entitiesSlice.name]: entitiesSlice.reducer,
};

export const clearAllState = createClearAllStateFunc(
  controlSlice,
  pageControlSlice,
  entitiesSlice
);

export default combineReducers(reducers);
