/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable ISR and static generation for Vercel
  output: undefined, // Let Vercel handle this automatically
};

module.exports = nextConfig;
