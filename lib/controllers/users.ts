import { Products, Users } from 'lib/models'

export const getAllUser = () => {
  return Users.find({})
}

export const getUserId = (userId: string | string[] | undefined) => {
  return Users.findOne({ id: userId }).select('-likes').lean()
}

export const getUserIdWithoutPW = (userId: string | string[] | undefined) => {
  return Users.findOne({ id: userId }).select('-likes -password').lean()
}

export const getUserEmail = (email: string | null | undefined) => {
  return Users.find({ email }).select('-password -likes').lean()
}

export const getUserLikes = (userId: string | string[] | undefined) => {
  return Users.findOne({ userId }, 'likes')
    .populate({
      path: 'likes',
      model: Products,
      populate: { path: 'owner', model: Users, select: '-password -likes' },
    })
    .lean()
}
