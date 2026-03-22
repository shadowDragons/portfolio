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
    ],
  },
}

module.exports = withNextIntl(nextConfig)
