import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

import { IProductItem } from 'types/product'

const INIT_PRODUCT: IProductItem[] = [
  {
    id: 'B7N0IjiIJYo',
    title: 'white and black lego toy',
    url: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxMXx8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2020-03-27T23:28:57-04:00',
    owner: 'Daniel K Cheung',
    price: 578,
  },
  {
    id: 'YpNf6ATniQA',
    title: 'blue red and yellow lego blocks',
    url: 'https://images.unsplash.com/photo-1603558431750-dfa36513aee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxM3x8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2020-10-24T12:54:41-04:00',
    owner: 'Nick Nice',
    price: 58,
  },
  {
    id: 'zoyBqT7ytLU',
    title: 'assorted-colored toys on table',
    url: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxNHx8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2019-05-16T22:33:06-04:00',
    owner: 'Huy Hung Trinh',
    price: 217,
  },
]

export interface ProductState {
  bannerList: IProductItem[]
}

const INITIAL_STATE: ProductState = {
  bannerList: INIT_PRODUCT,
}

const systemSlice = createSlice({
  name: 'banner',
  initialState: INITIAL_STATE,
  reducers: {
    setBannerList: (state: ProductState, action: PayloadAction<IProductItem[]>) => {
      state.bannerList = action.payload
    },
    resetBannerList: () => INITIAL_STATE,
  },
})

export const { setBannerList, resetBannerList } = systemSlice.actions

export default systemSlice.reducer

export const getBannerList = (state: RootState): IProductItem[] => state.banner.bannerList
