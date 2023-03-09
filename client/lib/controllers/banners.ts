import Banners from 'lib/models/Banners';
import Products from 'lib/models/Products';
import Users from 'lib/models/Users';

export const getAllBanner = () => {
  return Banners.find({}).populate({
    path: 'item',
    model: Products,
    populate: { path: 'owner', model: Users, select: '-password -likes' },
  });
};
