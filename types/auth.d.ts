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
  accessToken?: string
  refreshToken?: string
  error?: string
  emailVerified?: Date | null
  accessTokenExpiry?: number
  error?: string
}

export interface IAuthToken extends JWT {
  _id?: string
  id?: string | undefined
  name?: string | null | undefined
  email?: string | null | undefined
  phone?: string
  likes?: IProductItem[] | []
  role?: number
  createdAt?: string
  updatedAt?: string
  __v?: number
  sub?: string | null | undefined
  iat?: number
  exp?: number
  jti?: string
  accessToken?: string
  accessTokenExpiry?: number
  refreshToken?: string
  error?: string
  emailVerified?: Date | null
}
export interface IAuthUser {
  _id?: string
  id?: string
  name?: string
  email?: string
  phone?: string
  likes?: IProductItem[] | []
  role?: number
  createdAt?: string
  updatedAt?: string
  __v?: number
  accessToken?: string
  accessTokenExpiry?: number
  refreshToken?: string
}
export interface IAuthAccount {
  providerAccountId: string
  type: string
  provider: string
}
