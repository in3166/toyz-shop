import { SortOrder } from 'mongoose'
import Products from 'lib/models/Products'
import Users from 'lib/models/Users'

/**
 *
 * @param {number} page   가져올 페이지 번호
 * @param {number} status 0: 전체 1: 판매중 2: 예약중 3: 판매완료
 * @param {number} sort   0: 최신순 1: 오래된순 2: 가격높은순 3: 가격낮은순
 * @returns products
 */

interface IGetAllProducts {
  text?: string
  page?: number
  status?: number
  sort?: number
  owner?: string
  firstProduct?: string
}

export const getAllProducts = async ({ text, page, status, sort, owner, firstProduct }: IGetAllProducts) => {
  let condition = {}
  if (firstProduct) condition = { createdAt: { $lte: new Date(firstProduct) } }
  if (status && status > 0) condition = { ...condition, status }
  if (text) condition = { ...condition, title: { $regex: text, $options: 'i' } }
  if (owner) condition = { ...condition, owner }

  const sortCondition: { _id?: SortOrder; price?: SortOrder } = {}
  switch (sort) {
    case 0:
      sortCondition._id = 'desc'
      break
    case 1:
      sortCondition._id = 'asc'
      break
    case 2:
      sortCondition.price = 'desc'
      break
    case 3:
      sortCondition.price = 'asc'
      break

    default:
      sortCondition._id = 'desc'
      break
  }

  if (!page || page === 0)
    return Products.find(condition).sort(sortCondition).populate({ path: 'owner', model: Users, select: '-password' })

  return Products.find(condition)
    .sort(sortCondition)
    .limit(8)
    .skip((page - 1) * 8)
    .populate({ path: 'owner', model: Users, select: '-password' })
}

export const getProductById = (productId: string | string[] | undefined) => {
  return Products.findOne({ _id: productId }).populate({
    path: 'owner',
    model: Users,
    select: '-password -likes',
  })
}

export const getProductByUserId = (userId: string | string[] | undefined) => {
  return Products.find({ owner: userId }).populate({
    path: 'owner',
    model: Users,
    select: '-password -likes',
  })
}
