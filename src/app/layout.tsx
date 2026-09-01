import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
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
      <head>
        {/*
          Google Tag Manager - deferred loader. dataLayer is created
          immediately so anything on the page can push to it; the gtm.js
          fetch is delayed by 1500ms to protect LCP. One container ID for
          the whole site - see GTM_ID in src/lib/seo.ts.
        */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            setTimeout(function() {
              (function (w, d, s, l, i) {
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "${GTM_ID}");
            }, 1500);
          `}
        </Script>
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
        <Script id="npf-embed-config" strategy="lazyOnload">
          {`
            var npf_d = "https://admissions.vmls.edu.in";
            var npf_c = "5747";
            var npf_m = "1";
            (function () {
              if (document.querySelector('script[src="https://widgets.in8.nopaperforms.com/emwgts.js"]')) return;
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.defer = true;
              s.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
              document.body.appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
