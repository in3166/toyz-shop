const path = require('path')
const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeDetection: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    // config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.fallback = { fs: false }
    return config
  },
}

module.exports = nextConfig
