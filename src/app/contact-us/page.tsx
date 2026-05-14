import Image from 'next/image';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Contact Us</span>
        </div>
      </nav>

      {/* Hero Header with Background Image */}
      <header className="relative py-20 md:py-32 px-[5%] overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/vmls/frame-1@3x.webp"
            alt="VMLS Campus Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#fbb03b] text-black text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="italic text-[#fbb03b]">Us</span>
          </h1>
          <p className="font-inter text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Have questions about admissions, programs, or campus life? We're here to help you navigate your journey at VMLS.
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="space-y-16">
            {/* Campus Address 1 */}
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#a31f34] hidden md:block"></span>
                VMLS Campus Address
              </h2>
              <div className="font-inter text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road),<br />
                  Paiyanoor, Chennai - 603104, Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Admissions */}
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#a31f34] hidden md:block"></span>
                For Admissions
              </h2>
              <div className="font-inter text-gray-600 space-y-4 text-base md:text-lg">
                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="tel:18003094350" className="text-[#a31f34] font-bold hover:underline">1800 309 4350</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="tel:7358201234" className="text-[#a31f34] font-bold hover:underline">7358 201 234</Link>
                </div>
                <Link href="mailto:admissions@vmls.edu.in" className="block text-gray-700 hover:text-[#a31f34] transition-colors underline underline-offset-4">
                  admissions@vmls.edu.in
                </Link>
              </div>
            </div>

            {/* City Office / Address 2 */}
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#a31f34] hidden md:block"></span>
                City Office Address
              </h2>
              <div className="font-inter text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  New No: 213, Old No: 160, Behind Doshi Tower,<br />
                  Poonamallee High Road, Kilpauk, Chennai - 600010,<br />
                  Tamil Nadu, India.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visuals */}
          <div className="space-y-12">
            {/* Campus Image */}
            <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-[12px] border-white">
              <Image
                src="/images/vmrf/vmrf-header.webp"
                alt="VMLS Campus Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-playfair text-xl font-bold">VMLS Campus</p>
                <p className="text-xs font-inter opacity-80 uppercase tracking-widest">Chennai, India</p>
              </div>
            </div>

            {/* Map Snippet (Simulated) */}
            <div className="relative aspect-[21/9] md:aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-100">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31135.21528620245!2d80.123!3d12.678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQwJzQwLjgiTiA4MMKwMDcnMjIuOCJF!5e0!3m2!1sen!2sin!4v1715162400000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
