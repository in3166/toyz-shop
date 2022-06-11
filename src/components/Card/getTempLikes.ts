import { IProductItem } from 'types/product'

export function getTempLikes(items: IProductItem[], like: boolean, item: IProductItem) {
  if (like) {
    return items.filter((value) => value.id !== item.id)
  }
  return [...items, item]
}
