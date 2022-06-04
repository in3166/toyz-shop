import { configureStore } from '@reduxjs/toolkit'

import system from './system'
import product from './product'
import banner from './banner'

export const store = configureStore({
  reducer: {
    system,
    product,
    banner,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
