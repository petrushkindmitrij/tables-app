import { PAGES_IDS } from '@models/Navigation';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceWithReset } from '@utils/redux/createSliceWithReset';

import { State } from './types';

const initialState: State = {
  currentPageId: PAGES_IDS.PRODUCT,
  isModalWindowOpened: false,
};

export const pageControlSlice = createSliceWithReset({
  name: 'pageControl',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload: pageId }: PayloadAction<PAGES_IDS>) => ({
      ...state,
      currentPageId: pageId || 0,
    }),
    openModalWindow: state => ({
      ...state,
      isModalWindowOpened: true,
    }),
    closeModalWindow: state => ({
      ...state,
      isModalWindowOpened: false,
    }),
  },
});

export const { setCurrentPage, openModalWindow, closeModalWindow } =
  pageControlSlice.actions;

export default pageControlSlice.reducer;
