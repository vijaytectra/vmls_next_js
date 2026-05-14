import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] pt-12 pb-8 px-[5%] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mb-6 md:mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <Image 
                src="/images/footer/vmls-footer.webp" 
                alt="VMLS Logo" 
                width={220} 
                height={80} 
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
              <p className="font-playfair text-[#a31f34] text-2xl lg:text-3xl italic">
                Law School of the Future
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { 
                  name: "Facebook", 
                  href: "https://www.facebook.com/vinayakamissionslawschool/",
                  icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                },
                { 
                  name: "Instagram", 
                  href: "https://www.instagram.com/vinayakamissionslawschool/",
                  icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></g>
                },
                { 
                  name: "Twitter", 
                  href: "https://x.com/Vmlschennai",
                  icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298L17.61 20.64z" />
                },
                { 
                  name: "LinkedIn", 
                  href: "https://www.linkedin.com/company/vinayakamissionslawschool/",
                  icon: <g><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></g>
                },
                { 
                  name: "YouTube", 
                  href: "https://www.youtube.com/@VinayakaMissionsLawSchoolVMLS",
                  icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#a31f34] hover:bg-[#a31f34] hover:text-white hover:border-[#a31f34] transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={social.name === "YouTube" || social.name === "Facebook" || social.name === "Twitter" ? "fill-current stroke-0" : ""}
                  >
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Addresses Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-10">
            <div className="space-y-5">
              <h4 className="font-inter font-bold text-[#a31f34] flex items-center gap-3 uppercase tracking-wider text-base">
                <Image 
                  src="/images/footer/map.webp" 
                  alt="Map" 
                  width={20} 
                  height={20} 
                  className="object-contain" 
                  style={{ width: 'auto', height: 'auto' }} 
                />
                VMLS Campus Address
              </h4>
              <p className="text-[#333] text-base leading-relaxed font-medium max-w-sm">
                Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road), Paiyanoor, Chennai - 603104, Tamil Nadu, India
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="font-inter font-bold text-[#a31f34] flex items-center gap-3 uppercase tracking-wider text-base">
                <Image 
                  src="/images/footer/map.webp" 
                  alt="Map" 
                  width={20} 
                  height={20} 
                  className="object-contain" 
                  style={{ width: 'auto', height: 'auto' }} 
                />
                Corporate Office Address
              </h4>
              <p className="text-[#333] text-base leading-relaxed font-medium max-w-sm">
                No: 213, Old No: 160, Behind Doshi Tower, Poonamallee High Road, Kilpauk, Chennai - 600010, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Contact & Support Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-10">
            <div className="space-y-6">
              <h4 className="font-inter font-bold text-[#a31f34] uppercase tracking-wider text-base">Contact Us</h4>
              <div className="space-y-6">
                <Link href="tel:+917358201234" className="flex items-center gap-4 text-[#333] text-base hover:text-[#a31f34] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <span className="font-semibold tracking-wide">+91 73582 01234</span>
                </Link>
                <Link href="mailto:admissions@vmls.edu.in" className="flex items-center gap-4 text-[#333] text-base hover:text-[#a31f34] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <span className="font-semibold tracking-wide">admissions@vmls.edu.in</span>
                </Link>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-6">
              <h4 className="font-inter font-bold text-[#a31f34] uppercase tracking-wider text-base">Help & Support</h4>
              <ul className="grid grid-cols-1 gap-3 md:gap-4 text-base text-[#444] font-medium">
                {[
                  { name: "Internal Complaint Committee", href: "/internal-complaint-committee" },
                  { name: "Anti Ragging Committee", href: "/anti-ragging-committee" },
                  { name: "Anti Ragging Squad", href: "/anti-ragging-squad" },
                  { name: "Students Grievance Redressal Committee", href: "/student-grievance-redressal-committee" },
                  { name: "Gender Sensitization Cell", href: "/gender-sensitization-cell" },
                  { name: "Women Empowerment Cell", href: "/women-empowerment-cell" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-[#a31f34] flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-[#a31f34]"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center">
          <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-2 md:gap-y-4 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#666]">
            <Link href="/iqac" className="hover:text-[#a31f34] transition-colors">IQAC</Link>
            <span className="text-gray-300 hidden md:block">|</span>
            <Link href="/privacy-policy" className="hover:text-[#a31f34] transition-colors">Privacy Policy</Link>
            <span className="text-gray-300 hidden md:block">|</span>
            <Link href="/terms-conditions" className="hover:text-[#a31f34] transition-colors">Terms and Conditions</Link>
          </div>
          <p className="text-[10px] md:text-sm font-bold text-gray-400 tracking-widest">
            COPYRIGHT © 2025 VMLS
          </p>
        </div>
      </div>
    </footer>
  );
}
