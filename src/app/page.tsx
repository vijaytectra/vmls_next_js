import dynamic from "next/dynamic";
import HeroVideo from "@/components/HeroVideo";
import Announcements from "@/components/Announcements";
import AboutSection from "@/components/AboutSection";

const MentoringCommittee = dynamic(() => import("@/components/MentoringCommittee"), {
  loading: () => <div className="w-full min-h-[380px]" />
});
const ExecutiveDeanSection = dynamic(() => import("@/components/ExecutiveDeanSection"), {
  loading: () => <div className="w-full min-h-[480px]" />
});
const FacultySection = dynamic(() => import("@/components/FacultySection"), {
  loading: () => <div className="w-full min-h-[420px]" />
});
const CollaborationSection = dynamic(() => import("@/components/CollaborationSection"), {
  loading: () => <div className="w-full min-h-[350px]" />
});
const NewsEventsSection = dynamic(() => import("@/components/NewsEventsSection"), {
  loading: () => <div className="w-full min-h-[500px]" />
});
const ScholarshipSection = dynamic(() => import("@/components/ScholarshipSection"), {
  loading: () => <div className="w-full min-h-[300px]" />
});
const AdmissionsCtaSection = dynamic(() => import("@/components/AdmissionsCtaSection"), {
  loading: () => <div className="w-full min-h-[380px]" />
});
const CentresOfExcellenceSection = dynamic(() => import("@/components/CentresOfExcellenceSection"), {
  loading: () => <div className="w-full min-h-[400px]" />
});
const InfrastructureSection = dynamic(() => import("@/components/InfrastructureSection"), {
  loading: () => <div className="w-full min-h-[450px]" />
});
const VideoGallerySection = dynamic(() => import("@/components/VideoGallerySection"), {
  loading: () => <div className="w-full min-h-[400px]" />
});
const QuoteSection = dynamic(() => import("@/components/QuoteSection"), {
  loading: () => <div className="w-full min-h-[250px]" />
});
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
      <AdmissionsCtaSection />
      <CentresOfExcellenceSection />
      <InfrastructureSection />
      <VideoGallerySection />
      <QuoteSection />
    </div>
  );
}