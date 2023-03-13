import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceWithReset } from '@utils/redux/createSliceWithReset';

import { initialState } from './initialValues';
import { State } from './types';

export const entitiesSlice = createSliceWithReset({
  name: 'entities',
  initialState,
  reducers: {
    updateEntity: <E extends ENTITIES_NAMES>(
      state: State,
      {
        payload: { entity, id, updatedElementPart },
      }: PayloadAction<{
        entity: E;
        id: ENTITIES_TYPES[E]['id'];
        updatedElementPart: Partial<Omit<ENTITIES_TYPES[E], 'id'>>;
      }>
    ) => {
      const { entities } = state;
      const indexUpdatedElem = entities[entity].findIndex(
        elem => elem?.id === id
      );
      const updatedEntityArray = [...entities[entity]];

      updatedEntityArray[indexUpdatedElem] = {
        ...updatedEntityArray[indexUpdatedElem],
        ...updatedElementPart,
      };
      return {
        ...state,
        entities: {
          ...entities,
          [entity]: updatedEntityArray,
        },
      };
    },
    setSelectedId: <E extends ENTITIES_NAMES>(
      state: State,
      {
        payload: { id },
      }: PayloadAction<{
        id: ENTITIES_TYPES[E]['id'];
      }>
    ) => ({
      ...state,
      selectedId: id,
    }),
  },
});

export const { updateEntity, setSelectedId } = entitiesSlice.actions;

export default entitiesSlice.reducer;
