import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app — a parent ~/package-lock.json otherwise
  // makes Tailwind scan the whole home directory (and pick up broken live-site paths).
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
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
