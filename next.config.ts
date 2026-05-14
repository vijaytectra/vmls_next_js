import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vmls.edu.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
