import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo-pages";

// src\app\scholarships\page.tsx is a client component and cannot export metadata itself.
export const metadata = pageMetadata("/scholarships");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
