/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // ← সব site allow
      },
    ],
  },
};

export default nextConfig;