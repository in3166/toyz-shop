import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import User from 'lib/models/Users'
import handlers from '../../../lib/_handlers'

const SALT_ROUND = 7

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await User.find({})
  return res.status(200).json({ success: true, data: users })
})
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const enteredUser = req.body
  const hashPassword = await bcrypt.hash(enteredUser.password, SALT_ROUND)
  enteredUser.password = hashPassword

  const user = await User.create(enteredUser)
  return res.status(201).json({ success: true, data: user })
})

export default handler

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req
//   await dbConnect()

//   switch (method) {
//     case 'GET':
//       try {
//         const users = await User.find({})
//         res.status(200).json({ success: true, data: users })
//       } catch (error) {
//         res.status(400).json({ success: false, data: error })
//       }
//       break
//     case 'POST':
//       try {
//         const enteredUser = req.body
//         const hashPassword = await bcrypt.hash(enteredUser.password, SALT_ROUND)
//         enteredUser.password = hashPassword

//         const user = await User.create(enteredUser)
//         res.status(201).json({ success: true, data: user })
//       } catch (error) {
//         res.status(400).json({ success: false, error })
//       }
//       break
//     default:
//       res.status(400).json({ success: false, error: { code: 10000 } })
//       break
//   }
// }
