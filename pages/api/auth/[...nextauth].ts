import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        console.log(credentials)
        const { id, password } = credentials as {
          id: string
          password: string
        }
        console.log(id, password)

        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    // session: async ({ session, token }) => {
    //   session.accessToken && session.accessToken = token.accessToken
    //   session.user.name = token.name // Setting token in session
    //   return session
    // },
  },
  pages: {
    signIn: '/signin', // Need to define custom login page (if using)
  },
})
