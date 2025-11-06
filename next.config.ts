import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard - allows all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // Wildcard - allows all HTTP domains
      },
    ],
  },
};

export default nextConfig;
