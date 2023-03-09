import { NextApiRequest, NextApiResponse } from 'next';
import { getProductById } from 'lib/controllers';
import { Products } from 'lib/models';
import handlers from 'lib/_handlers';

const handler = handlers();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req;

  const product = await getProductById(productId);

  if (!product) {
    return res.status(400).json({ success: false });
  }

  return res.status(200).json({ success: true, product });
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req;

  const product = await Products.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return res.status(400).json({ success: false });
  }
  return res.status(200).json({ success: true, data: product });
});

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
    body,
  } = req;
  const product = await Products.findByIdAndUpdate(productId, body, {
    runValidators: true,
  });
  if (!product) {
    return res.status(400).json({ success: false });
  }
  return res.status(200).json({ success: true, data: product });
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req;

  if (productId) {
    const product = await Products.findByIdAndRemove(productId);
    if (!product) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: product });
  }
  return res.status(400).json({ success: false });
});

export default handler;
