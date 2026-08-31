import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo-pages";

// src\app\collaborations\page.tsx is a client component and cannot export metadata itself.
export const metadata = pageMetadata("/collaborations");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
