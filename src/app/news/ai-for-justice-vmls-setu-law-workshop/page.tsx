import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Scale, Lightbulb } from 'lucide-react';

export default function AIForJusticePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#800000] text-white pt-16 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/centre-for-justice-through-technology" className="hover:text-white transition-colors">Centre for Justice through Technology</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Empowering Justice with AI</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Justice with AI: <br />
            <span className="text-[#fbb03b]">VMLS & Setu.Law Interactive Workshop</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">By Centre for Justice through Technology (CJT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">January 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-20 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Main Article Section */}
          <div className="lg:w-[68%]">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 group">
              <Image
                src="/images/justice/ai-center-of-justice.webp"
                alt="AI for Justice Workshop"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The Centre for Justice through Technology (CJT) at VMLS, in collaboration with Setu.Law, successfully conducted an interactive workshop titled <strong>&quot;Crafting Impact through AI at the Grassroots Level: Legal, Tech, and Policy.&quot;</strong> Ms. Avanti Durani Mittal, CEO of Setu Law provided valuable insights to the VMLS students on how artificial intelligence can be leveraged to address legal and policy challenges faced by underprivileged communities.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Key Highlights</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="flex gap-4">
                  <Scale className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Engaging Interactive Exercises</strong>
                    Students actively participated in problem-solving activities that demonstrated how AI-driven solutions could be integrated into legal frameworks to enhance access to justice.
                  </div>
                </li>
                <li className="flex gap-4">
                  <User className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Expert Insights</strong>
                    The workshop featured a keynote address by Avanti Durani Mittal, CEO of Setu.Law, who shared valuable insights on the intersection of AI, law, and social impact.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Lightbulb className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Collaborative Project Development</strong>
                    As an institutional partner with VMLS under a Letter of Engagement, Setu.Law will work with CJT and the Legal Aid Cell on consultative projects aimed at developing AI-assisted legal solutions for marginalized groups.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Lightbulb className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Practical Learning for Students</strong>
                    The event provided an excellent opportunity for students to gain hands-on experience in leveraging AI for legal research, policy analysis, and grassroots-level impact initiatives.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Future Prospects</h3>
              <p>
                The partnership between CJT, VMLS, and Setu.Law will continue to evolve through dedicated projects that integrate AI and legal aid efforts. These initiatives will focus on developing scalable solutions to tackle legal challenges faced by underserved communities, ensuring that technology plays a transformative role in promoting justice and equity.
              </p>
              <p>
                The success of this workshop marks a significant step in advancing the mission of the CJT at VMLS to bridge the gap between law, technology, and social justice.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[32%]">
            <div className="sticky top-24 space-y-12">
              <div className="bg-[#fcfbf9] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today&apos;s top news</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Empowering Justice with AI",
                      date: "January 15, 2025",
                      href: "/news/ai-for-justice-vmls-setu-law-workshop",
                      image: "/images/justice/ai-center-of-justice.webp"
                    },
                    {
                      title: "E-Filing for Young Lawyers",
                      date: "April 30, 2024",
                      href: "/news/e-filing",
                      image: "/images/justice/e-filling.webp"
                    },
                    {
                      title: "Flip Case Legal Design Challenge",
                      date: "October 19, 2024",
                      href: "/news/flip-case-legal-design-challenge",
                      image: "/images/justice/flip-case.webp"
                    }
                  ].map((news, index) => (
                    <Link key={index} href={news.href} className="flex gap-4 group">
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors leading-snug mb-1">
                          {news.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1">
                          <Calendar size={10} />
                          {news.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
