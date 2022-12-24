import Products from 'lib/models/Products'
import Users from 'lib/models/Users'
import { SortOrder } from 'mongoose'
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
}
export const getAllProducts = ({ text, page, status, sort }: IGetAllProducts) => {
  let condition = {}
  if (status && status > 0) condition = { status }
  if (text) condition = { ...condition, title: { $regex: text, $options: 'i' } }

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
    .limit(10)
    .skip((page - 1) * 10)
    .populate({ path: 'owner', model: Users, select: '-password' })
}

export const getProductById = (productId: string | string[] | undefined) => {
  return Products.findOne({ _id: productId }).populate({
    path: 'owner',
    model: Users,
    select: '-password',
  })
}

export const getProductByUserId = (userId: string | string[] | undefined) => {
  return Products.find({ owner: userId }).populate({
    path: 'owner',
    model: Users,
    select: '-password',
  })
}
