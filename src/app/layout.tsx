import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

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
  metadataBase: new URL("https://vmls.edu.in"),
  title: "VMLS Chennai – LLB, BA LLB & LLM Law College | Vinayaka Mission's Law School",
  description: "Vinayaka Mission's Law School (VMLS), Chennai — mentored by O.P. Jindal Global University. UGC/BCI-approved LL.B. (Hons.), B.A./B.B.A./B.Com. LL.B. (Hons.) and LL.M. programmes. Apply now.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  verification: {
    google: "fTOXULz5Ai5hqyJnmpmUmyTZx25xhWb37guU-iToiHU",
  },
  openGraph: {
    type: "website",
    siteName: "Vinayaka Mission's Law School (VMLS)",
    title: "VMLS Chennai – LLB, BA LLB & LLM Law College",
    description: "Mentored by O.P. Jindal Global University. UGC/BCI-approved law degrees in Chennai. Explore programmes, scholarships, and campus life.",
    url: "https://vmls.edu.in/",
    images: [
      {
        url: "https://vmls.edu.in/assets/images/home-about.webp",
        width: 1200,
        height: 630,
        alt: "Vinayaka Mission's Law School (VMLS) campus, Chennai",
      }
    ],
    locale: "en_IN",
  },
  other: {
    "DC.title": "Vinayaka Mission's Law School (VMLS), Chennai",
    "DC.description": "Vinayaka Mission's Law School (VMLS), Chennai — mentored by O.P. Jindal Global University. UGC/BCI-approved LL.B. (Hons.), B.A./B.B.A./B.Com. LL.B. (Hons.) and LL.M. programmes.",
    "DC.publisher": "Vinayaka Mission's Research Foundation",
    "DC.language": "en-IN",
    "DC.type": "Text.Homepage",
    "DC.identifier": "https://vmls.edu.in/",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "12.656998271743426, 80.18009112230368",
    "ICBM": "12.656998271743426, 80.18009112230368",
  },
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
              })(window, document, "script", "dataLayer", "GTM-TDRKCK4P");
            }, 1500);
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
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
