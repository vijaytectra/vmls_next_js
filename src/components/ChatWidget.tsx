"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Show after 2 seconds delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] opacity-100 transition-opacity duration-500">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[280px] md:w-[320px] overflow-hidden relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
              <Image 
                src="/images/studentaff/1.webp" 
                alt="Gundeboina vasavi" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-inter font-bold text-[#0f172a] text-sm leading-tight">
                Gundeboina vasavi
              </h3>
              <p className="font-inter text-[#008fa0] text-[11px] font-semibold mt-0.5">
                Ug Law Programmes
              </p>
            </div>
          </div>

          {/* Body Text */}
          <p className="font-inter text-[#334155] text-[13px] font-medium leading-relaxed mb-5">
            Want to know more about campus life?
          </p>

          {/* Action Button */}
          <Link 
            href="/chat-with-student"
            className="block w-full py-2.5 bg-[#0a1a1f] hover:bg-[#132d34] text-white text-center font-inter font-bold text-xs rounded-full shadow-lg transition-all active:scale-95"
          >
            Chat with a Student Ambassador
          </Link>
        </div>
      </div>
    </div>
  );
}
