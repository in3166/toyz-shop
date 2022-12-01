import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import banner from './banner'
import product from './product'
import system from './system'

const combinedReducer = combineReducers({
  banner,
  product,
  system,
})

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combineReducers({
    banner,
    product,
    system,
  })(state, action)
}

export default rootReducer
