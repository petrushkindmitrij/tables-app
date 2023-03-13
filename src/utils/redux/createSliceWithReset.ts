import {
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { SliceWithReset } from './types';

export const createSliceWithReset = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
): SliceWithReset<State, CaseReducers, Name> =>
  createSlice({
    ...options,
    reducers: {
      ...options.reducers,
      resetState: () => options.initialState,
    },
  });
