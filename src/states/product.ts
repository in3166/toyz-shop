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

const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    setProductList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      console.log(action.payload)
      state.productList = [...state.productList, ...action.payload]
    },
    resetProductList: () => INITIAL_STATE,
  },
})

export const { setProductList, resetProductList } = productSlice.actions

export default productSlice.reducer

export const getproductList = (state: RootState): IProductItem[] => state.product.productList
