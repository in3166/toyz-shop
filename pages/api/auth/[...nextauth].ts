import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { IAuthSession, IAuthToken } from 'types/auth'
import { dbConnect } from 'lib/dbConnect'
import { getUserId, getUserEmail } from 'lib/controllers'
import { confirmPasswordHash } from 'src/utils/comparePassword'

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
          await dbConnect()

          const data = await getUserId(id)

          const compare = await confirmPasswordHash(password, data.password)
          if (!compare) throw new Error('10003')

          delete data.password
          return data
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
    maxAge: 30 * 60 * 60 * 24, // 1일
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
        const response = await getUserEmail(user.email)
        if (response?.length < 1) {
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
        const response = await getUserEmail(user.email)
        if (response) {
          const newToken = { ...user, ...response }
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
