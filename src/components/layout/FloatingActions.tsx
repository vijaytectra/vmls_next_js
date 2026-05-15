"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // 1. Load NPF Widget script for Enquiry Popup
    const script = document.createElement("script");
    script.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).NpfWidgetsInit) {
        new (window as any).NpfWidgetsInit({
          widgetId: "87feca6bc65be091ed018757c6c58029",
          baseurl: "widgets.in8.nopaperforms.com",
          formTitle: "Enquiry Form",
          titleColor: "#FF0033",
          autoPopup: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Left Side Sticky Button: Chat with Student */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[2000]">
        <Link
          href="/chat-with-student"
          className="block text-[10px] md:text-[13px] font-inter font-bold tracking-wider uppercase bg-[#8b0000] text-white py-3 md:py-5 px-1.5 md:px-2 rounded-none shadow-xl hover:bg-[#600000] transition-all duration-300"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Chat with a Student
        </Link>
      </div>

      {/* Right Side Sticky Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[2000] flex flex-col gap-0.5">
        <Link
          href="https://admissions.vmls.edu.in/"
          target="_blank"
          className="block text-[10px] md:text-[13px] font-inter font-bold tracking-wider uppercase bg-[#8b0000] text-white py-3 md:py-5 px-1.5 md:px-2 rounded-none shadow-xl hover:bg-[#600000] transition-all duration-300"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          Apply Now!
        </Link>

        <span
          className="npfWidgetButton npfWidget-87feca6bc65be091ed018757c6c58029 block text-[10px] md:text-[13px] font-inter font-bold tracking-wider uppercase bg-[#700000] text-white py-3 md:py-5 px-1.5 md:px-2 rounded-none shadow-xl cursor-pointer hover:bg-[#500000] transition-all duration-300"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          Enquire Now!
        </span>
      </div>

      {/* Bottom Left: WhatsApp */}
      <a
        href="https://wa.me/917358201234"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 md:bottom-8 md:left-8 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-2xl z-[9999] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 18.2 69.5 27.8 106.2 27.8 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65-157.1zM223.9 445.2c-33.1 0-65.5-8.9-93.6-25.7l-6.7-4-69.6 18.3 18.7-67.9-4.4-7c-18.4-29.4-28.1-63.3-28.1-98.2 0-101.7 82.7-184.4 184.4-184.4 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.1 54 130.4 0 101.7-82.7 184.4-184.4 184.4zm101.7-138.8c-5.6-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.4-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      {/* Bottom Right: Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-11 h-11 md:w-13 md:h-13 bg-[#a31f34] text-white rounded-full flex items-center justify-center shadow-2xl z-[9999] hover:bg-[#800000] hover:-translate-y-1 active:scale-95 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}
