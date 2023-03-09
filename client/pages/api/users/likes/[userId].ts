import { NextApiRequest, NextApiResponse } from 'next';
import { Users } from 'lib/models';
import handlers from 'lib/_handlers';
import { getUserLikes } from 'lib/controllers';

const handler = handlers();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req;

  const data = await getUserLikes(userId);
  if (!data) {
    return res.status(400).json({ success: false, error: { code: 10001 } });
  }
  return res.status(200).json({ success: true, likes: data.likes });
});

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
    body,
  } = req;
  const updateResult = await Users.findOneAndUpdate({ id: userId }, body, {
    new: false,
  });

  if (!updateResult) {
    return res.status(400).json({ success: false, error: { code: 10001 } });
  }
  return res.status(200).json({ success: true, updateResult });
});

export default handler;
