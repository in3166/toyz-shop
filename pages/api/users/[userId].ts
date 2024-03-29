import { NextApiRequest, NextApiResponse } from 'next';
import User from 'lib/models/Users';
import handlers from 'lib/_handlers';
import { comparePassword } from 'utils';
import { getUserIdWithoutPW } from 'lib/controllers';

const handler = handlers();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req;

  const user = await getUserIdWithoutPW(userId);

  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } });
  }
  return res.status(200).json({ success: true, user });
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req;

  const user = await User.findOneAndUpdate({ id: userId }, req.body, {
    new: false,
    runValidators: true,
  });
  if (!user) {
    return res.status(400).json({ success: false, error: { code: 10001 } });
  }
  return res.status(200).json({ success: true, user });
});

// setting/users
handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
    body,
  } = req;

  const user = await User.findOne({ id: userId });
  if (!user) return res.status(400).json({ success: false, error: { code: 10001 } });

  const compare = await comparePassword(body.password, user.password);
  if (!compare) return res.status(400).json({ success: false, error: { code: 10002 } });

  const updateResult = await User.findOneAndUpdate(
    { id: userId },
    { name: body.name, phone: body.phone },
    {
      new: false,
      runValidators: true,
    }
  );

  if (!updateResult) {
    return res.status(400).json({ success: false, error: { code: 10001 } });
  }
  return res.status(200).json({ success: true, user });
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
  } = req;

  const deletedUser = await User.deleteOne({ id: userId });
  if (!deletedUser) {
    return res.status(400).json({ success: false });
  }
  return res.status(200).json({ success: true, data: {} });
});

export default handler;
