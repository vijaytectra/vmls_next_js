"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FloatingActions = dynamic(
  () => import("@/components/layout/FloatingActions"),
  { ssr: false }
);

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="animate-page-fade">{children}</div>
      <Footer />
      <FloatingActions />
    </>
  );
}
