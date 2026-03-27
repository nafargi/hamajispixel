import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ── Magnetic cursor blob ──────────────────────────────────────────────────────
const MagneticBlob = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 30, stiffness: 120 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 120 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        width: 600, height: 600,
        left: smoothX, top: smoothY,
        x: "-50%", y: "-50%",
        background: "radial-gradient(circle, rgba(255, 133, 51, 0.05) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
};

// ── Ticker strip ─────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "BRAND IDENTITY", "VISUAL SYSTEMS", "LOGO DESIGN",
  "TYPOGRAPHY", "COLOR THEORY", "ART DIRECTION", "BRAND STRATEGY",
];

const TickerStrip = ({ direction = 1, speed = 40 }: { direction?: number; speed?: number }) => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-0 w-max"
        animate={{ x: direction > 0 ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-0 shrink-0">
            <span className="text-[9px] tracking-[0.5em] uppercase font-bold text-white/10 px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/5 text-[6px]">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Animated counter ─────────────────────────────────────────────────────────
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 24);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
};

// ── Main Component ────────────────────────────────────────────────────────────
const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Stagger easing
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-center rich-black overflow-hidden select-none"
    >
      <MagneticBlob />

      {/* ── Deep background noise grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(252, 252, 252, 1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #000 100%)",
        }}
      />

      {/* ── Thin horizontal rule lines ── */}
      {[15, 85].map((top, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 pointer-events-none z-0"
          style={{ top: `${top}%`, height: "1px", background: "rgba(255, 255, 255, 0.14)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 + i * 0.3, ease }}
        />
      ))}

      {/* ── Vertical accent lines ── */}
      {[12, 88].map((left, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 pointer-events-none z-0 hidden lg:block"
          style={{ left: `${left}%`, width: "1px", background: "rgba(255, 255, 255, 0.14)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.8 + i * 0.2, ease }}
        />
      ))}

      {/* ── Floating diagonal SVG arcs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="absolute w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="arcL" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#ff8533" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="arcR" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#ff8533" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Left convergence arcs */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={`l${i}`}
              d={`M -100 ${150 + i * 100} Q 300 ${400 + i * 30} 700 450`}
              fill="none"
              stroke="url(#arcL)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, delay: 1 + i * 0.4, ease: "easeOut", repeat: Infinity, repeatType: "loop", repeatDelay: 4 }}
            />
          ))}
          {/* Right convergence arcs */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={`r${i}`}
              d={`M 1500 ${150 + i * 100} Q 1100 ${400 + i * 30} 700 450`}
              fill="none"
              stroke="url(#arcR)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, delay: 1.2 + i * 0.4, ease: "easeOut", repeat: Infinity, repeatType: "loop", repeatDelay: 4 }}
            />
          ))}
        </svg>
      </div>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col items-center">

        {/* ── Eyebrow tag ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="h-px w-10 bg-primary/50" />
          <span className="text-primary text-[8px] tracking-[1em] uppercase font-bold">
            Strategic Visual Architecture
          </span>
          <div className="h-px w-10 bg-primary/50" />
        </motion.div>

        {/* ── Headline ── */}
        <h1 className="text-center font-heading uppercase tracking-tightest leading-[0.82] mb-10">

          {/* LINE 1 — massive ghost word */}
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.3, ease }}
              className="block text-[clamp(60px,10vw,140px)] font-bold text-white/[0.04] italic font-editorial"
            >

            </motion.span>
          </div>

          {/* LINE 2 — solid double-word split */}
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.5, ease }}
              className="block text-[clamp(52px,9vw,130px)] font-bold text-white"
            >
              Brand
              <span className="text-primary"> Identity.</span>
            </motion.span>
          </div>

          {/* LINE 3 — smaller, light italic contrast */}
          <div className="overflow-hidden mt-1">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.7, ease }}
              className="block text-[clamp(22px,3.5vw,52px)] font-light text-white/25 italic font-editorial tracking-normal"
            >
              Architected for legacy. Built to last.
            </motion.span>
          </div>
        </h1>

        {/* ── Subtext + divider ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="text-white/30 text-[10px] md:text-[11px] max-w-md text-center leading-relaxed mb-14 font-medium uppercase tracking-[0.35em] italic font-editorial"
        >
          We craft brand identities that hold their standard — clear, consistent, and trusted from the very first impression.
        </motion.p>

        {/* ── CTA row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Primary CTA */}
          <Link
            to="/#work"
            className="group relative px-10 py-4 overflow-hidden border border-primary/40 text-primary text-[9px] tracking-[0.5em] uppercase font-bold transition-all duration-500"
          >
            <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              View Archive
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/#contact"
            className="text-white/30 text-[9px] tracking-[0.5em] uppercase font-bold hover:text-white transition-colors border-b border-white/10 hover:border-white/40 pb-1"
          >
            Connect
          </Link>
        </motion.div>

        {/* ── Social proof stats ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="absolute bottom-20 left-6 md:left-12 hidden md:flex flex-col gap-1"
        >
          <span className="text-primary text-2xl font-bold font-heading tracking-tightest">
            <Counter target={100} suffix="+" />
          </span>
          <span className="text-white/20 text-[8px] tracking-[0.4em] uppercase font-bold">Brands Created</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          className="absolute bottom-20 right-6 md:right-12 hidden md:flex flex-col items-end gap-1"
        >
          <span className="text-primary text-2xl font-bold font-heading tracking-tightest">
            <Counter target={100} suffix="%" />
          </span>
          <span className="text-white/20 text-[8px] tracking-[0.4em] uppercase font-bold">Client Satisfaction</span>
        </motion.div>
      </div>

      {/* ══════════ BOTTOM TICKER ══════════ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05] py-3">
        <TickerStrip direction={1} speed={35} />
      </div>

      {/* ── Bottom scroll cue ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;