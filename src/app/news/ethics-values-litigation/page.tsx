import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/news/ethics-values-litigation");

export default function EthicsLitigationPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <PageSchema path="/news/ethics-values-litigation" />
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Ethics, Values and Litigation</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ethics, Values <br /><span className="text-[#fbb03b]">& Litigation</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-left">
              Lessons for Budding Lawyers. A comprehensive session on the foundational principles, professional responsibility, and integrity in the legal profession.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src="/images/news/Lecture-ethics.webp"
              alt="Guest Lecture on Ethics, Values and Litigation"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Section (70%) */}
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight">
              Guest Lecture on "Ethics, Values and Litigation – Lessons for Budding Lawyers"
            </h2>
            
            <div className="font-inter text-gray-700 leading-relaxed text-left text-base md:text-lg space-y-8 mb-12">
              <p>
                The guest lecture on <strong>"Ethics, Values and Litigation – Lessons for Budding Lawyers"</strong> was conducted at Vinayaka Mission's Law School (VMLS) on <strong>29th April 2026</strong>. The session aimed to bridge the gap between theoretical legal education and the practical ethical challenges faced in the courtroom.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-[#a31f34] italic">
                "The session was delivered by <strong>Adv. Shabnam Banu</strong>, a practising Advocate at the Madras High Court, who brought with her a wealth of courtroom experience and professional insight for the benefit of aspiring lawyers."
              </div>

              <p>
                Adv. Shabnam Banu addressed the foundational principles that govern legal practice, emphasising that ethics and values are not merely theoretical concepts but are central to every aspect of litigation. She spoke on the duties of an advocate towards the court, the client, and the profession, drawing from real-world scenarios to illustrate the ethical dilemmas practitioners regularly encounter.
              </p>

              <p>
                The session provided students with practical guidance on navigating the complexities of courtroom conduct, professional responsibility, and the importance of integrity in building a sustainable legal career. Adv. Banu's candid reflections on her journey at the Madras High Court offered a compelling and motivating perspective for students preparing to enter the profession.
              </p>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-[3/4] shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/news/ethics-values-litigation-01.webp"
                  alt="Adv. Shabnam Banu speaking"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="relative flex-1 min-h-[200px] shadow-md overflow-hidden group rounded-lg">
                  <Image
                    src="/images/news/ethics-values-litigation-02.webp"
                    alt="Token of appreciation"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative flex-1 min-h-[200px] shadow-md overflow-hidden group rounded-lg">
                  <Image
                    src="/images/news/Lecture-ethics-inner.webp"
                    alt="Interaction with students"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:w-[30%]">
            <div className="sticky top-24">
                            <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                Latest Blogs
              </h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {blogPosts.slice(0, 5).map((news, index) => (
                  <Link
                    key={index}
                    href={`/blogs/${news.slug}`}
                    className="flex gap-4 p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 group transition-all last:border-b-0"
                  >
                    <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded bg-gray-200">
                      <Image
                        src={news.image || "/images/career-about-img.webp"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="64px"
                      />
                    </div>
                    <span className="text-sm font-inter text-gray-800 group-hover:text-[#a31f34] leading-relaxed line-clamp-3">
                      {news.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image
          src="/images/vmls/vmls-arch.png"
          alt=""
          width={400}
          height={400}
          className="grayscale"
        />
      </div>
    </main>
  );
}
