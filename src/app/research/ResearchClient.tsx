"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Publication } from "@/data/researchPublications";

interface ResearchClientProps {
  publications: Publication[];
}

export default function ResearchClient({ publications }: ResearchClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [openAccessOnly, setOpenAccessOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "title-asc">("year-desc");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Derive unique years and document types
  const years = useMemo(() => {
    const set = new Set(publications.map((p) => p.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [publications]);

  const documentTypes = useMemo(() => {
    const set = new Set(publications.map((p) => p.documentType));
    return Array.from(set).sort();
  }, [publications]);

  // Summary statistics
  const stats = useMemo(() => {
    const total = publications.length;
    const articles = publications.filter((p) => p.documentType === "Article" || p.documentType === "Review" || p.documentType === "Note").length;
    const books = publications.filter((p) => p.documentType === "Book" || p.documentType === "Book chapter").length;
    const conference = publications.filter((p) => p.documentType === "Conference paper").length;
    const openAccess = publications.filter((p) => p.openAccess !== "—").length;
    return { total, articles, books, conference, openAccess };
  }, [publications]);

  // Filtered publications
  const filtered = useMemo(() => {
    return publications
      .filter((pub) => {
        if (selectedYear !== "ALL" && pub.year.toString() !== selectedYear) {
          return false;
        }
        if (selectedType !== "ALL" && pub.documentType !== selectedType) {
          return false;
        }
        if (openAccessOnly && pub.openAccess === "—") {
          return false;
        }
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const matchTitle = pub.title.toLowerCase().includes(q);
          const matchAuthors = pub.authors.toLowerCase().includes(q);
          const matchSource = pub.source.toLowerCase().includes(q);
          const matchDoi = pub.doi.toLowerCase().includes(q);
          const matchYear = pub.year.toString().includes(q);
          if (!matchTitle && !matchAuthors && !matchSource && !matchDoi && !matchYear) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "year-desc") return b.year - a.year || a.id - b.id;
        if (sortBy === "year-asc") return a.year - b.year || a.id - b.id;
        if (sortBy === "title-asc") return a.title.localeCompare(b.title);
        return 0;
      });
  }, [publications, selectedYear, selectedType, openAccessOnly, searchQuery, sortBy]);

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.source}. https://doi.org/${pub.doi}`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(citation);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedYear("ALL");
    setSelectedType("ALL");
    setOpenAccessOnly(false);
    setSortBy("year-desc");
  };

  // Helper for document type badge styling
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "Article":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Book chapter":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Conference paper":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Book":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Review":
        return "bg-teal-50 text-teal-700 border-teal-200";
      case "Note":
        return "bg-slate-50 text-slate-700 border-slate-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-4 sm:py-6 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-xs min-[380px]:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">
            Home
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <Link href="/faculty-profiles" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">
            Faculty
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-[#a31f34] font-semibold shrink-0">Research & Publications</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[460px]">
          <div className="w-full lg:w-[50%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <div className="inline-flex items-center gap-2 text-[#fbb03b] text-xs uppercase tracking-[0.25em] font-bold mb-3">
              <span className="w-8 h-[2px] bg-[#fbb03b]"></span>
              Legal Scholarship & Innovation
            </div>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Research & <span className="text-[#fbb03b]">SCOPUS</span> Publications
            </h1>
            <p className="font-inter text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Celebrating high-impact scholarly contributions, peer-reviewed articles, books, and conference proceedings authored by our distinguished faculty members across domestic and international legal frontiers.
            </p>
          </div>
          <div className="w-full lg:w-[50%] relative min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]">
            <Image
              src="/images/faculty/live/DSC00716_19.webp"
              alt="VMLS Faculty Research & Publications"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>
        </div>
      </section>

      {/* Summary Statistics Cards */}
      <section className="py-10 sm:py-12 px-[5%] bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {/* Total Publications */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Total SCOPUS</span>
                <span className="w-8 h-8 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
              </div>
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-[#800000]">{stats.total}</div>
              <p className="text-xs text-stone-500 mt-1">Indexed Publications</p>
            </div>

            {/* Articles & Reviews */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Articles</span>
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </div>
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900">{stats.articles}</div>
              <p className="text-xs text-stone-500 mt-1">Journal Papers & Reviews</p>
            </div>

            {/* Books & Chapters */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Books & Chapters</span>
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </span>
              </div>
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900">{stats.books}</div>
              <p className="text-xs text-stone-500 mt-1">Edited Books & Chapters</p>
            </div>

            {/* Conference Papers */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Conferences</span>
                <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
              </div>
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900">{stats.conference}</div>
              <p className="text-xs text-stone-500 mt-1">Proceedings & Presentations</p>
            </div>

            {/* Active Years */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 bg-white p-5 rounded-xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Timeline</span>
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900">2023–2026</div>
              <p className="text-xs text-stone-500 mt-1">{stats.openAccess} Open Access Publications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Search, Filters & Publication Cards */}
      <section className="py-12 sm:py-16 px-[5%] bg-white min-h-[600px] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading & Controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-[2px] bg-[#a31f34]"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a31f34]">
                    Scholarly Database
                  </span>
                </div>
                <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Publications Directory
                </h2>
                <p className="font-inter text-sm sm:text-base text-gray-600 mt-1">
                  Browse by year, document classification, or search directly for specific topics and faculty authors.
                </p>
              </div>

              {/* Result Count and Sort Selector */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                  Showing <strong className="text-gray-900">{filtered.length}</strong> of {publications.length} publications
                </span>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort-select" className="text-xs text-gray-500 font-medium whitespace-nowrap">
                    Sort:
                  </label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    aria-label="Sort publications"
                    className="text-xs sm:text-sm bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]"
                  >
                    <option value="year-desc">Year (Newest First)</option>
                    <option value="year-asc">Year (Oldest First)</option>
                    <option value="title-asc">Title (A to Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="mt-6 bg-stone-50 border border-stone-200/90 rounded-2xl p-4 sm:p-6 space-y-5">
              {/* Search Row */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search publications by title, author name, journal, book, or DOI..."
                  className="w-full pl-11 pr-10 py-3 bg-white border border-gray-300 rounded-xl text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
                    title="Clear search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Filter Pills Grid */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
                {/* Year Filter */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-1">Year:</span>
                  <button
                    onClick={() => setSelectedYear("ALL")}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedYear === "ALL"
                        ? "bg-[#800000] text-white shadow-sm"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year.toString())}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        selectedYear === year.toString()
                          ? "bg-[#800000] text-white shadow-sm"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>

                {/* Document Type Filter */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-1">Type:</span>
                  <button
                    onClick={() => setSelectedType("ALL")}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedType === "ALL"
                        ? "bg-[#800000] text-white shadow-sm"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    All Types
                  </button>
                  {documentTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        selectedType === type
                          ? "bg-[#800000] text-white shadow-sm"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Filters & Reset */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-200/70 text-xs sm:text-sm">
                <label className="inline-flex items-center gap-2 cursor-pointer text-gray-700 select-none">
                  <input
                    type="checkbox"
                    checked={openAccessOnly}
                    onChange={(e) => setOpenAccessOnly(e.target.checked)}
                    className="w-4 h-4 text-[#800000] rounded border-gray-300 focus:ring-[#800000]"
                  />
                  <span>Show Open Access Publications Only</span>
                </label>

                {(searchQuery || selectedYear !== "ALL" || selectedType !== "ALL" || openAccessOnly) && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#800000] hover:text-[#a31f34] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Publications Cards Grid */}
          {filtered.length > 0 ? (
            <div className="space-y-5">
              {filtered.map((pub, idx) => (
                <article
                  key={pub.id}
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#800000]/30 hover:shadow-md transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                          #{pub.id}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${getTypeBadgeStyle(
                            pub.documentType
                          )}`}
                        >
                          {pub.documentType}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-800 border border-gray-200">
                          {pub.year}
                        </span>
                        {pub.openAccess !== "—" && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
                            <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z" clipRule="evenodd" />
                            </svg>
                            Open Access
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-gray-400">
                        SCOPUS ID: #{pub.originalNo}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-lg sm:text-xl md:text-[22px] font-bold text-gray-900 leading-snug mb-3">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 mb-2.5">
                      <svg className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="leading-relaxed">
                        <strong className="text-gray-900 font-semibold">Authors: </strong>
                        {pub.authors}
                      </span>
                    </div>

                    {/* Source / Publication */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 mb-3">
                      <svg className="w-4 h-4 text-[#fbb03b] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="italic leading-relaxed">
                        <strong className="font-semibold not-italic text-gray-800">Source: </strong>
                        {pub.source}
                      </span>
                    </div>

                    {/* DOI reference */}
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4 bg-gray-50 px-3 py-1.5 rounded-lg w-fit max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="font-bold text-gray-700">DOI:</span>
                      <span className="truncate">{pub.doi}</span>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Access Article via DOI */}
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#800000] hover:bg-[#a31f34] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
                      >
                        <span>Read Article</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      {/* Copy Citation */}
                      <button
                        onClick={() => handleCopyCitation(pub)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium transition-colors"
                        title="Copy full academic citation"
                      >
                        {copiedId === pub.id ? (
                          <>
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-emerald-700 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy Citation</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Publisher note or direct DOI link */}
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-[#800000] transition-colors truncate max-w-xs font-mono"
                    >
                      doi:{pub.doi}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">No Publications Found</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                We couldn't find any publications matching your current search and filter criteria. Try adjusting your query or resetting filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#800000] hover:bg-[#a31f34] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Institutional Research Engagement Banner */}
      <section className="py-16 px-[5%] bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#fbb03b] text-xs font-bold uppercase tracking-[0.25em] mb-2 block">
              Advancing Legal Jurisprudence
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Collaborative Research & Doctoral Scholarship
            </h2>
            <p className="font-inter text-stone-300 text-sm sm:text-base leading-relaxed">
              Vinayaka Mission's Law School fosters high-impact interdisciplinary research connecting legal frameworks with emerging technologies, environmental justice, human rights, and corporate governance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/faculty-profiles"
              className="w-full sm:w-auto px-6 py-3 bg-[#a31f34] hover:bg-[#800000] text-white font-semibold text-sm rounded-lg transition-colors text-center shadow-md"
            >
              Meet Our Faculty
            </Link>
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/30 transition-colors text-center"
            >
              Research Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
