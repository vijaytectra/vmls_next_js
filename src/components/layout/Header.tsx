"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    hasDropdown: true,
    subItems: [
      { name: "About VMRF", href: "/about-vmrf" },
      { name: "About VMLS", href: "/about-vmls" },
      { name: "Founder", href: "/founder" },
      { name: "Chancellor", href: "/chancellor" },
      { name: "Dean", href: "/dean" },
    ]
  },
  {
    name: "Admission",
    hasDropdown: true,
    subItems: [
      { name: "LL.B. Admissions", href: "/admissions/llb" },
      { name: "LL.M. Admissions", href: "/admissions/llm" },
      { name: "Admission Process", href: "/admissions/process" },
    ]
  },
  { name: "VLAT Exam", href: "https://vmls.edu.in/vlat/" },
  { name: "Scholarships", href: "/scholarships" },

  { name: "Collaborations", href: "/collaborations" },
  { name: "International conference", href: "/international-conference" },
  { name: "Internship and Career Services", href: "/internship-and-career-services" },
  {
    name: "Academics",
    hasDropdown: true,
    subItems: [
      { name: "Undergraduate Programme", href: "/admissions/llb" },
      { name: "Postgraduate Programme", href: "/admissions/llm" },
    ]
  },
  {
    name: "Leadership",
    hasDropdown: true,
    subItems: [
      { name: "Board of Advisors", href: "/board-of-advisors" },
      { name: "Mentoring Committee", href: "/mentoring-committee" },
    ]
  },
  {
    name: "Faculty",
    hasDropdown: true,
    subItems: [
      { name: "Faculty Profiles", href: "/faculty-profiles" },
      { name: "Faculty Achievements", href: "/faculty-achievements" },
      { name: "Guest Lecturers", href: "/guest-lecturers" },
    ]
  },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Library", href: "/library" },
  { name: "Student Affairs", href: "/student-affairs" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-[1000] shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 px-0 md:px-0 md:pr-[5%] md:pl-0">
        <div className="w-full flex justify-between items-center h-[4.25rem] md:h-[5.75rem]">
          {/* Left Side: VMRF Logo & Accreditation */}
          <div className="flex items-center shrink-0 pl-2 md:pl-12 lg:pl-16">
            <Link href="/" className="block">
              <Image
                src="/images/headerleft.webp"
                alt="Vinayaka Mission's Research Foundation"
                height={200}
                width={420}
                className="h-[2.25rem] sm:h-[3.75rem] md:h-[3.5rem] lg:h-[3.5rem] w-auto max-w-[min(72vw,320px)] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] object-contain object-left"
                priority
              />
            </Link>
          </div>

          {/* Right Side: VMLS Logo (smaller) + Menu */}
          <div className="flex items-center gap-1 md:gap-3 pr-0 shrink-0">
            <div className="flex-shrink-0 border-r border-gray-100 pr-1.5 md:pr-3">
              <Image
                src="/images/headerright.webp"
                alt="VMLS Vinayaka Mission's Law School"
                height={70}
                width={150}
                className="h-7 sm:h-8 md:h-9 lg:h-11 w-auto max-w-[78px] sm:max-w-[85px] md:max-w-[100px] lg:max-w-[120px] object-contain"
                priority
              />
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="group relative flex items-center gap-2 md:gap-3 bg-[#a31f34] text-white px-3 md:px-6 py-2 md:py-3 rounded-full font-inter font-bold text-[10px] md:text-sm uppercase tracking-[0.15em] transition-all duration-500 hover:bg-[#801829] hover:shadow-[0_15px_30px_rgba(163,31,52,0.3)] hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15)] active:scale-95 border border-[#fbb03b]/20 mr-2 md:mr-6"
            >
              <div className="flex flex-col gap-1 md:gap-1.5 w-5 md:w-6 h-3 md:h-4 justify-center items-center">
                <span className="block h-0.5 w-full bg-white rounded-full group-hover:bg-[#fbb03b] transition-all duration-300"></span>
                <span className="block h-0.5 w-3 md:w-4 bg-white rounded-full group-hover:w-full group-hover:bg-[#fbb03b] transition-all duration-300 ml-auto"></span>
                <span className="block h-0.5 w-full bg-white rounded-full group-hover:bg-[#fbb03b] transition-all duration-300"></span>
              </div>
              <span className="hidden md:inline group-hover:text-[#fbb03b] transition-colors duration-300">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-[5000] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-5 md:p-6 border-b border-gray-100 sticky top-0 bg-white z-20">
            <h2 className="font-playfair text-[#a31f34] text-xl md:text-2xl font-bold">VMLS Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 md:p-2 text-black hover:text-[#a31f34] transition-all duration-300 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-8 pt-6 pb-0">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-gray-50 last:border-0">
                  <div className="group py-3.5 flex justify-between items-center hover:pl-2 transition-all duration-300 cursor-pointer"
                    onClick={() => item.hasDropdown ? toggleDropdown(item.name) : setIsMenuOpen(false)}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-lg font-inter font-semibold text-gray-800 group-hover:text-[#a31f34] transition-colors w-full"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-lg font-inter font-semibold text-gray-800 group-hover:text-[#a31f34] transition-colors">
                        {item.name}
                      </span>
                    )}

                    {item.hasDropdown && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a31f34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </div>

                  {/* Sub-items (Dropdown) */}
                  {item.hasDropdown && item.subItems && (
                    <div className={`overflow-hidden transition-all duration-500 bg-gray-50/50 rounded-lg ${openDropdown === item.name ? "max-h-[500px] mb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                      {item.subItems.map((sub, sIndex) => (
                        <Link
                          key={sIndex}
                          href={sub.href}
                          onClick={(e) => {
                            if (sub.href !== "#") {
                              setIsMenuOpen(false);
                            }
                          }}
                          className="block py-3 px-6 text-base font-inter font-medium text-gray-600 hover:text-[#a31f34] hover:bg-gray-100 transition-all border-l-2 border-transparent hover:border-[#a31f34] w-full"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="py-4 px-8 border-t border-gray-100 bg-gray-50">
            <div className="space-y-2">
              <div className="flex flex-row items-center justify-between gap-2 w-full">
                <a href="tel:+917358201234" className="text-gray-800 font-bold text-[11px] md:text-sm hover:text-[#a31f34] transition-colors shrink-0">+91 73582 01234</a>
                <a href="mailto:admissions@vmls.edu.in" className="text-gray-600 font-bold text-[11px] md:text-sm hover:text-[#a31f34] transition-colors truncate">admissions@vmls.edu.in</a>
              </div>
              <div className="flex gap-4">
                {[
                  { 
                    name: "Facebook", 
                    href: "https://www.facebook.com/vinayakamissionslawschool/",
                    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  },
                  { 
                    name: "Instagram", 
                    href: "https://www.instagram.com/vinayakamissionslawschool/",
                    icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></g>
                  },
                  { 
                    name: "Twitter", 
                    href: "https://x.com/Vmlschennai",
                    icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298L17.61 20.64z" />
                  },
                  { 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/company/vinayakamissionslawschool/",
                    icon: <g><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></g>
                  },
                  { 
                    name: "YouTube", 
                    href: "https://www.youtube.com/@VinayakaMissionsLawSchoolVMLS",
                    icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#a31f34] hover:bg-[#a31f34] hover:text-white hover:border-[#a31f34] transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={social.name === "YouTube" || social.name === "Facebook" || social.name === "Twitter" ? "fill-current stroke-0" : ""}
                    >
                      {social.icon}
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}