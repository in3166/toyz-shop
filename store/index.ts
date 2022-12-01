import { configureStore } from '@reduxjs/toolkit'

import system from './reducer/system'
import product from './reducer/product'
import banner from './reducer/banner'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducer'
import { useDispatch } from 'react-redux'

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })
  return store
}

// export const store = configureStore({
//   reducer: {
//     product,
//     banner,
//     system,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
// })

const wrapper = createWrapper(makeStore)

type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default wrapper
