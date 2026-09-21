import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import DeferredThirdParty from "@/components/DeferredThirdParty";
import { GOOGLE_SITE_VERIFICATION, GTM_ID, SITE_URL } from "@/lib/seo";
import Script from "next/script";
// GTM container script is injected by DeferredThirdParty after LCP.

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  // Not preloaded: the mobile LCP is the hero poster. Preloading Playfair
  // competed with that image on Slow 4G. Headings still swap in via CSS.
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Not preloaded: must not compete with the hero poster on throttled mobile.
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Site-wide fallback only. Every route sets its own title, description,
  // canonical and Open Graph set via pageMetadata(); a page showing this
  // string is a page that was missed.
  //
  // Deliberately no `alternates.canonical` here: canonical is inherited by
  // every child route, so a value on the root layout would point all of them
  // at one URL. The homepage's own canonical comes from pageMetadata("/").
  title: "Vinayaka Mission's Law School (VMLS)",
  description:
    "Vinayaka Mission's Law School (VMLS), Chennai - law programmes, centres of excellence, faculty and admissions.",
  // Declared exactly once for the whole property. Never repeat per page.
  verification: { google: GOOGLE_SITE_VERIFICATION },
  // The file that shipped as favicon.ico was a 211x213 PNG with the extension
  // renamed - 28.7 KB, fetched at High priority on every cold load, for an
  // icon drawn at 16-32px. These are real, sized icons; favicon.ico is now a
  // 2 KB ICO wrapping the 32px PNG, kept for clients that request /favicon.ico
  // without reading the markup.
  icons: {
    icon: [
      { url: "/images/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Prime dataLayer immediately. gtm.js (GTM-TDRKCK4P + GA4 + Clarity)
            is injected by DeferredThirdParty after interaction or a short
            post-load delay so it does not compete with LCP on mobile. Queued
            pushes flush when the container arrives. */}
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteChrome>{children}</SiteChrome>
        <DeferredThirdParty />
      </body>
    </html>
  );
}
