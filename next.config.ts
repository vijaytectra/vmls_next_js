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
    // `unoptimized` is deliberately NOT set: it suppresses srcset entirely,
    // which meant every device downloaded every image at full size. The
    // custom loader below serves pre-generated width variants instead, so
    // next/image emits a real srcset with no image server involved.
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    // Only the widths scripts/generate-image-variants.mjs actually produces.
    deviceSizes: [640, 828, 1200, 1920],
    // Kept below deviceSizes[0] so 640 is not emitted twice in every srcset.
    imageSizes: [256, 384],
    formats: ["image/webp"],
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
