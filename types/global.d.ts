import { Connection } from 'mongoose'

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var mongoose: Connection | any
}

export const mongoose = global.mongoose || new Connection()

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose
