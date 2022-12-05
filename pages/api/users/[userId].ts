import dbConnect from 'lib/dbConnect'
import User from 'lib/models/Users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id)
        if (!user) {
          return res.status(400).json({ success: false, error: 'No user' })
        }
        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json(error)
      }
      break

    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!user) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json(error)
      }
      break

    case 'DELETE':
      try {
        const deletedUser = await User.deleteOne({ _id: id })
        if (!deletedUser) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json(error)
      }
      break
    case 'POST':
      try {
        const user = await User.findOne({ id: body.id })
        // console.log('user: ', user)
        if (!user) {
          return res.status(400).json({ success: false, error: 'User not found.' })
        }
        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json(error)
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
  return null
}
