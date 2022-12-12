import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { IAuthSession, IAuthToken } from 'types/auth'
import { dbConnect } from 'lib/dbConnect'
import Users from 'lib/models/Users'

const confirmPasswordHash = (plainPassword: string, hashedPassword: string) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      resolve(res)
    })
  })
}
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
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          const data = await response.json()
          if (!data.success) {
            throw new Error(data?.error?.code)
          }
          const compare = await confirmPasswordHash(password, data.user.password)
          if (!compare) throw new Error('10003')

          delete data.user.password
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
  secret: process.env.NEXTAUTH_SECRET || process.env.SECRET || process.env.NEXT_AUTH_SECRET_KEY,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXT_AUTH_SECRET_KEY || process.env.SECRET,
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.type === 'credentials') {
          return true
        }
        await dbConnect()
        const response = await Users.find({ email: user.email })
        if (!response.length) {
          return `/signup?email=${user.email}`
        }
        return true
      } catch (err) {
        return false
      }
    },
    session: async ({ session, token }: { session: IAuthSession; token: IAuthToken }) => {
      // 조건 주기
      session.user = { ...session.user, ...token }
      return session
    },
    jwt: async ({ token, user, account }) => {
      if (user && account?.type === 'oauth') {
        await dbConnect()
        const response = await Users.find({ email: user.email }).lean()
        if (response?.length > 0) {
          const newToken = { ...user, ...response[0] }
          return newToken
        }
      }
      if (user) {
        return { ...token, ...user }
      }

      return token
    },
  },
  pages: {
    signIn: '/',
  },
})
