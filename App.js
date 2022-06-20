import React from 'react';
import Counter from './counter/Counter';
import {store} from './store/store';
import {Provider} from 'react-redux';
import Theme from './theme/Theme';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Theme />
    </Provider>
  );
}
