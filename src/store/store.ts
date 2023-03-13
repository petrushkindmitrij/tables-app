import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import rootReducer, { clearAllState } from './registerStore';

export type RootState = ReturnType<typeof rootReducer>;

let store: EnhancedStore<RootState>;

export const createStore = (): [EnhancedStore<RootState>, () => void] => {
  if (!store) {
    store = configureStore({
      reducer: rootReducer,
    });
  }

  return [store, () => clearAllState(store.dispatch)];
};

export type AppSelector<T> = (state: RootState) => T;
