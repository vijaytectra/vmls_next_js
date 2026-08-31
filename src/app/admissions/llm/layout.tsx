import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LL.M. Admissions | VMLS Chennai",
  description: "One-year LL.M. programme at Vinayaka Mission's Law School, Chennai. Specializations in Corporate Law, Dispute Resolution, Criminal Law, and AI & IP.",
};

export default function LLMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
