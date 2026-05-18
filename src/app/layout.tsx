import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
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
