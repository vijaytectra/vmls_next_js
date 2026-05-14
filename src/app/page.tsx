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