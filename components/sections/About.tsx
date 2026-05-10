"use client";

import FadeIn from "@/components/ui/FadeIn";
import BookCallButton from "@/components/ui/BookCallButton";

export default function About() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      {/* Corner images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="absolute w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="absolute w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
        />
      </FadeIn>

      {/* Center content */}
      <div className="z-10 relative flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center max-w-2xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
            About Larynx AI
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          <FadeIn delay={0.2} y={20}>
            <p style={{
              color: "#D7E2EA",
              fontWeight: 400,
              lineHeight: 1.7,
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              maxWidth: "560px",
              textAlign: "center",
              wordSpacing: "normal",
              letterSpacing: "normal",
              fontFamily: "var(--font-kanit), Kanit, sans-serif"
            }}>
              We build custom AI sales systems for US businesses that are tired of losing leads to slow response times. Inbound voice agents. Outbound voice agents. WhatsApp automation. Email follow-up. All four connected, all running 24 hours a day. We understand your business first and build only what will actually produce results. If AI is not the right fit for something, we will tell you.
            </p>
          </FadeIn>

          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
