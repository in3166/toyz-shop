import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

import { IProductItem } from 'types/product'

const INIT_PRODUCT: IProductItem[] = []

export interface ProductState {
  productList: IProductItem[]
}

const INITIAL_STATE: ProductState = {
  productList: INIT_PRODUCT,
}

const systemSlice = createSlice({
  name: 'system',
  initialState: INITIAL_STATE,
  reducers: {
    setproductList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      state.productList = action.payload
    },
    resetproductList: () => INITIAL_STATE,
  },
})

export const { setproductList, resetproductList } = systemSlice.actions

export default systemSlice.reducer

export const getproductList = (state: RootState): IProductItem[] => state.product.productList
