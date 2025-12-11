/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// 기본값은 GitHub Pages 리포지토리 경로, 필요 시 NEXT_PUBLIC_BASE_PATH 로 오버라이드
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/MaldivesMatch' : '')

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  // 정적 자산 경로를 명시적으로 설정해 404를 방지
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
