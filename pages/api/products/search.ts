import dbConnect from 'lib/dbConnect'
import Product from 'lib/models/Products'
import User from 'lib/models/Users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { text },
    method,
  } = req
  console.log('text:', text)
  console.log(text)
  console.log(req.query)
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const product = await Product.find({ name: { $regex: text, $options: 'i' } }).populate({
          path: 'owner',
          model: User,
          select: '-password',
        })
        console.log(text, product)
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
        const product = await Product.findByIdAndUpdate(text, req.body, {
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
        const deletedProduct = await Product.deleteOne({ _id: text })
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
