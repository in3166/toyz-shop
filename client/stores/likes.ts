import { atom } from 'hooks/state/index'
import { IProductItem } from 'types/product'
import { v1 } from 'uuid'

export const userLikesState = atom<IProductItem[]>({
  key: `likes/${v1()}`,
  default: [],
})
