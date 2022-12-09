import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

const MONGODB_URI: string = process.env.NEXT_PUBLIC_MONGO_URI ?? ''

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

// export async function dbConnect() {
//   let cached = global.mongoose

//   if (!cached) {
//     cached = { conn: null, promise: null }
//     global.mongoose = { conn: null, promise: null }
//   }
//   if (cached.conn) {
//     return cached.conn
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((resMongoose) => {
//       return resMongoose
//     })
//   }

//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

export default async function dbMiddleware(req: NextApiRequest, res: NextApiResponse, next: () => void) {
  try {
    // if (!global.mongoose) {
    // global.mongoose = await mongoose.connect(MONGODB_URI)
    // }
    await mongoose.connect(MONGODB_URI)
    return next()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return null
}
