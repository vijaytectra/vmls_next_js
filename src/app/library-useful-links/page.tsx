import Link from "next/link";

export const metadata = {
  title: "Useful Links | VMLS Library",
  description:
    "Legal research and reference resources including Supreme Court Judgements, India Code, and more.",
};

const usefulLinks = [
  {
    name: "Supreme Court Judgements",
    url: "https://scr.sci.gov.in/scrsearch/?app_token=",
  },
  { name: "India Code", url: "https://www.indiacode.nic.in/" },
  { name: "Indian Kanoon", url: "https://indiankanoon.org/" },
  {
    name: "Law Commission",
    url: "https://lawcommissionofindia.nic.in/reports.html",
  },
  { name: "SEBI Acts", url: "https://www.sebi.gov.in/" },
  { name: "Swayam Central", url: "https://swayam.gov.in/" },
  { name: "NDLI", url: "https://ndl.iitkgp.ac.in/" },
  { name: "NJDG", url: "https://njdg.ecourts.gov.in/" },
  { name: "UN Treaties", url: "https://treaties.un.org/" },
  { name: "DOAJ", url: "https://doaj.org/" },
  { name: "DOAB", url: "https://www.doabooks.org/" },
  { name: "Tamil Rare Books", url: "https://tamildigitallibrary.in/" },
];

export default function LibraryUsefulLinksPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium flex-wrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/library" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Library
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Useful Links</span>
        </div>
      </nav>

      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[320px]">
          <div className="lg:w-full p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <div className="max-w-4xl">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Useful <span className="text-[#fbb03b]">Links</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl">
                Select a resource below to open it in a new browser tab. These links support legal research, statutory reference, and academic study.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-[5%] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/library"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#800000] hover:text-[#a31f34] transition-colors"
            >
              ← Back to Library
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {usefulLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#800000]/30 transition-all duration-300 flex items-center justify-between gap-4"
              >
                <span className="font-playfair text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                  {link.name}
                </span>
                <span className="text-[#800000] text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
