import type { NextConfig } from "next";

// Next.js 15 - experimental.turbopack
const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    // @ts-expect-error
    turbopack: {
      // options
    },
    turbopackFileSystemCacheForDev: true,
  },
  assetPrefix: "adminDashboard",
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
  ],
};

export default nextConfig;
