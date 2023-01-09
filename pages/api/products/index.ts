import { NextApiRequest, NextApiResponse } from 'next'
import Product from 'lib/models/Products'
import { asyncParse } from 'lib/s3'
import handlers from 'lib/_handlers'
import { getAllProducts } from 'lib/controllers'

const handler = handlers()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { text, page, status, sort, user, firstProduct },
  } = req

  const params: {
    text?: string
    page?: number
    status?: number
    sort?: number
    owner?: string
    firstProduct?: string
  } = {}
  if (text && text !== 'undefined') params.text = text?.toString()
  if (page && page !== 'undefined') params.page = Number(page)
  if (status && status !== 'undefined') params.status = Number(status)
  if (sort && sort !== 'undefined') params.sort = Number(sort)
  if (user && user !== 'undefined') params.owner = user?.toString()
  if (firstProduct && firstProduct !== 'undefined') params.firstProduct = firstProduct?.toString()

  const products = await getAllProducts(params)

  return res.status(201).json({ success: true, products })
})

export const config = {
  api: {
    bodyParser: false,
  },
}
handler.post(async (req: any, res: NextApiResponse) => {
  try {
    // delete req.body.data.changedImage
    const result = await asyncParse(req)
    const { fields, url } = result
    const body = JSON.parse(fields.body)
    body.data.image = url
    const products = await Product.create(body.data)
    res.status(201).json({ success: true, data: products })
  } catch (error) {
    res.status(400).json({ success: false, error })
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
    const result = await asyncParse(req)
    const { fields, url } = result
    const body = JSON.parse(fields.body)
    body.data.image = url
    const products = await Product.findByIdAndUpdate(body.data._id, body.data)
    return res.status(201).json({ success: true, data: products })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
  return null
})

export default handler
