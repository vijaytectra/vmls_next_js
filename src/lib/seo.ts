import type { Metadata } from "next";
import { OG_IMAGE_SIZES } from "@/data/og-image-sizes";

/**
 * Single source of truth for every URL-bearing tag on the site.
 *
 * canonical, og:url and DC.identifier are all derived from one `path` value
 * (see `buildMetadata`), so it is not possible for a page to be shipped with
 * the homepage URL in those fields - the most common and most damaging
 * copy-paste error when rolling a head template across a site.
 */
export const SITE_URL = "https://vmls.edu.in";

/** @id of the CollegeOrUniversity entity declared once, on the homepage. */
export const ORG_ID = `${SITE_URL}/#organization`;

/** These three are identical on every page - never regenerate per page. */
export const GTM_ID = "GTM-TDRKCK4P";
export const GOOGLE_SITE_VERIFICATION =
  "fTOXULz5Ai5hqyJnmpmUmyTZx25xhWb37guU-iToiHU";

export const SITE_NAME = "Vinayaka Mission's Law School (VMLS)";
export const PUBLISHER = "Vinayaka Mission's Research Foundation";
export const DEFAULT_OG_IMAGE = "/images/home-about.webp";

/** Physical campus. Only emitted on pages tied to the campus itself. */
export const CAMPUS_GEO = {
  region: "IN-TN",
  placename: "Chennai",
  position: "12.656998271743426, 80.18009112230368",
} as const;

export const CAMPUS_ADDRESS = {
  streetAddress:
    "Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road), Paiyanoor",
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "603104",
  addressCountry: "IN",
} as const;

export const CAMPUS_COORDS = {
  latitude: "12.657005258414308",
  longitude: "80.18008396162338",
} as const;

export const CONTACT = {
  telephone: "+91-7358201234",
  email: "admissions@vmls.edu.in",
} as const;

export type PageSeo = {
  /** Route path, e.g. "/admissions/llm". Drives canonical, og:url, DC.identifier. */
  path: string;
  /** Unique per page, <=60 chars where possible, primary keyword near the front. */
  title: string;
  /** Unique per page, 150-160 chars, describes THIS page. */
  description: string;
  /** Social-tuned variants. Fall back to title/description when omitted. */
  ogTitle?: string;
  ogDescription?: string;
  /** Page-appropriate image (public/ path). */
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "article" | "profile";
  /** Dublin Core resource type, e.g. "Text.Homepage", "Text.Article". */
  dcType?: string;
  /** Only true for pages tied to the physical campus. */
  geo?: boolean;
  noindex?: boolean;
  publishedTime?: string;
  author?: string;
};

/**
 * Absolute URL for a route path. The only place a page URL is assembled.
 *
 * The homepage resolves to https://vmls.edu.in with no trailing slash:
 * Next.js normalises the trailing slash away when it renders canonical and
 * og:url, so DC.identifier is built the same way to keep all three byte
 * identical on every page.
 */
export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Absolute URL for an asset whose filename may contain spaces or `&` - both
 * appear in the blog image set, and either one served unencoded is a 404.
 * Encodes per path segment, so the slashes survive.
 */
export function absoluteAssetUrl(path: string): string {
  return absoluteUrl(path.split("/").map(encodeURIComponent).join("/"));
}

export function buildMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);
  const image = page.image ?? DEFAULT_OG_IMAGE;
  // Some content images carry spaces or "&" in their filenames; the URL has
  // to be percent-encoded or the scraper gets a 404.
  const imageUrl = absoluteAssetUrl(image);

  const other: Record<string, string> = {
    "DC.title": page.title,
    "DC.description": page.description,
    "DC.publisher": PUBLISHER,
    "DC.language": "en-IN",
    "DC.type": page.dcType ?? "Text",
    // Same derivation as canonical and og:url - cannot drift.
    "DC.identifier": url,
  };

  if (page.geo) {
    other["geo.region"] = CAMPUS_GEO.region;
    other["geo.placename"] = CAMPUS_GEO.placename;
    other["geo.position"] = CAMPUS_GEO.position;
    other["ICBM"] = CAMPUS_GEO.position;
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: page.noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
    openGraph: {
      type: page.ogType ?? "website",
      siteName: SITE_NAME,
      title: page.ogTitle ?? page.title,
      description: page.ogDescription ?? page.description,
      url,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          // Real file dimensions, not an assumed 1200x630 - see
          // scripts/generate-og-image-sizes.mjs. Omitted when unknown so a
          // scraper measures the file itself rather than trusting a wrong size.
          ...(OG_IMAGE_SIZES[image]
            ? { width: OG_IMAGE_SIZES[image][0], height: OG_IMAGE_SIZES[image][1] }
            : {}),
          alt: page.imageAlt ?? page.title,
        },
      ],
      ...(page.publishedTime ? { publishedTime: page.publishedTime } : {}),
      ...(page.author ? { authors: [page.author] } : {}),
    },
    other,
  };
}
