const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Next.js 15
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
  env: {
    // Make GA ID optional with a default empty string
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  // Next.js 15 i18n configuration is handled via middleware
  // https://nextjs.org/docs/app/building-your-application/routing/internationalization
  // The i18n routing is now managed in middleware.js instead of here
}

module.exports = withMDX(nextConfig)
