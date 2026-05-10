"use client";
import BookCallButton from "@/components/ui/BookCallButton";
import FadeIn from "@/components/ui/FadeIn";

const PLANS = [
  {
    title: "Voice Agents",
    price: "4-5¢",
    unit: "per minute",
    description: "Pay only for actual call time. No seat fees. No per-user charges. The more your agent works, the more you get.",
  },
  {
    title: "Monthly Maintenance",
    price: "$500-600",
    unit: "per month",
    description: "Monitoring, updates, improvements, and support every month. We stay responsible for the system performing well.",
  },
  {
    title: "Setup Fee",
    price: "$1.5K-3K",
    unit: "one time",
    description: "Full custom build - discovery, design, development, testing, and go-live. Depends on complexity.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "#0C0C0C",
        padding: "clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)",
      }}
    >
      <FadeIn delay={0}>
        <p style={{ color: "#f0b429", fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", marginBottom: "1rem" }}>
          PRICING
        </p>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1,
            fontSize: "clamp(2.5rem, 8vw, 100px)",
            marginBottom: "1.5rem",
          }}
        >
          Transparent Pricing
        </h2>
        <p style={{
          color: "rgba(215,226,234,0.55)",
          textAlign: "center",
          fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
          fontWeight: 300,
          lineHeight: 1.6,
          maxWidth: "560px",
          margin: "0 auto 4rem",
        }}>
          A junior sales rep costs $3,000-$5,000 a month. Our system runs 24/7, never calls in sick, and gets better over time.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-12">
        {PLANS.map((plan, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20}>
            <div style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "2rem",
              textAlign: "center",
            }}>
              <p style={{
                color: "rgba(215,226,234,0.5)",
                fontSize: "0.75rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1.25rem",
              }}>
                {plan.title}
              </p>
              <p style={{
                color: "#D7E2EA",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 8vw, 3rem)",
                lineHeight: 1,
                fontFamily: "var(--font-kanit), Kanit, sans-serif",
                marginBottom: "0.5rem",
              }}>
                {plan.price}
              </p>
              <p style={{
                color: "#f0b429",
                fontSize: "0.7rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1.25rem",
              }}>
                {plan.unit}
              </p>
              <p style={{
                color: "rgba(215,226,234,0.5)",
                fontSize: "0.88rem",
                fontWeight: 300,
                lineHeight: 1.65,
              }}>
                {plan.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p style={{
          color: "rgba(215,226,234,0.3)",
          textAlign: "center",
          fontSize: "0.85rem",
          fontWeight: 300,
          marginBottom: "2.5rem",
        }}>
          One full-time sales rep: $36,000-$60,000/year. Larynx AI runs 24/7 for a fraction of that.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BookCallButton />
        </div>
      </FadeIn>
    </section>
  );
}
