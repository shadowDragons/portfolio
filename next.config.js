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
        hostname: 'text-image.tool.vin',
      },
      {
        protocol: 'https',
        hostname: 'image-generator.tool.vin',
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
        hostname: 'promptpal.tool.vin',
      },
      {
        protocol: 'https',
        hostname: 'course.shipsaas.xyz',
      },
      {
        protocol: 'https',
        hostname: 'oneshotai.tool.vin',
      },
      {
        protocol: 'https',
        hostname: 'idea.tool.vin',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
