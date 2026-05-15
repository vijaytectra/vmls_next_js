'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LibraryPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isTurnitinModalOpen, setIsTurnitinModalOpen] = useState(false);
  const [isDigitalAccessModalOpen, setIsDigitalAccessModalOpen] = useState(false);
  const [isDiscussionRoomsModalOpen, setIsDiscussionRoomsModalOpen] = useState(false);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
  const [isCourseGuideModalOpen, setIsCourseGuideModalOpen] = useState(false);
  const [isNewArrivalsModalOpen, setIsNewArrivalsModalOpen] = useState(false);
  const [isRemoteAccessModalOpen, setIsRemoteAccessModalOpen] = useState(false);
  const [isILLModalOpen, setIsILLModalOpen] = useState(false);
  const [isBookDisplayModalOpen, setIsBookDisplayModalOpen] = useState(false);
  const [isThematicDisplayModalOpen, setIsThematicDisplayModalOpen] = useState(false);
  const [isCareerCornerModalOpen, setIsCareerCornerModalOpen] = useState(false);
  const [isExcellenceCollectionModalOpen, setIsExcellenceCollectionModalOpen] = useState(false);
  const [isTextbookProcurementModalOpen, setIsTextbookProcurementModalOpen] = useState(false);
  const [isNewspaperServiceModalOpen, setIsNewspaperServiceModalOpen] = useState(false);
  const [isReprographyServiceModalOpen, setIsReprographyServiceModalOpen] = useState(false);
  const galleryImages = [
    '/images/library/library1.webp',
    '/images/library/library2.webp',
    '/images/library/library3.webp',
    '/images/library/library4.webp',
    '/images/library/library5.webp',
    '/images/library/library6.webp',
    '/images/library/library7.webp',
    '/images/library/library8.webp',
    '/images/library/library9.webp',
    '/images/library/library10.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % galleryImages.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-[15px] md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Library</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              VMLS <span className="text-[#fbb03b]">Library</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              A world-class resource for legal research and learning. Our library houses an extensive collection of law reports, journals, textbooks, and electronic databases, providing students and faculty with the tools they need for academic excellence.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/library-header-img.webp"
              alt="VMLS Library"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Main Content: Library Resources Grid */}
      <section className="py-12 md:py-20 px-[5%] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Column 1: Digital & Assistance */}
            <div className="space-y-8">
              {/* Digital Library Section Redesign */}
              <div className="bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 group">
                <div className="bg-[#800000] p-6 text-white relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2.5 bg-white/10 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold">Digital Library</h3>
                      <p className="text-[10px] uppercase tracking-widest opacity-70">Premium Resources</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <Link href="https://vmrf.refread.com/#/home" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 bg-gray-50 border border-gray-100 rounded-none mb-4 group/btn transition-all duration-300 hover:bg-[#a31f34] hover:text-white">
                    <span className="font-inter font-bold text-xs uppercase tracking-widest">Access Main Portal</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>

                  <div className="space-y-1">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-gray-200"></span> E-Databases
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['SCC Online', 'Hein Online', 'Manupatra', 'LexisNexis', 'Scopus', 'Web of Science', 'JSTOR', 'DELNET', 'Scival', 'E-Books'].map((db) => (
                        <Link key={db} href="https://vmrf.refread.com/#/home" target="_blank" rel="noopener noreferrer" className="py-3 px-3 bg-white border border-gray-100 text-gray-700 text-[10px] font-bold text-center hover:border-[#a31f34] hover:text-[#a31f34] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 relative overflow-hidden group/db">
                          <span className="relative z-10">{db}</span>
                          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a31f34] transition-all duration-300 group-hover/db:w-full"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Assistance */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#1a1a1a]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Research Assistance</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Article / Book chapter Request', href: 'https://docs.google.com/forms/d/e/1FAIpQLScI-4vHSov1BW4yJjaq6HdgwR-d_U0loQKoYlS_HT6UhTZT6g/viewform?usp=header' },
                    { label: 'Database Orientation Request', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeQYZMK-c4oJnr6mzUHsN3G8s7HMSbs1LW-lL14mqIxrXKHrw/viewform?usp=header' },
                    { label: 'New Database or eResource Request', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeyXuahI6_CtIQ2bwqXzcqmdUL2qj86qiAIr37QMRFEYxDSlg/viewform?usp=header' },
                    { label: 'Turnitin', href: '#', isModal: true }
                  ].map((item) => (
                    item.isModal ? (
                      <button
                        key={item.label}
                        onClick={(e) => { e.preventDefault(); setIsTurnitinModalOpen(true); }}
                        className="flex items-center justify-between w-full p-4 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#4a5568] hover:pl-6 transition-all duration-300 group shadow-sm hover:shadow-md text-left"
                      >
                        {item.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    ) : (
                      <Link key={item.label} href={item.href} target={item.href !== '#' ? "_blank" : undefined} rel={item.href !== '#' ? "noopener noreferrer" : undefined} className="flex items-center justify-between w-full p-4 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#4a5568] hover:pl-6 transition-all duration-300 group shadow-sm hover:shadow-md">
                        {item.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#a31f34]">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Facilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setIsDigitalAccessModalOpen(true)} className="p-3 bg-[#4a5568] text-white text-[11px] font-bold text-center rounded hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-md transition-all duration-300">Digital Access</button>
                  <button onClick={() => setIsDiscussionRoomsModalOpen(true)} className="p-3 bg-[#4a5568] text-white text-[11px] font-bold text-center rounded hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-md transition-all duration-300">Discussion Rooms</button>
                </div>
              </div>

              {/* Membership & Feedback */}
              <div className="space-y-4">
                <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                  <h3 className="font-inter text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#a31f34] rounded-full"></span> Membership
                  </h3>
                  <Link href="/library-membership" className="block w-full py-3 bg-[#800000] text-white text-center text-xs font-bold uppercase tracking-widest hover:bg-[#a31f34] transition-all">Click Here</Link>
                </div>
                <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                  <h3 className="font-inter text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#4a5568] rounded-full"></span> User Feedback
                  </h3>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeX88_HF7_aLVwV0P2RhGSG8Zq7kS8MLnoCiiCxFsZTybOv6w/viewform" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#4a5568] text-white text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">User Feedback Form</Link>
                </div>
              </div>
            </div>

            {/* Column 2: Welcome & Hours */}
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="bg-white p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a31f34]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#a31f34]/10 transition-colors duration-500"></div>
                <h2 className="font-playfair text-3xl text-[#a31f34] font-bold mb-4">Welcome to VMLS Library</h2>
                <div className="font-inter text-[15px] text-gray-700 leading-relaxed space-y-4 text-justify">
                  <p>
                    The VMLS Law Library stands as a vital academic hub, supporting the teaching, learning, and research needs of students, faculty, and legal scholars. As a well-resourced and modern facility, the library offers an extensive collection of legal texts, journals, case reports, e-resources, and databases, catering to diverse areas of law.
                  </p>
                  <p>
                    It fosters an intellectually stimulating environment that encourages critical thinking and promotes academic excellence. Through regular orientation programs, legal research support, and resource-based learning initiatives, the VMLS Law Library plays a pivotal role in shaping competent legal professionals equipped for academic and professional success.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#a31f34]/10 rounded-lg text-[#a31f34]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900">Library Hours</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#a31f34] mb-3">Working Days (Monday - Friday)</h4>
                      <div className="grid grid-cols-2 gap-4 text-[15px]">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Library</p>
                          <p className="text-gray-900 font-bold">8:30 AM - 7:00 PM</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Circulation</p>
                          <p className="text-gray-900 font-bold">9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Weekends & Holidays</h4>
                      <div className="bg-gray-50 p-3 rounded flex justify-between items-center text-[15px]">
                        <div>
                          <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Saturday & Holidays</p>
                          <p className="text-gray-900 font-bold">10:00 AM - 5:00 PM</p>
                        </div>
                        <p className="text-[10px] text-red-500 font-bold italic px-2 py-1 bg-red-50 rounded">Closed on Sundays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Library Gallery */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                <h3 className="font-playfair text-2xl font-bold text-center text-[#a31f34] mb-4">Library Gallery</h3>
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded group/gallery">
                  {galleryImages.map((src, idx) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`Library Facility ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                    </div>
                  ))}
                  {/* Gallery Arrows */}
                  <div className="absolute inset-y-0 left-2 flex items-center z-20 md:opacity-0 md:group-hover/gallery:opacity-100 transition-opacity">
                    <button
                      onClick={prevImg}
                      className="w-10 h-10 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center text-[#a31f34] shadow-md hover:bg-[#a31f34] hover:text-white transition-all"
                    >
                      ←
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-2 flex items-center z-20 md:opacity-0 md:group-hover/gallery:opacity-100 transition-opacity">
                    <button
                      onClick={nextImg}
                      className="w-10 h-10 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center text-[#a31f34] shadow-md hover:bg-[#a31f34] hover:text-white transition-all"
                    >
                      →
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImg ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Physical & Services */}
            <div className="space-y-8">
              {/* Physical Collection */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#a31f34]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#a31f34]/10 rounded-lg text-[#a31f34]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Physical Collection</h3>
                </div>
                <Link href="https://opac.vmls.edu.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#4a5568] text-white rounded font-bold text-[15px] uppercase tracking-wider hover:bg-gray-800 transition-colors mb-4">
                  Physical Collection
                </Link>

                <h4 className="text-xs font-bold uppercase tracking-widest text-[#a31f34] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#a31f34]"></span> My Print Collections (Koha)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Account Login',
                    'Purchase Suggestion',
                    'Renew Books',
                    'Most Circulated',
                    'Book Hold',
                    'New Arrivals'
                  ].map((label) => (
                    <Link key={label} href="https://opac.vmls.edu.in/" target="_blank" rel="noopener noreferrer" className="py-3 px-3 bg-[#800000] text-white text-[11px] md:text-[10px] font-bold text-center rounded shadow-sm hover:bg-[#a31f34] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[50px]">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#1a1a1a]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Services</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {/* Services Grid */}
                  {[
                    'Reference Service', 'OPAC', 'Course Guide', 'New Arrivals',
                    'Remote Access', 'Inter-Library Loan', 'Book Display', 'Thematic Display',
                    'Career Corner', 'Excellence Collection', 'Textbook Procurement', 'Newspaper Service', 'Reprography Service'
                  ].map((service) => {
                    const buttonStyles = "p-2 bg-[#1a1a1a] text-white text-[9px] font-bold uppercase text-center rounded hover:bg-[#4a5568] hover:scale-[1.03] transition-all duration-300 flex items-center justify-center min-h-[45px] shadow-sm hover:shadow-md leading-tight";
                    
                    if (service === 'Reference Service') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsReferenceModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Course Guide') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsCourseGuideModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'New Arrivals') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsNewArrivalsModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Remote Access') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsRemoteAccessModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Inter-Library Loan') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsILLModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Book Display') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsBookDisplayModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Thematic Display') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsThematicDisplayModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Career Corner') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsCareerCornerModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Excellence Collection') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsExcellenceCollectionModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Textbook Procurement') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsTextbookProcurementModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Newspaper Service') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsNewspaperServiceModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    if (service === 'Reprography Service') {
                      return (
                        <button
                          key={service}
                          onClick={() => setIsReprographyServiceModalOpen(true)}
                          className={buttonStyles}
                        >
                          {service}
                        </button>
                      );
                    }
                    return (
                      <Link key={service} href={service === 'OPAC' ? "https://opac.vmls.edu.in/" : "#"} target={service === 'OPAC' ? "_blank" : undefined} rel={service === 'OPAC' ? "noopener noreferrer" : undefined} className={buttonStyles}>
                        {service}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Useful Links */}
              <div className="bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#a31f34]/10 rounded-lg text-[#a31f34]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900">Useful Links</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'India Code', url: 'https://www.indiacode.nic.in/' },
                    { name: 'Indian Kanoon', url: 'https://indiankanoon.org/' },
                    { name: 'Law Commission', url: 'https://lawcommissionofindia.nic.in/' },
                    { name: 'SEBI Acts', url: 'https://lawcommissionofindia.nic.in/' },
                    { name: 'Swayam Central', url: 'https://swayam.gov.in/' },
                    { name: 'NDLI', url: 'https://ndl.iitkgp.ac.in/' },
                    { name: 'NJDG', url: 'https://njdg.ecourts.gov.in/njdg_v3/' },
                    { name: 'UN Treaties', url: 'https://treaties.un.org/' },
                    { name: 'DOAJ', url: 'https://doaj.org/' },
                    { name: 'DOAB', url: 'https://www.doabooks.org/' },
                    { name: 'Tamil Rare Books', url: 'https://tamildigitallibrary.in/' }
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target={link.url !== '#' ? "_blank" : undefined}
                      rel={link.url !== '#' ? "noopener noreferrer" : undefined}
                      className="p-2.5 bg-[#4a5568] text-white text-[11px] md:text-[9px] font-bold text-center rounded shadow-sm hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[45px]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
      <section className="pb-12 md:pb-20 px-[5%] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#800000] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(128,0,0,0.3)] text-white relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold">Rules & Regulations</h2>
                </div>
                <p className="font-inter text-white/80 max-w-xl text-lg">
                  Ensure a productive and respectful research environment by following our established library guidelines and borrowing policies.
                </p>
              </div>

              <Link href="/library-rules" className="group/btn relative px-10 py-5 bg-white text-[#800000] font-bold text-[15px] uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] flex items-center gap-3 shrink-0">
                <span className="relative z-10">View Detailed Rules</span>
                <span className="relative z-10 text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gray-50 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Turnitin Modal */}
      {isTurnitinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsTurnitinModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Turnitin</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed text-justify">
                Our institution provides access to Turnitin, a plagiarism detection tool, to help faculties evaluate student submissions and ensure academic integrity. This tool checks for originality and provides feedback to students on proper citation and referencing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Digital Access Modal */}
      {isDigitalAccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsDigitalAccessModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Digital Access Facility</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Our library is equipped with multiple computers and Wi-Fi connectivity that students can utilize for accessing the digital library, working on assignments, research, and other academic needs.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "High-speed Wi-Fi connectivity",
                    "Multiple computer workstations",
                    "Access to digital library resources",
                    "Research and assignment support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34] shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Discussion Rooms Modal */}
      {isDiscussionRoomsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsDiscussionRoomsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Discussion Rooms</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Our library offers discussion rooms that provide a collaborative and quiet space for users to engage in group discussions, brainstorming sessions, and project work. These rooms are equipped with necessary facilities to support team-based learning and academic activities.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Collaborative learning spaces",
                    "Quiet environment for focused discussions",
                    "Equipment for presentations",
                    "Comfortable seating arrangements"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34] shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="https://docs.google.com/spreadsheets/d/1EuxsUaFJUUx8BzW0eNx_pWKADJ1G6Isx_KRVntCY4Sw/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#800000] text-white text-[15px] font-bold rounded hover:bg-[#a31f34] transition-colors shadow-sm hover:shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Discussion Room
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Reference Service Modal */}
      {isReferenceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsReferenceModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Reference Service</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Our Reference Service is designed to support students, faculty, and other users with their queries. Email your questions related to case law, journal articles, reports, or specific topics in law to <a href="mailto:referencelibrary@vmls.edu.in" className="font-bold text-gray-900 hover:text-[#a31f34] transition-colors">referencelibrary@vmls.edu.in</a>.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">What We Provide:</h3>
                <ul className="space-y-3">
                  {[
                    "Relevant articles and research materials",
                    "Open-access materials and resources",
                    "Credible sources for focused research",
                    "Enhanced access to quality information",
                    "Support beyond classroom resources"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#a31f34] text-white p-6 rounded-xl flex items-center shadow-inner">
                <p className="text-[15px]">
                  <span className="font-bold mr-1">Response Time:</span>
                  Our library team will respond within 25 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Guide Modal */}
      {isCourseGuideModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsCourseGuideModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Course Guide</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                The Course Guide is a comprehensive academic resource prepared for each semester, providing students with access to all essential and supplementary reading materials related to a specific subject.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Prescribed textbooks for each subject",
                    "Recommended reference books",
                    "Other relevant materials available in the library",
                    "Open access scholarly articles",
                    "Curated e-books and digital resources",
                    "News articles and reports",
                    "Government publications and videos"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Arrivals Modal */}
      {isNewArrivalsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsNewArrivalsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">New Arrivals</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                The Vinayaka Mission's Law Library every Month announces the new arrival of books and print periodicals.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Service Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Monthly announcements of new additions",
                    "Email notifications to VMLS community",
                    "Physical display near circulation counter",
                    "Books and periodicals information"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Remote Access Modal */}
      {isRemoteAccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsRemoteAccessModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Remote Access</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                VMLS community can access the digital library resources remotely using the provided link.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Available Resources:</h3>
                <ul className="space-y-3">
                  {[
                    "Legal databases (SCC Online, Manupatra, LexisNexis, Hein Online)",
                    "Academic databases (Scopus, Web of Science, JSTOR Journals, JSTOR eBooks, DELNET, Scival)",
                    "E-books and e-journals"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ILL Modal */}
      {isILLModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsILLModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Inter-Library Loan (ILL)</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Books not available in the VMLS library but available in other constituent libraries under VMRF can be availed through Interlibrary Loan (ILL).
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Service Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Access to books from other VMRF libraries",
                    "Extended resource availability",
                    "Inter-institutional resource sharing",
                    "Research support across multiple libraries"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Display Modal */}
      {isBookDisplayModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsBookDisplayModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Book Display</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                The VMLS Library organizes book displays on important legal and socially significant days throughout the year to raise awareness and promote reading on themes related to justice, rights, and governance.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Display Themes:</h3>
                <ul className="space-y-3">
                  {[
                    "Justice and legal awareness",
                    "Rights and governance",
                    "Social significance topics",
                    "Important legal days and events"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thematic Display Modal */}
      {isThematicDisplayModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsThematicDisplayModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Thematic Book Display</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                VMLS Library regularly organizes thematic book displays on special subjects of academic and professional relevance. These curated displays aim to enhance subject-specific awareness and support focused research among students and faculty.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Subjects Include:</h3>
                <ul className="space-y-3">
                  {[
                    "Sports Law",
                    "Health Law",
                    "Environmental Law",
                    "Cyber Law",
                    "Maritime Law",
                    "Other specialized legal areas"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career Corner Modal */}
      {isCareerCornerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsCareerCornerModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Career Catalyst Corner</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Career Catalyst Corner is a dedicated space in the VMLS Library that features a curated collection of law career-related books, competitive exam guides, internship and placement resources, and professional development materials.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Resources For:</h3>
                <ul className="space-y-3">
                  {[
                    "Judicial services preparation",
                    "UPSC exam guidance",
                    "CLAT PG preparation",
                    "UGC NET resources",
                    "Corporate legal careers",
                    "Higher studies in law"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 font-inter text-[15px] leading-relaxed">
                With updated resources and career-focused content, the Career Catalyst Corner aims to empower students in navigating their professional journeys with confidence.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Excellence Collection Modal */}
      {isExcellenceCollectionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsExcellenceCollectionModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Centre of Excellence Collection</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Currently, the library holds a growing collection of books under the 5 Centres of Excellence.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Centres Include:</h3>
                <ul className="space-y-3">
                  {[
                    "GTLC (Global Tamil Law Centre)",
                    "CJT (Centre for Justice through Technology)",
                    "Centre of Maritime Law",
                    "Centre for the Promotion of International Law",
                    "Centre for Access to Justice"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Textbook Procurement Modal */}
      {isTextbookProcurementModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsTextbookProcurementModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Textbook Procurement for Students</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                At the start of each semester, we will assist students in purchasing required textbooks and bare acts at discounted prices.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  {[
                    "Discounted prices on textbooks",
                    "Required bare acts availability",
                    "Semester-wise procurement assistance",
                    "Cost-effective book purchasing"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newspaper Service Modal */}
      {isNewspaperServiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsNewspaperServiceModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Newspaper Service</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6">
                Our library offers a selection of daily newspapers for students to stay updated on current events and trends.
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Available Newspapers:</h3>
                <ul className="space-y-3">
                  {[
                    "The Hindu",
                    "Indian Express",
                    "Business Line",
                    "Hindu Tamil",
                    "Dinamani",
                    "Dinathanthi (Dhina Thandhi)"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 font-inter text-[15px] leading-relaxed">
                Catering to diverse interests and languages to keep you informed about current affairs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Reprography Service Modal */}
      {isReprographyServiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsReprographyServiceModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-[#a31f34] text-2xl font-bold font-playfair mb-4">Reprography Service</h2>
              <p className="text-gray-600 font-inter text-[15px] leading-relaxed">
                Reprography services are available solely for documents and cases downloaded from databases within the VMRF Digital Library and minimum pages of physical books(10%).
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}


