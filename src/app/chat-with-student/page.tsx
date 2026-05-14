"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const programmes = [
  "UG Law Programmes",
  "PG Law Programmes",
];

const coursesByProgramme: Record<string, string[]> = {
  "UG Law Programmes": [
    "B.A. LL.B. (Hons.)",
    "B.B.A. LL.B. (Hons.)",
    "B.Com. LL.B. (Hons.)",
    "LL.B. (Hons.)",
  ],
  "PG Law Programmes": [
    "LL.M. in Corporate and Financial Laws",
    "LL.M. in Commercial Dispute Resolution",
    "LL.M. in Criminal Law and Practice",
    "LL.M. in AI, Emerging Technologies & IP",
  ],
};

type Tab = "Student" | "Alumni" | "Faculty";

const ambassadorData: Record<Tab, {
  name: string;
  course: string;
  programme: string;
  country: string;
  languages: string;
  about: string;
  bannerGradient: string;
  phone: string;
}[]> = {
  Student: [
    {
      name: "Arunkumar G",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "III Year LLB. Special Invitee - Student Grievance Redressal Committee. Dedicated to student welfare.",
      bannerGradient: "linear-gradient(135deg, #a31f34, #800000)",
      phone: "919655120505",
    },
    {
      name: "Mukundan TCA",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I Year LL.B. (Hons.). Best Presenter Award Winner. Participated in National Conference 2026.",
      bannerGradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
      phone: "919876543210",
    },
    {
      name: "Kanimozhi Kanika MS",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I Year LL.B. (Hons.). Best Presenter Award Winner. Participated in National Conference 2026.",
      bannerGradient: "linear-gradient(135deg, #0f2027, #203a43)",
      phone: "919876543210",
    },
    {
      name: "Venkatesh R",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "Second year LL.B.(Hons.) student, active in extracurriculars and eager to learn law with integrity.",
      bannerGradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      phone: "919876543210",
    },
    {
      name: "Keerthana Kalithass",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Law student powered by curiosity and good coffee; a literary mind in legal training.",
      bannerGradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
      phone: "919876543210",
    },
    {
      name: "Jaya Jenifer A",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Good at singing. Good at creating conversation. Friendly speaker.",
      bannerGradient: "linear-gradient(135deg, #2c3e50, #4ca1af)",
      phone: "919876543210",
    },
    {
      name: "Sharvin R",
      course: "B.Com. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Member of Internal Complaints Committee; Member of Mootcourt Cell; Equipment Manager – Sports Club.",
      bannerGradient: "linear-gradient(135deg, #141e30, #243b55)",
      phone: "919876543210",
    },
    {
      name: "Kanmani. M",
      course: "B.B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Friendly student who enjoys music, movies, travel, and guiding others with honest advice.",
      bannerGradient: "linear-gradient(135deg, #360033, #0b8793)",
      phone: "919876543210",
    },
    {
      name: "Shenukha Suresh Kumar",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Focused on building a supportive and empowered student community.",
      bannerGradient: "linear-gradient(135deg, #1f4037, #99f2c8)",
      phone: "919876543210",
    },
    {
      name: "Divya Gupta",
      course: "B.Com. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · Hindi · +1",
      about: "\"You are not the opinion of someone who doesn't know you.\"",
      bannerGradient: "linear-gradient(135deg, #c94b4b, #4b134f)",
      phone: "919876543210",
    },
    {
      name: "Naveen P Rajesh",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · Hindi · +2",
      about: "Law student, passionate about teamwork, leadership and continuous improvement.",
      bannerGradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
      phone: "919876543210",
    },
    {
      name: "T K Rindhya Subalakshmi",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "A dedicated and approachable student with strong communication skills and the ability to build goals.",
      bannerGradient: "linear-gradient(135deg, #232526, #414345)",
      phone: "919876543210",
    },
    {
      name: "Atchaya Arasi A.M",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Extremely friendly & approachable. Skilled communicator. Problem solver. Believer. Positive Influence.",
      bannerGradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      phone: "919876543210",
    },
    {
      name: "Kavin Kshathriya J.S",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "An enthusiastic law student pursuing his own law degree!!",
      bannerGradient: "linear-gradient(135deg, #834d9b, #d04ed6)",
      phone: "919876543210",
    },
    {
      name: "Dinesh Ragavendra M",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "A dedicated student focusing on criminal law and other disciplines too.",
      bannerGradient: "linear-gradient(135deg, #134e5e, #71b280)",
      phone: "919876543210",
    },
    {
      name: "Ragavipandiyan",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I am a creative and positive person and I easily connect with others to make friends.",
      bannerGradient: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      phone: "919876543210",
    },
    {
      name: "SS Swasthika",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "I'm an animal watcher. I can do a Rajinikanth impression.",
      bannerGradient: "linear-gradient(135deg, #141e30, #243b55)",
      phone: "919876543210",
    },
    {
      name: "Krish S",
      course: "B.B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "I am a law student and also a sports person who actively participates in various events.",
      bannerGradient: "linear-gradient(135deg, #c94b4b, #4b134f)",
      phone: "919876543210",
    },
    {
      name: "Supriya N S",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "I value structure, logic, and impact.",
      bannerGradient: "linear-gradient(135deg, #f7971e, #ffd200)",
      phone: "919876543210",
    },
    {
      name: "Abinesh M",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "Focused on building a stronger campus network through reformed student support.",
      bannerGradient: "linear-gradient(135deg, #232526, #414345)",
      phone: "919876543210",
    },
    {
      name: "Kirutheka S B",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Good listener and makes the environment fun and joyful.",
      bannerGradient: "linear-gradient(135deg, #0f0c29, #302b63)",
      phone: "919876543210",
    },
    {
      name: "Gundeboina Vasavi",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ் · +1",
      about: "I'm studying at Vinayaka Missions Law School. I have an interest in internships, legal moot court sessions.",
      bannerGradient: "linear-gradient(135deg, #360033, #0b8793)",
      phone: "919876543210",
    },
    {
      name: "Kanishka V",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I am a passionate artist who loves drawing and painting and expressing ideas through arts.",
      bannerGradient: "linear-gradient(135deg, #834d9b, #d04ed6)",
      phone: "919876543210",
    },
    {
      name: "Venkatesh P",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Calm, career-focused, respectful – with a quiet emotional side.",
      bannerGradient: "linear-gradient(135deg, #a31f34, #c0392b)",
      phone: "919876543210",
    },
    {
      name: "Haridasvane R",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · Hindi · +1",
      about: "I am a law student who enjoys reading beyond the syllabus. Actively involved in academic events.",
      bannerGradient: "linear-gradient(135deg, #1a1a2e, #e94560)",
      phone: "919876543210",
    },
    {
      name: "Gayathri S",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Being a first-generation graduate in the legal field, I strive to bridge theoretical into real world.",
      bannerGradient: "linear-gradient(135deg, #1f4037, #99f2c8)",
      phone: "919876543210",
    },
    {
      name: "Hemalatha",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "First generation Law student. Eager to explore new domains in law.",
      bannerGradient: "linear-gradient(135deg, #0f0c29, #302b63)",
      phone: "919876543210",
    },
    {
      name: "Mrinal Kanti Samanta",
      course: "LL.M. in Corporate and Financial Laws",
      programme: "PG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Hi, I'm Mrinal, based in Chennai and originally from Kolkata. I hold both an MBA and a law degree.",
      bannerGradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      phone: "919876543210",
    },
    {
      name: "J. Purushothaman",
      course: "B.A. LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I am a good story narrator, I write so many short stories and also keep writing.",
      bannerGradient: "linear-gradient(135deg, #834d9b, #d04ed6)",
      phone: "919876543210",
    },
  ],
  Alumni: [
    {
      name: "Prasanna Margrate Jenila",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Currently practicing Litigation; Was the President of the Student Council; University's 1st rankholder.",
      bannerGradient: "linear-gradient(135deg, #a31f34, #c0392b)",
      phone: "919876543210",
    },
    {
      name: "Srinithi Murugan",
      course: "LL.B. (Hons.)",
      programme: "UG Law Programmes",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I'm the alumni at Vinayaka Mission's Law School. It was a great experience in VMLS.",
      bannerGradient: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      phone: "919876543210",
    },
  ],
  Faculty: [
    {
      name: "Dr. Shenbagavalli",
      course: "Associate Dean - Student Affairs",
      programme: "Student Affairs",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Overseeing student affairs and welfare at VMLS. Contact for support and guidance.",
      bannerGradient: "linear-gradient(135deg, #800000, #a31f34)",
      phone: "918925934394",
    },
    {
      name: "Dr. Saranya",
      course: "Counselling Support",
      programme: "Student Welfare",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Dedicated counselling support for students' mental health and academic well-being.",
      bannerGradient: "linear-gradient(135deg, #2c3e50, #000000)",
      phone: "919500049969",
    },
    {
      name: "Dr. Abhinaya",
      course: "Assistant Professor",
      programme: "VMLS",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "I'm a legal academic with more than five years' teaching experience. Specializes in IP and Torts Law.",
      bannerGradient: "linear-gradient(135deg, #a31f34, #c0392b)",
      phone: "919876543210",
    },
    {
      name: "Nisha Jensilin R T",
      course: "Program Lead",
      programme: "Admission",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Passionate educator guiding students toward purposeful academic success and growth with integrity!!",
      bannerGradient: "linear-gradient(135deg, #134e5e, #71b280)",
      phone: "919876543210",
    },
    {
      name: "Prof. Nabeela Siddiqui",
      course: "Assistant Professor",
      programme: "Law",
      country: "🇮🇳",
      languages: "English · Hindi · +1",
      about: "Dedicated faculty member specializing in international law and human rights.",
      bannerGradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
      phone: "919876543210",
    },
    {
      name: "Sowmiya",
      course: "Assistant Professor",
      programme: "Law",
      country: "🇮🇳",
      languages: "English · தமிழ்",
      about: "Assistant Professor specializing in Law and dedicated to academic excellence.",
      bannerGradient: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      phone: "919876543210",
    },
    {
      name: "Hartej",
      course: "Assistant Professor",
      programme: "Law",
      country: "🇮🇳",
      languages: "English",
      about: "Assistant Professor of Law, passionate about legal research and teaching.",
      bannerGradient: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      phone: "919876543210",
    },
  ],
};

type AmbassadorCard = typeof ambassadorData.Student[0];

const quickQuestions = [
  "Can you tell me how the course is?",
  "How is the campus life?",
  "How is the extra curriculars?",
  "How are the placements, internships opportunities?",
];

export default function ChatWithStudentPage() {
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("Student");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStudent, setModalStudent] = useState<AmbassadorCard | null>(null);
  const [modalStep, setModalStep] = useState(1);
  const [message, setMessage] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [courseInterest, setCourseInterest] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const openModal = (card: AmbassadorCard) => {
    setModalStudent(card);
    setModalStep(1);
    setMessage("");
    setSelectedTags([]);
    setCourseInterest("");
    setUserInfo({ name: "", email: "", phone: "" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalStudent(null);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const availableCourses = selectedProgramme
    ? coursesByProgramme[selectedProgramme] || []
    : [];

  const handleReset = () => {
    setSelectedProgramme("");
    setSelectedCourse("");
  };

  const displayedCards = ambassadorData[activeTab].filter((card) => {
    if (selectedProgramme && card.programme !== selectedProgramme) return false;
    if (selectedCourse && card.course !== selectedCourse) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-5 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium font-inter">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Chat with a Student</span>
        </div>
      </nav>

      {/* Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "1440/280" }}>
          <Image
            src="/images/VMLS Iframe WEB Banner 1-01-01.jpg"
            alt="Chat with our Students Ambassadors"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-[5%] py-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">

            {/* Programme Select */}
            <div className="flex-1 min-w-0">
              <label className="block text-xs font-inter font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Search by Programme
              </label>
              <div className="relative">
                <select
                  id="programme-select"
                  value={selectedProgramme}
                  onChange={(e) => {
                    setSelectedProgramme(e.target.value);
                    setSelectedCourse("");
                  }}
                  className="w-full appearance-none border border-gray-200 bg-white text-gray-700 font-inter text-sm px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/30 focus:border-[#a31f34] transition-colors rounded-sm"
                >
                  <option value="">None selected</option>
                  {programmes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Course Select */}
            <div className="flex-1 min-w-0">
              <label className="block text-xs font-inter font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Search by Course
              </label>
              <div className="relative">
                <select
                  id="course-select"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  disabled={!selectedProgramme}
                  className="w-full appearance-none border border-gray-200 bg-white text-gray-700 font-inter text-sm px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/30 focus:border-[#a31f34] transition-colors rounded-sm disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="">None selected</option>
                  {availableCourses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            {selectedProgramme && (
              <div className="shrink-0">
                <button
                  onClick={handleReset}
                  className="px-5 py-3 border border-gray-300 text-gray-600 font-inter text-sm hover:border-[#a31f34] hover:text-[#a31f34] transition-colors rounded-sm"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ambassador Cards Section */}
      <section className="bg-[#f8f9fa] py-8 px-[5%]">
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            {(["Student", "Alumni", "Faculty"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-inter font-semibold text-sm transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-[#a31f34] text-[#a31f34]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {displayedCards.length === 0 ? (
            <p className="font-inter text-gray-500 text-sm py-8">
              No ambassadors found for the selected filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {displayedCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
                >
                  {/* Banner + Avatar */}
                  <div className="relative h-28 shrink-0" style={{ background: card.bannerGradient }}>
                    {/* Type Badge */}
                    <span className="absolute top-2 left-2 bg-[#22c55e] text-white text-[10px] font-inter font-semibold px-2 py-0.5 rounded-sm">
                      {activeTab}
                    </span>
                    {/* Avatar placeholder circle */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-md overflow-hidden">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-8 pb-4 px-4 flex flex-col flex-1">

                    {/* Name */}
                    <h3 className="font-inter font-bold text-[#1a1a1a] text-sm text-center leading-tight mb-1">
                      {card.name}
                    </h3>

                    {/* Course */}
                    <p className="font-inter text-xs text-gray-500 text-center mb-2">
                      {card.course}
                    </p>

                    {/* Programme Tag */}
                    <div className="flex justify-center mb-3">
                      <span className="text-[10px] font-inter font-semibold text-[#22c55e] border border-[#22c55e]/40 bg-[#22c55e]/5 px-2 py-0.5 rounded-sm">
                        {card.programme}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="space-y-1.5 text-[11px] font-inter text-gray-600 mb-4">
                      <div className="flex items-start gap-1.5">
                        <span className="text-gray-400 font-semibold w-14 shrink-0">I&apos;m from</span>
                        <span>{card.country}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-gray-400 font-semibold w-14 shrink-0">I Speak</span>
                        <span>{card.languages}</span>
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold mb-0.5">About me</p>
                        <p className="text-gray-600 leading-snug line-clamp-3">{card.about}</p>
                      </div>
                    </div>

                    {/* Chat CTA */}
                    <div className="mt-auto flex flex-col items-center gap-1.5">
                      <button
                        onClick={() => openModal(card)}
                        className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#a31f34] hover:bg-[#8a1a2c] text-white font-inter font-semibold text-xs transition-colors duration-200"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Chat
                      </button>
                      <button className="text-[11px] font-inter text-[#a31f34] hover:underline">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Chat Modal — rendered via portal into document.body to escape CSS transform stacking context */}
      {mounted && modalOpen && modalStudent && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <h2 className="font-inter font-bold text-[#1a1a1a] text-base flex-1">
                Get your query resolved in 3 easy steps
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-b border-gray-100">
              {[
                { n: 1, label: "Your Message" },
                { n: 2, label: "Your Information" },
                { n: 3, label: "Receive an Answer" },
              ].map((step, i) => (
                <div key={step.n} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-300 text-xs">›</span>}
                  <div className="flex items-center gap-1.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-inter ${
                      modalStep === step.n
                        ? "bg-[#a31f34] text-white"
                        : modalStep > step.n
                        ? "bg-[#a31f34]/30 text-[#a31f34]"
                        : "border border-gray-300 text-gray-400"
                    }`}>{step.n}</div>
                    <span className={`text-xs font-inter ${
                      modalStep === step.n ? "text-[#1a1a1a] font-semibold" : "text-gray-400"
                    }`}>{step.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">

              {/* Step 1: Your Message */}
              {modalStep === 1 && (
                <div className="space-y-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me about university courses, campus life and more!"
                    rows={5}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 font-inter text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/20 focus:border-[#a31f34] resize-none"
                  />

                  <div>
                    <p className="text-xs font-inter text-gray-500 mb-2">You can ask me about</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => toggleTag(q)}
                          className={`flex items-center gap-1 border text-xs font-inter px-2.5 py-1.5 rounded-sm transition-colors ${
                            selectedTags.includes(q)
                              ? "bg-[#a31f34] border-[#a31f34] text-white"
                              : "border-[#a31f34] text-[#a31f34] hover:bg-[#a31f34]/5"
                          }`}
                        >
                          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-inter font-semibold text-gray-700 mb-1.5">
                      Course Interest? <span className="text-[#a31f34]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full appearance-none border border-gray-200 bg-white text-gray-600 font-inter text-sm px-3 py-2.5 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-[#a31f34]/20 focus:border-[#a31f34]"
                      >
                        <option value="">Select Courses</option>
                        {[
                          "B.A. LL.B. (Hons.)",
                          "B.B.A. LL.B. (Hons.)",
                          "B.Com. LL.B. (Hons.)",
                          "LL.B. (Hons.)",
                          "LL.M. in Corporate and Financial Laws",
                          "LL.M. in Commercial Dispute Resolution",
                          "LL.M. in Criminal Law and Practice",
                          "LL.M. in AI, Emerging Technologies & IP",
                        ].map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Your Information */}
              {modalStep === 2 && (
                <div className="space-y-3">
                  <p className="text-xs font-inter text-gray-500 mb-2">Please share your details so the ambassador can reach you.</p>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-gray-700 mb-1">Full Name <span className="text-[#a31f34]">*</span></label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 font-inter text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/20 focus:border-[#a31f34]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-gray-700 mb-1">Email Address <span className="text-[#a31f34]">*</span></label>
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 font-inter text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/20 focus:border-[#a31f34]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-gray-700 mb-1">Phone Number <span className="text-[#a31f34]">*</span></label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 font-inter text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a31f34]/20 focus:border-[#a31f34]"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Receive an Answer */}
              {modalStep === 3 && (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-inter font-bold text-[#1a1a1a] text-base">You&apos;re all set!</h3>
                  <p className="font-inter text-gray-500 text-sm">
                    Click below to start a WhatsApp conversation with <strong>{modalStudent.name}</strong>.
                  </p>
                  <a
                    href={`https://wa.me/${modalStudent.phone}?text=${encodeURIComponent(
                      `Hi ${modalStudent.name}, I'm ${userInfo.name}. ${message || selectedTags.join(", ")} (Course interest: ${courseInterest})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25d366] hover:bg-[#1ebe5a] text-white font-inter font-semibold text-sm rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Open WhatsApp Chat
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={closeModal}
                className="px-5 py-2 border border-gray-300 text-gray-600 font-inter text-sm hover:border-gray-400 transition-colors rounded"
              >
                Close
              </button>
              {modalStep < 3 && (
                <button
                  onClick={() => setModalStep((s) => s + 1)}
                  className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-500 font-inter text-sm transition-colors rounded"
                >
                  Continue ›
                </button>
              )}
            </div>
          </div>
        </div>
      , document.body)}
    </main>
  );
}