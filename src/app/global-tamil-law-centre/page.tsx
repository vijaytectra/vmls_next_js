import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: "Global Tamil Law Centre | VMLS",
  description: "Vinayaka Mission's Law School (VMLS) Global Tamil Law Centre.",
};

export default function GlobalTamilLawCentrePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Centres of Excellence</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Global Tamil Law Centre</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[350px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white relative z-10">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Global Tamil <br /><span className="text-[#fbb03b]">Law Centre</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Dedicated to the research, preservation, and promotion of Tamil legal heritage and contemporary legal developments within the Global Tamil community.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[400px] flex items-center justify-center bg-gray-50">
            {/* Background Image */}
            <Image
              src="/images/global/tl1.webp"
              alt="Institutional Background"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Floating Logo Card */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white shadow-2xl rounded-2xl p-2 md:p-4 z-20 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full">
                <Image
                  src="/images/centreofexcel/1.webp"
                  alt="Global Tamil Law Centre Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-[#800000]/20 rounded-tr-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-[#800000]/20 rounded-bl-3xl"></div>
          </div>
        </div>
      </section>

      {/* Content Section 1 - Overview */}
      <section className="pt-8 md:pt-12 pb-4 md:pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1.5 bg-[#800000]/10 rounded-none">
                <span className="text-[#800000] font-bold text-[10px] uppercase tracking-widest">Introduction</span>
              </div>
              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-lg md:text-xl">
                <p>
                  விநாயக மிஷன்ஸ் சட்டக்கல்லூரியில் (VMLS) உலகளாவிய தமிழ் சட்ட மையம் நிறுவப்படுவது ஒரு முன்னோடித் திட்டமாகும். 'தமிழ்' என்ற சொல் பெரும்பாலும் தென்னிந்திய மாநிலமான தமிழ்நாடு மற்றும் இலங்கையின் வடக்கு மற்றும் கிழக்குப் பகுதிகளில் பெரும்பான்மையாக வசிக்கும் தமிழ் மொழியில் தொடர்பு கொள்ளும் நபர்களைக் குறிக்கிறது.
                </p>
                <p>
                  புலம்பெயர்ந்த தமிழர்கள் கனடா, ஐக்கிய இராச்சியம் மற்றும் பல நாடுகளை உள்ளடக்கிய உலகளவில் சிதறடிக்கப்பட்டுள்ளனர்.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/images/global/tl2.webp"
                alt="Community Outreach"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Mission & Activities */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            {/* Image Side with Decorative Frame */}
            <div className="lg:w-1/2 relative group order-2 lg:order-1">
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-2xl z-10">
                <Image
                  src="/images/global/tl3.webp"
                  alt="Legal Empowerment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              {/* Decorative Background Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#800000]/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[1px] border-[#800000]/10 rounded-full hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#a31f34]"></div>
                  <span className="text-[#a31f34] text-[10px] font-bold uppercase tracking-[0.3em]">Our Mission</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Vision & <span className="text-[#a31f34] italic">Impact</span>
                </h2>
              </div>

              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg border-l-2 border-[#a31f34]/10 pl-6">
                <p>
                  உலகளாவிய தமிழ் சட்ட மையம் (GTLC) என்பது தமிழ் சமூகம் எதிர்கொள்ளும் சட்ட சிக்கல்கள் மற்றும் கவலைகளை நிவர்த்தி செய்வதில் குறிப்பாக கவனம் செலுத்தும் ஒரு சட்ட நிறுவனம் ஆகும். மேற்கூறிய மையம், கிராமப்புறங்களிலிருந்து வருபவர்களுக்கு சிறப்பு கவனம் செலுத்தி, மாணவர்களுக்கு பல நன்மைகளை வழங்குகிறது. கூடுதலாக, இது இருமொழிக் கல்வியைச் செயல்படுத்துவதற்கும், பிராந்திய, தேசிய மற்றும் உலகளாவிய மட்டங்களில் சட்டப்பூர்வ நிலப்பரப்பில் குறிப்பிடத்தக்கப் பங்களிப்பைச் செய்வதற்கும் முயற்சிக்கிறது.
                </p>
                <p>
                  இந்த மையம் சட்ட ஆலோசனை மற்றும் பிரதிநிதித்துவம் வழங்குதல், தமிழ் சமூகத்தைப் பாதிக்கும் சட்டப்பிரச்சனைகள் குறித்து ஆய்வு நடத்துதல், சட்ட விழிப்புணர்வு பிரச்சாரங்களை ஏற்பாடு செய்தல், தமிழின் உரிமைகள் மற்றும் நலன்களைப் பாதுகாக்கவும் மேம்படுத்தவும் கொள்கைகள் மற்றும் சட்டங்களில் செல்வாக்கு செலுத்துதல் போன்ற பல செயல்பாடுகளில் ஈடுபடும்.
                </p>
                <div className="pt-4 space-y-4">
                   <p className="text-gray-600">
                    GLTC இன் உருவாக்கம் மற்றும் செயல்பாடு சமூக நீதிக்கான அர்ப்பணிப்பைப் பிரதிபலிக்கிறது மற்றும் வெவ்வேறு கலாச்சார மற்றும் மொழியியல் சமூகங்கள் எதிர்கொள்ளும் சட்ட சிக்கல்களை அவர்களின் குறிப்பிட்ட தேவைகள் மற்றும் அனுபவங்களுக்கு ஏற்ப நிறுவனங்களால் சிறப்பாக தீர்க்க முடியும்.
                  </p>
                  <p className="font-bold text-gray-900 italic">
                    கலாச்சார அடையாளத்தைப் பாதுகாத்தல், மனித உரிமைகளை முன்னேற்றுதல் மற்றும் தமிழ் சமூகத்தில் உள்ள தனிநபர்களின் உரிமைகள் உரிய அதிகார வரம்புகளின் சட்டங்களின்படி மதிக்கப்படுவதையும் பாதுகாப்பதையும் உறுதி செய்தல்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News and Events Section */}
      <section className="py-16 px-[5%] bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] text-center mb-12">
            Latest News and Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Event 1 */}
            <Link href="/news/international-tamil-law-conference-2025" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/global/inter-tamil-law.webp"
                  alt="International Tamil Law Conference 2025"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="tracking-wide">March 18, 2025</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                International Tamil Law Conference 2025
              </h3>
            </Link>

            {/* Event 2 */}
            <Link href="/news/state-level-tamil-family-law-moot-court-competition" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/global/in8.webp"
                  alt="State-Level Tamil Family Law Moot Court Competition"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="tracking-wide">October 19, 2024</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                State-Level Tamil Family Law Moot Court Competition
              </h3>
            </Link>

            {/* Event 3 */}
            <Link href="/news/intra-trail-tamil-moot-court" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/global/tamil-moot.webp"
                  alt="Intra Trail Tamil Moot Court"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="tracking-wide">03rd June, 2024</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Intra Trail Tamil Moot Court
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
