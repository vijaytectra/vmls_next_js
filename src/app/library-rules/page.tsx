import Image from 'next/image';
import Link from 'next/link';

export default function LibraryRulesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/library" className="text-gray-500 hover:text-[#a31f34] transition-colors">Library</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Rules & Regulations</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap">
              Library <span className="text-[#fbb03b]">Rules</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              To ensure a productive and respectful environment for all, the VMLS Law Library maintains specific guidelines regarding access, borrowing, and conduct within the facility.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/library-rules-header.png"
              alt="VMLS Library Policy"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Borrowing Privileges Section */}
      <section className="py-6 md:py-10 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[#a31f34]"></div>
                <span className="font-inter text-sm font-bold uppercase tracking-widest text-[#a31f34]">Member Benefits</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] font-bold leading-tight">Borrowing Privileges</h2>
              <p className="mt-4 text-gray-500 font-inter text-sm md:text-base leading-relaxed">
                VMLS offers comprehensive borrowing rights tailored to the academic needs of each member category. Review your specific entitlements below.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-4 py-2 border border-gray-100 italic">
                Scroll horizontally on mobile
              </div>
            </div>
          </div>

          <div className="overflow-x-auto shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="p-5 font-playfair text-base font-bold border-r border-white/10">Category</th>
                  <th className="p-5 font-playfair text-base font-bold border-r border-white/10">Item Type (IT)</th>
                  <th className="p-5 font-playfair text-base font-bold text-center">TN</th>
                  <th className="p-5 font-playfair text-base font-bold text-center">D</th>
                  <th className="p-5 font-playfair text-base font-bold text-center">OD</th>
                  <th className="p-5 font-playfair text-base font-bold text-center">RD</th>
                  <th className="p-5 font-playfair text-base font-bold text-center">H</th>
                </tr>
              </thead>
              <tbody className="text-sm font-inter">
                {[
                  { cat: 'Undergraduate', items: [{ it: 'Books', tn: 2, d: 15, od: 1, rd: 7, h: 2 }, { it: 'Textbooks*', tn: 2, d: 7, od: 1, rd: 0, h: 0 }] },
                  { cat: 'Masters', items: [{ it: 'Books', tn: 8, d: 15, od: 1, rd: 7, h: 0 }] },
                  { cat: 'Research', items: [{ it: 'Books', tn: 5, d: 15, od: 1, rd: 14, h: 0 }] },
                  { cat: 'Faculty', items: [{ it: 'Books', tn: 10, d: 30, od: 0, rd: 14, h: 5 }, { it: 'Textbooks*', tn: 2, d: 150, od: 0, rd: 0, h: 0 }, { it: 'Faculty Resource Books**', tn: 2, d: 15, od: 0, rd: 0, h: 0 }] },
                  { cat: 'Campus Staff', items: [{ it: 'Books', tn: 1, d: 15, od: 0, rd: 0, h: 1 }] },
                  { cat: 'Campus Students', items: [{ it: 'Books', tn: 1, d: 15, od: 5, rd: 0, h: 0 }] },
                  { cat: 'Visitor', items: [{ it: 'Books', tn: 1, d: 15, od: 0, rd: 0, h: 0 }] }
                ].map((row, idx) => (
                  row.items.map((item, itemIdx) => (
                    <tr key={`${idx}-${itemIdx}`} className={`border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${itemIdx === 0 && row.items.length > 1 ? 'border-b-0' : ''}`}>
                      {itemIdx === 0 && (
                        <td className="p-5 font-bold text-gray-900 bg-gray-50/30 border-r border-gray-100 align-top" rowSpan={row.items.length}>
                          {row.cat}
                        </td>
                      )}
                      <td className="p-5 text-gray-600 border-r border-gray-100">{item.it}</td>
                      <td className="p-5 text-center font-bold text-[#a31f34]">{item.tn}</td>
                      <td className="p-5 text-center text-gray-700">{item.d}</td>
                      <td className="p-5 text-center text-gray-700">₹{item.od}</td>
                      <td className="p-5 text-center text-gray-700">{item.rd}</td>
                      <td className="p-5 text-center text-gray-700">{item.h}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { k: 'TN', v: 'Total check-outs' },
              { k: 'D', v: 'Duration (days)' },
              { k: 'OD', v: 'Overdue Fine (per day)' },
              { k: 'RD', v: 'Renewal duration' },
              { k: 'H', v: 'No. of holds' }
            ].map(key => (
              <div key={key.k} className="p-3 bg-gray-50 border border-gray-100">
                <span className="block font-bold text-[#a31f34] text-xs">{key.k}</span>
                <span className="text-[10px] text-gray-500 uppercase font-medium">{key.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details: Accordion Style */}
      <section className="py-6 md:py-10 px-[5%] bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] font-bold mb-6">Library Policies</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-inter">
              Detailed guidelines governing the use of library resources, code of conduct, and service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: '1', title: 'Item Type and Loan Rules',
                content: [
                  'Reference books are not for loan.',
                  'If the book is overdue for 30 days, cost recovery action will be taken immediately, irrespective of returning the book late.',
                  'At the discretion of the Librarian, and upon a specific request made, entitlement may be enhanced with regard to the number of items, period of loan, and/or not-for-loan material.',
                  'The Librarian may also recall any item before the due date.',
                  'The Library may announce a longer loan period for all categories of members during prolonged closure of VMLS due to vacations or otherwise.',
                  'A Member may request to be registered in the category having higher borrowing privileges, in case that Member is eligible for more than one category. However, a Member shall not be allowed to avail more than one membership at the Library, though additional registration at other Campus Libraries is permitted.'
                ]
              },
              {
                id: '2', title: 'Credentials Required to Access the Library',
                content: [
                  'Access to the Library spaces, physical collections, and equipment will be managed by manual check of the Photo Identity Card. Members are advised to carry their photo Identity Card.',
                  'Members must keep their Identity Card and other access credentials secure, and must not lend or share these with anyone.',
                  'Members are responsible for any Library Material borrowed or accessed using their card or credentials. In case of loss or theft of the Identity Card or credentials, members should immediately inform the Librarian and take precautions to prevent further misuse.',
                  'All outstanding Library Material on the lost card must be returned, and all dues settled before requesting a duplicate card.',
                  'Access to digital Library Material and network-based services may be provided through IP & Password authentication using the registered mobile number or official VMLS email ID. Members must create strong passwords and secure them. Unauthorized access will be deemed a violation.',
                  'Misuse of credentials or violation of the user license terms will lead to immediate suspension of access.',
                  'Members may be asked to submit their personal information for communication and authentication purposes. By registering, members agree to allow the Library to use this information solely for facilitating access to Library Material and services.'
                ]
              },
              {
                id: '3', title: 'Restricted Use Material',
                text: 'Certain Library Material or categories of materials may be available only to a specific class of members or for a certain period. This includes prescribed course books, Kindle books, digital material with limited licenses, and specialized collections. Faculty should approach the Librarian to reserve items for classroom teaching in advance.'
              },
              {
                id: '4', title: 'On-Hold Requests',
                text: 'If an item required by a Member is borrowed by another Member, the Member may request for it to be placed on-hold. Items with pending on-hold requests cannot be renewed by the current borrower. Once returned, the Member will be notified, and the item must be collected within 7 days, after which it will be passed to the next Member in queue or returned to the shelf.'
              },
              {
                id: '5', title: 'Delay in Return of Borrowed Items',
                content: [
                  'All books must be returned by the due date. However, the Librarian may recall any book before the due date.',
                  'Members on long leave must ensure that the due date doesn\'t fall during their absence and make arrangements to return the books on time to avoid fines.',
                  'Automated check-in and check-out messages will be sent via email or SMS to the registered email address and mobile number. Members should keep their contact information up to date to prevent misuse of credentials.',
                  'Members should preserve check-out and check-in messages to resolve any disputes.',
                  'Members can track their transactions through their Library Management System account.'
                ]
              },
              {
                id: '6', title: 'User Fees, Fines, and Other Dues',
                content: [
                  'Most Library Material and facilities are free, but the Library Committee may charge for premium services like semester-loan textbooks, reprography, or special materials.',
                  'Membership will be suspended if dues exceed Rs. 200 or books are overdue for more than 90 days.',
                  'All fines and dues must be settled by the end of each semester.'
                ]
              },
              {
                id: '7', title: 'Loss and Damage to Borrowed Items',
                content: [
                  'Members must keep borrowed items in good condition and report any loss immediately. Damaged or marked books may result in penalties.',
                  'Members can either replace the lost item with the latest edition or pay the current cost as determined by the Librarian. In the case of out-of-print items, double the recorded price will be charged.',
                  'If a lost item is part of a set, the cost of the entire set must be paid, and the member will be allowed to claim the remaining volumes.',
                  'Overdue charges will also be added in cases of lost items.'
                ]
              },
              {
                id: '8', title: 'Reprography',
                text: 'The Library provides reprographic facilities for documents downloaded from subscribed databases and for books. Members should contact the Library Service Desk for details on charges and hours. The extent of copying and printing is subject to user licenses and copyright law.'
              },
              {
                id: '9', title: 'Discipline and Security',
                content: [
                  'Personal belongings, except permitted devices, should be kept at the property counter outside the Library.',
                  'Members can bring laptops or handheld devices for study and research purposes. Limited charging points are available.',
                  'Personal study materials or equipment must be removed when leaving the Library. All materials brought into the Library are subject to checks before and after entry. The Library is not responsible for lost items.',
                  'Members must use Library-provided equipment only for academic purposes and avoid installing or storing personal files. External storage devices should be scanned for viruses before use.',
                  'Mobile phones must be in silent mode. Audio and video playback on personal devices should not disturb others, and headphones should be used.',
                  'Visitors must maintain decorum, and the Library is a no-smoking zone.',
                  'Activity rooms in the Library can be booked for academic purposes. Theft, damage, or misconduct will lead to serious penalties.',
                  'The Library is under surveillance with CCTV cameras for security.'
                ]
              }
            ].map((section) => (
              <div key={section.id} className="flex flex-col h-full bg-white border border-gray-100 shadow-[0_4px_15px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-15px_rgba(128,0,0,0.1)] transition-all duration-500 group relative">
                {/* Top Accent Line */}
                <div className="h-1 w-full bg-[#800000] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-4 md:p-5 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a31f34] block">Rule Section</span>
                      <h3 className="font-playfair text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors leading-tight">
                        {section.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center font-playfair text-lg font-bold text-gray-200 group-hover:border-[#a31f34]/20 group-hover:text-[#a31f34]/20 transition-all duration-500 shrink-0">
                      {section.id.padStart(2, '0')}
                    </div>
                  </div>

                  <div className="h-[1px] w-8 bg-gray-100 mb-4 group-hover:w-12 group-hover:bg-[#a31f34] transition-all duration-500"></div>

                  {section.text && (
                    <p className="font-inter text-[13px] text-gray-600 leading-relaxed text-justify mb-2">
                      {section.text}
                    </p>
                  )}
                  {section.content && (
                    <ul className="space-y-3">
                      {section.content.map((bullet, i) => (
                        <li key={i} className="flex gap-3 group/li">
                          <div className="mt-1.5 shrink-0">
                            <div className="w-1 h-1 rotate-45 border-r border-b border-[#a31f34] group-hover/li:border-r-2 group-hover/li:border-b-2 transition-all"></div>
                          </div>
                          <span className="font-inter text-[13px] text-gray-600 leading-relaxed group-hover/li:text-gray-900 transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
