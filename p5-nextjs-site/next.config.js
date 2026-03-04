/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.wp.com' },
      { protocol: 'https', hostname: '**.wordpress.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
};
module.exports = nextConfig;
