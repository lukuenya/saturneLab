const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeDetection: false,
  },
  defaultNS: 'common',
  // Use absolute path that works both locally and on Vercel
  localePath: typeof window === 'undefined' 
    ? path.resolve(process.cwd(), './public/locales')
    : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  // Disable SSR locale detection since we use custom middleware
  serializeConfig: false,
}
