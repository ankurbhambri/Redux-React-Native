import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import colorReducer from '../theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: colorReducer,
  },
});
