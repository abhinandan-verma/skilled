import NextAuth from "next-auth"
import authConfig from "./auth.config"

const {  auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn  = !!req.auth;
    console.log("isLoggedIn ", isLoggedIn)
    console.log("Route ", req.nextUrl.pathname)
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};