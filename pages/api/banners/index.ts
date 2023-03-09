import { NextApiRequest, NextApiResponse } from 'next';
import handlers from '../../../lib/_handlers';
import Banners from 'lib/models/Banners';
import Products from 'lib/models/Products';
import Users from 'lib/models/Users';

const handler = handlers();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const banners = await Banners.find({}).populate({
    path: 'item',
    model: Products,
    populate: { path: 'owner', model: Users, select: '-password' },
  });
  res.status(200).json({ success: true, banners });
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const banners = await Banners.findByIdAndRemove(req.body);
  res.status(200).json({ success: true, banners });
});

handler.post(async (req: any, res: NextApiResponse) => {
  const banners = await Banners.create({ item: req.body });
  res.status(200).json({ success: true, banners });
});

export default handler;
