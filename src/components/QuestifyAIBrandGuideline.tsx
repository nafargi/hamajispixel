import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MoreProjects } from "./MoreProjects";
import mainIcon from "@/assets/questify_ai/main_icon.png";
import mainFullBlue from "@/assets/questify_ai/main_full_blue.png";
import mainFullBlack from "@/assets/questify_ai/main_full_black.png";
import mainFullWhite from "@/assets/questify_ai/main_full_white.png";
import mainMixBlack from "@/assets/questify_ai/main_mix_black.png";
import whiteIcon from "@/assets/questify_ai/white_icon.png";
import blackIcon from "@/assets/questify_ai/black_icon.png";
import img22 from "@/assets/questify_ai/22.jpg";
import img23 from "@/assets/questify_ai/23.jpg";
import img24 from "@/assets/questify_ai/24.jpg";
import img25 from "@/assets/questify_ai/25.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
};

const QuestifyAIBrandGuideline = () => {
  return (
    <div className="min-h-screen bg-white text-[#05080F] selection:bg-[#385FFF] selection:text-white overflow-hidden font-corbel">
      
      {/* 1. Hero Section - Extreme Premium */}
      <section className="h-screen w-full flex items-center justify-center relative bg-[#F2F7FB] overflow-hidden">
        <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as any }}
            className="absolute inset-0 z-0 opacity-10"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
            <div className="grid grid-cols-6 h-full border-x border-black/5">
                {[...Array(6)].map((_, i) => <div key={i} className="border-r border-black/5 h-full" />)}
            </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative z-10 text-center px-6"
        >
          <img src={mainFullBlue} alt="Questify AI" className="w-[300px] md:w-[650px] mx-auto mb-16 drop-shadow-[0_20px_50px_rgba(56,95,255,0.1)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.8em] uppercase text-[#385FFF] font-bold mb-4">Identity Specification</span>
            <div className="w-12 h-[1px] bg-[#385FFF]/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Brand Concept & Logic */}
      <section className="py-40 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 max-w-3xl">
            <span className="text-xs tracking-[0.4em] uppercase text-[#385FFF] font-bold mb-8 block">Brand Concept</span>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-12">The Q-Structure</h2>
            <p className="text-xl md:text-2xl text-[#05080F]/60 font-light leading-relaxed">
              Questify AI merges the geometry of academic perfection with the fluidity of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <motion.div {...fadeInUp} className="bg-[#F2F7FB] p-12 rounded-lg flex flex-col items-center text-center">
              <div className="text-6xl font-bold text-[#385FFF] mb-8">Q</div>
              <h4 className="text-lg font-bold mb-4">Letterform Core</h4>
              <p className="text-sm text-[#05080F]/40 leading-relaxed">The foundation is the letter 'Q', representing 'Quest' — the heart of academic pursuit.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#F2F7FB] p-12 rounded-lg flex flex-col items-center text-center">
              <div className="text-6xl text-[#385FFF] mb-8">◆</div>
              <h4 className="text-lg font-bold mb-4">Diamond Intelligence</h4>
              <p className="text-sm text-[#05080F]/40 leading-relaxed">An integrated diamond element symbolizes a spark of AI and structural academic perfection.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#385FFF] p-12 rounded-lg flex flex-col items-center text-center text-white">
              <img src={mainFullWhite} alt="Logo" className="w-32 mb-8 brightness-0 invert" />
              <h4 className="text-lg font-bold mb-4">The Result</h4>
              <p className="text-sm text-white/80 leading-relaxed">A cohesive mark that communicates expertise, intelligence, and modern efficiency.</p>
            </motion.div>
          </div>

          {/* Compact Logo Variations */}
          <motion.div {...fadeInUp} className="border-t border-black/5 pt-16">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-12 block font-bold text-center">Logo Variations / Adaptive System</span>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
                {[mainMixBlack, mainFullBlack, mainFullBlue, blackIcon].map((img, i) => (
                    <motion.img 
                        key={i} 
                        src={img} 
                        alt="Variant" 
                        className="h-10 md:h-16 w-auto grayscale-0 brightness-1 transition-all hover:scale-110" 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Color System - Tone Grid (User Favorite) */}
      <section className="py-40 px-6 md:px-24 bg-[#05080F] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.4em] uppercase text-[#385FFF] font-bold mb-6 block">Color System</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter">Primary Tones</h2>
            </div>
            <p className="text-sm opacity-40 max-w-xs font-light leading-relaxed">
              A meticulously calculated palette balancing high-energy Royal Blue with systematic neutrals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              { 
                base: '#385FFF', 
                name: 'Royal Blue', 
                tones: [
                  { label: '60% Dark', hex: '#041763' },
                  { label: '60% Dark', hex: '#0A2BB1' },
                  { label: 'Original', hex: '#385FFF' },
                  { label: '80% Opacity', hex: '#385FFFCC' },
                  { label: '60% Opacity', hex: '#385FFF99' },
                  { label: '40% Opacity', hex: '#385FFF66' },
                  { label: '20% Opacity', hex: '#385FFF33' },
                  { label: '10% Opacity', hex: '#385FFF1A' },
                  { label: '5% Opacity', hex: '#385FFF0D' }
                ]
              },
              { 
                base: '#05080F', 
                name: 'Charcoal Black', 
                tones: [
                  { label: 'Original', hex: '#05080F' },
                  { label: '80% Opacity', hex: '#05080Fcc' },
                  { label: '60% Opacity', hex: '#484848' },
                  { label: '40% Opacity', hex: '#767676' },
                  { label: '20% Opacity', hex: '#A3A3A3' },
                  { label: '10% Opacity', hex: '#D1D1D1' },
                  { label: '5% Opacity', hex: '#E8E8E8' },
                  { label: '2% Opacity', hex: '#F4F4F4' }
                ]
              }
            ].map((system, i) => (
              <div key={i} className="space-y-4">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                    className="h-32 w-full flex items-end justify-between p-8 origin-left relative overflow-hidden rounded-sm"
                    style={{ backgroundColor: system.base }}
                >
                    <span className="text-xs tracking-widest uppercase font-bold relative z-10">{system.name}</span>
                    <span className="text-[10px] tracking-widest opacity-40 relative z-10">{system.base}</span>
                </motion.div>
                
                <div className="grid grid-cols-4 md:grid-cols-9 gap-1 md:gap-2">
                  {system.tones.map((tone, ti) => (
                    <motion.div
                      key={ti}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (ti * 0.05), duration: 0.8 }}
                      className="group relative"
                    >
                      <div className="aspect-[3/4] rounded-[1px] mb-2 transition-transform duration-500 group-hover:scale-[1.05]" style={{ backgroundColor: tone.hex }} />
                      <div className="flex flex-col gap-1">
                        <span className="text-[7px] tracking-tighter opacity-30 uppercase font-bold">{tone.label}</span>
                        <span className="text-[7px] tracking-widest opacity-20 uppercase">{tone.hex.replace('#', '')}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Typography - Pure Corbel Power */}
      <section className="py-48 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#385FFF] font-bold mb-12 block">Typography System</span>
            <h3 className="text-7xl md:text-9xl font-bold tracking-tightest mb-16 leading-[0.85]">CORBEL <br/> BOLD</h3>
            <div className="space-y-8 text-xl md:text-2xl font-light text-[#05080F]/60 leading-relaxed">
              <p>Designed for clarity and institutional authority. Corbel is a highly legible sans-serif that balances modern aesthetics with classical proportions.</p>
              <p>Used as the singular voice of Questify AI, it communicates reliability and intelligence across every medium.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-24"
          >
            <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-8 font-bold">Character Set / AA</p>
                <div className="text-5xl md:text-7xl font-bold border-b border-black/5 pb-8 mb-8">Aa Bb Cc Dd Ee Ff Gg</div>
                <div className="text-4xl md:text-5xl font-light opacity-40">01 23 45 67 89 !@ #$</div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-bold">Standard</p>
                    <p className="text-3xl">Questify Intelligence</p>
                </div>
                <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-bold">Bold Italic</p>
                    <p className="text-3xl italic font-bold">Questify Intelligence</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Brand in Action */}
      <section className="py-24 px-4 md:px-8 bg-[#F2F7FB]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div {...fadeInUp} className="mb-24 text-center">
             <span className="text-[10px] tracking-[0.8em] uppercase text-[#385FFF] font-bold mb-4 block">Brand in Action</span>
             <h2 className="text-5xl md:text-7xl font-light tracking-tighter">Realizing Future</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[img22, img23, img24, img25].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="relative aspect-[16/10] overflow-hidden rounded-sm group shadow-2xl"
              >
                <img src={img} alt={`Asset ${i}`} className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-40 text-center bg-white border-t border-black/5">
        <motion.div {...fadeInUp}>
          <p className="text-[10px] tracking-[0.8em] uppercase text-[#385FFF] font-bold mb-12">Institutional Portal</p>
          <a href="#" className="text-5xl md:text-[10rem] font-bold tracking-tightest hover:text-[#385FFF] transition-all duration-1000 leading-none">
            QUESTIFY.AI
          </a>
        </motion.div>
      </section>

      <section className="py-32 text-center bg-[#F2F7FB] border-t border-black/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/nafargidamena" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:scale-105 transition-transform duration-500" style={{ color: '#385FFF' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="questify_ai" />

    </div>
  );
};

export default QuestifyAIBrandGuideline;
