const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed deprecated experimental options
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['localhost'],
  },
  env: {
    // Make GA ID optional with a default empty string
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  },
}

module.exports = withMDX(nextConfig)
