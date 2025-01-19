import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/object/public/avatarImage/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10MB",
    },
  },
};

export default nextConfig;
