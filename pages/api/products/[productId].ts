import { dbConnect } from 'pages/api/middleware/dbConnect'
import Product from 'lib/models/Products'
import User from 'lib/models/Users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { productId },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findOne({ _id: productId }).populate({
          path: 'owner',
          model: User,
          select: '-password',
        })
        if (!product) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT':
      try {
        const product = await Product.findByIdAndUpdate(productId, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE':
      try {
        const deletedProduct = await Product.deleteOne({ _id: productId })
        if (!deletedProduct) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
  return null
}
