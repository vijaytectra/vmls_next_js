import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hostel Facility | VMLS",
  description: "Explore the comfortable and secure hostel facilities at Vinayaka Mission's Law School.",
};

export default function HostelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Hostel Facility</span>
          </div>
        </nav>

        {/* Hero Section - Career Services Style */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#2e7d32] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle"></span>
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">Living at VMLS</span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Hostel <span className="text-[#fbb03b]">Facilities</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A comfortable and secure student environment, offering a home away from home for our diverse community.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/hostel3.webp"
                alt="VMLS Hostel Facility"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </section>

        {/* Vision Section - Message Style */}
        <section className="pt-16 pb-12 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            {/* Feature Image Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8 border border-gray-100">
                <Image
                  src="/images/hostel2.webp"
                  alt="Student Living Spaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Student Well-being</h3>
              <p className="font-inter text-[#2e7d32] font-semibold uppercase tracking-wider">
                Comfort and Security First
              </p>
            </div>

            {/* Narrative Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#2e7d32] mb-6 leading-tight">
                Your Home Away from Home
              </h2>
              
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-justify text-lg">
                <p>
                  We provide a comfortable and secure student environment. Our hostel offers various room categories to suit your preferences, including triple and four-sharing room occupancy. You can choose between rooms with attached baths for added privacy or rooms with common bath facilities.
                </p>
                
                <p>
                  Our commitment to your well-being extends beyond accommodation. The campus has high-speed Wi-Fi, and student safety is our top priority, with 24x7 security personnel and surveillance systems in place. We also have an in-house doctor on call to address any health concerns promptly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                  <div className="bg-[#f1f8e9] p-6 rounded-2xl border border-[#c8e6c9]">
                    <h4 className="font-playfair font-bold text-[#1b5e20] text-xl mb-3">Boys Hostels</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Sir C. V. Raman Hostel:</strong> 700 capacity</li>
                      <li>• <strong>Ramanujan Hostel:</strong> 500 capacity</li>
                    </ul>
                  </div>
                  <div className="bg-[#f1f8e9] p-6 rounded-2xl border border-[#c8e6c9]">
                    <h4 className="font-playfair font-bold text-[#1b5e20] text-xl mb-3">Girls Hostel</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Kalpana Chawla Hostel:</strong> 450 capacity</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  To satisfy your culinary needs, a food court is conveniently located within the campus. Additionally, an on-site ATM is available for your banking convenience. The VMLS Hostel Facility is a testament to the institution&apos;s dedication to providing top-tier residential services.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#f1f8e9] flex items-center justify-center text-2xl">🏠</div>
                  <div>
                    <p className="font-playfair font-bold text-gray-900 text-xl">Residential Excellence</p>
                    <p className="text-gray-500 font-medium italic">Fostering a vibrant community for growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section - Services Grid Style */}
        <section className="py-20 px-[5%] bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#2e7d32] mb-4">
                Exclusive Amenities
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Living Spaces",
                  desc: "Ergonomically designed rooms with ample natural light and ventilation, promoting a healthy living environment.",
                  image: "/images/hostel1.webp"
                },
                {
                  title: "Modern Dining",
                  desc: "A spacious food court offering a variety of nutritious culinary options prepared with the highest hygiene standards.",
                  image: "/images/hostel3.webp"
                },
                {
                  title: "Recreation Hub",
                  desc: "Indoor games and a well-equipped gymnasium to ensure students maintain a balanced and active lifestyle.",
                  image: "/images/hostel2.webp"
                }
              ].map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-bold text-[#2e7d32] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed text-justify">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Icons List Section */}
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Canteen", "Departmental Store", "Indoor Games", "Air Conditioner",
                "High-speed Wi-Fi", "Laundry Services", "Gymnasium", "Health Care",
                "Food Court", "ATM Facility", "24/7 CCTV", "Visitor's Room"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 group hover:border-[#2e7d32] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#2e7d32]"></div>
                  <span className="font-inter text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
