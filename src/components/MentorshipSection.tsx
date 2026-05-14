import Image from "next/image";

export default function MentorshipSection() {
  return (
    <section 
      style={{
        backgroundColor: '#0a0a0a',
        color: 'white',
        padding: '20px 5%',
        fontFamily: '"Inter", sans-serif'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            gap: '30px'
          }}
        >
          {/* Left: Jindal University Logo */}
          <div style={{ flexShrink: 0 }}>
            <Image 
              src="/images/opjindal.webp" 
              alt="O.P. Jindal Global University" 
              width={200} 
              height={60} 
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain"
            />
          </div>

          {/* Center: Mentorship Text */}
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
              Vinayaka Mission's Law School (VMLS) is being mentored by O.P. Jindal Global University 
              (an Institution of Eminence) and Jindal Global Law School under an institutional mentorship agreement.
            </p>
          </div>

          {/* Right: Logos and Accreditation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
            <Image 
              src="/images/jindal-global.webp" 
              alt="Jindal Global Law School" 
              width={80} 
              height={80} 
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain"
            />
            
            <div style={{ height: '50px', width: '1px', backgroundColor: '#444' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ textAlign: 'left' }}>
                <Image 
                  src="/images/approved.webp" 
                  alt="UGC and BCI Approved" 
                  width={150} 
                  height={50} 
                  style={{ width: 'auto', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* HR tag after the wordings as requested */}
        <hr style={{ border: 'none', borderTop: '1px solid #333', width: '100%', margin: '10px 0' }} />
      </div>
    </section>
  );
}
