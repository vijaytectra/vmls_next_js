"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // 1. Load VMLS Custom Widget Script
    const vmlsWidgetScript = document.createElement("script");
    vmlsWidgetScript.src = "https://universitywidgets.blob.core.windows.net/widgetstore/vmls-widget.js";
    vmlsWidgetScript.async = true;
    document.body.appendChild(vmlsWidgetScript);

    // 2. Load Nia Chatbot after 5 seconds delay
    const chatbotTimer = setTimeout(() => {
      const chatDiv = document.createElement("div");
      chatDiv.className = "npf_chatbots";
      chatDiv.setAttribute("data-w", "1189388fc18c4ac0952bc3816b615524");
      chatDiv.style.display = "none";
      document.body.appendChild(chatDiv);
      const chatbotScript = document.createElement("script");
      chatbotScript.type = "text/javascript";
      chatbotScript.async = true;
      chatbotScript.src = "https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/5747642c1669bd257/1189388fc18c4ac0952bc3816b615524";
      document.body.appendChild(chatbotScript);
    }, 5000);

    // 3. Load NPF Widget script for Enquiry Popup
    const script = document.createElement("script");
    script.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).NpfWidgetsInit) {
        new (window as any).NpfWidgetsInit({
          widgetId: "87feca6bc65be091ed018757c6c58029",
          baseurl: "widgets.in8.nopaperforms.com",
          formTitle: "Enquiry Form",
          titleColor: "#FF0033",
          autoPopup: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.body.contains(vmlsWidgetScript)) document.body.removeChild(vmlsWidgetScript);
      clearTimeout(chatbotTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Left Side Sticky Button: Chat with Student */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2000
      }}>
        <Link
          href="/chat-with-student"
          className="text-[12px] md:text-[14px] font-inter px-2 py-4 md:px-3 md:py-6"
          style={{
            backgroundColor: '#ae0808',
            color: 'white',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            letterSpacing: '0.5px',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            boxShadow: '4px 0 15px rgba(0,0,0,0.15)',
            textDecoration: 'none',
            display: 'block',
            transition: 'all 0.3s ease'
          }}
        >
          Chat with a Student
        </Link>
      </div>

      {/* Right Side Sticky Buttons: Apply & Enquire */}
      <div style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        zIndex: 2000
      }}>
        <div className="applyknow1">
          <Link 
            href="https://admissions.vmls.edu.in/" 
            target="_blank" 
            className="font-inter px-2 py-4 md:px-3 md:py-6" 
            style={{
              backgroundColor: '#ae0808',
              color: 'white',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              mdFontSize: '14px', // Handled by tailwind
              fontWeight: '600',
              letterSpacing: '0.5px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              textDecoration: 'none',
              display: 'block',
              boxShadow: '-4px 0 15px rgba(0,0,0,0.1)'
            }}
          >
            Apply Now!
          </Link>
        </div>
        
        <div className="applyknow">
          <span 
            className="npfWidgetButton npfWidget-87feca6bc65be091ed018757c6c58029 font-inter px-2 py-4 md:px-3 md:py-6"
            style={{
              backgroundColor: '#8b0000',
              color: 'white',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              mdFontSize: '14px', // Handled by tailwind
              fontWeight: '600',
              letterSpacing: '0.5px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              display: 'block',
              boxShadow: '-4px 0 15px rgba(0,0,0,0.1)'
            }}
          >
            Enquire Now!
          </span>
        </div>
      </div>

      {/* Bottom Left: WhatsApp */}
      <a
        href="https://wa.me/917358201234"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '50px',
          height: '50px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 9999,
          transition: 'all 0.3s ease'
        }}
        className="hover:scale-110 active:scale-95 md:w-[55px] md:h-[55px] md:bottom-[30px] md:left-[30px]"
      >
        <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 18.2 69.5 27.8 106.2 27.8 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65-157.1zM223.9 445.2c-33.1 0-65.5-8.9-93.6-25.7l-6.7-4-69.6 18.3 18.7-67.9-4.4-7c-18.4-29.4-28.1-63.3-28.1-98.2 0-101.7 82.7-184.4 184.4-184.4 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.1 54 130.4 0 101.7-82.7 184.4-184.4 184.4zm101.7-138.8c-5.6-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.4-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      {/* Bottom Right: Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '45px',
            height: '45px',
            backgroundColor: '#a31f34',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 9999,
            transition: 'all 0.3s ease'
          }}
          className="hover:bg-[#800000] hover:-translate-y-1 active:scale-95 md:w-[50px] md:h-[50px] md:bottom-[30px] md:right-[30px]"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}
