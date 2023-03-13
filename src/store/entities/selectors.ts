import { createSelector } from 'reselect';
import { RootState } from '..';
import { entitiesSlice } from './slice';
import { createSliceSelector } from '@utils/redux/createSliceSelector';
import { ENTITIES_NAMES } from '@models/Entities';

const sliceSelector = createSliceSelector<RootState, typeof entitiesSlice.name>(
  entitiesSlice.name
);

export const getEntities = sliceSelector('entities');
export const getEntity = (entityKey: ENTITIES_NAMES) =>
  createSelector(getEntities, entities => entities[entityKey]);

export const getSelectedId = sliceSelector('selectedId');
