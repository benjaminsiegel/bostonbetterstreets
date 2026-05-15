import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/config.yml", destination: "/cms-config.yml" },
      { source: "/admin/config.yml", destination: "/cms-config.yml" },
    ];
  },
};

export default nextConfig;
