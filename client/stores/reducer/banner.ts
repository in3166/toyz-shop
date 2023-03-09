import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '..'

import { IProductItem } from 'types/product'

const INIT_PRODUCT: IProductItem[] = []

export interface ProductState {
  bannerList: IProductItem[]
}

const INITIAL_STATE: ProductState = {
  bannerList: INIT_PRODUCT,
}

const bannerSlice = createSlice({
  name: 'banner',
  initialState: INITIAL_STATE,
  reducers: {
    setBannerList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      state.bannerList = action.payload
    },
    resetBannerList: () => INITIAL_STATE,
  },
})

export const { setBannerList, resetBannerList } = bannerSlice.actions

export default bannerSlice.reducer

export const getBannerList = (state: RootState): IProductItem[] => state.banner.bannerList
