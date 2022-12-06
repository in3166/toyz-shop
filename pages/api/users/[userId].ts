import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'lib/dbConnect'
import User from 'lib/models/Users'
import { isEmpty } from 'lodash'
import { getErrorMessage } from 'lib/errorHandler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { userId },
    method,
    body,
  } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await User.findOne({ email: userId })
        if (!user) {
          return res.status(400).json({ success: false, error: { code: 10001 } })
        }
        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json(error)
      }
      break

    case 'PUT':
      try {
        const user = await User.findOneAndUpdate({ id: userId }, req.body, {
          new: false,
          runValidators: true,
        })
        console.log(user)
        if (!user) {
          return res.status(400).json({ success: false, error: { code: 10001 } })
        }
        res.status(200).json({ success: true, user })
      } catch (error) {
        const message = getErrorMessage(error)
        console.log(message)
        res.status(400).json({ success: false, error, message })
      }
      break

    case 'DELETE':
      try {
        const deletedUser = await User.deleteOne({ _id: userId })
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
          return res.status(400).json({ success: false, error: { code: 10001 } })
        }
        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json(error)
      }
      break

    default:
      res.status(400).json({ success: false, error: { code: 10000 } })
      break
  }
  return null
}
