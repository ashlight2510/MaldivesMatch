/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages용 basePath (프로덕션에서만)
  basePath: process.env.NODE_ENV === 'production' ? '/MaldivesMatch' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

