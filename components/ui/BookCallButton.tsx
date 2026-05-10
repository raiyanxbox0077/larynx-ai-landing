"use client";
import { motion } from "framer-motion";

interface Props {
  label?: string;
}

export default function BookCallButton({ label = "Book a Discovery Call" }: Props) {
  return (
    <motion.a
      href="https://cal.com/raiyan-patel-jtbxvl/discovery-call"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-[640px]:text-[0.65rem] max-[640px]:py-[10px] max-[640px]:px-4"
      style={{
        display: "inline-block",
        padding: "14px 32px",
        borderRadius: "100px",
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 24px rgba(182,0,168,0.35), inset 4px 4px 12px rgba(119,33,177,0.4)",
        outline: "1.5px solid rgba(255,255,255,0.25)",
        outlineOffset: "-1.5px",
        color: "#ffffff",
        fontFamily: "var(--font-kanit), Kanit, sans-serif",
        fontWeight: 500,
        fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        textDecoration: "none",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
    >
      {label}
    </motion.a>
  );
}

export function GhostButton({ label = "View Results" }: Props) {
  return (
    <motion.a
      href="https://cal.com/raiyan-patel-jtbxvl/discovery-call"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ borderColor: "rgba(215,226,234,0.8)", backgroundColor: "rgba(215,226,234,0.05)" }}
      transition={{ duration: 0.2 }}
      style={{
        display: "inline-block",
        padding: "8px 20px",
        borderRadius: "100px",
        border: "1.5px solid rgba(215,226,234,0.3)",
        color: "#D7E2EA",
        fontFamily: "var(--font-kanit), Kanit, sans-serif",
        fontWeight: 500,
        fontSize: "0.72rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        textDecoration: "none",
        whiteSpace: "nowrap",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      {label}
    </motion.a>
  );
}
