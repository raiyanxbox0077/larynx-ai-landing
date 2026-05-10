"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedText({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={`font-medium leading-relaxed ${className}`} style={style}>
      {characters.map((char, i) => {
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.5 + i * 0.02, 1],
          [0.2, 1, 0.2]
        );
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char}</span>
            <motion.span
              style={{ opacity, position: "absolute", left: 0, top: 0 }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
