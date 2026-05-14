"use client";

import { useState } from "react";

const announcements = [
  "Vinayaka Mission's Law School (VMLS) engaged with Natasha Varyani for two insightful academic sessions on Women in Law and International Taxation on 11 and 12 March 2026.",
  "Admissions are now open for the Academic Year 2026-27. Apply today to secure your place in the Law School of the Future!",
  "VMLS announces institutional collaboration with O.P. Jindal Global University for specialized mentorship and research programs.",
  "Upcoming Webinar: 'The Future of AI in Legal Practice' featuring global experts. Register now on our portal."
];

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section className="bg-[#a31f34] text-white py-4 md:py-3 px-[5%] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 overflow-hidden shadow-lg min-h-[80px] md:min-h-[60px]">
      {/* Top Row on Mobile: Title and Arrows */}
      <div className="w-full md:w-auto flex justify-between items-center md:gap-10">
        <h2 className="font-playfair text-xl md:text-2xl font-normal whitespace-nowrap">
          Announcements
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-3 flex-shrink-0">
          <button 
            onClick={prevAnnouncement}
            className="w-8 h-8 rounded-full bg-white text-[#a31f34] flex items-center justify-center cursor-pointer text-xs transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            ❮
          </button>
          <button 
            onClick={nextAnnouncement}
            className="w-8 h-8 rounded-full bg-white text-[#a31f34] flex items-center justify-center cursor-pointer text-xs transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Ticker Text Area */}
      <div className="flex-1 w-full overflow-hidden relative border-t md:border-t-0 md:border-l border-white/20 pt-3 md:pt-0 md:pl-8">
        <p 
          key={currentIndex}
          className="m-0 text-base font-inter font-normal leading-relaxed animate-in fade-in slide-in-from-right-4 duration-500"
        >
          {announcements[currentIndex]}
        </p>
      </div>
    </section>
  );
}
