// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      // 본인의 GitHub 계정만 허용
      profile(profile) {
        return {
          ...profile,
          id: profile.id.toString(),
          // diasm3 계정만 허용
          role: profile.login === "diasm3" ? "admin" : "user",
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith("/write")

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/write", nextUrl))
      }
      return true
    },
    async signIn({ profile }) {
      // diasm3 계정만 허용
      return profile?.login === "diasm3"
    },
  },
})
