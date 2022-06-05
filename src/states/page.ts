import { atom } from 'hooks/state/index'

export const currentPageState = atom<number>({
  key: 'currentPage',
  default: 0,
})
