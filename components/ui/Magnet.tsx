"use client";

import { useRef, useState, ReactNode } from "react";

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    if (distance < padding) {
      setTransform(`translate3d(${x / strength}px, ${y / strength}px, 0)`);
    } else {
      setTransform("translate3d(0,0,0)");
    }
  };

  const handleMouseLeave = () => {
    setTransform("translate3d(0,0,0)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      <div
        style={{
          transform,
          transition: transform === "translate3d(0,0,0)" 
            ? "transform 0.6s ease-in-out" 
            : "transform 0.3s ease-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
