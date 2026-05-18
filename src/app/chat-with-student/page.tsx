"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ChatWithStudentPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium font-inter">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Chat with a Student</span>
        </div>
      </nav>

      {/* Iframe Section */}
      <section className="w-full h-[800px] md:h-[900px] relative">
        <iframe
          id="Univiser"
          src="https://vmls.univiser.io/?wordpress=true"
          className="absolute inset-0 w-full h-full border-0"
          title="Chat with a Student Portal"
        ></iframe>
      </section>
    </main>
  );
}
