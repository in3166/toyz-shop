import { NextApiRequest, NextApiResponse } from 'next'
import User from 'lib/models/Users'
import handlers from 'lib/_handlers'
import History from 'lib/models/History'
import Products from 'lib/models/Products'
import Banners from 'lib/models/Banners'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await History.find({}).populate({ path: 'owner', model: User, select: '-password' })
  res.status(200).json({ success: true, products })
})

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const enteredData = req.body
  const deleteBanner = await Banners.findByIdAndRemove(enteredData.orderId)
  const deleteProducts = await Products.findByIdAndRemove(enteredData.orderId)
  const result = await History.create(enteredData)
  return res.status(201).json({ success: true, data: result })
})

export default handler
