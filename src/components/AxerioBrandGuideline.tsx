import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { MoreProjects } from "./MoreProjects";

// Import Axerio Assets - JPGs for "Action"
import img1 from "@/assets/axerio/Brand guidelines - 1.jpg";
import img19 from "@/assets/axerio/Brand guidelines - 19.jpg";
import img26 from "@/assets/axerio/Brand guidelines - 26.jpg";
import img30 from "@/assets/axerio/Brand guidelines - 30.jpg";
import img33 from "@/assets/axerio/Brand guidelines - 33.jpg";

// Import Axerio Assets - PNGs for Logo Sections
import logoMainWhite from "@/assets/axerio/main_logo_white.png";
import logoMainBlack from "@/assets/axerio/main_logo_black.png";
import logoMarkWhite from "@/assets/axerio/logoMark_whitw.png";
import logoMarkBlack from "@/assets/axerio/logoMark_balck.png";

const AxerioBrandGuideline: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden pt-20">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden">
        {/* Ultra-HD Image Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center" alt="Axerio Tech Hero" />
          {/* Subtle Brand Color Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30 mix-blend-multiply" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={logoMainWhite} className="w-[120px] md:w-[150px] mb-12" alt="Axerio Logo" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed font-editorial italic drop-shadow-md"
          >
            The intersection of strength and grace. Crafting modern luxury forms.
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
      <section className="py-32 px-6 md:px-24 bg-[#050505] text-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-white/50 font-bold mb-6 block">The Purpose</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight font-editorial italic">
            Axerio translates the intricate geometry of luxury jewelry into a timeless visual language. We design structurally pure, high-end pieces for the uncompromising modern esthete.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-white text-black border-y border-neutral-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block font-bold">Logo Concept</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Structural Elegance</h2>
            <p className="text-lg text-black/60 leading-relaxed font-bdo">
              Architecturally centered around the letter 'X', the mark draws direct inspiration from structural connections and delicate links found in fine jewelry.
            </p>
          </motion.div>
          <motion.div 
            {...scaleIn}
            className="flex justify-center items-center bg-neutral-50 p-24 border border-neutral-100"
          >
            <img src={logoMarkBlack} alt="Axerio Symbol" className="w-[150px] md:w-[200px]" />
          </motion.div>
        </div>
      </section>

      {/* 3. Logo Variations */}
      <section className="w-full py-40 px-6 md:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4 block">Visual System</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">Logo Variations</h2>
            </div>
            <p className="max-w-xs text-sm text-white/40 font-light font-bdo">
              Consistent application across varied backgrounds ensures the identity remains 
              legible and premium in every context.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {/* Primary - Black on White */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="bg-white aspect-square flex flex-col items-center justify-center p-12 transition-all duration-700"
            >
              <img src={logoMainBlack} alt="Primary Variation" className="w-2/3 h-auto" />
              <div className="mt-12 text-center text-black/30">
                <p className="text-[9px] tracking-widest uppercase">Primary Variation</p>
                <p className="text-[8px] tracking-[0.3em] mt-2 italic">Luxury Light</p>
              </div>
            </motion.div>

            {/* Inverted - White on Black */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-[#050505] aspect-square flex flex-col items-center justify-center p-12 transition-all duration-700"
            >
              <img src={logoMainWhite} alt="Inverted Variation" className="w-2/3 h-auto" />
              <div className="mt-12 text-center text-white/30">
                <p className="text-[9px] tracking-widest uppercase">Inverted Variation</p>
                <p className="text-[8px] tracking-[0.3em] mt-2 italic">Pure Dark</p>
              </div>
            </motion.div>

            {/* Symbol - X Mark */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="bg-neutral-900 aspect-square flex flex-col items-center justify-center p-12 transition-all duration-700"
            >
              <img src={logoMarkWhite} alt="Symbol Variation" className="w-1/3 h-auto opacity-80" />
              <div className="mt-12 text-center text-white/30">
                <p className="text-[9px] tracking-widest uppercase">Brand Symbol</p>
                <p className="text-[8px] tracking-[0.3em] mt-2 italic">Structural X</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Color System (Redesigned with Sweep Animation) */}
      <section className="w-full bg-[#050505] py-24 px-6 md:px-24 border-y border-white/5 overflow-hidden relative">
        {/* Animated Scanner Sweeps */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 w-[20vw] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent mix-blend-screen"
            style={{ filter: 'blur(10px)', willChange: 'transform' }}
            animate={{ x: ['-100vw', '150vw'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="absolute top-0 bottom-0 left-0 w-[10vw] bg-gradient-to-r from-transparent via-[#ffffff]/10 to-transparent mix-blend-screen"
            style={{ filter: 'blur(20px)', willChange: 'transform', transform: 'skewX(-20deg)' }}
            animate={{ x: ['-50vw', '180vw'] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 2 }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Header specs */}
          <div className="flex justify-between items-start mb-16 border-t border-white/10 pt-8 text-white/40 font-bdo text-[10px] tracking-widest uppercase">
            <div>
              Topic — 3.1<br />
              Page no. — 17
            </div>
            <div className="text-right font-bold text-white">
              Color Palette<br />
              Colors
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 min-h-[400px]">
            {/* Alabaster */}
            <div className="bg-white p-12 md:p-16 flex flex-col justify-between text-black relative overflow-hidden group">
               <motion.div className="absolute inset-x-0 h-[200%] bg-gradient-to-b from-transparent via-black/5 to-transparent -skew-y-12"
                 animate={{ y: ['-100%', '100%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />
               <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 uppercase relative z-10 font-editorial italic">Alabaster</h3>
               <div className="text-[10px] tracking-[0.2em] opacity-40 flex justify-between relative z-10 font-bdo">
                 <span>#FFFFFF</span>
                 <span>RGB 255 255 255</span>
               </div>
            </div>
            
            {/* Obsidian */}
            <div className="bg-[#111111] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
               <motion.div className="absolute inset-x-0 h-[200%] bg-gradient-to-b from-transparent via-white/5 to-transparent -skew-y-12"
                 animate={{ y: ['-100%', '100%'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 1 }} />
               <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 uppercase relative z-10 font-editorial italic">Obsidian</h3>
               <div className="text-[10px] tracking-[0.2em] opacity-40 flex justify-between relative z-10 font-bdo">
                 <span>#111111</span>
                 <span>RGB 17 17 17</span>
               </div>
            </div>

            {/* Graphite */}
            <div className="bg-[#444444] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
               <motion.div className="absolute inset-x-0 h-[200%] bg-gradient-to-b from-transparent via-white/5 to-transparent -skew-y-12"
                 animate={{ y: ['-100%', '100%'] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }} />
               <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 uppercase relative z-10 font-editorial italic">Graphite</h3>
               <div className="text-[10px] tracking-[0.2em] opacity-40 flex justify-between relative z-10 font-bdo">
                 <span>#444444</span>
                 <span>RGB 68 68 68</span>
               </div>
            </div>

            {/* Silver */}
            <div className="bg-[#C0C0C0] p-12 md:p-16 flex flex-col justify-between text-black relative overflow-hidden group">
               <motion.div className="absolute inset-x-0 h-[200%] bg-gradient-to-b from-transparent via-white/20 to-transparent -skew-y-12"
                 animate={{ y: ['-100%', '100%'] }} transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: 0.5 }} />
               <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 uppercase relative z-10 font-editorial italic">Silver</h3>
               <div className="text-[10px] tracking-[0.2em] opacity-40 flex justify-between relative z-10 font-bdo">
                 <span>#C0C0C0</span>
                 <span>RGB 192 192 192</span>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Typography System (Expanded & Compact) */}
      <section className="w-full py-32 px-6 md:px-24 bg-white text-black border-t border-black/5">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp} className="mb-20 text-center md:text-left">
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-4 block">Typographic Principles</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Typography System</h2>
          </motion.div>

          {/* Compact Typeface Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Primary Font: Devil Breeze */}
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-6 font-bold">Primary / Devil Breeze Bold</p>
                <h3 className="text-6xl md:text-8xl font-bold font-devil uppercase tracking-tighter italic leading-none mb-8">Aa 01</h3>
                <p className="text-sm text-black/50 leading-relaxed font-bdo max-w-sm mb-12">
                  Used for logotypes and high-contrast headline statements. 
                  Architectural precision in visual language.
                </p>
                
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c, i) => (
                      <span key={i} className="text-xl md:text-2xl font-devil text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {"abcdefghijklmnopqrstuvwxyz".split("").map((c, i) => (
                      <span key={i} className="text-lg md:text-xl font-devil text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 md:gap-6">
                    {"0123456789".split("").map((c, i) => (
                      <span key={i} className="text-xl md:text-2xl font-devil text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Secondary Font: BDO Grotesk */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-12">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-6 font-bold">Secondary / BDO Grotesk</p>
                <h3 className="text-6xl md:text-8xl font-light font-bdo tracking-tight leading-none mb-8">Aa 01</h3>
                <p className="text-sm text-black/50 leading-relaxed font-bdo max-w-sm mb-12">
                  The functional core. Extreme legibility for body copy, 
                  technical data, and systematic clarity.
                </p>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c, i) => (
                      <span key={i} className="text-xl md:text-2xl font-bdo text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {"abcdefghijklmnopqrstuvwxyz".split("").map((c, i) => (
                      <span key={i} className="text-lg md:text-xl font-bdo text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 md:gap-6">
                    {"0123456789".split("").map((c, i) => (
                      <span key={i} className="text-xl md:text-2xl font-bdo text-black/10 hover:text-black transition-colors">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Brand in Action */}
      <section className="w-full py-40 px-6 md:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-32">
             <span className="text-xs tracking-[0.5em] uppercase text-white/40 mb-4 block">Application</span>
             <h2 className="text-5xl md:text-7xl font-light tracking-tight">Brand in Action</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[img1, img19, img26, img33].map((img, i) => (
              <motion.div 
                key={i}
                {...scaleIn}
                transition={{ delay: i * 0.1, duration: 1.2 }}
                className={`relative overflow-hidden group ${i % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
              >
                <img 
                  src={img} 
                  alt={`Axerio Application ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 text-center border-t border-white/5">
        <motion.div {...fadeInUp}>
          <p className="text-xs tracking-[0.6em] uppercase text-white/30 mb-8">Full Presentation Available</p>
          <a 
            href="https://www.behance.net/gallery/245110401/AXerio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl md:text-7xl font-light tracking-tighter hover:opacity-50 transition-all duration-700 font-devil"
          >
            Explore on Behance ↗
          </a>
        </motion.div>
      </section>

      <section className="py-32 text-center bg-[#000000] border-t border-white/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/245110401/AXerio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:scale-105 transition-transform duration-500" style={{ color: '#D4AF37' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="axerio" />

      <footer className="py-12 text-center opacity-20 text-[8px] tracking-[0.6em] uppercase">
        &copy; 2024 Axerio Jewelry — Identity Guidelines
      </footer>
    </div>
  );
};

export default AxerioBrandGuideline;
