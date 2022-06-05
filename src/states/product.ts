import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

import { IProductItem } from 'types/product'

const INIT_PRODUCT: IProductItem[] = []

export interface ProductState {
  productList: IProductItem[]
  searchList: IProductItem[]
  currentPage: number
  likesList: IProductItem[]
}

const INITIAL_STATE: ProductState = {
  productList: INIT_PRODUCT,
  searchList: INIT_PRODUCT,
  currentPage: 1,
  likesList: INIT_PRODUCT,
}

const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    setProductList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      state.productList = [...state.productList, ...action.payload]
    },
    setLikesList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      state.likesList = [...state.productList, ...action.payload]
    },
    resetProductList: () => INITIAL_STATE,
    searchProduct: (state: ProductState, action: PayloadAction<string>) => {
      state.searchList = state.productList.filter((value) => value.title.includes(action.payload))
    },
  },
})

export const { setProductList, resetProductList, setLikesList, searchProduct } = productSlice.actions

export default productSlice.reducer

export const getProductList = (state: RootState): IProductItem[] => state.product.productList

export const getLikesList = (state: RootState): IProductItem[] => state.product.likesList

export const getSearchList = (state: RootState): IProductItem[] => state.product.searchList
