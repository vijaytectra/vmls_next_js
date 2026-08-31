import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { GOOGLE_SITE_VERIFICATION, GTM_ID, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Site-wide fallback only. Every route sets its own title and description
  // via pageMetadata(); a page showing this string is a page that was missed.
  title: "Vinayaka Mission's Law School (VMLS)",
  description:
    "Vinayaka Mission's Law School (VMLS), Chennai - law programmes, centres of excellence, faculty and admissions.",
  // Declared exactly once for the whole property. Never repeat per page.
  verification: { google: GOOGLE_SITE_VERIFICATION },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  }
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/*
          Google Tag Manager - deferred loader. dataLayer is created
          immediately so anything on the page can push to it; the gtm.js
          fetch itself is delayed by 1500ms to protect LCP. One container
          ID for the whole site - see GTM_ID in src/lib/seo.ts.
        */}
        <script
          id="gtm-deferred"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
setTimeout(function () {
  (function (w, d, s, l, i) {
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "${GTM_ID}");
}, 1500);`,
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
        <Header />
        <div className="animate-page-fade">
          {children}
        </div>
        <Footer />
            <FloatingActions />   
        <Script id="npf-config" strategy="afterInteractive">
          {`
            var npf_d='https://admissions.vmls.edu.in';
            var npf_c='87feca6bc65be091ed018757c6c58029';
            var s=document.createElement("script");
            s.type="text/javascript";
            s.async=true;
            s.src="https://widgets.nopaperforms.com/em-widget.js";
            document.head.appendChild(s);
          `}
        </Script>
      </body>
    </html>
  );
}
