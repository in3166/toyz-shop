import Products from 'lib/models/Products'
import Users from 'lib/models/Users'

export const getAllProduct = (page?: number) => {
  if (!page || page <= 0)
    return Products.find({}).sort({ _id: -1 }).populate({ path: 'owner', model: Users, select: '-password' })
  if (page > 0)
    return Products.find({})
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .populate({ path: 'owner', model: Users, select: '-password' })
  return Products.find({}).sort({ _id: -1 }).populate({ path: 'owner', model: Users, select: '-password' })
}

export const getProduct = (productId: string | string[] | undefined) => {
  return Products.findOne({ _id: productId }).populate({
    path: 'owner',
    model: Users,
    select: '-password',
  })
}
