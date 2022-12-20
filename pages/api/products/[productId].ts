import { NextApiRequest, NextApiResponse } from 'next'
import { getProduct } from 'lib/controllers'
import Product from 'lib/models/Products'
import handlers from 'lib/_handlers'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req

  const product = await getProduct(productId)

  if (!product) {
    return res.status(400).json({ success: false })
  }

  return res.status(200).json({ success: true, product })
})

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req

  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!product) {
    return res.status(400).json({ success: false })
  }
  return res.status(200).json({ success: true, data: product })
})

export default handler
