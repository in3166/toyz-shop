import { NextApiRequest, NextApiResponse } from 'next'
import Product from 'lib/models/Products'
import User from 'lib/models/Users'
import { asyncPares } from 'lib/s3'
import handlers from 'lib/_handlers'
import { getAllProduct } from 'lib/controllers'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { page },
  } = req

  const products = await getAllProduct(Number(page))

  return res.status(201).json({ success: true, products })
})

handler.post(async (req: any, res: NextApiResponse) => {
  try {
    delete req.body.data.changedImage
    const result = await asyncPares(req)
    const { fields, url } = result
    const body = JSON.parse(fields.body)
    body.data.image = url
    const products = await Product.create(body.data)
    res.status(201).json({ success: true, data: products })
  } catch (error) {
    console.log('upload error: ', error)
  }
})

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const { body: data } = req

  try {
    if (data.changedImage === 'no') {
      delete data.changedImage
      const products = await Product.findByIdAndUpdate(data._id, data)
      return res.status(201).json({ success: true, data: products })
    }

    delete data.changedImage
    const result = await asyncPares(req)
    const { fields, url } = result
    const body = JSON.parse(fields.body)
    body.data.image = url
    const products = await Product.findByIdAndUpdate(body.data._id, body.data)
    return res.status(201).json({ success: true, data: products })
  } catch (error) {
    console.log('upload error: ', error)
  }
  return null
})

export default handler
