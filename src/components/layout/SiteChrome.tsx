import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// WhatsApp / apply / chatbot dock — separate chunk, off the critical path.
const FloatingActions = dynamic(
  () => import("@/components/layout/FloatingActions")
);

/**
 * Server Component chrome: Header is a client island; Footer stays a Server
 * Component. FloatingActions is code-split to keep mobile TBT down.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* No animate-page-fade wrapper: it started children at opacity:0, which
          makes Chrome ignore the hero poster for LCP and forced LCP onto the
          tiny header logo. */}
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
