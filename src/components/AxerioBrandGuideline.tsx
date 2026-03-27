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
      
      {/* 1. About the Brand */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-24 py-32 relative text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as any }}
          className="max-w-5xl"
        >
          <p className="text-xs tracking-[0.6em] uppercase mb-12 text-white/40 font-medium">Identity Presentation</p>
          <h1 className="text-[15vw] md:text-[10vw] font-bold leading-none mb-10 tracking-tighter font-devil">
            AXERIO
          </h1>
          <h2 className="text-xl md:text-3xl font-light mb-12 tracking-wide text-white/80 italic font-editorial">
            “A refined expression of modern luxury in jewelry design.”
          </h2>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-12" />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed font-bdo">
            Axerio is built upon the pillars of minimalism, precision, and elegance. 
            Our brand identity reflects a commitment to structural clarity, translating 
            the intricate geometry of luxury jewelry into a timeless visual language.
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. Logo Concept */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black px-6 md:px-24 py-32 border-y border-neutral-100">
        <div className="max-w-6xl w-full text-center">
          <motion.div {...fadeInUp} className="mb-24">
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block">The Geometry</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Logo Concept</h2>
            <p className="max-w-2xl mx-auto text-lg text-black/60 leading-relaxed font-bdo">
              The Axerio logo is architecturally centered around the letter “X”, 
              drawing direct inspiration from the structural connections and delicate 
              links found in high-end jewelry design. It represents the intersection 
              of strength and grace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
            <motion.div {...scaleIn} className="flex flex-col items-center gap-6">
              <div className="aspect-square w-full max-w-[400px] flex items-center justify-center bg-neutral-50 rounded-sm p-12">
                <img src={logoMainBlack} alt="Axerio Main Logo" className="w-full h-auto object-contain" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-30">Full Logotype</span>
            </motion.div>
            <motion.div {...scaleIn} transition={{ delay: 0.2 }} className="flex flex-col items-center gap-6">
              <div className="aspect-square w-full max-count-[400px] flex items-center justify-center bg-neutral-50 rounded-sm p-24">
                <img src={logoMarkBlack} alt="Axerio Symbol" className="w-full h-auto object-contain" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-30">The Connection Mark</span>
            </motion.div>
          </div>
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

      {/* 4. Color System (Redesigned with Entrance Animation) */}
      <section className="w-full bg-white py-24 px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="max-w-7xl mx-auto"
        >
          {/* Header specs from image */}
          <div className="flex justify-between items-start mb-16 border-t border-black/10 pt-8 text-black/40 font-bdo text-[10px] tracking-widest uppercase">
            <div>
              Topic — 3.1<br />
              Page no. — 17
            </div>
            <div className="text-right font-bold text-black">
              Color Palette<br />
              Colors
            </div>
          </div>

          {/* Main Color Split with staggered entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] border border-black/5 overflow-hidden rounded-sm">
            {/* White Side */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
              className="bg-white p-12 md:p-20 flex flex-col justify-between"
            >
              <h3 className="text-6xl md:text-8xl font-light text-black font-bdo tracking-tight mb-12">White</h3>
              <div className="grid grid-cols-2 gap-8 text-[11px] font-bdo tracking-[0.2em] text-black/40">
                <div>
                  C: 0<br />M: 0<br />Y: 0<br />K: 0
                </div>
                <div>
                  R: 255<br />G: 255<br />B: 255
                </div>
              </div>
            </motion.div>
            {/* Black Side */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
              className="bg-black p-12 md:p-20 flex flex-col justify-between text-white border-l border-black/5"
            >
              <h3 className="text-6xl md:text-8xl font-light font-bdo tracking-tight mb-12">Black</h3>
              <div className="grid grid-cols-2 gap-8 text-[11px] font-bdo tracking-[0.2em] text-white/40">
                <div>
                  C: 0<br />M: 0<br />Y: 0<br />K: 100
                </div>
                <div>
                  R: 255<br />G: 255<br />B: 255
                </div>
              </div>
            </motion.div>
          </div>

          {/* Gray Tints Below with staggered entrance */}
          <div className="mt-px flex flex-col gap-px bg-black/5">
            {[20, 40, 60, 80].map((percent, i) => (
              <motion.div 
                key={percent} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + (i * 0.1), ease: [0.22, 1, 0.36, 1] as any }}
                className="grid grid-cols-2 h-20 md:h-28"
              >
                <div 
                  className="relative group transition-all duration-500 hover:flex-[1.2] cursor-pointer"
                  style={{ backgroundColor: `rgba(0,0,0, ${percent/100})` }}
                >
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-bdo font-bold opacity-30">{percent}%</span>
                </div>
                <div 
                  className="relative group transition-all duration-500 hover:flex-[1.2] cursor-pointer"
                  style={{ backgroundColor: `rgba(0,0,0, ${percent/100})` }}
                >
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-bdo font-bold text-white/30">{percent}%</span>
                </div>
              </motion.div>
            ))}
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
                className={`relative overflow-hidden rounded-sm group ${i % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
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
