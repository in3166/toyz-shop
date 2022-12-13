import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import User from 'lib/models/Users'
import handlers from 'lib/_handlers'
import Products from 'lib/models/Products'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req

  const user = await User.findOne({ id: userId }).populate({
    path: 'likes',
    model: Products,
  })

  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, user })
})

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req

  const user = await User.findOneAndUpdate({ id: userId }, req.body, {
    new: false,
    runValidators: true,
  })
  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, user })
})

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req

  const user = await User.findOneAndUpdate({ id: userId }, req.body, {
    new: false,
    runValidators: true,
  })

  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, user })
})

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req

  const deletedUser = await User.deleteOne({ id: userId })
  if (!deletedUser) {
    return res.status(400).json({ success: false })
  }
  return res.status(200).json({ success: true, data: {} })
})

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, body } = req
  const user = await User.findOne({ id: body.id })

  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, user })
})

export default handler
