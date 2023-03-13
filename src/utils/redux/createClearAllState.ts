import { TEMPORARY_ANY } from '@models/_project';
import { Slice, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { SliceWithReset } from './types';

export const createClearAllStateFunc =
  (
    ...slices: (
      | Slice<TEMPORARY_ANY>
      | SliceWithReset<TEMPORARY_ANY>
      | AnyAction
    )[]
  ): ((dispatch: Dispatch) => void) =>
  (dispatch: Dispatch) => {
    slices.forEach(slice => {
      if ((slice as AnyAction).type) {
        return dispatch(slice as AnyAction);
      }

      return (
        (slice as SliceWithReset<TEMPORARY_ANY>).actions?.resetState &&
        dispatch(
          (slice as SliceWithReset<TEMPORARY_ANY>).actions.resetState({})
        )
      );
    });
  };
