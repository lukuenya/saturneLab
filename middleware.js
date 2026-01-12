import { NextResponse } from 'next/server'

// Import directly from the config to ensure changes are picked up
const i18nConfig = {
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
}

/**
 * Next.js 15 Middleware for handling internationalization
 */
export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Skip files with extensions, Next.js internals, or API routes
  if (
    /\.(.*)$/.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.includes('/api/')
  ) {
    return NextResponse.next()
  }
  
  // Extract locale from the pathname
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If the pathname has a locale, rewrite it to the actual page
  if (pathnameHasLocale) {
    // Extract the locale and the rest of the path
    const segments = pathname.split('/')
    const locale = segments[1]
    const pathWithoutLocale = segments.slice(2).join('/') || ''
    
    // Create the rewrite URL (remove locale prefix)
    const rewritePath = pathWithoutLocale ? `/${pathWithoutLocale}` : '/'
    
    // Rewrite to the actual page and add locale info to headers
    const response = NextResponse.rewrite(new URL(rewritePath, request.url))
    response.headers.set('x-locale', locale)
    return response
  }
  
  // Otherwise, redirect to the default locale version
  const locale = i18nConfig.defaultLocale
  
  // Create the URL with the locale prefix
  // Handle root path separately (/ → /fr)
  const path = pathname === '/' ? '' : pathname
  return NextResponse.redirect(
    new URL(
      `/${locale}${path}`,
      request.url
    )
  )
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: [
    // Match all paths except static files, API routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
    // Also match the root path
    '/'
  ],
}
