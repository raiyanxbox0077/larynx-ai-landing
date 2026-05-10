"use client";

import FadeIn from "@/components/ui/FadeIn";
import BookCallButton from "@/components/ui/BookCallButton";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-32 sm:py-40">
      <FadeIn delay={0} y={30}>
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.1em] font-medium" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
            READY
          </p>

          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 100px)", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
            STILL FOLLOWING UP LEADS MANUALLY?
          </h2>

          <p className="text-[#D7E2EA] font-light text-base sm:text-lg leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
            Book a 20-minute discovery call. We will look at your current sales process, identify where an AI system would make the biggest difference, and give you a straight answer on whether this is right for your business. No pitch. No pressure. Just an honest conversation.
          </p>

          <BookCallButton />

          <p className="text-[#D7E2EA]/40 text-sm" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
            20 minutes. No commitment. We will tell you exactly what we would build and what it would cost.
          </p>

          <a
            href="https://wa.me/919870209779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 text-sm hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}
          >
            Prefer WhatsApp?
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
