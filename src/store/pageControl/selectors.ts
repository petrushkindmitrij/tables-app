import { RootState } from '..';
import { pageControlSlice } from './slice';
import { createSliceSelector } from '@utils/redux/createSliceSelector';

const sliceSelector = createSliceSelector<
  RootState,
  typeof pageControlSlice.name
>(pageControlSlice.name);

export const getCurrentPage = sliceSelector('currentPageId');
export const getIsModalWindowOpened = sliceSelector('isModalWindowOpened');
