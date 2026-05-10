"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const FAQS = [
  {
    question: "Does this work for my industry?",
    answer: "If your business involves following up with leads by phone, WhatsApp, or email, this almost certainly applies to you. We have worked across real estate, lead generation, and cybersecurity. On the discovery call we spend time understanding your business first. If AI is not the right fit for something, we will tell you - we do not build systems where they will not produce results.",
  },
  {
    question: "Will the AI sound robotic on calls?",
    answer: "No. The voice agents we build use conversational AI that sounds natural, pauses correctly, handles interruptions, and adapts to what the caller says. Most people do not realise they are speaking to an AI until after the call ends.",
  },
  {
    question: "What happens if the AI cannot handle a question?",
    answer: "We configure escalation rules during the build. If a caller asks something outside the agent's scope, the system can transfer the call, send a notification to your team, or collect the question and follow up. You define exactly where the handoff happens.",
  },
  {
    question: "How long does setup take?",
    answer: "Typically two to four weeks from the discovery call to go-live. This includes understanding your business, building the system, testing fully, and making sure everything works before anything touches a real lead.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer: "None. We handle all technical setup, hosting, and maintenance. You interact through your normal tools - your calendar, your CRM, your phone. We manage everything behind the scenes.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Changes are covered in the monthly maintenance. If your business changes, your script needs updating, or you want to add a new flow - we handle it as part of the ongoing relationship.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <p className="text-accent text-xs uppercase tracking-[0.1em] font-medium mb-4 text-center" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
        COMMON QUESTIONS
      </p>

      <FadeIn delay={0}>
        <h2 className="hero-heading font-black uppercase text-center" style={{ fontSize: "clamp(3rem, 12vw, 160px)", fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
          FAQ
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto mt-16">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.05} y={15}>
            <div className="border-b border-[rgba(255,255,255,0.08)] py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full cursor-pointer"
              >
                <span className="font-medium text-[#D7E2EA] text-lg sm:text-xl" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="text-accent" size={24} />
                ) : (
                  <Plus className="text-[rgba(215,226,234,0.5)]" size={24} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-light text-[#D7E2EA]/60 text-base leading-relaxed pt-4" style={{ fontFamily: "var(--font-kanit), Kanit, sans-serif" }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
