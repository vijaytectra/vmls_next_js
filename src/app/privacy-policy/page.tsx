import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#800000] text-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-8 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy <span className="text-[#fbb03b]">for VMLS.edu.in</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl font-inter leading-relaxed">
            These Terms and Conditions (&quot;T&amp;C&apos;s&quot; or &quot;Terms &amp; Conditions&quot;) govern your access to and use of this website, operated by Vinayaka Mission&apos;s Law School (&quot;the Law School&quot;).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Introductory Note */}
          <div className="mb-10 p-8 bg-gray-50 border-l-4 border-[#fbb03b] rounded-r-2xl">
            <p className="text-lg text-gray-700 leading-relaxed font-inter text-justify">
              By accessing or using our website, you agree to these Terms &amp; Conditions. If you do not agree with any part of this Privacy Policy, please do not proceed further.
            </p>
          </div>

          {/* About Section */}
          <div className="mb-10">
            <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6">About Vinayaka Mission&apos;s Law School</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-inter">
              <p className="text-justify">
                Vinayaka Mission&apos;s Law School is part of the Vinayaka Mission&apos;s Research Foundation (VMRF), a Deemed to be University recognized by the University Grants Commission (UGC).
              </p>
              
              <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider">Campus Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#fbb03b] flex-shrink-0" size={20} />
                      <p className="text-gray-600">
                        Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road),<br />
                        Paiyanoor, Chennai – 603104, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#fbb03b] flex-shrink-0" size={20} />
                      <p className="text-gray-600">Toll-Free: 1800 309 4350</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#fbb03b] flex-shrink-0" size={20} />
                      <p className="text-gray-600">+91 73582 01234</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-[#fbb03b] flex-shrink-0" size={20} />
                      <p className="text-gray-600">admissions@vmls.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 italic">
                Feel free to reach out for any admission inquiries or further information about our programs, recognitions, and affiliations (including Bar Council of India approvals).
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* 1. Information We Collect */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">1</span>
                Information We Collect
              </h2>
              <div className="space-y-6 pl-4 border-l-2 border-gray-100">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">a. Information Provided Voluntarily:</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    We collect information from you when you register on our site, subscribe to our newsletter, respond to a survey, or fill out any form. When you voluntarily send us electronic mail or fill out a form, we keep a record of this information so that we can respond to you. Depending on the specific form or interaction, you may be asked to provide your name, email address, and/or phone number. You may, however, visit our site anonymously if you prefer not to share personal details.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">b. Rights to Contact You:</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    If you have submitted personal information and contact details through any of our online forms, Vinayaka Mission&apos;s Law School reserves the right to contact you via Call, SMS, Email, or WhatsApp to provide information about our programs, products, or offers—even if your number is registered on the Do Not Disturb (DND) list.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">c. Information Automatically Tracked:</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    We may automatically track certain information about your visit through cookies or similar technologies (see Section 2 on Cookies). This information may include IP addresses, browser type, pages visited, and other data that helps us understand how you use our website.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Use of Cookies */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-8 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">2</span>
                Use of Cookies
              </h2>
              <div className="space-y-4 pl-4 border-l-2 border-gray-100 text-gray-700 leading-relaxed">
                <p className="text-justify">Cookies are small files stored on your device (if you allow) that enable websites to recognize your browser and remember certain information. We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Make our website more responsive and personalized to your needs.</li>
                  <li>Assign each visitor a unique identifier to help us gather site usage data and manage the frequency of certain ads or pop-ups.</li>
                  <li>Ensure a smoother browsing experience by storing user preferences.</li>
                </ul>
                <p className="text-justify">A cookie cannot read any data off your hard drive or access personal information beyond what you voluntarily provide. Our advertisers or third-party service providers may place their own cookies if you click on their ads or links—this process is outside our control.</p>
                <p className="text-justify">If you prefer not to receive cookies, you can adjust your browser settings to delete or block them. Refer to your web browser&apos;s &quot;Help&quot; documentation for more details.</p>
              </div>
            </section>

            {/* 3. How We Protect Your Information */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">3</span>
                How We Protect Your Information
              </h2>
              <div className="pl-4 border-l-2 border-gray-100 text-gray-700 leading-relaxed space-y-4">
                <p className="text-justify">We implement security measures to maintain the safety of personal information you submit. All information gathered on the Vinayaka Mission&apos;s Law School website is stored in a secure database on servers protected by firewalls and password-restricted access.</p>
                <p className="text-justify">Despite these measures, no security system is impenetrable. We cannot guarantee the security of our database nor that information you transmit over the Internet will not be intercepted. Additionally, any information you post in public areas of our website (such as discussion forums) can be accessed by anyone online.</p>
              </div>
            </section>

            {/* 4. Links to Third-Party Sites */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">4</span>
                Links to Third-Party Sites and Advertising
              </h2>
              <div className="pl-4 border-l-2 border-gray-100 text-gray-700 leading-relaxed space-y-4">
                <p className="text-justify">Occasionally, we may include or offer third-party products or services on our website. These third-party sites are governed by their own privacy policies, and we bear no responsibility or liability for their content or activities. We welcome feedback about these sites to help maintain the integrity of our platform.</p>
                <p className="text-justify">We do not share your personally identifiable information with these third parties without your explicit consent. However, we may share aggregated statistics on site traffic to help advertisers or partners understand our audience—this data does not include personal identifiers.</p>
              </div>
            </section>

            {/* 5. How We Use Your Information */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">5</span>
                How We Use Your Information
              </h2>
              <div className="pl-4 border-l-2 border-gray-100 text-gray-700 leading-relaxed">
                <p className="mb-4">The information we collect may be used in one or more of the following ways:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>To personalize your experience</strong> – Your information helps us tailor content, offerings, and features to your interests.</li>
                  <li><strong>To improve our website</strong> – We continually strive to refine our services based on feedback and usage data.</li>
                  <li><strong>To administer contests, promotions, surveys, or other site features.</strong></li>
                  <li><strong>To send periodic emails or messages</strong> – The email address or phone number you provide may be used for institutional updates, responses to inquiries, offers, and other requests or questions.</li>
                  <li><strong>To measure traffic</strong> – We analyze visitor geolocation and navigation patterns to inform our outreach, research, or marketing efforts.</li>
                  <li><strong>To respond to your direct inquiries</strong> – We keep a record of correspondence to address your concerns effectively.</li>
                </ul>
              </div>
            </section>

            {/* 6. Disclosure to Outside Parties */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-6 flex items-center gap-4 text-justify">
                <span className="w-10 h-10 bg-[#fbb03b]/20 text-[#800000] flex items-center justify-center rounded-lg text-xl">6</span>
                Disclosure of Information to Outside Parties
              </h2>
              <div className="pl-4 border-l-2 border-gray-100 text-gray-700 leading-relaxed space-y-4">
                <p className="text-justify">We do not sell, trade, or otherwise transfer your personally identifiable information to external parties, except:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>When we work with trusted third parties who assist us in operating our website, managing services, or conducting our business, and who agree to keep this information confidential.</li>
                  <li>When required by law – We may release your information if required by legal authorities, to enforce our site policies, or to protect our or others&apos; rights, property, or safety.</li>
                  <li>To our group entities or educational partners – For purposes of providing you with information on programs, new services, or as part of legal, regulatory, or investigative requirements.</li>
                </ul>
                <p className="text-justify">We may provide non-personally identifiable, aggregated visitor information to third parties for marketing, advertising, or other uses.</p>
              </div>
            </section>

            {/* 7, 8, 9 Footer sections */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-playfair text-xl font-bold text-[#800000] mb-4 text-justify">7. Online Privacy Policy Only</h3>
                <p className="text-gray-600 leading-relaxed text-justify">This Privacy Policy applies only to information collected through our website and not to any data collected offline.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-playfair text-xl font-bold text-[#800000] mb-4 text-justify">8. Your Consent</h3>
                <p className="text-gray-600 leading-relaxed text-justify">By using our site, you consent to this Privacy Policy in its entirety. This includes consenting to our right to contact you by phone, SMS, email, or WhatsApp regarding our offerings, even if your number is on a DND list, when you have voluntarily provided your contact details.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#800000] mt-8">
              <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center gap-3 text-[#800000]">
                <ShieldCheck className="text-[#fbb03b]" size={28} />
                9. Changes to Our Privacy Policy
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Should we decide to modify our Privacy Policy, we will post any changes on this page. In case of significant updates, the version of the policy at the time of your data submission will govern how your information is handled, unless further consent is obtained from you.
              </p>
            </div>

            {/* Contacting Us Section */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h2 className="font-playfair text-3xl font-bold text-[#800000] mb-4">Contacting Us</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-inter">
                <p className="text-justify">If you have questions regarding this Privacy Policy or wish to update personal information you have shared, please contact us at:</p>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Vinayaka Mission&apos;s Law School</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">Vinayaka Nagar, Rajiv Gandhi Salai (Old Mahabalipuram Road),</p>
                    <p className="text-gray-600">Paiyanoor, Chennai – 603104, Tamil Nadu, India</p>
                    <p className="text-gray-600">Toll-Free: 1800 309 4350</p>
                    <p className="text-gray-600">Phone: +91 73582 01234</p>
                    <p className="text-gray-600">Email: admissions@vmls.edu.in</p>
                  </div>
                </div>
                <p className="text-gray-500 italic mt-4">
                  Feel free to reach out for any admission inquiries or further information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
