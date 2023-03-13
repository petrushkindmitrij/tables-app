import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceWithReset } from '@utils/redux';

export const controlSlice = createSliceWithReset({
  name: 'controls',
  initialState: {} as Record<string, unknown>,
  reducers: {
    setControl: (
      state,
      { payload }: PayloadAction<{ code: string; value: unknown }>
    ) => ({
      ...state,
      [payload.code]: payload.value,
    }),
  },
});

export const { setControl } = controlSlice.actions;

export default controlSlice.reducer;
