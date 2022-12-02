import { atom } from 'hooks/state/index'
import { v1 } from 'uuid'

export const currentPageState = atom<number>({
  key: `currentPage/${v1()}`,
  default: 0,
})
