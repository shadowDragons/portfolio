const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-email/render'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'text-image.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'image-generator.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'spongebob.meme.vin',
      },
      {
        protocol: 'https',
        hostname: 'githubseek.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'promptpal.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'course.shipsaas.xyz',
      },
      {
        protocol: 'https',
        hostname: 'shipsaas.xyz',
      },
      {
        protocol: 'https',
        hostname: 'oneshotai.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'idea.sphrag.com',
      },
      {
        protocol: 'https',
        hostname: 'fwfw.app',
      },
      {
        protocol: 'https',
        hostname: 'toolfame.com',
      },
      {
        protocol: 'https',
        hostname: 'geoly.net',
      },
      {
        protocol: 'https',
        hostname: 'saasfame.com',
      },
      {
        protocol: 'https',
        hostname: 'aitoolly.org',
      },
    ],
  },
}

const intlConfig = withNextIntl(nextConfig)

module.exports = {
  ...intlConfig,
  env: {
    ...intlConfig.env,
    _next_intl_trailing_slash: intlConfig.trailingSlash ? 'true' : 'false',
  },
}
