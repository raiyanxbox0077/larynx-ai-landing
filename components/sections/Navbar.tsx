"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import BookCallButton from "@/components/ui/BookCallButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FadeIn delay={0} y={-20}>
        <nav className="sticky top-0 z-50 h-16 bg-[rgba(12,12,12,0.85)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] flex justify-between items-center px-6 md:px-10">
          <div className="font-black text-xl text-[#D7E2EA] max-[640px]:text-[1.1rem]">Larynx AI</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              Case Studies
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href")?.slice(1);
                if (id) {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 transition-opacity duration-200"
            >
              Contact
            </a>
            <div className="max-[640px]:flex">
              <BookCallButton />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#D7E2EA]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </FadeIn>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C0C0C] flex flex-col items-center justify-center gap-8 md:hidden">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            Services
          </a>
          <a
            href="#case-studies"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            Case Studies
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const id = e.currentTarget.getAttribute("href")?.slice(1);
              if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity"
          >
            Contact
          </a>
          <BookCallButton />
        </div>
      )}
    </>
  );
}
