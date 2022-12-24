import Products from 'lib/models/Products'
import Users from 'lib/models/Users'

export const getAllUser = () => {
  return Users.find({})
}

export const getUserId = (userId: string | string[] | undefined) => {
  return Users.findOne({ id: userId })
    .populate({
      path: 'likes',
      model: Products,
      populate: { path: 'owner', model: Users, select: '-password' },
    })
    .lean()
}

export const getUserEmail = (email: string | null | undefined) => {
  return Users.find({ email })
    .populate({
      path: 'likes',
      model: Products,
      populate: { path: 'owner', model: Users, select: '-password' },
    })
    .lean()
}
