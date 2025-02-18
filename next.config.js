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
        hostname: 'asstai.app',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
