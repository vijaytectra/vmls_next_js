import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import DeferredThirdParty from "@/components/DeferredThirdParty";
import { GOOGLE_SITE_VERIFICATION, GTM_ID, SITE_URL } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  // Preloaded, despite the bandwidth cost, because the hero <h1> and <h2> are
  // both set in this face and fill the mobile viewport. Without the preload
  // they paint in the fallback serif and re-paint when Playfair arrives - a
  // large late change to the biggest text on screen, which is exactly what
  // Speed Index measures. Turning this off took mobile SI from 8.8s to 12.0s.
  //
  // Only the latin subset is preloaded (~21 KB), not the 86 KB I once
  // attributed to it - that figure was Inter and Playfair counted together.
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Not preloaded. Inter is 48 KB and a preload is fetched at High priority,
  // which put it in direct bandwidth competition with the 14 KB header logo -
  // the measured LCP element - on a throttled phone. Playfair above stays
  // preloaded because it draws the hero headline, which is the largest text on
  // screen and the thing Speed Index actually watches; Inter sets the tagline
  // and body copy, which swap in without a visible reflow of the headline.
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
        {/*
          Google Tag Manager - rendered as a raw inline <script> so it is
          baked into every static-exported HTML file in <head> and executes
          synchronously on first paint, before any other third-party script.
          next/script with strategy="afterInteractive" was tried first but
          only injects the tag after client hydration on `output: "export"`
          builds, which defers GTM by seconds on slow devices and drops it
          entirely on cold visits that leave before hydration. Trade-off:
          adds main-thread cost on cold load; accepted for full analytics
          coverage of bounce-without-interaction sessions.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Google Tag Manager (noscript) - must stay immediately after <body>. */}
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
