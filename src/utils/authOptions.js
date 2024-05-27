import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/User'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Use absolute URL here
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        const data = await res.json()

        if (res.ok && data) {
          const user = { name: data.data.fullname, email: data.data.email }
          return user
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Customize the sign-in page if needed
  },
  callbacks: {
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session.user.email })
      // 2. Assign the user id to the session
      session.user.id = user._id.toString()
      // 3. return session
      return session
    },
  },
}

export default NextAuth(authOptions)
