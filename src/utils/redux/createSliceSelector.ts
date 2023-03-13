import { TEMPORARY_ANY } from '@models/_project';
import get from 'lodash/get';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createSliceSelector<
  // eslint-disable-next-line @typescript-eslint/ban-types
  TObject extends object,
  TSliceKey extends keyof TObject
>(sliceName: TSliceKey) {
  function sliceSelector(path?: []): (state: TObject) => TObject[TSliceKey];
  function sliceSelector<TKey1 extends keyof TObject[TSliceKey]>(
    path: TKey1
  ): (state: TObject) => TObject[TSliceKey][TKey1];
  function sliceSelector<
    TKey1 extends keyof TObject[TSliceKey],
    TKey2 extends keyof TObject[TSliceKey][TKey1]
  >(path: [TKey1, TKey2]): (state: TObject) => TObject[TSliceKey][TKey1][TKey2];
  function sliceSelector<
    TKey1 extends keyof TObject[TSliceKey],
    TKey2 extends keyof TObject[TSliceKey][TKey1],
    TKey3 extends keyof TObject[TSliceKey][TKey1][TKey2]
  >(
    path: [TKey1, TKey2, TKey3]
  ): (state: TObject) => TObject[TSliceKey][TKey1][TKey2][TKey3];
  function sliceSelector<
    TKey1 extends keyof TObject[TSliceKey],
    TKey2 extends keyof TObject[TSliceKey][TKey1],
    TKey3 extends keyof TObject[TSliceKey][TKey1][TKey2],
    TKey4 extends keyof TObject[TSliceKey][TKey1][TKey2][TKey3]
  >(
    path: [TKey1, TKey2, TKey3]
  ): (state: TObject) => TObject[TSliceKey][TKey1][TKey2][TKey3][TKey4];
  function sliceSelector(
    path?: TEMPORARY_ANY
  ): (state: TEMPORARY_ANY) => TEMPORARY_ANY {
    let currentPath = [sliceName];
    if (path) {
      currentPath = [...currentPath, ...(Array.isArray(path) ? path : [path])];
    }
    return state => get(state, currentPath);
  }
  return sliceSelector;
}
