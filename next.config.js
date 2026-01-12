const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Next.js 16
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Enable Turbopack (default in Next.js 16)
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  env: {
    // Make GA ID optional with a default empty string
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Next.js 15 i18n configuration is handled via middleware
  // https://nextjs.org/docs/app/building-your-application/routing/internationalization
  // The i18n routing is now managed in middleware.js instead of here
}

module.exports = withMDX(nextConfig)
