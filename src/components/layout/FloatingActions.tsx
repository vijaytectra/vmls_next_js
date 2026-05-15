"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingActions() {
  useEffect(() => {
    // 1. Load NoPaperForms Enquiry Widget
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
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonbgColor: "#4c79dc",
          buttonTextColor: "#FFF",
        });
      }
    };
    document.body.appendChild(script);

    // 2. Load VMLS Custom Widget Script
    const vmlsWidgetScript = document.createElement("script");
    vmlsWidgetScript.src = "https://universitywidgets.blob.core.windows.net/widgetstore/vmls-widget.js";
    vmlsWidgetScript.async = true;
    document.body.appendChild(vmlsWidgetScript);

    // 3. Load Nia Chatbot after 5 seconds delay
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

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.body.contains(vmlsWidgetScript)) document.body.removeChild(vmlsWidgetScript);
      clearTimeout(chatbotTimer);
    };
  }, []);

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
          className="text-[14px] font-inter"
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
            padding: '25px 12px',
            textDecoration: 'none',
            display: 'block',
            transition: 'all 0.3s ease'
          }}
        >
          Chat with a Student
        </Link>
      </div>

      {/* Apply & Enquire buttons */}
      <div className="applyknow1">
        <a
          href="https://admissions.vmls.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff', backgroundColor: '#ffffff00' }}
        >
          Apply Now!
        </a>
      </div>
      <div className="applyknow">
        <span
          className="npfWidgetButton npfWidget-87feca6bc65be091ed018757c6c58029"
          style={{ backgroundColor: '#ffffff00' }}
        >
          Enquire Now!
        </span>
      </div>

      {/* Bottom Left: WhatsApp */}
      <a
        href="https://wa.me/917358201234"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          width: '55px',
          height: '55px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
          zIndex: 2000,
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Bottom Right: Scroll to Top */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 2000
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: '#ae0808',
            borderRadius: '50%',
            border: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}
