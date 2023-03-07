import { configureStore } from '@reduxjs/toolkit';

import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';
import { useDispatch } from 'react-redux';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
  return store;
}

const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default wrapper;
