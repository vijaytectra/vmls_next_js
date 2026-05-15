import Script from "next/script";
import HeroVideo from "@/components/HeroVideo";
import Announcements from "@/components/Announcements";
import AboutSection from "@/components/AboutSection";
import MentoringCommittee from "@/components/MentoringCommittee";
import ExecutiveDeanSection from "@/components/ExecutiveDeanSection";
import FacultySection from "@/components/FacultySection";
import CollaborationSection from "@/components/CollaborationSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import CentresOfExcellenceSection from "@/components/CentresOfExcellenceSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import VideoGallerySection from "@/components/VideoGallerySection";
import QuoteSection from "@/components/QuoteSection";
import ChatWidget from "@/components/ChatWidget";

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Law College in Chennai, India | LL.B & LL.M Programs",
  image: "https://vmls.edu.in/",
  description:
    "Apply Today! Vinayaka Mission's Law School, the best Law College in Chennai, India, offers LL.B. and LL.M. programs in Corporate & Financial Laws and Commercial Dispute Resolution.",
  brand: { "@type": "Brand", name: "Vinayaka Mission's Law School (VMLS)" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 2567,
  },
};

export default function Home() {
  return (
    <div>
      <Script
        id="ld-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <HeroVideo />
      <Announcements />
      <AboutSection />
      <MentoringCommittee />
      <ExecutiveDeanSection />
      <FacultySection />
      <CollaborationSection />
      <NewsEventsSection />
      <ScholarshipSection />
      <CentresOfExcellenceSection />
      <InfrastructureSection />
      <VideoGallerySection />
      <QuoteSection />
      <ChatWidget />
    </div>
  );
}