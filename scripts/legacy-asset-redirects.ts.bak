import { NextResponse, type NextRequest } from "next/server";

/**
 * Redirects for legacy asset paths that next.config.ts cannot express.
 *
 * The newsletter PDFs were published under names containing spaces and
 * parentheses. In a `redirects()` source those are path-to-regexp syntax, not
 * literal characters, so the rule never matches. Matching the decoded
 * pathname here is exact and needs no escaping.
 */
const LEGACY_ASSETS: Record<string, string> = {
  "/assets/images/newsletter/Newsletter_April_to_May_2026 (E).pdf":
    "/images/newsletter/newsletter-april-to-may-2026-en.pdf",
  "/assets/images/newsletter/Newsletter_April_to_May_2026 (T).pdf":
    "/images/newsletter/newsletter-april-to-may-2026-ta.pdf",
  "/public/newsletter/NewsLetterNovemberToDecember-2025 (Tamil).pdf":
    "/images/newsletter/NewsLetterNovemberToDecember-2025 (Tamil).pdf",
};

export function middleware(request: NextRequest) {
  const pathname = decodeURIComponent(request.nextUrl.pathname);
  const destination = LEGACY_ASSETS[pathname];
  if (destination) {
    // 308: permanent, and preserves the request method.
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }
  return NextResponse.next();
}

// Only the two legacy asset roots reach this middleware.
export const config = {
  matcher: ["/assets/:path*", "/public/:path*"],
};
