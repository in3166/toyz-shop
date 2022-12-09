import { Session } from 'next-auth'
import { IProductItem } from 'types/product'

import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    // what ever properties added, add type here
    user: IAuthToken
  }
}
export interface IAuthSession extends Session {
  user: IAuthToken
  expires: stirng
}

export interface IAuthToken extends JWT {
  name?: string | null | undefined
  email?: string | null | undefined
  sub?: string | null | undefined
  _id?: string
  id?: string
  phone?: string
  likes?: IProductItem[] | []
  role?: number
  createdAt?: string
  updatedAt?: string
  __v?: number
  iat?: number
  exp?: number
  jti?: string
}
export interface IAuthUser {
  _id: string
  id: string
  name: string
  email: string
  phone: string
  likes: IProductItem[] | []
  role: number
  createdAt: string
  updatedAt: string
  __v: number
}
export interface IAuthAccount {
  providerAccountId: string
  type: string
  provider: string
}
