import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo-pages";

// src\app\internship-and-career-services\page.tsx is a client component and cannot export metadata itself.
export const metadata = pageMetadata("/internship-and-career-services");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
