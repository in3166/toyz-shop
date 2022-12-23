import Products from 'lib/models/Products'
import Users from 'lib/models/Users'
import { keyBy } from 'lodash'
import { SortOrder } from 'mongoose'
import { stringify } from 'querystring'
import { Interface } from 'readline'
/**
 *
 * @param {number} page 가져올 페이지 번호
 * @param {number} status 0: 전체 1: 판매중 2: 예약중 3: 판매완료
 * @param {number} sort 0: _id 1: price1 2: price-1 3: createdAt1 4: createdAt-1
 * @returns products
 */
interface IGetAllProducts {
  text?: string
  page?: number
  status?: number
  sort?: number
}
export const getAllProducts = ({ text, page, status, sort }: IGetAllProducts) => {
  let condition = {}
  if (status && status > 0) condition = { status }
  if (text) condition = { ...condition, title: { $regex: text, $options: 'i' } }

  const sortCondition: { _id?: SortOrder; price?: SortOrder } = {}
  switch (sort) {
    case 0:
      sortCondition._id = 'asc'
      break
    case 1:
      sortCondition._id = 'desc'
      break
    case 2:
      sortCondition.price = 'desc'
      break
    case 3:
      sortCondition.price = 'asc'
      break

    default:
      break
  }

  if (!page || page === 0)
    return Products.find(condition).sort(sortCondition).populate({ path: 'owner', model: Users, select: '-password' })
  return Products.find(condition)
    .sort(sortCondition)
    .limit(10)
    .skip((page - 1) * 10)
    .populate({ path: 'owner', model: Users, select: '-password' })
}

export const getProduct = (productId: string | string[] | undefined) => {
  return Products.findOne({ _id: productId }).populate({
    path: 'owner',
    model: Users,
    select: '-password',
  })
}
