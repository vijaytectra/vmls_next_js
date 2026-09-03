import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out, which is
  // what gets uploaded to cPanel. There are no API routes, server actions or
  // ISR in this app, so nothing is lost by prerendering everything.
  //
  // Two Next features do NOT survive an export and are handled by Apache
  // instead - see scripts/generate-htaccess.mjs, which writes public/.htaccess
  // from the same src/data/redirects.ts:
  //   * redirects()   -> RewriteRule ... [R=301]
  //   * middleware.ts -> the three legacy newsletter PDF paths
  output: "export",

  // Keep Turbopack scoped to this app — a parent ~/package-lock.json otherwise
  // makes Tailwind scan the whole home directory (and pick up broken live-site paths).
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    // No image optimization server on shared hosting: files in public/ are
    // served as-is by Apache.
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
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
