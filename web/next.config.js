/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      { hostname: '192.168.2.103' },
      { hostname: 'localhost', port: '3333' },
    ],
  },
}

module.exports = nextConfig
