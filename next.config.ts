import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        http2: false,
        os: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
