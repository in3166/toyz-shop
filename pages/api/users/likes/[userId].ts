import { NextApiRequest, NextApiResponse } from 'next'
import User from 'lib/models/Users'
import handlers from 'lib/_handlers'
import Products from 'lib/models/Products'
import { confirmPasswordHash } from 'src/utils/comparePassword'

const handler = handlers()

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { userId },
    body,
  } = req

  const updateResult = await User.findOneAndUpdate({ id: userId }, body, {
    new: false,
  })

  if (!updateResult) {
    return res.status(400).json({ success: false, error: { code: 10001 } })
  }
  return res.status(200).json({ success: true, updateResult })
})

export default handler
