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
const ONYX_DARKER = '#050D18';

const VALUES = [
  { title: 'Innovation', icon: <Cpu size={24} />, desc: 'Pushing the boundaries of what is possible in digital solutions.' },
  { title: 'Scalability', icon: <Layers size={24} />, desc: 'Building systems that grow seamlessly with your ambitions.' },
  { title: 'Security', icon: <ShieldCheck size={24} />, desc: 'Uncompromising protection for every digital touchpoint.' },
  { title: 'Performance', icon: <Zap size={24} />, desc: 'Ultra-fast, optimized execution across all platforms.' },
];

const COLORS = [
  { name: 'Onyx Deep Navy', hex: '#0A1628', label: 'Primary', rgb: '10, 22, 40' },
  { name: 'Electric Cyan', hex: '#00B4FF', label: 'Accent', rgb: '0, 180, 255' },
  { name: 'Sky Blue', hex: '#1D6FFF', label: 'Secondary', rgb: '29, 111, 255' },
  { name: 'Onyx Dark', hex: '#050D18', label: 'Base', rgb: '5, 13, 24' },
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

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2 }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full blur-[120px]"
            style={{ background: `radial-gradient(circle, ${SKY_BLUE}33 0%, transparent 70%)` }}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full blur-[120px]"
            style={{ background: `radial-gradient(circle, ${ELECTRIC_CYAN}22 0%, transparent 70%)` }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-12"
          >
            <img src={logoMain} alt="Onyxium Logo" className="w-full h-full mx-auto rounded-2xl shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-[#00B4FF] uppercase tracking-[0.5em] text-sm mb-6 onyx-bd font-semibold">
              Brand Identity System &middot; 2024
            </p>
            <h1 className="text-4xl md:text-7xl font-bold onyx-h tracking-tight mb-8">
              ONYXIUM
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/60 onyx-bd font-light leading-relaxed italic">
              "Empowering scalable software solutions through sophisticated engineering and timeless design."
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. PHILOSOPHY & ABOUT */}
      <section className="py-32 bg-[#050D18]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[#00B4FF] uppercase tracking-widest text-xs mb-4 block onyx-bd font-bold">The Vision</span>
              <h2 className="text-4xl md:text-6xl font-bold onyx-h mb-8">A Premium Luxury Brand</h2>
              <p className="text-xl text-white/70 onyx-bd leading-relaxed mb-12">
                Onyxium is founded on the principles of strength, elegance, and timeless mystique. 
                We provide high-end, scalable software development services that prioritize both 
                aesthetic perfection and architectural robustness.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {VALUES.map((v, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-[#00B4FF]">{v.icon}</div>
                    <h3 className="text-lg font-bold onyx-h">{v.title}</h3>
                    <p className="text-sm text-white/50 onyx-bd">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square"
            >
              <img src={onyxiumCover} alt="Onyxium Brand Visual" className="w-full h-full object-cover rounded-3xl shadow-[0_0_100px_rgba(0,180,255,0.1)]" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#00B4FF]/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hidden md:block">
                <div className="w-8 h-1 bg-[#00B4FF] mb-4" />
                <p className="text-xs onyx-bd text-white/60">EST. 2024 &middot; GLOBAL SOFTWARE STANDARDS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LOGO CONSTRUCTION */}
      <section className="py-32 bg-[#0A1628]">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="mb-20">
            <span className="text-[#00B4FF] uppercase tracking-widest text-xs mb-4 block onyx-bd font-bold">Identity Mark</span>
            <h2 className="text-4xl md:text-6xl font-bold onyx-h">The Orbital Symbol</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#050D18] p-12 rounded-3xl border border-white/5"
            >
              <img src={logoConstruction} alt="Logo Construction" className="w-full h-auto" />
              <p className="mt-8 text-xs tracking-widest text-white/30 onyx-bd">SAFE AREA & GRID CONSTRUCTION</p>
            </motion.div>

            <div className="text-left space-y-8">
              {LOGO_FEATURES.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 border-l-4 border-[#00B4FF] rounded-r-2xl"
                >
                  <h4 className="text-lg font-bold mb-2 onyx-h text-[#00B4FF]">{f.label}</h4>
                  <p className="text-white/60 onyx-bd">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLOR PALETTE */}
      <section className="py-32 bg-[#050D18]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20">
            <span className="text-[#00B4FF] uppercase tracking-widest text-xs mb-4 block onyx-bd font-bold">The Palette</span>
            <h2 className="text-4xl md:text-6xl font-bold onyx-h">Luxury in Every Pixel</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
            {COLORS.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div 
                  className="h-64 md:h-80 w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ background: c.hex, boxShadow: `0 20px 40px ${c.hex}11` }}
                />
                <div className="px-2">
                  <p className="text-xs text-[#00B4FF] font-bold tracking-widest mb-1 onyx-bd">{c.label}</p>
                  <h4 className="text-lg font-bold mb-1 onyx-h">{c.name}</h4>
                  <p className="text-xs text-white/40 onyx-bd uppercase tracking-tighter">HEX: {c.hex} / RGB: {c.rgb}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="rounded-3xl overflow-hidden border border-white/10">
            <img src={colorArtboard} alt="Detailed Color Guidelines" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* 5. TYPOGRAPHY */}
      <section className="py-32 bg-[#0A1628]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-[#00B4FF] uppercase tracking-widest text-xs mb-4 block onyx-bd font-bold">Typography System</span>
            <h2 className="text-4xl md:text-6xl font-bold onyx-h">The Language of Onyxium</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="p-12 bg-white/5 border border-white/10 rounded-3xl">
                <img src={typographyBlanquotey} alt="Primary Typography" className="w-full h-auto mb-8" />
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold onyx-h text-[#00B4FF]">Blanquotey</h4>
                    <p className="text-sm text-white/40 onyx-bd uppercase">Primary &middot; Headlines</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/20 onyx-bd leading-tight uppercase tracking-widest">
                      Rounded Modern Sans<br />Geometric Symmetry
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-8">
              <div className="p-12 bg-white/5 border border-white/10 rounded-3xl">
                <img src={typographySyne} alt="Secondary Typography" className="w-full h-auto mb-8" />
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold onyx-h text-[#00B4FF]">Syne</h4>
                    <p className="text-sm text-white/40 onyx-bd uppercase">Secondary &middot; Body Copy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/20 onyx-bd leading-tight uppercase tracking-widest">
                      Contemporary Flair<br />Exceptional Readability
                    </p>
                  </div>
                </div>
              </div>
                </motion.div>
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
            <motion.div {...fadeInUp} className="group relative overflow-hidden rounded-3xl">
              <img src={brandMockup} alt="Mockup 1" className="w-full aspect-[4/3] object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#00B4FF] text-xs font-bold tracking-widest uppercase mb-1 onyx-bd">Contextual Application</p>
                <h4 className="text-2xl font-bold onyx-h">Digital Interface Design</h4>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group relative overflow-hidden rounded-3xl">
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
