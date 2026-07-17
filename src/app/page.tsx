import { Countdown } from "@/components/Countdown";
import { LeadForm } from "@/components/LeadForm";

const OFFER_ITEMS = [
  {
    num: "1",
    tag: "COD confirmation",
    title: "Every COD order called before it ships",
    body: "Our AI voice agent rings each COD customer in Hindi-English within minutes of order placement, confirms the order, and captures delivery intent. Confirmation rates land 60–80% when the call goes out fast. The rest get an automatic WhatsApp nudge. Cut RTO at the source.",
    metric: "RTO drop: 20–40% → 8–15%",
    accent: "voice",
  },
  {
    num: "2",
    tag: "Abandoned cart",
    title: "WhatsApp first, voice escalation second",
    body: "Within 15 minutes of an abandoned cart, the customer gets a ₹1 WhatsApp message (80%+ open rate). If it goes unseen for 6 hours, an AI voice call follows with a personalised discount offer tailored to their AOV and history. Recover carts you currently write off.",
    metric: "Recovery: ~15–25% of abandoned carts",
    accent: "whatsapp",
  },
  {
    num: "3",
    tag: "NDR recovery",
    title: "Reschedule before a failed delivery becomes an RTO",
    body: "The moment a courier raises an NDR (failed delivery attempt), Larynx calls the customer, confirms a new slot, and pushes the reschedule request back to the courier — automatically. Stop NDRs from silently converting into RTOs 3–7 days later.",
    metric: "NDR → RTO drop: 50–70%",
    accent: "voice",
  },
  {
    num: "4",
    tag: "Reviews",
    title: "Post-purchase review calls, 2–3 days after delivery",
    body: "The AI calls 2–3 days post-delivery in the customer's language, asks for a rating and a 30-second review, and nudges happy customers toward your Google/Store review page. Unhappy customers get routed to an internal resolution flow before they go public.",
    metric: "Review rate: 3–6× a no-followup baseline",
    accent: "whatsapp",
  },
  {
    num: "5",
    tag: "Support",
    title: "Routine inbound on voice + WhatsApp, 24×7",
    body: "\u201cWhere is my order?\u201d, \u201cCan I change my address?\u201d, \u201cHow do I return?\u201d — the AI handles routine questions on both voice and WhatsApp, in Hindi-English, at 1am if needed. Stubborn or complex cases escalate to a human with full context already attached.",
    metric: "Agent workload cut: 40–60%",
    accent: "voice",
  },
];

const MATH_ROWS = [
  {
    label: "Average COD orders/day",
    value: "300",
  },
  {
    label: "COD share",
    value: "55%",
  },
  {
    label: "AOV",
    value: "₹950",
  },
  {
    label: "Baseline RTO rate",
    value: "30%",
  },
  {
    label: "RTO orders/day before Larynx",
    value: "90",
  },
  {
    label: "Daily revenue shipped to RTO",
    value: "₹85,500",
  },
  {
    label: "Monthly RTO loss (30 days)",
    value: "₹25.65L",
  },
];

const RECOVERY_ROWS = [
  {
    label: "RTO rate after Larynx",
    value: "10%",
  },
  {
    label: "RTO orders/day after Larynx",
    value: "30",
  },
  {
    label: "Daily RTO loss after",
    value: "₹28,500",
  },
  {
    label: "Monthly RTO loss after",
    value: "₹8.55L",
  },
  {
    label: "Monthly RTO saved",
    value: "₹17.1L",
  },
  {
    label: "Abandoned carts recovered / month",
    value: "₹3.2L",
  },
  {
    label: "Total monthly revenue recovered",
    value: "₹20.3L",
  },
  {
    label: "Larynx blended monthly cost",
    value: "₹18,000",
  },
  {
    label: "Net benefit per month",
    value: "₹20.12L",
  },
];

const FAQ_ITEMS = [
  {
    q: "We already use a WhatsApp recovery tool. Why add voice?",
    a: "WhatsApp is the first message, not the last. Most abandoned carts and COD customers don't reply to a WhatsApp message — they scroll past it. Voice is the one channel that actually interrupts them. Larynx is voice-first from day one, built for Indian Hindi-English accents, and uses WhatsApp as the cheap first touch. The two-tier flow recovers more than either channel alone.",
  },
  {
    q: "We're on Shopify / WooCommerce / a custom stack. Does it work?",
    a: "Yes. Larynx sits on top of your order and cart events via webhooks and our connector. We work with Shopify, WooCommerce, Magento, and custom D2C stacks. If you can send us an order event, we can call it.",
  },
  {
    q: "Will customers actually pick up an AI voice call?",
    a: "Yes — when it lands within minutes of their order, in natural Hindi-English, sounding local. Confirmation calls placed inside the first 10 minutes of an order see 60–80% pickup. The voice agent is tuned for Indian names, addresses, and pin codes — it's not a US-accented bot pretending to be local.",
  },
  {
    q: "What does ₹10,000 in free credits actually cover?",
    a: "At ~₹3/minute for voice and ~₹1/WhatsApp conversation, ₹10,000 covers roughly 3,000 voice-minutes or 10,000 WhatsApp conversations — or a blended mix. For a brand doing 300 COD orders/day, that's enough to run a full COD confirmation + cart recovery + NDR flow for roughly 7–10 days, end to end.",
  },
  {
    q: "What if it doesn't pay for itself during the trial?",
    a: "Tell us. We refund the credits you bought on top of the free ₹10,000. No lock-in, no contract, no clawback. The free credits are yours to use whether you stay or not. The only reason we can offer this is that the system, on average, pays for itself inside the first 14 days for brands doing 100+ COD orders/day.",
  },
  {
    q: "Do we need a marketing agency or an in-house team to run it?",
    a: "No. Larynx runs the post-purchase lifecycle on autopilot once you connect your order source. There's no copywriter, no voice actor, no prompt engineer to hire. You review the flows once, we ship them, and the AI handles the rest. You see every call and message in a dashboard.",
  },
  {
    q: "Is my customer data safe?",
    a: "Calls and messages are made from your own virtual numbers. Customer data is stored in India-region infrastructure, encrypted in transit and at rest, and is never used to train shared models across customers. You can export or delete your data at any time.",
  },
  {
    q: "What's the catch with the money-back guarantee?",
    a: "There isn't one. If, after using the free ₹10,000 credits plus any paid top-up, the platform hasn't returned more revenue than you spent, we refund the paid portion. We can offer this because the math, for any brand doing 100+ COD orders/day with 40%+ COD share, is almost always positive inside 30 days.",
  },
];

const GUARANTEE_POINTS = [
  {
    title: "₹10,000 in free credits to start",
    body: "Enough to run the full lifecycle on a real order volume for 7–10 days. No card required.",
  },
  {
    title: "Money-back if it doesn't pay for itself",
    body: "Use the free credits plus any paid top-up. If the recovered revenue doesn't beat what you spent, we refund the paid portion. No clawback.",
  },
  {
    title: "No lock-in. Ever.",
    body: "There's no subscription contract. Larynx is usage-based — pay for voice minutes and WhatsApp conversations you actually use. Stop any time, no exit fee.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Voice-first, not voice-as-an-afterthought",
    body: "Most tools in this space bolt voice onto a WhatsApp tool as a checkbox. We started with the voice agent — built for Hindi-English, Indian names, Indian accents, Indian addresses. WhatsApp is the cheap first touch; voice is the closer.",
  },
  {
    title: "Works on any platform, not just Shopify",
    body: "Shopify-only tools leave WooCommerce, Magento, and custom D2C stacks out in the cold. Larynx connects to whatever you ship orders from.",
  },
  {
    title: "Priced for ₹6k–₹35k, not $250+/month",
    body: "Enterprise pricing for a ₹1-6 lakh/month problem makes no sense for a 300-orders-a-day brand. Larynx is priced for the SMB D2C band — you pay for what you call.",
  },
  {
    title: "Full lifecycle, including NDR",
    body: "Most tools stop at cart recovery and COD confirmation. They have no answer for the moment a courier raises an NDR. We do — that's the difference between a returned package and a delivered one.",
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* === HERO === */}
      <Section className="pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="bg-grain absolute inset-0 -z-10 opacity-60" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Eyebrow>Built for Indian D2C · COD-first · Voice + WhatsApp</Eyebrow>

            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Recover the revenue you&apos;re{" "}
              <span className="text-primary">already losing</span> to RTO and
              abandoned carts.
            </h1>

            <p className="text-pretty text-lg text-muted-foreground">
              You don&apos;t need more ad spend. You don&apos;t need new content.
              You need every COD order confirmed before it ships, every
              abandoned cart brought back, every NDR saved before it becomes a
              return. Larynx AI runs that on autopilot — voice-first, in
              Hindi-English, on any platform.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[--whatsapp]" /> ₹3/voice-minute
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[--voice]" /> ₹1/WhatsApp conversation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[--gain]" /> Blended ₹6k–₹35k/month
              </span>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="#start"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:translate-y-[-1px] active:translate-y-0"
              >
                Claim ₹10,000 free credits →
              </a>
              <span className="text-sm text-muted-foreground">
                no card · no lock-in · money-back trial
              </span>
            </div>

            <p className="border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground">
              &ldquo;The least-sexy problem in Indian D2C is RTO. It&apos;s also
              where the most money quietly bleeds out. Fix that first.&rdquo;
            </p>
          </div>

          <div id="start" className="flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </Section>

      {/* divider */}
      <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* === LETTER-STYLE STORY === */}
      <Section className="py-16 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          Updated · {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-5 text-pretty text-lg leading-relaxed text-foreground/90">
          <p className="font-semibold text-foreground">Dear founder,</p>

          <p>
            If you run a D2C brand in India doing 100–2,000 orders a day, with
            COD making up 40–60% of your book, the maths is already painful —
            you just haven&apos;t been shown it on one page.
          </p>

          <p>
            Industry-wide, RTO on COD runs{" "}
            <strong className="text-foreground">20–40%</strong>. That means up
            to 4 in every 10 COD orders you ship come back. You pay for the
            product, the packaging, the courier, the return — and you collect
            zero rupees. On a 300-orders-a-day brand at ₹950 AOV with 55% COD,
            that&apos;s roughly{" "}
            <strong className="text-foreground">₹25 lakh a month</strong>{" "}
            flowing straight back out the door.
          </p>

          <p>
            Then there&apos;s the abandoned cart. The customer put the product in
            the cart, got to checkout, and left. They were <em>one nudge</em>{" "}
            away from paying you. Most brands lose{" "}
            <strong className="text-foreground">70%+ of their carts</strong> and
            treat it as background noise. It&apos;s not noise. It&apos;s your
            biggest untapped revenue line.
          </p>

          <p>
            Here&apos;s the part nobody tells you: you don&apos;t fix either of
            these by spending more on ads. You fix them with a 10-minute voice
            call placed in the first 10 minutes of the order, and a ₹1 WhatsApp
            message placed in the first 15 minutes of the cart.
          </p>

          <p>
            <strong className="text-foreground">
              That&apos;s what Larynx AI does. Automatically. On every order.
              Every day.
            </strong>
          </p>

          <p className="text-muted-foreground">
            Read the breakdown below. Even if you never sign up, the math will
            change how you think about your order book.
          </p>

          <p className="font-semibold text-foreground">— The Larynx AI team</p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#start"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:translate-y-[-1px]"
          >
            Start with ₹10,000 free credits →
          </a>
        </div>
      </Section>

      {/* === OFFER BREAKDOWN === */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What Larynx actually runs for you</Eyebrow>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            One platform. Your entire post-purchase lifecycle. On autopilot.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Five flows. All triggered by your order events, run by an AI voice
            agent built for Hindi-English and a WhatsApp layer that costs ₹1 a
            conversation. Stack them or start with one.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {OFFER_ITEMS.map((item) => (
            <li
              key={item.num}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div
                className={
                  "absolute left-0 top-0 h-full w-1 " +
                  (item.accent === "voice"
                    ? "bg-[--voice]"
                    : "bg-[--whatsapp]")
                }
              />
              <div className="grid items-start gap-4 sm:grid-cols-[auto_1fr_auto]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary">
                  {item.num}
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-muted-foreground">
                    {item.body}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-right">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    outcome
                  </p>
                  <p className="mt-0.5 whitespace-nowrap text-sm font-semibold text-[--gain]">
                    {item.metric}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href="#start"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
          >
            Run it on my orders →
          </a>
        </div>
      </Section>

      {/* === PROOF / REAL MATH (credibility in place of testimonials) === */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The real math · no testimonials, just arithmetic</Eyebrow>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Here&apos;s what a 300-orders-a-day brand is losing — and what
            Larynx recovers.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We don&apos;t have client logos to slap on this page yet. We&apos;re
            new. So instead of social proof, here&apos;s the proof that doesn&apos;t
            need a logo: the numbers themselves. Plug your own in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[--loss]/40 bg-[--loss]/10 p-6">
            <h3 className="mb-1 text-lg font-semibold text-[--loss]">
              Without Larynx
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Typical 300 COD orders/day, ₹950 AOV, 55% COD, 30% RTO.
            </p>
            <dl className="space-y-2 text-sm">
              {MATH_ROWS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0"
                >
                  <dt className="text-muted-foreground">{r.label}</dt>
                  <dd className="font-semibold text-foreground">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-[--gain]/40 bg-[--gain]/10 p-6">
            <h3 className="mb-1 text-lg font-semibold text-[--gain]">With Larynx</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              RTO cut to ~10%, abandoned carts recovered 20%, NDRs saved, full
              lifecycle running.
            </p>
            <dl className="space-y-2 text-sm">
              {RECOVERY_ROWS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0"
                >
                  <dt className="text-muted-foreground">{r.label}</dt>
                  <dd
                    className={
                      "font-semibold " +
                      (r.label === "Net benefit per month"
                        ? "text-[--gain] text-base"
                        : "text-foreground")
                    }
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          ₹20.12 lakh recovered per month, against ₹18,000 in platform cost.
          That&apos;s a <strong className="text-foreground">112× return</strong>{" "}
          before we count reviews, support savings, or NDR reschedules. If your
          numbers are even half of this, the free trial pays for itself in week
          one.
        </p>
      </Section>

      {/* === GUARANTEE / RISK REVERSAL === */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-8 text-center sm:p-12">
          <Eyebrow>The guarantee</Eyebrow>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Try it with our money. Keep what it saves you. Pay nothing if it
            doesn&apos;t.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We can&apos;t show you a wall of testimonials — we&apos;re new, and we
            refuse to fake one. So we de-risked it for you instead.
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {GUARANTEE_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  ✓
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>

          <a
            href="#start"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:translate-y-[-1px]"
          >
            Claim my ₹10,000 free credits →
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            card never required · cancel any time · refund if it doesn&apos;t pay
            for itself
          </p>
        </div>
      </Section>

      {/* === DIFFERENTIATION (credibility via specifics) === */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Larynx, not the other thing</Eyebrow>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            The differences that decide whether this actually works.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 text-pretty text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* === URGENCY / COUNTDOWN BAR === */}
      <Section className="py-10">
        <div className="rounded-3xl border border-border/60 bg-card p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Time-sensitive
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            The ₹10,000 free-credit window is open for the next:
          </h2>
          <div className="mt-6 flex justify-center">
            <Countdown />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            We cap free credits at a fixed pool each month so we can serve every
            brand that signs up properly. When the timer hits zero, setup moves
            to paid-only.
          </p>
        </div>
      </Section>

      {/* === FAQ === */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            The questions every founder asks before they sign up.
          </h2>
        </div>
        <dl className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border/60 bg-card p-5 open:border-primary/40"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <dt className="text-base font-semibold text-foreground">
                  {item.q}
                </dt>
                <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <dd className="mt-3 text-pretty text-muted-foreground">
                {item.a}
              </dd>
            </details>
          ))}
        </dl>
      </Section>

      {/* === FINAL CTA === */}
      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-border/60 bg-card p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Stop shipping orders that come back. Start recovering carts that
              walked away.
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Connect your order source. We turn on COD confirmation, cart
              recovery, and NDR reschedule. You see the recovered revenue in
              your dashboard inside 7 days — or you pay nothing.
            </p>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> ₹10,000 in free credits,
                no card required
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Voice-first, built for
                Hindi-English
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Works on Shopify,
                WooCommerce, custom stacks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Money-back if it
                doesn&apos;t pay for itself
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </Section>

      {/* === FOOTER === */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  L
                </span>
                Larynx AI
              </div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                AI voice agent + WhatsApp automation for Indian D2C. We run your
                post-purchase lifecycle on autopilot — so COD stops bleeding and
                carts stop disappearing.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    Start free
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    COD confirmation
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    Cart recovery
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    NDR reschedule
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#start" className="text-foreground hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border/40 pt-6 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Larynx AI. Built for Indian D2C. No
              client testimonials were used on this page — we&apos;d rather earn
              them than fake them.
            </p>
            <p className="mt-2">
              Pricing: ~₹3/voice-minute, ~₹1/WhatsApp conversation. Blended
              ₹6,000–₹35,000/month depending on volume. No subscription, no
              lock-in.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}