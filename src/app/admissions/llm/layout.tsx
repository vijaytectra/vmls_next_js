import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo-pages";

// src\app\admissions\llm\page.tsx is a client component and cannot export metadata itself.
export const metadata = pageMetadata("/admissions/llm");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
