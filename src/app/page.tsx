import dynamic from "next/dynamic";
import HeroVideo from "@/components/HeroVideo";
import Announcements from "@/components/Announcements";
import AboutSection from "@/components/AboutSection";
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/");

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
      <PageSchema path="/" />
      <HeroVideo />
      <Announcements />
      {/* Also below the fold on a phone: its top edge measures at y=989 in a
          412x823 viewport, so its 40 KB illustration was competing for
          bandwidth during the first paint and its layout was being computed
          for content nobody had scrolled to. */}
      <div className="below-fold">
        <AboutSection />
      </div>
      <div className="below-fold">
        <MentoringCommittee />
      </div>
      <div className="below-fold">
        <ExecutiveDeanSection />
      </div>
      <div className="below-fold">
        <FacultySection />
      </div>
      <div className="below-fold">
        <CollaborationSection />
      </div>
      <div className="below-fold">
        <NewsEventsSection />
      </div>
      <div className="below-fold">
        <ScholarshipSection />
      </div>
      <div className="below-fold">
        <CentresOfExcellenceSection />
      </div>
      <div className="below-fold">
        <InfrastructureSection />
      </div>
      <div className="below-fold">
        <VideoGallerySection />
      </div>
      <div className="below-fold">
        <QuoteSection />
      </div>
    </div>
  );
}