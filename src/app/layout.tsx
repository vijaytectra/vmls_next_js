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
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
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
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
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
      {/*
        Google Tag Manager and the NoPaperForms widget are no longer loaded
        here. Both set third-party cookies and cost roughly five seconds of
        main-thread time on a throttled phone, so <DeferredThirdParty /> at the
        end of <body> loads them on the visitor's first interaction instead.
      */}
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
