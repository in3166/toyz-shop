import { NextApiRequest, NextApiResponse } from 'next';
import handlers from 'lib/_handlers';
import Comments from 'lib/models/Comments';
import Products from 'lib/models/Products';
import Users from 'lib/models/Users';

const handler = handlers();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const comments = await Comments.find({}).populate({
    path: 'item',
    model: Products,
    populate: { path: 'owner', model: Users, select: '-password' },
  });
  res.status(200).json({ success: true, comments });
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const comments = await Comments.findByIdAndRemove(req.body);
  res.status(200).json({ success: true, comments });
});

handler.post(async (req: any, res: NextApiResponse) => {
  const comments = await Comments.create(req.body);
  res.status(200).json({ success: true, comments });
});

export default handler;
