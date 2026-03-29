import React from 'react';
import { motion } from 'framer-motion';
import { MoreProjects } from "./MoreProjects";
import { ArrowDown, Cpu, Layers, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

// Onyxium Assets
import onyxiumCover from "@/assets/onyxium/Artboard 19_8@3x-100.jpg";
import logoMain from "@/assets/onyxium/Artboard 19_3@3x-100.jpg";
import brandDetail from "@/assets/onyxium/Artboard 19_15@3x-100.jpg";
import brandMockup from "@/assets/onyxium/Artboard 19_1@3x-100.jpg";
import typographyBlanquotey from "@/assets/onyxium/Artboard 19_12@3x-100.jpg";
import typographySyne from "@/assets/onyxium/Artboard 19_16@3x-100.jpg";
import colorArtboard from "@/assets/onyxium/Artboard 19_11@3x-100.jpg";
import logoConstruction from "@/assets/onyxium/Artboard 19_7@3x-100.jpg";

// Brand palette
const ONYX_NAVY = '#0A1628';
const ELECTRIC_CYAN = '#00B4FF';
const SKY_BLUE = '#1D6FFF';
// Brand palette (Restored to Full Gold/Onyx)
const ONYX_BLACK = '#0A0A0B';
const ONYX_GOLD = '#D4AF37';
const ONYX_GRAY = '#707070';
const ONYX_SILVER = '#C0C0C0';

const VALUES = [
  { title: 'Innovation', icon: <Cpu size={24} />, desc: 'Pushing the boundaries of what is possible in digital solutions.' },
  { title: 'Scalability', icon: <Layers size={24} />, desc: 'Building systems that grow seamlessly with your ambitions.' },
  { title: 'Security', icon: <ShieldCheck size={24} />, desc: 'Uncompromising protection for every digital touchpoint.' },
  { title: 'Performance', icon: <Zap size={24} />, desc: 'Ultra-fast, optimized execution across all platforms.' },
];

const COLORS = [
  { name: 'Onyx Gold', hex: '#D4AF37', label: 'Primary Accent', rgb: '212, 175, 55' },
  { name: 'Onyx Black', hex: '#0A0A0B', label: 'Primary Brand', rgb: '10, 10, 11' },
  { name: 'Slate Gray', hex: '#707070', label: 'Secondary', rgb: '112, 112, 112' },
  { name: 'Silver', hex: '#C0C0C0', label: 'Tertiary', rgb: '192, 192, 192' },
  { name: 'Pure White', hex: '#FFFFFF', label: 'Neutral', rgb: '255, 255, 255' },
];

const LOGO_FEATURES = [
  { label: 'Orbital Rings', desc: 'Symbolizing the interconnected nature of scalable ecosystems.' },
  { label: 'The Core', desc: 'The leaf-shaped center represents growth and organic evolution within tech.' },
  { label: 'Symmetry', desc: 'Perfectly balanced geometry reflecting stability and precision.' },
];

const OnyxiumBrandGuideline: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white selection:bg-[#00B4FF]/30 overflow-x-hidden">
      {/* Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        /* Blanquotey is an external font, we assume it's loaded via global CSS or we use a fallback */
        .onyx-h { font-family: 'Blanquotey', 'Syne', sans-serif; }
        .onyx-bd { font-family: 'Syne', sans-serif; }
      `}</style>

      {/* 1. CINEMATIC HERO SECTION (Dynamic Color Background) */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
        {/* Living Liquid Gold Background */}
        <div className="absolute inset-0 z-0">
          {/* Base Dark */}
          <div className="absolute inset-0 bg-[#0A0A0B]" />
          {/* Organic gold blobs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[60%] h-[60%] rounded-full bg-[#D4AF37]/30 mix-blend-screen"
            style={{ filter: 'blur(80px)', willChange: 'transform' }}
            animate={{ scale: [1, 1.2, 0.9, 1], x: [0, 100, -50, 0], y: [0, -50, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[70%] h-[70%] rounded-full bg-[#D4AF37]/20 mix-blend-screen"
            style={{ filter: 'blur(100px)', willChange: 'transform' }}
            animate={{ scale: [1, 1.3, 0.8, 1], x: [0, -150, 50, 0], y: [0, 100, -80, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#707070]/10 mix-blend-screen"
            style={{ filter: 'blur(120px)', willChange: 'transform' }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Subtle vignette/overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-20">
          <motion.img 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: 'easeOut' }}
             src={logoMain} className="w-[140px] md:w-[180px] mb-12 mix-blend-screen opacity-90" alt="Onyxium Minimal Mark" 
          />
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed onyx-bd drop-shadow-md"
          >
             Digital ecosystems engineered for scale. Building the infrastructure of tomorrow.
          </motion.p>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 z-10"
        >
          <ArrowDown size={32} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* 2. ABOUT THE BRAND */}
      <section className="py-32 px-6 md:px-24 bg-[#0A0A0B] text-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] onyx-bd font-bold mb-6 block">The Purpose</span>
          <h2 className="text-3xl md:text-5xl onyx-h font-light leading-tight">
            Onyxium is a technology infrastructure firm dedicated to high-performance, secure, and scalable digital solutions. We turn complex data architecture into seamless operational power.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-[#0A0A0B] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.4em] uppercase font-bold text-[#D4AF37] onyx-bd mb-6 block">Logo Concept</span>
            <h2 className="text-4xl font-light onyx-h mb-8">Architectural Symmetry</h2>
            <p className="text-lg onyx-bd font-light leading-relaxed text-white/70">
              The orbital rings symbolize an interconnected network, while the central leaf reflects organic technological growth and adaptability. Symmetry provides ultimate stability.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center flex-col items-center bg-[#151515] p-12 border border-white/5"
          >
            <img src={logoConstruction} alt="Logo Construction" className="w-full h-auto" />
            <p className="mt-8 text-xs tracking-widest text-[#D4AF37] onyx-bd">SAFE AREA & GRID CONSTRUCTION</p>
          </motion.div>
        </div>
      </section>

      {/* 4. Color System (Full Animated Palette) */}
      <section className="py-32 bg-[#0A0A0B] overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-16 relative z-10"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] onyx-bd font-bold mb-4 block">Color Strategy</span>
            <h2 className="text-6xl md:text-8xl font-bold onyx-h text-white">Palette</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {COLORS.map((color, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-[400px] flex flex-col justify-end p-8 overflow-hidden group"
                style={{ backgroundColor: color.hex }}
              >
                {/* Liquid overlay for each block */}
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 20, -20, 0],
                    y: [0, -20, 20, 0]
                  }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: 'blur(40px)', opacity: 0.2 }}
                />
                
                <div className="relative z-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-2">{color.label}</span>
                  <h3 className="text-2xl font-bold onyx-h text-white mb-4">{color.name}</h3>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4">
                    <span className="text-xs font-mono text-white/60 tracking-widest">{color.hex}</span>
                    <span className="text-[10px] text-white/30 uppercase onyx-bd">RGB {color.rgb}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TYPOGRAPHY */}
      <section className="py-32 bg-[#050D18]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold onyx-h text-white flex items-center gap-4">
              Typography
            </h2>
          </motion.div>

          <div className="space-y-32">
            {/* Blanquotey Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-[#0c1f38] via-[#093566] to-[#0088cc] p-12">
                  <h3 className="text-6xl md:text-8xl text-white onyx-h mb-2 tracking-wide">Blanquotey</h3>
                  <p className="text-white/90 text-lg onyx-bd">Primary Typeface</p>
                </div>
                <div className="bg-[#051124] p-8 border border-white/5 space-y-4">
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-h tracking-widest break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-h tracking-widest break-all">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-h tracking-widest break-all">
                    1234567890!@#$%^&*()_
                  </p>
                </div>
              </motion.div>
              
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col justify-between h-full pt-4">
                <p className="text-lg md:text-xl text-white/70 onyx-bd leading-relaxed">
                  Our primary typeface, <strong className="text-white font-bold onyx-h">Blanquotey</strong>, reflects the brand's
                  clean, modern, and confident personality. It offers excel-
                  lent readability across both digital and print media, main-
                  taining consistency and visual harmony throughout all
                  brand communications. The balanced proportions and
                  smooth letterforms of Blanquotey, embody professional-
                  ism and creativity, making it ideal for headlines, body text,
                  and marketing materials alike.
                </p>
                
                <div className="mt-16 flex items-center gap-6">
                  <img src={logoConstruction} alt="Onyxium Logo" className="h-20 w-auto object-contain mix-blend-screen opacity-80" />
                  <span className="text-6xl md:text-7xl onyx-h text-white tracking-tighter">Onyxium</span>
                </div>
              </motion.div>
            </div>

            {/* Syne Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-32">
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-[#0c1f38] via-[#093566] to-[#0088cc] p-12">
                  <h3 className="text-6xl md:text-8xl text-white onyx-bd font-bold mb-2">Syne</h3>
                  <p className="text-white/90 text-lg onyx-bd">Secondary Typeface</p>
                </div>
                <div className="bg-[#051124] p-8 border border-white/5 space-y-4">
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-bd tracking-widest break-all uppercase">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-bd tracking-widest break-all">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="text-[#00B4FF] text-xl md:text-2xl onyx-bd tracking-widest break-all mt-8">
                    1234567890!@#$%^&*()_
                  </p>
                </div>
              </motion.div>
              
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col justify-between h-full pt-4">
                <p className="text-lg md:text-xl text-white/70 onyx-bd leading-relaxed">
                  Our secondary typeface, <strong className="text-white font-bold">Syne</strong>, adds a distinctive and ex-
                  pressive character to the brand. It complements the main
                  font with its geometric structure and contemporary edge,
                  making it perfect for highlights, subheadings, and creative
                  elements. Syne introduces a sense of individuality and ar-
                  tistic flair while maintaining balance and cohesion within
                  the overall visual identity.
                </p>
                
                <div className="mt-16 space-y-3">
                  <div className="flex items-center gap-4 onyx-bd text-lg">
                    <span className="text-[#00B4FF] font-normal w-40">Syne REGULAR</span>
                    <span className="text-white">&rarr; Body text</span>
                  </div>
                  <div className="flex items-center gap-4 onyx-bd text-lg">
                    <span className="text-[#00B4FF] font-medium w-40">Syne MEDIUM</span>
                    <span className="text-white font-medium">&rarr; Subheadings</span>
                  </div>
                  <div className="flex items-center gap-4 onyx-bd text-lg">
                    <span className="text-[#00B4FF] font-semibold w-40">Syne SEMIBOLD</span>
                    <span className="text-white font-semibold">&rarr; Highlights</span>
                  </div>
                  <div className="flex items-center gap-4 onyx-bd text-lg">
                    <span className="text-[#00B4FF] font-bold w-40">Syne BOLD</span>
                    <span className="text-white font-bold">&rarr; Headings</span>
                  </div>
                  <div className="flex items-center gap-4 onyx-bd text-xl">
                    <span className="text-[#00B4FF] font-extrabold w-48 tracking-wider">Syne EXTRABOLD</span>
                    <span className="text-white font-extrabold tracking-wider">&rarr; Display titles</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BRAND IN ACTION */}
      <section className="py-32 bg-[#050D18]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-[#00B4FF] uppercase tracking-widest text-xs mb-4 block onyx-bd font-bold">Application</span>
            <h2 className="text-4xl md:text-6xl font-bold onyx-h text-white">Brand Excellence in Action</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div {...fadeInUp} className="group relative overflow-hidden">
              <img src={brandMockup} alt="Mockup 1" className="w-full aspect-[4/3] object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#00B4FF] text-xs font-bold tracking-widest uppercase mb-1 onyx-bd">Contextual Application</p>
                <h4 className="text-2xl font-bold onyx-h">Digital Interface Design</h4>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group relative overflow-hidden">
              <img src={brandDetail} alt="Mockup 2" className="w-full aspect-[4/3] object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#00B4FF] text-xs font-bold tracking-widest uppercase mb-1 onyx-bd">Visual Nuance</p>
                <h4 className="text-2xl font-bold onyx-h">Detailed Texture & Depth</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-40 text-center border-t border-white/5 bg-[#0A1628]">
        <motion.div {...fadeInUp}>
          <p className="text-white/30 tracking-[0.6em] text-[10px] uppercase mb-10 onyx-bd">Corporate Identity Overview</p>
          <h2 className="text-5xl md:text-8xl font-black onyx-h mb-12 flex flex-col items-center gap-4">
            <span className="text-white">ON</span>
            <span className="text-[#00B4FF]">YXIUM</span>
          </h2>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-[#00B4FF] text-[#0A1628] font-bold rounded-full onyx-bd tracking-widest text-sm hover:shadow-[0_0_30px_#00B4FFaa] transition-all duration-300"
          >
            GET FULL GUIDELINES
          </motion.a>
        </motion.div>
      </section>

      <section className="py-32 text-center bg-[#050D18] border-t border-white/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 font-bold onyx-bd">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/236882049/ONYXIUM-software-full-brand-Identity" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold onyx-h hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_30px_#00B4FFaa] px-8 py-4 rounded-full" style={{ color: '#00B4FF' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="onyxium" />

      <footer className="py-12 text-center text-white/20 onyx-bd text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
        &copy; 2024 Onyxium Technologies &middot; Precision. Elegance. Power.
      </footer>
    </div>
  );
};

export default OnyxiumBrandGuideline;
