import { IProductItem } from 'types/product'

export function getTempLikes(items: IProductItem[], like: boolean, item: IProductItem) {
  if (like) {
    return items.filter((value) => value._id !== item._id)
  }
  return [...items, item]
}
