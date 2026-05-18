"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const NPF_WIDGET_ID = "87feca6bc65be091ed018757c6c58029";

export default function FloatingActions() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
    script.async = true;
    script.onload = () => {
      const win = window as Window & {
        NpfWidgetsInit?: new (config: Record<string, string>) => void;
      };
      if (win.NpfWidgetsInit) {
        new win.NpfWidgetsInit({
          widgetId: NPF_WIDGET_ID,
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

    const vmlsWidgetScript = document.createElement("script");
    vmlsWidgetScript.src =
      "https://universitywidgets.blob.core.windows.net/widgetstore/vmls-widget.js";
    vmlsWidgetScript.async = true;
    document.body.appendChild(vmlsWidgetScript);

    const chatbotTimer = setTimeout(() => {
      const chatDiv = document.createElement("div");
      chatDiv.className = "npf_chatbots";
      chatDiv.setAttribute("data-w", "1189388fc18c4ac0952bc3816b615524");
      chatDiv.style.display = "none";
      document.body.appendChild(chatDiv);

      const chatbotScript = document.createElement("script");
      chatbotScript.type = "text/javascript";
      chatbotScript.async = true;
      chatbotScript.src =
        "https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/5747642c1669bd257/1189388fc18c4ac0952bc3816b615524";
      document.body.appendChild(chatbotScript);
    }, 5000);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.body.contains(vmlsWidgetScript))
        document.body.removeChild(vmlsWidgetScript);
      clearTimeout(chatbotTimer);
    };
  }, []);

  return (
    <>
      {/* Left: Chat with Student — vertical edge tab */}
      <div className="fixed left-0 top-1/2 z-[2000] -translate-y-1/2">
        <Link
          href="/chat-with-student"
          className="vertical-edge-btn vertical-edge-btn--chat font-inter"
        >
          Chat with a Student
        </Link>
      </div>

      {/* Right: Apply & Enquire — stacked vertical tabs with glow */}
      <div className="fixed right-0 top-1/2 z-[2000] flex -translate-y-1/2 flex-col gap-1">
        <Link
          href="https://admissions.vmls.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="vertical-edge-btn vertical-edge-btn--apply font-inter"
        >
          Apply Now!
        </Link>

        <span
          className={`vertical-edge-btn vertical-edge-btn--enquire npfWidgetButton npfWidget-${NPF_WIDGET_ID} font-inter`}
          role="button"
          tabIndex={0}
        >
          Enquire Now!
        </span>
      </div>

      {/* Bottom Left: WhatsApp */}
      <a
        href="https://wa.me/917358201234"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-[2000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110"
      >
        <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Bottom Right: Scroll to top */}
      <div className="fixed bottom-6 right-6 z-[2000]">
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-none bg-[#ae0808] text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </>
  );
}
