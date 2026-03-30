import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import SmokeBackground from "@/components/ui/SmokeBackground";

// ── Mouse scroll icon ──
const MouseIcon = () => (
  <div className="relative w-[22px] h-[34px] rounded-full border-2 border-white/40 flex items-start justify-center pt-[6px]">
    <motion.div
      className="w-[3px] h-[6px] rounded-full bg-white/60"
      animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// ── Main Component ──
const HeroSection = () => {
  const ease = [0.16, 1, 0.3, 1] as const;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: "https://calendly.com/nafargidamena" });
    } else {
      window.open("https://calendly.com/nafargidamena", "_blank");
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden select-none bg-black">
      {/* ── Animated smoke background ── */}
      <SmokeBackground />

      {/* ── Overlay vignette for depth ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.92) 80%, #000 100%)`
        }}
      />

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div className="relative z-10 max-w-[900px] mx-auto w-full px-6 md:px-12 flex flex-col items-center">
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="flex items-center gap-2 mb-10 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"
          />
          <span className="text-white/80 text-[12px] md:text-[13px] tracking-wide font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Crafting Unique Brand Identities
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="text-center text-white leading-[1.05] tracking-[-0.02em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(40px, 7vw, 82px)",
              fontWeight: 400,
            }}
          >
            Branding that you
            <br />
            need Indeed
          </motion.h1>
        </div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="text-white/45 text-[14px] md:text-[15px] max-w-[520px] text-center leading-[1.7] mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Elevate your brand with custom identity and package design. Showcase your
          story through bold visuals and strategic design solutions.
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Get Started Now */}
          <button
            onClick={handleBookCall}
            className="gleaming-button group relative px-8 py-4 rounded-2xl overflow-hidden text-white md:text-[15px] text-[14px] font-medium transition-all duration-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Started Now
          </button>

          {/* See Projects */}
          <Link
            to="/#work"
            className="group relative px-6 py-3 rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md text-white md:text-[15px] text-[14px] font-medium transition-all duration-400 hover:border-white/50 hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See Projects
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll down indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 lg:bottom-12 w-full max-w-[500px] flex items-center justify-center gap-4 px-6 z-10"
      >
        <span
          className="text-white/40 text-[11px] md:text-[12px] font-medium flex-nowrap whitespace-nowrap"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Scroll down
        </span>
        
        <div className="h-px bg-white/10 flex-grow" />
        
        <MouseIcon />
        
        <div className="h-px bg-white/10 flex-grow" />
        
        <span
          className="text-white/40 text-[11px] md:text-[12px] font-medium flex-nowrap whitespace-nowrap"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          to see projects
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;