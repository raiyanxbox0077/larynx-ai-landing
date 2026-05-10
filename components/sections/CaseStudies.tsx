"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
  {
    num: "01",
    category: "WhatsApp AI System",
    name: "Lead Spring",
    description: "Ads to WhatsApp AI qualification system. Leads from paid ads contacted instantly via WhatsApp, qualified through conversation, then called by a voice agent. 40% conversion rate on inbound ad leads. 13 discovery calls booked in one week, fully automated.",
    images: [
      "https://res.cloudinary.com/dustdgjk5/image/upload/v1777549650/Gemini_Generated_Image_1efa2g1efa2g1efa_lkxltu.png",
      "https://res.cloudinary.com/dustdgjk5/image/upload/v1777550987/Gemini_Generated_Image_hfposthfposthfpo_mo3mb6.png",
      "https://res.cloudinary.com/dustdgjk5/image/upload/v1777548444/Screenshot_2026-04-30_at_4.11.13_PM_b7zcz2.png",
    ],
  },
  {
    num: "02",
    category: "WhatsApp AI System",
    name: "Manzil Realty",
    description: "WhatsApp AI sales agent for real estate lead qualification. Every lead instantly engaged on WhatsApp, qualified based on property preferences, pushed toward a site visit booking. Team only steps in for pre-qualified buyers.",
    images: [
      "https://res.cloudinary.com/dustdgjk5/image/upload/v1777550708/Gemini_Generated_Image_e6z4qde6z4qde6z4_a28u4t.png",
      null,
      null,
    ],
  },
  {
    num: "03",
    category: "Content Automation",
    name: "VanishID",
    description: "SEO content automation pipeline for a US-based cybersecurity company. AI system generates, formats, and publishes SEO-optimised articles on a consistent schedule. First US client.",
    images: [
      "https://res.cloudinary.com/dustdgjk5/image/upload/v1777550245/Gemini_Generated_Image_6w3qss6w3qss6w3q_1_mwgxyn.png",
      null,
      null,
    ],
  },
];

function Card({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (CARDS.length - 1 - index) * 0.03]);

  const Placeholder = ({ label }: { label: string }) => (
    <div style={{
      width: "100%", height: "100%",
      backgroundColor: "#1a1a1a",
      borderRadius: "20px",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ color: "#f0b429", fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
        {label}
      </span>
    </div>
  );

  return (
    <div ref={ref} style={{ height: "90vh", position: "relative" }}>
      <motion.div
        style={{
          scale,
          position: "sticky",
          top: `${80 + index * 24}px`,
          backgroundColor: "#0C0C0C",
          border: "1.5px solid rgba(215,226,234,0.3)",
          borderRadius: "24px",
          padding: "1rem",
          transformOrigin: "top center",
          willChange: "transform",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <span
            className="hero-heading"
            style={{ fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, flexShrink: 0, fontFamily: "var(--font-kanit), Kanit, sans-serif" }}
          >
            {card.num}
          </span>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#f0b429", fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
              {card.category}
            </p>
            <p style={{ color: "#D7E2EA", fontWeight: 900, fontSize: "clamp(1.1rem, 2.5vw, 2rem)", textTransform: "uppercase", lineHeight: 1.1, fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
              {card.name}
            </p>
          </div>
          <a
            href="https://cal.com/raiyan-patel-jtbxvl/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1.5px solid rgba(215,226,234,0.4)",
              borderRadius: "100px",
              padding: "8px 18px",
              color: "#D7E2EA",
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              backgroundColor: "transparent",
            }}
          >
            View Results
          </a>
        </div>

        {/* Description */}
        <p style={{ color: "rgba(215,226,234,0.65)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "640px", fontWeight: 300, fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
          {card.description}
        </p>

        {/* Images */}
        {(() => {
          const hasAllImages = card.images.filter(Boolean).length === 3;
          const hasSomeImages = card.images.filter(Boolean).length > 0;

          if (hasAllImages) {
            return (
              <div className="flex gap-3 max-[640px]:flex-col" style={{ height: "clamp(280px, 35vw, 460px)" }}>
                {/* Left col */}
                <div className="flex flex-col gap-3 max-[640px]:w-full" style={{ width: "40%" }}>
                  <div className="h-48 max-[640px]:h-[200px]" style={{ borderRadius: "20px", overflow: "hidden" }}>
                    {card.images[0]
                      ? <img src={card.images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      : <Placeholder label={card.name} />}
                  </div>
                  <div className="h-48 max-[640px]:h-[200px]" style={{ borderRadius: "20px", overflow: "hidden" }}>
                    {card.images[1]
                      ? <img src={card.images[1]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      : <Placeholder label={card.name} />}
                  </div>
                </div>
                {/* Right col */}
                <div className="max-[640px]:w-full max-[640px]:h-[240px]" style={{ flex: 1, borderRadius: "20px", overflow: "hidden" }}>
                  {card.images[2]
                    ? <img src={card.images[2]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    : <Placeholder label={card.name} />}
                </div>
              </div>
            );
          }

          if (!hasAllImages && hasSomeImages) {
            const firstImage = card.images.find(Boolean);
            return (
              <div style={{ borderRadius: "20px", overflow: "hidden", height: "clamp(300px, 40vw, 480px)", width: "100%" }}>
                {firstImage
                  ? <img src={firstImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  : <Placeholder label={card.name} />}
              </div>
            );
          }

          return null;
        })()}
      </motion.div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      style={{
        backgroundColor: "#0C0C0C",
        borderRadius: "48px 48px 0 0",
        marginTop: "-40px",
        position: "relative",
        zIndex: 2,
        padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem)",
      }}
    >
      <h2
        className="hero-heading"
        style={{
          fontWeight: 900,
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: 1,
          fontSize: "clamp(2.5rem, 10vw, 120px)",
          marginBottom: "clamp(2rem, 5vw, 4rem)",
          fontFamily: "var(--font-kanit), Kanit, sans-serif",
        }}
      >
        Case Studies
      </h2>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {CARDS.map((card, i) => (
          <Card key={card.num} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
