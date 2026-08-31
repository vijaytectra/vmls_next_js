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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "@id": "https://vmls.edu.in/#organization",
            name: "Vinayaka Mission's Law School",
            alternateName: "VMLS",
            url: "https://vmls.edu.in/",
            logo: "https://vmls.edu.in/assets/images/asset-44x-1@2x.webp",
            image: "https://vmls.edu.in/assets/images/home-about.webp",
            description:
              "Vinayaka Mission's Law School (VMLS), Chennai, is mentored by O.P. Jindal Global University and Jindal Global Law School, offering LL.B. (Hons.), B.A. LL.B. (Hons.), B.B.A. LL.B. (Hons.), B.Com. LL.B. (Hons.) and LL.M. programmes.",
            foundingDate: "2021",
            parentOrganization: {
              "@type": "CollegeOrUniversity",
              name: "Vinayaka Mission's Research Foundation",
              url: "https://vmls.edu.in/About-VMRF.html",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road), Paiyanoor",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              postalCode: "603104",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.657005258414308",
              longitude: "80.18008396162338",
            },
            telephone: "+91-7358201234",
            email: "admissions@vmls.edu.in",
            sameAs: [
              "https://www.facebook.com/vinayakamissionslawschool/",
              "https://www.instagram.com/vinayakamissionslawschool/",
              "https://www.linkedin.com/company/76599099",
              "https://www.youtube.com/@VinayakaMissionsLawSchoolVMLS",
            ],
            department: [
              {
                "@type": "CollegeOrUniversity",
                name: "Global Tamil Law Centre",
                url: "https://vmls.edu.in/global-tamil-law-centre.html",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Centre for Justice through Technology",
                url: "https://vmls.edu.in/centre-for-justice-through-technology.html",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Centre for the Promotion of International Law",
                url: "https://vmls.edu.in/centre-for-the-promotion-of-international-law.html",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Centre for Maritime Law",
                url: "https://vmls.edu.in/centre-for-maritime-law.html",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Centre for Access to Justice",
                url: "https://vmls.edu.in/centre-for-access-to-justice.html",
              },
            ],
          }),
        }}
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
    </div>
  );
}