import { Connection } from 'mongoose'

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var mongoose: Connection | any
  // eslint-disable-next-line vars-on-top, no-var
  var paypal: any
  // eslint-disable-next-line vars-on-top, no-var
  var IMP: any
  // eslint-disable-next-line camelcase
  const KCP_Pay_Execute: (form: any) => void
  // eslint-disable-next-line camelcase
  const KCP_Pay_Execute_Web: (form: any) => void
}

export const mongoose = global.mongoose || new Connection()
export const { paypal } = global
export const { IMP } = global

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose
if (process.env.NODE_ENV !== 'production') global.paypal = paypal
if (process.env.NODE_ENV !== 'production') global.IMP = IMP
