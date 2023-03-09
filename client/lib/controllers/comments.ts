import Comments from 'lib/models/Comments';
import Products from 'lib/models/Products';
import Users from 'lib/models/Users';

export const getCommentsByProductId = (productId: string | string[] | undefined) => {
  return Comments.find({ product: productId }).populate({
    path: 'user',
    model: Users,
    select: '-password -likes',
  });
};
