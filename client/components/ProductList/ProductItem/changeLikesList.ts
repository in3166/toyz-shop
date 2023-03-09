import { IProductItem } from 'types/product'

export function changeLikesList(originalLikesItem: IProductItem[], like: boolean, item: IProductItem) {
  if (like) {
    return originalLikesItem?.filter((value) => value._id !== item._id)
  }

  return [...originalLikesItem, item]
}
