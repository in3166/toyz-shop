import dbConnect from 'lib/dbConnect'
import Product from 'lib/models/Products'
import User from 'lib/models/Users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find({}).populate({ path: 'owner', model: User, select: '-password' })
        console.log(products)
        res.status(200).json({ success: true, products })
      } catch (error) {
        console.log('error', error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const product = await Product.create(req.body)
        res.status(201).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
