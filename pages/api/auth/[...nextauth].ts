import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { IAuthSession, IAuthToken } from 'types/auth'

const confirmPasswordHash = (plainPassword: string, hashedPassword: string) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      resolve(res)
    })
  })
}
console.log(process.env.NEXT_PUBLIC_BASE_URL)
console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
console.log(process.env.VERCEL_URL)
console.log(process.env.NEXTAUTH_URL)
console.log(process.env.NEXT_PUBLIC_AUTH_SECRET_KEY)
console.log(process.env.SECRET)
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { id, password } = credentials as {
          id: string
          password: string
        }
        console.log('credentials: ', credentials)
        console.log(
          'credentials urls :',
          process.env.NEXT_PUBLIC_BASE_URL,
          process.env.NEXT_PUBLIC_VERCEL_URL,
          process.env.VERCEL_URL
        )
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${id}`,
            {
              method: 'GET',
              // body: JSON.stringify({ id, password }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          const data = await response.json()
          console.log('auth data: ', data)
          if (!data.success) {
            throw new Error(data?.error?.code)
          }
          console.log('data: ', data)
          const compare = await confirmPasswordHash(password, data.user.password)
          if (!compare) throw new Error('10003')

          delete data.user.password
          console.log('compare: ', compare)
          return data.user
        } catch (error) {
          if (typeof error === 'string') {
            throw new Error(error)
          } else if (error instanceof Error) {
            throw error
          }
          return null
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET_KEY || process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    secret: 'secret_toyz_669',
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        console.log('call back accuount:', account?.type)
        if (account?.type === 'credentials') {
          return true
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${user.email}`
        )
        const isUserExisted = await response.json()
        if (!isUserExisted.success) {
          return `/signup?email=${user.email}`
        }
        return true
      } catch (err) {
        return false
      }
    },
    session: async ({ session, token }: { session: IAuthSession; token: IAuthToken }) => {
      console.log('session: ', session)
      session.user = token as IAuthToken
      return session
    },
    jwt: async ({ token, user, account }) => {
      console.log('token: ', token)
      if (user && account?.type === 'oauth') {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${user?.email}`
        )
        const data = await response.json()
        if (data.success) return { ...token, ...data.user }
      }

      if (user) {
        return { ...token, ...user }
      }

      return token
    },
  },
  pages: {
    signIn: '/signin',
  },
})
