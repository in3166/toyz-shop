import { NextApiRequest, NextApiResponse } from 'next'
import User from 'lib/models/Users'
import handlers from '../../../lib/_handlers'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req

  console.log('get [users id]: ', userId)

  const user = await User.findOne({ id: userId })
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

  console.log('post [users id]: ', body.id)
  const user = await User.findOne({ id: body.id })
  console.log('post [users id]: ', user)
  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, user })
})

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const {
//     query: { userId },
//     method,
//     body,
//   } = req
//   await dbConnect()

//   switch (method) {
//     case 'GET':
//       try {
//         const user = await User.findOne({ email: userId })
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break

//     case 'PUT':
//       try {
//         const user = await User.findOneAndUpdate({ id: userId }, req.body, {
//           new: false,
//           runValidators: true,
//         })
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         const message = getErrorMessage(error)
//         res.status(400).json({ success: false, error, message })
//       }
//       break

//     case 'DELETE':
//       try {
//         const deletedUser = await User.deleteOne({ _id: userId })
//         if (!deletedUser) {
//           return res.status(400).json({ success: false })
//         }
//         res.status(200).json({ success: true, data: {} })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break
//     case 'POST':
//       try {
//         const user = await User.findOne({ id: body.id })
//         // console.log('user: ', user)
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break

//     default:
//       res.status(400).json({ success: false, error: { code: 10000 } })
//       break
//   }
//   return null
// }
export default handler
