import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

const NEXTAUTH_URL = 'http://localhost:3000'
const SALT_ROUND = 7

const confirmPasswordHash = (plainPassword: string, hashedPassword: string) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      resolve(res)
    })
  })
}

export default NextAuth({
  // Configure one or more authentication providers
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
          const response = await fetch(`${NEXTAUTH_URL}/api/users/${id}`, {
            method: 'POST',
            body: JSON.stringify({ id, password }),
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const data = await response.json()
          if (!data.success) {
            throw new Error(data?.error)
          }

          const compare = await confirmPasswordHash(password, data.user.password)

          if (!compare) throw new Error('Not Correct Password.')
          //  return { token: data.user, user: data.user }
          console.log('data: ', data)

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
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn(user) {
      try {
        console.log('caal: ', user)
        // the user object is wrapped in another user object so extract it
        // user = user.user
        // console.log('Sign in callback', user)
        // console.log('User id: ', user.userId)
        // if (typeof user.userId !== typeof undefined) {
        //   if (user.isActive === '1') {
        //     console.log('User is active')
        //     return user
        //   }
        //   console.log('User is not active')
        //   return false
        // }
        // console.log('User id was undefined')
        // return false
        return true
      } catch (err) {
        console.error('Signin callback error:', err)
        return false
      }
    },
    session: async ({ session, token, user }) => {
      session.user = token

      return session
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const newToken = { ...token, ...user }
        return newToken
      }
      return token
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/',
  },
})
