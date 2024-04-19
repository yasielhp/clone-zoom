import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/upcoming(.*)',
  '/recordings(.*)',
  '/previous(.*)',
  '/personal-room(.*)',
  '/meeting(.*)',
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
