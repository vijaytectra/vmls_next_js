import dynamic from "next/dynamic";
import HeroVideo from "@/components/HeroVideo";
import Announcements from "@/components/Announcements";
import AboutSection from "@/components/AboutSection";

const MentoringCommittee = dynamic(() => import("@/components/MentoringCommittee"));
const ExecutiveDeanSection = dynamic(() => import("@/components/ExecutiveDeanSection"));
const FacultySection = dynamic(() => import("@/components/FacultySection"));
const CollaborationSection = dynamic(() => import("@/components/CollaborationSection"));
const NewsEventsSection = dynamic(() => import("@/components/NewsEventsSection"));
const ScholarshipSection = dynamic(() => import("@/components/ScholarshipSection"));
const CentresOfExcellenceSection = dynamic(() => import("@/components/CentresOfExcellenceSection"));
const InfrastructureSection = dynamic(() => import("@/components/InfrastructureSection"));
const VideoGallerySection = dynamic(() => import("@/components/VideoGallerySection"));
const QuoteSection = dynamic(() => import("@/components/QuoteSection"));
export default function Home() {
  return (
    <div>
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
    </div>
  );
}