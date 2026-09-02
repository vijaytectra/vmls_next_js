import Image from "next/image";
import Link from "next/link";
import PageSchema from "@/components/seo/PageSchema";
import { newsEntries, pageMetadata } from "@/lib/seo-pages";

export const metadata = pageMetadata("/news");

// Listing for every news item in the SEO registry. This is also the target
// for the 44 news URLs on the previous site that were not carried over, so
// those redirects land on something relevant rather than the homepage.
export default function NewsIndexPage() {
  const items = newsEntries();
  const [lead, ...rest] = items;

  return (
    <main className="min-h-screen bg-white">
      <PageSchema path="/news" />

      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">News &amp; Events</span>
        </div>
      </nav>

      <section className="px-[5%] pt-12 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-sm text-[#a31f34] font-bold uppercase tracking-wider mb-4">
            News &amp; Events
          </p>
          <h1 className="font-playfair text-3xl md:text-5xl text-gray-900 leading-tight mb-5">
            Conferences, lectures and campus life at VMLS
          </h1>
          <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-3xl text-left">
            Reports from the centres of excellence, guest lectures by judges and
            practitioners, moot court competitions, and the student festivals
            that shape life on the Chennai campus.
          </p>
        </div>
      </section>

      {/* Lead item */}
      {lead && (
        <section className="px-[5%] pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <Link href={lead.path} className="group block">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="lg:w-[55%] w-full aspect-video relative overflow-hidden bg-gray-100 shadow-md">
                  {lead.image && (
                    <Image
                      src={lead.image}
                      alt={lead.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="lg:w-[45%] space-y-4">
                  {lead.publishedTime && (
                    <p className="font-inter text-sm text-[#a31f34] font-bold uppercase tracking-wider">
                      {formatDate(lead.publishedTime)}
                    </p>
                  )}
                  <h2 className="font-playfair text-2xl md:text-4xl text-gray-900 leading-tight group-hover:text-[#a31f34] transition-colors">
                    {lead.title}
                  </h2>
                  <p className="font-inter text-base md:text-lg text-gray-600 leading-relaxed text-left">
                    {lead.description}
                  </p>
                  <span className="inline-block mt-2 px-6 py-2.5 border-2 border-[#a31f34] text-[#a31f34] font-inter text-xs font-bold uppercase tracking-widest transition-all group-hover:bg-[#a31f34]/5">
                    Read the report
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* The rest */}
      <section className="px-[5%] pb-20 md:pb-28 border-t border-gray-100 pt-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {rest.map((item) => (
            <Link key={item.path} href={item.path} className="group flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-gray-100 shadow-md mb-5">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              {item.publishedTime && (
                <p className="font-inter text-xs text-[#a31f34] font-bold uppercase tracking-wider mb-2">
                  {formatDate(item.publishedTime)}
                </p>
              )}
              <h3 className="font-playfair text-xl md:text-2xl text-gray-900 leading-tight mb-3 group-hover:text-[#a31f34] transition-colors">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-gray-600 leading-relaxed line-clamp-3 text-left">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
