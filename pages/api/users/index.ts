import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { dbConnect } from 'pages/api/middleware/dbConnect'
import User from 'lib/models/Users'

const SALT_ROUND = 7

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    case 'POST':
      try {
        const enteredUser = req.body
        const hashPassword = await bcrypt.hash(enteredUser.password, SALT_ROUND)
        enteredUser.password = hashPassword

        const user = await User.create(enteredUser)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false, error: { code: 10000 } })
      break
  }
}
