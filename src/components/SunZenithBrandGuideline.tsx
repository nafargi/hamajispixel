import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { MoreProjects } from "./MoreProjects";

// SunZenith Assets
import logoMainBlue from "@/assets/sunzenith/Transparent_Main_logo_blue@3x.png";
import logoMainBlack from "@/assets/sunzenith/Transparent_Main_logo_full_black@3x.png";
import logoMainFullWhite from "@/assets/sunzenith/Transparent_Main_logo_full_white@3x.png";
import logoMarkBlue from "@/assets/sunzenith/Transparent_Fav_Icon_blue@3x.png";
import logoMarkWhite from "@/assets/sunzenith/Transparent_Fav_Icon_white@3x.png";
import brand1 from "@/assets/sunzenith/1.jpg";

// Brand palette
const BRAND_BLUE = '#003dfc';
const BRAND_ORANGE = '#ff8533';
const BRAND_DARK = '#022272';
const BRAND_LIGHT_BLUE = '#0968ff';

const VALUES = [
  { title: 'Trust & Transparency', icon: '\u2295', desc: 'We operate with honesty and openness in every interaction.' },
  { title: 'Customer Empowerment', icon: '\u26a1', desc: 'We equip clients with knowledge and tools for energy independence.' },
  { title: 'Efficiency & Innovation', icon: '\u25c8', desc: 'We pioneer cost-efficient, cutting-edge solar solutions.' },
  { title: 'Sustainability & Responsibility', icon: '\u25c9', desc: 'We are stewards of a renewable future for all.' },
  { title: 'Reliability & Quality', icon: '\u25c6', desc: 'We deliver dependable systems with uncompromising standards.' },
];

const COLORS = [
  { name: 'Solar Blue', hex: '#003dfc', label: 'Primary', rgb: '0, 61, 199', cmyk: '94, 83, 0, 0' },
  { name: 'Solar Orange', hex: '#ff8533', label: 'Accent', rgb: '255, 133, 51', cmyk: '0, 48, 80, 0' },
  { name: 'Deep Navy', hex: '#022272', label: 'Dark', rgb: '2, 34, 114', cmyk: '100, 100, 27, 1' },
  { name: 'Sky Blue', hex: '#0968ff', label: 'Secondary', rgb: '6, 153, 255', cmyk: '91, 32, 0, 0' },
  { name: 'Amber', hex: '#ffbd00', label: 'Warm', rgb: '255, 183, 0', cmyk: '0, 36, 94, 0' },
  { name: 'Pure Black', hex: '#000000', label: 'Neutral', rgb: '0, 0, 0', cmyk: '0, 0, 0, 100' },
  { name: 'Pure White', hex: '#ffffff', label: 'Neutral', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0' },
];

// Data arrays using ASCII-safe strings
const DEFINITION_ITEMS: [string, string][] = [
  ["The Sun's Path", "The arc rising over Zenith represents the sun's journey from sunrise to its highest peak."],
  ["The Zenith Point", "The orange dot at the tip of the arc is the sun at its zenith -- peak achievement and success."],
  ["The Bent 'i'", "The 'i' in Zenith is uniquely bent to begin the path, showing the journey starts from within the brand."],
];

const MAIN_LOGO_ITEMS: { label: string; desc: string }[] = [
  { label: 'SunZenith Wordmark', desc: 'The company name is the core of the logo, designed to be clear and memorable.' },
  { label: "Bent 'i'", desc: "The letter 'i' in Zenith is uniquely bent to begin the sun's path, anchoring the journey." },
  { label: "The Sun's Path", desc: "The arc rising over Zenith represents the sun's journey from start to its highest peak." },
  { label: 'The Zenith Point', desc: 'The orange dot at the very top of the arc is the sun at its zenith, signifying peak achievement.' },
  { label: "The Dot of the 'i'", desc: "Connected to the arc path, showing the journey to the top begins from within the brand itself." },
];

const SIMPLIFIED_LOGO_ITEMS: { label: string; desc: string }[] = [
  { label: 'Abstract Representation', desc: "This logo distills the main logo's key visual elements into a clean, geometric symbol." },
  { label: 'Stylized Letters', desc: 'The two shapes in the logo represent the letters Z and i from the word Zenith.' },
  { label: 'The Sun', desc: "The orange dot at the center is the sun, representing the brand's core identity and energy source." },
  { label: 'The Ascent', desc: 'The shapes and the sun together form a powerful visual, symbolizing a constant ascent to success.' },
];

// ─── Animated SVG Arc logo ───────────────────────────────────────────────────
const SunPathLogo: React.FC<{ animate?: boolean }> = ({ animate = true }) => (
  <div className="flex flex-col items-center justify-center gap-0 select-none w-full">
    <svg viewBox="0 0 440 110" className="w-[320px] md:w-[440px] h-[110px] overflow-visible">
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BRAND_BLUE} />
          <stop offset="100%" stopColor={BRAND_ORANGE} />
        </linearGradient>
      </defs>
      {animate ? (
        <>
          <motion.path
            d="M 60 90 Q 80 10 220 8 Q 360 10 380 90"
            fill="none" stroke="url(#arcGrad)" strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
          <motion.circle cx="220" cy="8" r="9" fill={BRAND_ORANGE}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4, ease: 'backOut' }}
          />
          <motion.circle cx="60" cy="97" r="4" fill={BRAND_ORANGE}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'backOut' }}
          />
          <motion.path d="M 60 97 Q 58 80 63 68" fill="none" stroke={BRAND_BLUE} strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </>
      ) : (
        <>
          <path d="M 60 90 Q 80 10 220 8 Q 360 10 380 90" fill="none" stroke="url(#arcGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="220" cy="8" r="9" fill={BRAND_ORANGE} />
          <circle cx="60" cy="97" r="4" fill={BRAND_ORANGE} />
          <path d="M 60 97 Q 58 80 63 68" fill="none" stroke={BRAND_BLUE} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
    <motion.div
      className="flex items-baseline font-bold tracking-tight leading-none sz-h"
      style={{ marginTop: '-6px' }}
      initial={animate ? { opacity: 0, y: 10 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <span style={{ fontSize: '60px', color: BRAND_DARK }}>Sun</span>
      <span style={{ fontSize: '60px', color: BRAND_BLUE }}>Zenith</span>
    </motion.div>
  </div>
);

// ─── Simplified Icon Mark SVG ─────────────────────────────────────────────────
const SimplifiedLogo: React.FC<{ size?: number }> = ({ size = 140 }) => (
  <svg viewBox="0 0 120 120" width={size} height={size}>
    <defs>
      <linearGradient id="szGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={BRAND_BLUE} />
        <stop offset="100%" stopColor={BRAND_DARK} />
      </linearGradient>
    </defs>
    <motion.path
      d="M 20 30 L 80 30 L 20 90 L 80 90"
      fill="none" stroke="url(#szGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 }}
    />
    <motion.path
      d="M 95 50 Q 93 70 97 90"
      fill="none" stroke={BRAND_BLUE} strokeWidth="7" strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as any, delay: 0.8 }}
    />
    <motion.circle cx="60" cy="55" r="9" fill={BRAND_ORANGE}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.5, ease: 'backOut' }}
    />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const SunZenithBrandGuideline: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-20"
      style={{ fontFamily: "'Montserrat', 'Source Sans Pro', sans-serif", background: '#ffffff', color: BRAND_DARK }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');
        .sz-h  { font-family: 'Montserrat', sans-serif; }
        .sz-bd { font-family: 'Source Sans 3', 'Source Sans Pro', sans-serif; }
      `}</style>

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden bg-[#022272]">
        {/* Ultra-HD Image Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center" alt="SunZenith Solar Field Hero" />
          {/* Subtle Brand Color Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#003dfc]/40 mix-blend-multiply" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-16">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={logoMainFullWhite} className="w-[120px] md:w-[150px] mb-12" alt="SunZenith Minimal Logo" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed drop-shadow-md sz-bd"
          >
            Rising to the highest point of solar excellence. Powering a sustainable future.
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT THE BRAND */}
      <section className="py-32 px-6 md:px-24 bg-[#050505] text-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff8533] font-bold mb-6 block sz-bd">The Purpose</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight sz-h">
            SunZenith is a turnkey solar integrator empowering homeowners and businesses with seamless, high-efficiency renewable energy systems and real-time independence.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-white text-[#022272] border-y border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block font-bold sz-bd">Logo Concept</span>
            <h2 className="text-4xl font-light tracking-tight mb-8 sz-h">The Solar Ascent</h2>
            <p className="text-lg text-[#022272]/70 leading-relaxed font-light sz-bd">
              An ascendant arc tracing the sun's journey culminates in an orange dot representing the zenith—signifying peak operational performance and maximum power output.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center py-16 px-6 border border-black/5 bg-[#f5f8ff]"
          >
            <SunPathLogo animate={true} />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ 3. BRAND VALUES ══════════════ */}
      <section className="w-full py-32 px-6 md:px-24" style={{ background: '#f5f8ff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Core Values</span>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight" style={{ color: BRAND_DARK }}>What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                whileHover={{ y: -6 }}
                className="p-8 flex flex-col gap-5 cursor-default group"
                style={{ background: '#ffffff' }}
              >
                <span className="text-3xl" style={{ color: BRAND_BLUE }}>{v.icon}</span>
                <h3 className="text-sm font-bold sz-h leading-snug" style={{ color: BRAND_DARK }}>{v.title}</h3>
                <p className="text-xs sz-bd leading-relaxed" style={{ color: `${BRAND_DARK}88` }}>{v.desc}</p>
                <div className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500" style={{ background: BRAND_ORANGE }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. WHAT IS SUNZENITH ══════════════ */}
      <section className="w-full py-32 px-6 md:px-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Definition</span>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight" style={{ color: BRAND_DARK }}>What is SunZenith?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="pl-6 border-l-4 mb-10" style={{ borderColor: BRAND_ORANGE }}>
                <p className="text-lg md:text-xl sz-bd font-light leading-relaxed" style={{ color: `${BRAND_DARK}cc` }}>
                  The <strong style={{ color: BRAND_BLUE }}>Sun Zenith</strong> refers to the highest point the sun
                  reaches in the sky &mdash; its <em>zenith</em>. This is the moment of peak energy and maximum power.
                  For SunZenith, it represents the brand's commitment to reaching the pinnacle of solar excellence
                  and delivering peak performance to every client.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {DEFINITION_ITEMS.map(([title, desc], i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="flex gap-4 items-start p-5" style={{ background: '#f5f8ff' }}>
                    <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: BRAND_ORANGE }} />
                    <div>
                      <p className="font-semibold sz-h text-sm mb-1" style={{ color: BRAND_DARK }}>{title}</p>
                      <p className="sz-bd text-sm" style={{ color: `${BRAND_DARK}88` }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sun arc diagram */}
            <motion.div {...scaleIn} className="flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <svg viewBox="0 0 320 220" className="w-full max-w-[360px]">
                  <defs>
                    <linearGradient id="diagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={BRAND_BLUE} />
                      <stop offset="100%" stopColor={BRAND_ORANGE} />
                    </linearGradient>
                  </defs>
                  <line x1="20" y1="180" x2="300" y2="180" stroke={`${BRAND_DARK}22`} strokeWidth="2" />
                  <path d="M 40 180 A 120 120 0 0 1 280 180" fill="none" stroke={`${BRAND_DARK}15`} strokeWidth="1.5" strokeDasharray="4 4" />
                  <motion.path d="M 50 180 Q 80 20 160 15 Q 240 20 270 180"
                    fill="none" stroke="url(#diagGrad)" strokeWidth="2.5" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] as any, delay: 0.3 }}
                  />
                  <motion.circle cx="160" cy="15" r="14" fill={BRAND_ORANGE}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 2.3, ease: 'backOut' }}
                  />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.line key={i}
                      x1={160 + Math.cos(angle * Math.PI / 180) * 18}
                      y1={15 + Math.sin(angle * Math.PI / 180) * 18}
                      x2={160 + Math.cos(angle * Math.PI / 180) * 26}
                      y2={15 + Math.sin(angle * Math.PI / 180) * 26}
                      stroke={BRAND_ORANGE} strokeWidth="2" strokeLinecap="round"
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 2.5 + i * 0.05 }}
                    />
                  ))}
                  <motion.text x="178" y="11" fontSize="8" fontFamily="Montserrat, sans-serif"
                    fill={BRAND_DARK} fontWeight="600" letterSpacing="2"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 2.7, duration: 0.5 }}>
                    ZENITH
                  </motion.text>
                  <motion.circle cx="50" cy="180" r="4" fill={BRAND_BLUE}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, ease: 'backOut' }}
                  />
                </svg>
                <p className="text-xs tracking-[0.3em] uppercase sz-bd mt-4" style={{ color: `${BRAND_DARK}50` }}>
                  The Sun's Path &mdash; Visual Concept
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. MAIN LOGO DEFINITION ══════════════ */}
      <section className="w-full py-40 px-6 md:px-24" style={{ background: '#f5f8ff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 text-center">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Primary Mark</span>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight" style={{ color: BRAND_DARK }}>Main Logo Definition</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...scaleIn} className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[480px] flex items-center justify-center p-14"
                style={{ background: '#ffffff' }}>
                <img src={logoMainBlue} alt="SunZenith Main Logo Blue" className="w-full h-auto object-contain max-h-40" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase sz-bd" style={{ color: `${BRAND_DARK}50` }}>Primary Blue Logotype</span>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 } as any} className="space-y-4">
              {MAIN_LOGO_ITEMS.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="flex gap-4 items-start p-5" style={{ background: '#ffffff' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold sz-h"
                    style={{ background: i >= 2 ? BRAND_ORANGE : BRAND_BLUE }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold sz-h text-sm mb-1" style={{ color: BRAND_DARK }}>{item.label}</p>
                    <p className="sz-bd text-sm leading-relaxed" style={{ color: `${BRAND_DARK}77` }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ 6. SIMPLIFIED LOGO DEFINITION ══════════════ */}
      <section className="w-full py-40 px-6 md:px-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 text-center">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Icon Mark</span>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight" style={{ color: BRAND_DARK }}>Simplified Logo Definition</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              {SIMPLIFIED_LOGO_ITEMS.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="flex gap-4 items-start p-5" style={{ background: '#f5f8ff' }}>
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ background: i % 2 === 0 ? BRAND_BLUE : BRAND_ORANGE }} />
                  <div>
                    <p className="font-semibold sz-h text-sm mb-1" style={{ color: BRAND_DARK }}>{item.label}</p>
                    <p className="sz-bd text-sm leading-relaxed" style={{ color: `${BRAND_DARK}77` }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div {...scaleIn} transition={{ delay: 0.2 } as any} className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-56 h-56 flex items-center justify-center"
                  style={{ background: '#f5f8ff' }}>
                  <img src={logoMarkBlue} alt="SunZenith Icon Mark Blue" className="w-32 h-32 object-contain" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase sz-bd" style={{ color: `${BRAND_DARK}50` }}>Icon Mark &middot; Light</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-56 h-56 flex items-center justify-center" style={{ background: BRAND_DARK }}>
                  <SimplifiedLogo size={140} />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase sz-bd" style={{ color: `${BRAND_DARK}50` }}>Animated Symbol &middot; Dark</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ 7. LOGO VARIATIONS ══════════════ */}
      <section className="w-full py-32 px-6 md:px-24" style={{ background: '#050a1e' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Visual System</span>
            <h2 className="text-4xl md:text-5xl font-bold sz-h tracking-tight text-white">Logo Variations</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...scaleIn} whileHover={{ scale: 1.02 }}
              className="aspect-square flex flex-col items-center justify-center p-12"
              style={{ background: BRAND_BLUE }}>
              <img src={logoMainFullWhite} alt="White Logotype on Blue" className="w-2/3 h-auto object-contain mb-8" />
              <p className="text-white/60 text-[9px] tracking-widest uppercase sz-bd">Primary Blue</p>
            </motion.div>
            <motion.div {...scaleIn} transition={{ delay: 0.1 } as any} whileHover={{ scale: 1.02 }}
              className="aspect-square flex flex-col items-center justify-center p-12"
              style={{ background: '#ffffff' }}>
              <img src={logoMainBlack} alt="Black Logotype on White" className="w-2/3 h-auto object-contain mb-8" />
              <p className="text-black/30 text-[9px] tracking-widest uppercase sz-bd">Reversed White</p>
            </motion.div>
            <motion.div {...scaleIn} transition={{ delay: 0.2 } as any} whileHover={{ scale: 1.02 }}
              className="aspect-square flex flex-col items-center justify-center p-12"
              style={{ background: BRAND_DARK }}>
              <img src={logoMarkWhite} alt="Icon Mark" className="w-1/3 h-auto object-contain mb-8" />
              <p className="text-white/40 text-[9px] tracking-widest uppercase sz-bd">Icon Mark</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Color System (Redesigned with Solar Flare Pulses) */}
      <section className="w-full py-40 px-6 md:px-24 bg-[#020B26] overflow-hidden relative border-y border-white/5">
        {/* Animated Solar Flare Pulses */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <motion.div 
              className="absolute w-[60vw] h-[60vw] rounded-full bg-[#ff8533]"
              style={{ filter: 'blur(120px)', opacity: 0.2 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute w-[40vw] h-[40vw] rounded-full bg-[#003dfc]"
              style={{ filter: 'blur(100px)', opacity: 0.3 }}
              animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />
            {/* Concentric rings */}
            {[1, 2, 3].map((r) => (
              <motion.div 
                key={r}
                className="absolute rounded-full border border-white/10"
                style={{ width: `${r * 20}vw`, height: `${r * 20}vw`, willChange: 'transform' }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 6 + r * 2, repeat: Infinity, ease: 'easeInOut', delay: r }}
              />
            ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
            className="mb-24"
          >
            <div className="flex justify-between items-start border-t border-white/10 pt-8 mb-12">
              <p className="sz-bd text-[10px] tracking-widest uppercase text-white/40">
                Topic — 3.1<br />Page — Brand Color
              </p>
              <p className="sz-h text-[10px] tracking-widest uppercase font-bold text-right text-white">
                Color Palette<br />Solar Tones
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight text-white mb-12">Zenith Energy</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 min-h-[400px]">
             {/* Solar Blue */}
             <div className="bg-[#003DFC] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/10" animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
                <h3 className="text-3xl md:text-5xl font-bold sz-h tracking-tight mb-12 relative z-10 uppercase">Solar <br/>Blue</h3>
                <div className="text-[10px] tracking-[0.2em] font-light flex justify-between relative z-10 text-white/70">
                  <span>#003DFC</span>
                  <span>Primary Authority</span>
                </div>
             </div>

             {/* Solar Orange */}
             <div className="bg-[#ff8533] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/20" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
                <h3 className="text-3xl md:text-5xl font-bold sz-h tracking-tight mb-12 relative z-10 uppercase">Solar <br/>Orange</h3>
                <div className="text-[10px] tracking-[0.2em] font-light flex justify-between relative z-10 text-white/70">
                  <span>#FF8533</span>
                  <span>Accent Energy</span>
                </div>
             </div>
             
             {/* Deep Navy */}
             <div className="bg-[#022272] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/5" animate={{ scale: [1.5, 1, 1.5], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
                <h3 className="text-3xl md:text-5xl font-bold sz-h tracking-tight mb-12 relative z-10 uppercase">Deep <br/>Navy</h3>
                <div className="text-[10px] tracking-[0.2em] font-light flex justify-between relative z-10 text-white/50">
                  <span>#022272</span>
                  <span>Base Stability</span>
                </div>
             </div>

             {/* Sky Blue */}
             <div className="bg-[#0968FF] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/15" animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
                <h3 className="text-3xl md:text-5xl font-bold sz-h tracking-tight mb-12 relative z-10 uppercase">Sky <br/>Blue</h3>
                <div className="text-[10px] tracking-[0.2em] font-light flex justify-between relative z-10 text-white/60">
                  <span>#0968FF</span>
                  <span>Expansion</span>
                </div>
             </div>

             {/* Amber */}
             <div className="bg-[#FFBD00] p-12 md:p-16 flex flex-col justify-between text-[#022272] relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/40" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />
                <h3 className="text-3xl md:text-5xl font-bold sz-h tracking-tight mb-12 relative z-10 uppercase">Solar <br/>Amber</h3>
                <div className="text-[10px] tracking-[0.2em] font-light flex justify-between relative z-10 text-[#022272]/40">
                  <span>#FFBD00</span>
                  <span>Warmth</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 9. TYPOGRAPHY ══════════════ */}
      <section className="w-full py-32 px-6 md:px-24" style={{ background: '#f5f8ff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Typographic Principles</span>
            <h2 className="text-4xl md:text-6xl font-bold sz-h tracking-tight" style={{ color: BRAND_DARK }}>Typography System</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Montserrat */}
            <motion.div {...fadeInUp} className="p-10" style={{ background: '#ffffff' }}>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-1 rounded-full" style={{ background: BRAND_BLUE }} />
                <div>
                  <p className="sz-bd text-[10px] tracking-[0.4em] uppercase font-semibold mb-1" style={{ color: BRAND_BLUE }}>Headline Typeface</p>
                  <h3 className="sz-h text-5xl font-light" style={{ color: BRAND_DARK }}>Montserrat</h3>
                </div>
              </div>
              <div className="p-6 mb-8" style={{ background: '#f0f5ff' }}>
                <p className="sz-h text-3xl font-bold mb-3" style={{ color: BRAND_DARK }}>Hello I am Montserrat</p>
                <p className="sz-h text-2xl font-light mb-3" style={{ color: BRAND_DARK }}>Hello I am Montserrat</p>
                <p className="sz-h text-sm" style={{ color: `${BRAND_DARK}88` }}>Hello I am Montserrat</p>
              </div>
              <div className="space-y-3">
                <p className="sz-bd text-xs tracking-widest uppercase font-bold" style={{ color: BRAND_ORANGE }}>Character Set</p>
                <div className="grid grid-cols-6 gap-1">
                  {['Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll'].map((c, i) => (
                    <span key={i} className="sz-h text-base font-medium text-center p-1 rounded" style={{ color: `${BRAND_DARK}70` }}>{c}</span>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  {'1 2 3 4 5 6 7 8 9 0 ! @ # $ % * & ( )'.split(' ').map((c, i) => (
                    <span key={i} className="sz-h text-sm" style={{ color: `${BRAND_DARK}50` }}>{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Source Sans Pro */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 } as any} className="p-10" style={{ background: '#ffffff' }}>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-10 w-1 rounded-full" style={{ background: BRAND_ORANGE }} />
                <div>
                  <p className="sz-bd text-[10px] tracking-[0.4em] uppercase font-semibold mb-1" style={{ color: BRAND_ORANGE }}>Body Typeface</p>
                  <h3 className="sz-bd text-5xl font-light" style={{ color: BRAND_DARK }}>Source Sans Pro</h3>
                </div>
              </div>
              <div className="p-6 mb-8" style={{ background: '#fff8f0' }}>
                <p className="sz-bd text-3xl font-semibold mb-3" style={{ color: BRAND_DARK }}>Hello I am Source Sans</p>
                <p className="sz-bd text-2xl font-light mb-3" style={{ color: BRAND_DARK }}>Hello I am Source Sans</p>
                <p className="sz-bd text-sm" style={{ color: `${BRAND_DARK}88` }}>Hello I am Source Sans Pro</p>
              </div>
              <div className="space-y-3">
                <p className="sz-bd text-xs tracking-widest uppercase font-bold" style={{ color: BRAND_BLUE }}>Character Set</p>
                <div className="grid grid-cols-6 gap-1">
                  {['Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll'].map((c, i) => (
                    <span key={i} className="sz-bd text-base font-normal text-center p-1 rounded" style={{ color: `${BRAND_DARK}70` }}>{c}</span>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  {'1 2 3 4 5 6 7 8 9 0 ! @ # $ % * & ( )'.split(' ').map((c, i) => (
                    <span key={i} className="sz-bd text-sm" style={{ color: `${BRAND_DARK}50` }}>{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Type scale dark panel */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 } as any} className="mt-16 p-10" style={{ background: BRAND_DARK }}>
            <p className="sz-bd text-xs tracking-[0.5em] uppercase mb-10" style={{ color: BRAND_ORANGE }}>Type Scale</p>
            <div className="space-y-4">
              {[
                { size: 'Display', cls: 'text-5xl md:text-7xl font-black sz-h', text: 'Solar Energy Solutions' },
                { size: 'H1', cls: 'text-4xl md:text-5xl font-bold sz-h', text: 'Powering Your Future' },
                { size: 'H2', cls: 'text-2xl md:text-3xl font-semibold sz-h', text: 'Sustainable & Reliable' },
                { size: 'Body', cls: 'text-base font-normal sz-bd', text: 'A turnkey solar integrator dedicated to energy independence.' },
                { size: 'Caption', cls: 'text-xs tracking-widest sz-bd uppercase', text: 'Brand Identity · Solar Energy · 2024' },
              ].map((t, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="flex items-baseline gap-6 border-b pb-4"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <span className="sz-bd text-[9px] tracking-widest uppercase w-16 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.size}</span>
                  <span className={`${t.cls} text-white leading-none`}>{t.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ 10. BRAND IN ACTION ══════════════ */}
      <section className="w-full py-40 px-6 md:px-24" style={{ background: '#050a1e' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-32">
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block sz-bd font-semibold" style={{ color: BRAND_ORANGE }}>Application</span>
            <h2 className="text-5xl md:text-7xl font-bold sz-h tracking-tight text-white">Brand in Action</h2>
          </motion.div>
          <motion.div {...scaleIn} className="relative overflow-hidden group">
            <img src={brand1} alt="SunZenith Brand Application" className="w-full h-auto object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 group-hover:bg-transparent transition-all duration-1000"
              style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="absolute inset-0 flex items-end p-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3 }}>
                <p className="sz-bd text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_ORANGE }}>Brand Mockup</p>
                <p className="sz-h text-white text-2xl font-bold">SunZenith Identity System</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section className="py-40 text-center border-t" style={{ background: '#ffffff', borderColor: `${BRAND_DARK}10` }}>
        <motion.div {...fadeInUp}>
          <p className="sz-bd text-xs tracking-[0.6em] uppercase mb-8" style={{ color: `${BRAND_DARK}50` }}>Full Presentation Available</p>
          <a href="https://www.behance.net/gallery/232750275/sunzenith-solar-energy" target="_blank" rel="noopener noreferrer"
            className="sz-h text-4xl md:text-7xl font-bold tracking-tight transition-all duration-700"
            style={{ color: BRAND_DARK }}
            onMouseEnter={e => (e.currentTarget.style.color = BRAND_ORANGE)}
            onMouseLeave={e => (e.currentTarget.style.color = BRAND_DARK)}>
            Explore on Behance &#8599;
          </a>
        </motion.div>
      </section>

      <section className="py-32 text-center bg-[#F3F6FA] border-t border-[#022272]/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#022272]/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/232750275/sunzenith-solar-energy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold font-syne hover:scale-105 transition-transform duration-500" style={{ color: '#003dfc' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="sunzenith" />

      <footer className="py-12 text-center sz-bd" style={{ color: `${BRAND_DARK}30`, fontSize: '10px', letterSpacing: '0.4em' }}>
        &copy; 2024 SunZenith &mdash; Brand Identity Guidelines
      </footer>
    </div>
  );
};

export default SunZenithBrandGuideline;
