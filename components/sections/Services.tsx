"use client";

import FadeIn from "@/components/ui/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "3D AI VOICE AGENTS",
    description: "The moment a lead comes in from any source - Zillow, Facebook ads, Google ads, your website - our AI agent calls them automatically. It speaks naturally, qualifies the lead, answers questions, and books appointments into your calendar. No human needed for first contact. Runs 24 hours a day.",
  },
  {
    number: "02",
    name: "INBOUND CALL HANDLING",
    description: "Every incoming call gets answered instantly. No hold music. No missed calls going to voicemail. The AI agent handles the conversation, captures the information you need, and either books the appointment or routes the call based on your rules. Works at 3am the same as 3pm.",
  },
  {
    number: "03",
    name: "WHATSAPP AUTOMATION",
    description: "An AI agent on WhatsApp that responds to leads the moment they message, qualifies them through conversation, follows up automatically, and keeps prospects warm without any manual effort. Built for high-volume lead sources and ad campaigns driving WhatsApp conversations.",
  },
  {
    number: "04",
    name: "EMAIL AUTOMATION",
    description: "Automated email sequences that follow up with new leads, re-engage cold prospects, and keep your pipeline moving. Every email written specifically for your business and your customer.",
  },
  {
    number: "05",
    name: "CONTENT AUTOMATION",
    description: "AI-powered content pipeline that writes, formats, and publishes SEO-optimised articles and social posts on a consistent schedule. Built for businesses that need to produce content at scale without building a content team.",
  },
  {
    number: "06",
    name: "PERSONALISED EMAIL OUTREACH",
    description: "Mass cold email campaigns that feel personal. One click sends individually tailored emails to hundreds of prospects. Built for founders doing outbound sales who need reach without sacrificing quality.",
  },
  {
    number: "07",
    name: "CUSTOM AI SOLUTIONS",
    description: "If your business has a repetitive internal process that costs time and money, we can automate it. Lead routing, data entry, report generation, follow-up workflows - we build what your specific operation needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center" style={{ fontSize: "clamp(3rem, 12vw, 160px)", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-28">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className={`flex gap-4 py-8 sm:py-10 md:py-12 max-[480px]:flex-col max-[480px]:gap-2 ${
                i === 0 ? "border-t border-b border-[rgba(12,12,12,0.15)]" : "border-b border-[rgba(12,12,12,0.15)]"
              }`}
            >
              <div
                className="text-[#0C0C0C] font-black flex-shrink-0 max-[480px]:w-full max-[480px]:mb-2"
                style={{
                  fontSize: "clamp(2rem, 8vw, 6rem)",
                  minWidth: "clamp(100px, 140px, 180px)",
                  fontFamily: "var(--font-kanit), Kanit, sans-serif",
                }}
              >
                {service.number}
              </div>
              <div className="flex flex-col max-[480px]:flex-col">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(0.9rem, 3vw, 1.5rem)", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[rgba(12,12,12,0.6)]"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", maxWidth: "2xl", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
