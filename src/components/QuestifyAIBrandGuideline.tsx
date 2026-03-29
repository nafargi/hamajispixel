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
      
      {/* 1. CINEMATIC HERO SECTION (Dynamic Data Background) */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden bg-[#05080F]">
        {/* Animated Vertical Data Matrix Background */}
        <div className="absolute inset-0 pointer-events-none z-0 flex gap-4 md:gap-8 justify-between opacity-30">
            {[...Array(20)].map((_, i) => (
               <motion.div 
                 key={i}
                 className="w-[1px] md:w-[2px] h-[300%] bg-gradient-to-b from-transparent via-[#385FFF] to-transparent mix-blend-screen"
                 style={{ willChange: 'transform' }}
                 animate={{ y: ['-100%', '0%'] }}
                 transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: 'linear', delay: -Math.random() * 20 }}
               />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={mainFullWhite} className="w-[120px] md:w-[150px] mb-12" alt="Questify Minimal AI Logo" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed drop-shadow-md"
          >
            Fluid intelligence meets academic perfection. The next generation of cognitive systems.
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT THE BRAND */}
      <section className="py-32 px-6 md:px-24 bg-[#05080F] text-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#385FFF] font-bold mb-6 block">The Purpose</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Questify AI builds institutional-grade artificial intelligence solutions explicitly designed to accelerate academic research, learning platforms, and operational efficiencies.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-white text-[#05080F]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block font-bold">Logo Concept</span>
            <h2 className="text-4xl font-light tracking-tight mb-8">Machine Intelligence</h2>
            <p className="text-lg text-[#05080F]/60 leading-relaxed font-light">
              A sharp, structural 'Q' integrated with a diamond element represents the synthesis of the academic pursuit (the Quest) and the spark of machine intelligence.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-16 border border-black/5 bg-[#F2F7FB]"
          >
            <img src={mainIcon} alt="Questify AI Symbol" className="w-[150px] md:w-[200px]" />
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
      </section>
      {/* 3. Color System (Redesigned with Vertical Data Shifts) */}
      <section className="py-40 px-6 md:px-24 bg-[#05080F] text-white overflow-hidden relative border-y border-white/5">
        {/* Animated Vertical Data Matrix */}
        <div className="absolute inset-0 pointer-events-none z-0 flex gap-4 md:gap-8 justify-between opacity-20">
            {[...Array(20)].map((_, i) => (
               <motion.div 
                 key={i}
                 className="w-[1px] md:w-[2px] h-[300%] bg-gradient-to-b from-transparent via-[#385FFF] to-transparent mix-blend-screen"
                 style={{ willChange: 'transform' }}
                 animate={{ y: ['-100%', '0%'] }}
                 transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: 'linear', delay: -Math.random() * 20 }}
               />
            ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.4em] uppercase text-[#385FFF] font-bold mb-6 block">Color System</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter">Algorithmic Base</h2>
            </div>
            <p className="text-sm opacity-50 max-w-xs font-light leading-relaxed">
              A meticulously calculated palette balancing high-energy cognitive blue with systematic data voids.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 min-h-[400px]">
             {/* Royal Blue Node */}
             <div className="bg-[#385FFF] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/20" style={{ transformOrigin: 'bottom' }} animate={{scaleY:[0, 1, 0]}} transition={{duration:15,repeat:Infinity,ease:'easeInOut'}} />
                <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 relative z-10 uppercase">Royal Blue</h3>
                <div className="text-[10px] tracking-widest uppercase opacity-70 flex justify-between relative z-10">
                  <span>#385FFF</span>
                  <span>Primary Node</span>
                </div>
             </div>
             {/* Charcoal */}
             <div className="bg-[#020305] p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/5" style={{ transformOrigin: 'top' }} animate={{scaleY:[0, 1, 0]}} transition={{duration:18,repeat:Infinity,ease:'easeInOut',delay:2}} />
                <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 relative z-10 uppercase">Charcoal</h3>
                <div className="text-[10px] tracking-widest uppercase opacity-40 flex justify-between relative z-10">
                  <span>#05080F</span>
                  <span>Base Architecture</span>
                </div>
             </div>
             {/* Light Blue */}
             <div className="bg-[#D1E4FF] p-12 md:p-16 flex flex-col justify-between text-[#05080F] relative overflow-hidden group">
                <motion.div className="absolute inset-0 bg-white/40" style={{ transformOrigin: 'bottom' }} animate={{scaleY:[0, 1, 0]}} transition={{duration:20,repeat:Infinity,ease:'easeInOut',delay:4}} />
                <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-12 relative z-10 uppercase">Light Blue</h3>
                <div className="text-[10px] tracking-widest uppercase opacity-60 flex justify-between relative z-10">
                  <span>#D1E4FF</span>
                  <span>Interface Tone</span>
                </div>
             </div>
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
                className="relative aspect-[16/10] overflow-hidden group"
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

      <section className="py-32 text-center bg-[#F2F7FB] border-t border-white/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/244277807/Questify-AI-Full-brand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:scale-105 transition-transform duration-500" style={{ color: '#385FFF' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="questify_ai" />

    </div>
  );
};

export default QuestifyAIBrandGuideline;
