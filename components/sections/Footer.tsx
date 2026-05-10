"use client";

import { MessageCircle, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[rgba(255,255,255,0.08)] px-5 sm:px-8 md:px-10 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-black text-xl text-[#D7E2EA]">Larynx AI</div>
          <p className="font-light text-[#D7E2EA]/40 text-sm max-w-xs">
            AI Sales Infrastructure for Businesses That Cannot Afford to Miss a Lead
          </p>
          <p style={{
            color: "rgba(215,226,234,0.4)",
            fontSize: "0.8rem",
            fontWeight: 300,
            fontFamily: "var(--font-kanit), Kanit, sans-serif",
            marginTop: "0.5rem",
          }}>
            Associate Partner: Matthew Braun
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200">
            About
          </a>
          <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200">
            Services
          </a>
          <a href="#case-studies" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200">
            Case Studies
          </a>
          <a href="#pricing" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200">
            Pricing
          </a>
          <a href="#faq" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200">
            FAQ
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://wa.me/919870209779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-accent transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="mailto:email@larynxai.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-accent transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/raiyan-patel-10967b378/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-accent transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <p className="text-[#D7E2EA]/30 text-xs text-center mt-8">
        © 2026 Larynx AI. All rights reserved.
      </p>
    </footer>
  );
}
