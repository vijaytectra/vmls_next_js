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
  title: "VMLS – Best Law College in Chennai offering LL.B. (Hons.), B.A. LL.B (Hons.), B.B.A.LL.B. (Hons.), B.Com.LL.B. (Hons.), and 1-year LL.M. programmes.",
  description: "Vinayaka Mission's Law School (VMLS) is one of the best law colleges in Chennai, offering world-class legal education with international collaborations and modern infrastructure.",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
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
