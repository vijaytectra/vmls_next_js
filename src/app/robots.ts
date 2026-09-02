import type { MetadataRoute } from "next";
import { BLOCKED_FROM_SEARCH } from "@/lib/indexing";
import { SITE_URL } from "@/lib/seo";

// Served at /robots.txt.
//
// The previous static site's robots.txt also disallowed /menu.html,
// /footer.html, /header.html, /private/, /tmp/ and /scripts/ - all artefacts
// of that build. None of those paths exist in this app, so they are not
// carried over. The two PhD blog URLs stay blocked, as they were before.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...BLOCKED_FROM_SEARCH],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
