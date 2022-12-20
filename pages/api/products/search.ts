import Product from 'lib/models/Products'
import User from 'lib/models/Users'
import { NextApiRequest, NextApiResponse } from 'next'
import handlers from '../../../lib/_handlers'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { text },
  } = req

  const product = await Product.find({ title: { $regex: text, $options: 'i' } }).populate({
    path: 'owner',
    model: User,
    select: '-password',
  })

  if (!product) {
    return res.status(400).json({ success: false })
  }

  return res.status(200).json({ success: true, product })
})
export default handler
