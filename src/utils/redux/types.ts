import { TEMPORARY_ANY } from '@models/_project';
import {
  CaseReducer,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

export type SliceWithReset<
  State,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string
> = Slice<
  State,
  CaseReducers & {
    resetState: CaseReducer<State, PayloadAction<TEMPORARY_ANY>>;
  },
  Name
>;
