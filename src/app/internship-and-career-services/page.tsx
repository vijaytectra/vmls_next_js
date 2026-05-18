"use client";
import Image from "next/image";
import Link from "next/link";

export default function InternshipAndCareerServices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Internship and Career Services</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Internship and <span className="text-[#fbb03b]">Career Services</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                Strategizing and training VMLS students for impactful internships and fulfilling career trajectories post-graduation.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/career/hero.png"
                alt="Career Services at VMLS"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </section>

        {/* Dean's Message Section */}
        <section className="pt-10 pb-6 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            {/* Image and Title Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/images/career/dean_raja_01.JPEG"
                  alt="Mr. Siddharth Raja"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Mr. Siddharth Raja</h3>
              <p className="font-inter text-[#800000] font-semibold">
                Executive Dean,<br />
                Career Services and Placements (Incharge)
              </p>
            </div>

            {/* Message Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-4 leading-tight">
                Message from the Desk of Executive Dean, Office of Career Services and Placements
              </h2>
              
              <div className="space-y-1 font-inter text-gray-700 leading-relaxed text-justify">
                <p className="font-bold text-gray-900 text-base md:text-lg mb-2">Welcome to the Office of Career Services and Placements!</p>
                
                <p>
                  I am excited to connect with you as we embark on this journey together. Our office is dedicated to empowering students and alumni to achieve their career aspirations through personalized support and resources.
                </p>
                
                <p>
                  We understand that navigating the job market can be challenging, which is why we at Vinayaka Mission's Law School are here to provide guidance tailored to your unique goals. From resume reviews and interview preparation to networking events and job search strategies, we are committed to equipping you with the tools you need for success.
                </p>
                
                <p>
                  We are here to support you every step of the way—from your first day on campus to your transition into the workforce. Together, we can navigate the complexities of the job market and position you for success.
                </p>
                
                <p>
                  Thank you for choosing our institution as your partner in this exciting journey. I look forward to working with each of you as you pursue your career goals.
                </p>

                <div className="pt-4 border-t border-gray-100 italic">
                  <p className="font-bold not-italic">Warm regards,</p>
                  <p className="font-bold not-italic">Siddharth Raja</p>
                  <p className="opacity-80">Executive Dean, Career Services and Placements (Incharge)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="py-10 px-[5%] bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000]">
                About Us
              </h2>
              <div className="w-16 h-1 bg-[#fbb03b] mx-auto mt-3"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Side */}
              <div className="lg:w-1/2">
                <div className="relative pl-6 md:pl-8">
                  {/* Vertical Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34]"></div>
                  
                  <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-justify">
                    <p>
                      The Office of Career Services and Placements is committed to empowering students and alumni as they navigate their career paths. We understand that the transition from education to the workforce can be both exciting and daunting. We are here to provide comprehensive support that equips you with the skills, knowledge, and confidence needed to succeed in today’s competitive job market.
                    </p>
                    <p>
                      We at VMLS are dedicated to guide you through every step of your career journey. Whether you are just starting your professional exploration or looking to advance in your current field, we offer a range of services designed to meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/career-about-img.webp"
                    alt="VMLS Campus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="pt-4 pb-6 px-[5%] bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
                Our Services
              </h2>
              <div className="w-16 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Career Counselling",
                  desc: "Engage in one-on-one sessions with our experienced counselors who will help you identify your career goals, develop strategies, and access valuable resources tailored to your aspirations.",
                  image: "/images/career/service_counselling.png"
                },
                {
                  title: "Resume and Cover Letter Reviews",
                  desc: "Receive personalized feedback on your application materials to ensure they effectively showcase your skills and experiences, making a strong impression on potential employers.",
                  image: "/images/career/service_resume.png"
                },
                {
                  title: "Interview Preparation",
                  desc: "Participate in mock interviews and receive expert tips to enhance your performance during actual interviews. We focus on building your confidence and helping you articulate your strengths.",
                  image: "/images/career/service_interview.png"
                },
                {
                  title: "Networking Opportunities",
                  desc: "Attend events that connect you with alumni and industry professionals, allowing you to build relationships that can lead to internships and job offers. Networking is a crucial part of career development, and we facilitate these connections.",
                  image: "/images/career/service_networking.png"
                },
                {
                  title: "Job Listings",
                  desc: "Gain access to exclusive job postings and internship opportunities specifically tailored to your field of study. Our partnerships with various organizations ensure that you have access to a wide range of options.",
                  image: "/images/career/service_jobs.png"
                },
                {
                  title: "Workshops and Seminars",
                  desc: "Participate in regular programming covering various topics related to career development, including resume writing, interview techniques, and industry trends. These workshops are designed to enhance your skills and keep you informed about the job market.",
                  image: "/images/career/service_workshops.png"
                }
              ].map((service, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-100">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-playfair text-xl font-bold text-[#800000] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-base leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Opportunities and Collaborations Section */}
        <section className="pt-4 pb-16 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-4">
                Internship Opportunities and Collaborations
              </h2>
              <p className="font-inter text-gray-700 text-base md:text-lg max-w-5xl mx-auto leading-relaxed mb-8">
                To enhance your career development experience, we have established partnerships with various organizations that offer valuable internship opportunities. These collaborations not only provide hands-on experience but also help you build a professional network within your field of interest. Some of our esteemed internship partners include:
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-8 items-center justify-items-center">
              {Array.from({ length: 21 }, (_, i) => (
                <div key={i} className="relative w-full aspect-[3/2] flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300">
                  <Image
                    src={`/images/logo/${i + 1}.webp`}
                    alt={`Partner Logo ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
