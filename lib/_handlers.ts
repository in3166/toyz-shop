import dbMiddleware from './dbConnect';
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const handlers = () => {
  return nextConnect({
    onError(error, req: NextApiRequest, res: NextApiResponse, next) {
      console.error(error);
      res.status(501).json({ success: false, error: `Sorry something Happened! ${error.message}` });
      next(error);
    },
    onNoMatch(req, res) {
      res.status(405).json({ success: false, error: `Method '${req.method}' Not Allowed` });
    },
  }).use(dbMiddleware);
};

export default handlers;
