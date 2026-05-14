import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Scale, Globe, BookOpen, Copyright, Settings, Gavel, Mail } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#800000] text-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span>Terms & Conditions</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Terms and Conditions <span className="text-[#fbb03b]">for VMLS.edu.in</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl font-inter leading-relaxed">
            Welcome to Vinayaka Mission&apos;s Law School. These terms and conditions outline the rules and regulations for the use of our website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Introductory Note */}
          <div className="mb-10 p-8 bg-gray-50 border-l-4 border-[#fbb03b] rounded-r-2xl">
            <p className="text-lg text-gray-700 leading-relaxed font-inter text-justify">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use VMLS.edu.in if you do not agree to all of the terms and conditions stated on this page.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* 1. Right of Use */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">1</span>
                Right of Use
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  You are granted the right to use this website in accordance with the rules and guidelines established by the administrators of VMLS.edu.in. Any rights or access granted upon your registration are personal to you and cannot be transferred to another individual.
                </p>
              </div>
            </section>

            {/* 2. External Information */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">2</span>
                External Information
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  This website may include references or links to external entities or companies not affiliated with VMLS.edu.in. Please note that VMLS.edu.in does not endorse or recommend any such entities or companies. Accessing such external information is solely at the user&apos;s discretion, and VMLS.edu.in assumes no responsibility for the content or services provided by such third-party entities.
                </p>
              </div>
            </section>

            {/* 3. Press Releases and Publications */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">3</span>
                Press Releases and Publications
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  The website may feature press releases and publications concerning VMLS.edu.in or related topics from external sources. While efforts are made to ensure the accuracy of such information at the time of publication, VMLS.edu.in disclaims any liability for discrepancies, untimeliness, or inaccuracies. Users are encouraged to verify the credibility and current validity of such information before relying on it.
                </p>
              </div>
            </section>

            {/* 4. Disclaimer */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">4</span>
                Disclaimer
              </h2>
              <div className="space-y-6 pl-4 border-l-2 border-gray-100">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">a. General Disclaimer</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    The content and information provided on this website are offered for general informational purposes. Users should not presume the accuracy, timeliness, or completeness of the information available on this site. For confirmation of any details, users are advised to contact the relevant officials of VMLS.edu.in directly.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">b. Warranties Disclaimed</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    VMLS.edu.in disclaims all warranties, expressed or implied, including but not limited to warranties of title, non-infringement, merchantability, or fitness for a particular purpose. The website does not guarantee uninterrupted service or error-free operation. The usefulness, reliability, or authenticity of any information, whether original or sourced, is not warranted.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">c. Limitation of Liability</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    VMLS.edu.in and its affiliates shall not be held liable for any direct, indirect, special, or consequential damages arising from the use or reliance on the information provided on this website. This includes but is not limited to loss of business, profits, or data, or any damages resulting from contractual breaches, negligence, or other legal claims. Users access and utilize this site at their own risk.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">d. Third-Party Links</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Links to third-party websites or resources are provided solely for the convenience of users. VMLS.edu.in disclaims any responsibility for the accuracy, reliability, or legality of the content found on external websites. Users access such links at their own discretion and risk.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Copyright and Intellectual Property */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">5</span>
                Copyright and Intellectual Property
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  All content, materials, and information available on this website are the intellectual property of VMLS.edu.in unless otherwise stated. Unauthorized reproduction, distribution, or use of the content is strictly prohibited. Claims of copyright infringement should be directed to the site administrators.
                </p>
              </div>
            </section>

            {/* 6. Modifications to Terms and Conditions */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">6</span>
                Modifications to Terms and Conditions
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  VMLS.edu.in reserves the right to modify these terms and conditions at any time without prior notice. Continued use of the site signifies acceptance of any changes made. Users are encouraged to periodically review these terms for updates.
                </p>
              </div>
            </section>

            {/* 7. Governing Law */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-base">7</span>
                Governing Law
              </h2>
              <div className="pl-4 border-l-2 border-gray-100">
                <p className="text-gray-700 leading-relaxed text-justify">
                  These terms and conditions shall be governed by and construed in accordance with the laws applicable in the jurisdiction where VMLS.edu.in operates. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the appropriate courts.
                </p>
              </div>
            </section>

            {/* 8. Contact Information */}
            <section>
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#800000] mt-8">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center gap-3 text-[#800000]">
                  <Mail className="text-[#fbb03b]" size={28} />
                  8. Contact Information
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  For any queries or concerns regarding these terms and conditions, please contact our support team via the contact information provided on the website.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
