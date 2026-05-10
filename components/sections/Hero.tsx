"use client";
import { useEffect, useRef } from "react";
import BookCallButton from "@/components/ui/BookCallButton";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let t = 0;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,h*0.48);
      g.addColorStop(0,"rgba(240,180,41,0.13)");
      g.addColorStop(0.6,"rgba(182,0,168,0.07)");
      g.addColorStop(1,"rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(w/2,h/2,h*0.48,0,Math.PI*2);
      ctx.fillStyle=g; ctx.fill();

      ctx.save();
      ctx.translate(w/2,h/2);
      ctx.rotate(t*0.25);
      ctx.beginPath();
      ctx.ellipse(0,0,h*0.35,h*0.16,0,0,Math.PI*2);
      ctx.strokeStyle="rgba(240,180,41,0.18)";
      ctx.lineWidth=1; ctx.stroke();
      ctx.beginPath();
      ctx.arc(h*0.35,0,5,0,Math.PI*2);
      ctx.fillStyle="rgba(240,180,41,1)"; ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(w/2,h/2);
      ctx.rotate(-t*0.18);
      ctx.beginPath();
      ctx.ellipse(0,0,h*0.22,h*0.24,0.6,0,Math.PI*2);
      ctx.strokeStyle="rgba(182,0,168,0.14)";
      ctx.lineWidth=1; ctx.stroke();
      ctx.beginPath();
      ctx.arc(h*0.22,0,3,0,Math.PI*2);
      ctx.fillStyle="rgba(182,0,168,0.9)"; ctx.fill();
      ctx.restore();

      const bars=42, maxBarH=h*0.22, totalW=h*0.52;
      const gap=totalW/bars, sx=w/2-totalW/2;
      for(let i=0;i<bars;i++){
        const x=sx+i*gap;
        const v=Math.sin(t*2.2+i*0.38)*0.5+0.5;
        const v2=Math.sin(t*1.4+i*0.65+1.5)*0.3+0.3;
        const bh=(v*0.7+v2*0.3)*maxBarH+3;
        const bg=ctx.createLinearGradient(x,h/2-bh/2,x,h/2+bh/2);
        bg.addColorStop(0,"rgba(240,180,41,1)");
        bg.addColorStop(0.5,"rgba(182,0,168,0.9)");
        bg.addColorStop(1,"rgba(240,180,41,1)");
        ctx.beginPath();
        ctx.roundRect(x-1.5,h/2-bh/2,3,bh,1.5);
        ctx.fillStyle=bg; ctx.fill();
      }

      const p=Math.sin(t*1.8)*0.25+0.75;
      const cg=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,h*0.09*p);
      cg.addColorStop(0,"rgba(240,180,41,0.5)");
      cg.addColorStop(1,"rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(w/2,h/2,h*0.09*p,0,Math.PI*2);
      ctx.fillStyle=cg; ctx.fill();

      t+=0.018;
      animId=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(animId); window.removeEventListener("resize",setSize); };
  },[]);

  return (
    <section style={{
      width: "100%",
      height: "100svh",
      minHeight: "600px",
      backgroundColor: "#0C0C0C",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
    }}>
      {/* Headline */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading" style={{
            fontFamily: "var(--font-kanit), Kanit, sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textAlign: "center",
            fontSize: "clamp(1.8rem, 7vw, 8vw)",
          }}>
            YOUR LEADS DESERVE<br/>BETTER THAN VOICEMAIL
          </h1>
        </FadeIn>
      </div>

      {/* Canvas */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <canvas ref={canvasRef} style={{
          width: "clamp(320px, 75vw, 600px)",
          height: "clamp(320px, 75vw, 600px)",
        }}/>
      </div>

      {/* Bottom bar — ALWAYS at bottom */}
      <div className="flex flex-row justify-between items-end w-full px-[clamp(1.5rem,4vw,3rem)] pb-[clamp(1.5rem,3vh,2.5rem)] max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:items-start" style={{
        position: "relative",
        zIndex: 2,
      }}>
        <FadeIn delay={0.35} y={20}>
          <p style={{
            color: "#D7E2EA",
            fontFamily: "var(--font-kanit), Kanit, sans-serif",
            fontWeight: 300,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1.5,
            fontSize: "clamp(0.6rem, 1vw, 0.9rem)",
            maxWidth: "clamp(150px, 18vw, 220px)",
          }}>
            an ai sales system that calls, qualifies, and books - so you never miss a lead again
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <BookCallButton />
        </FadeIn>
      </div>
    </section>
  );
}
