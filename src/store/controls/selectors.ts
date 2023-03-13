import get from 'lodash/get';
import { RootState } from '../store';
import { controlSlice } from './slice';

export const getControl =
  <T>(code: string) =>
  (state: RootState): T =>
    get(state, [controlSlice.name, code]) as T;
