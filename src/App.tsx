import * as React from 'react';
import { Provider } from 'react-redux';

import { createStore } from '@store/store';
import { PageControl } from '@components/PageControl/PageControl';

import 'normalize.css';

export const App: React.FC<{}> = () => {
  const [store] = createStore();

  return (
    <Provider store={store}>
      <PageControl />
    </Provider>
  );
};
