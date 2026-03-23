import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Target, ArrowRight } from "lucide-react";
import nafiCeoVideo from "@/assets/nafi_ceo_video.mp4";
import axerioCover from "@/assets/axerio/Brand guidelines - 26.jpg";
import questifyCover from "@/assets/questify_ai/23.jpg";

const industriesList = [
  "HOSPITALITY & EVENTS",
  "LIFESTYLE & LUXURY",
  "HEALTHCARE & WELLNESS",
  "FINANCE & FINTECH",
  "SAAS & TECH",
  "LUXURY REAL ESTATE"
];

const BentoGrid = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industriesList.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-section px-6 md:px-12 rich-black relative overflow-hidden pt-[120px]">
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <span className="text-primary text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">
          Our Impact
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white uppercase tracking-tightest">
          Premium <span className="text-white/20 italic font-editorial font-light">Ecosystem</span>
        </h2>
      </div>
      <div className="max-w-[1400px] mx-auto border border-white/10 p-6 md:p-8 rounded-[40px] ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* ════════ ROW 1 ════════ */}
          
          {/* Col 1: CSAT (4 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white/[0.03] border border-white/10 rounded-[40px] p-10 flex flex-col justify-between items-center text-center group hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div>
              <h3 className="text-3xl font-bold font-heading mb-3 text-white">Client Success</h3>
              <p className="text-white/50 text-base font-light leading-relaxed mb-10">
                Measures and improves<br/>client satisfaction.
              </p>
            </div>
            
            <div className="w-full">
              <span className="text-primary text-[10px] tracking-[0.2em] font-bold uppercase mb-4 block">EXCELLENT</span>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className={`w-12 h-12 rounded-full flex items-center justify-center ${star === 5 ? 'bg-primary text-black' : 'bg-white/5 text-white/30'}`}>
                    <Star size={20} className={star === 5 ? 'fill-black' : 'fill-white/20'} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col 2: Strategy (8 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden group flex flex-col md:flex-row hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="md:w-[55%] h-64 md:h-auto relative overflow-hidden">
              <img 
                src={axerioCover} 
                alt="Strategy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary">
                <Target size={24} />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4 text-white">Strategy that matters</h3>
              <p className="text-white/50 font-light leading-relaxed text-lg">
                Thoughtful direction aligned with real business goals. We don't just design; we architect growth.
              </p>
            </div>
          </motion.div>

          {/* ════════ ROW 2 ════════ */}
          
          {/* Col 1: Discuss (6 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 rounded-[40px] p-10 md:p-14 flex flex-col items-center text-center overflow-hidden relative group"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, #e6772e 100%)' }}
          >
            <h3 className="text-black text-4xl font-bold font-heading mb-8 relative z-10">Discuss your project</h3>
            
            <a href="mailto:nafargidamena@gmail.com" className="bg-[#e6772e] hover:bg-[#cc6a29] text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-colors duration-300 flex items-center gap-3 relative z-10 shadow-lg shadow-black/20 mb-4">
              Schedule a call - 15 mins free
              <ArrowRight size={18} />
            </a>
            
            <p className="text-black/60 font-medium mb-12 relative z-10">No pressure, just a thoughtful chat.</p>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-[120%]">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-28 h-36 rounded-2xl border-[6px] border-[#ff8533] shadow-2xl overflow-hidden transform ${i%2===0 ? 'rotate-[-8deg] translate-y-4' : 'rotate-[6deg]'}`}>
                    <img src={`https://i.pravatar.cc/200?u=${i+10}`} alt={`Client ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col 2: SEO/Performance (6 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-500 border border-white/10 rounded-[40px] p-10 md:p-14 flex flex-col items-center text-center"
          >
            <h3 className="text-white text-3xl font-bold font-heading mb-4">SEO ready & fast performance</h3>
            <p className="text-white/50 font-medium text-lg mb-16">Optimized for search rankings and blazing-fast speed.</p>
            
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-8 w-full justify-center">
              {[
                { label: 'PERFORMANCE', value: '99', percent: 99 },
                { label: 'SEO', value: '100', percent: 100 },
                { label: 'ACCESSIBILITY', value: '98', percent: 98 }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center relative mb-4 ${i === 1 ? 'border-[6px] border-primary' : 'border-[4px] border-primary/50'}`}>
                    <span className="text-white font-bold text-2xl font-bdo">{stat.value}%</span>
                  </div>
                  <span className="text-white/40 text-[9px] tracking-[0.2em] font-bold uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ════════ ROW 3 ════════ */}
          
          {/* Col 1: Rebuild (4 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-500 border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group"
          >
            <div className="mb-10">
              <h3 className="text-white text-3xl font-bold font-heading mb-3 leading-tight">Brand & Agency<br/>rebuild</h3>
              <p className="text-white/50 font-medium">120% more inquiries</p>
            </div>
            
            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-lg shadow-black/40">
              <img src={questifyCover} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Col 2: Industries (4 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-500 border border-white/10 rounded-[40px] p-10 flex flex-col items-center justify-center text-center overflow-hidden"
          >
            <h3 className="text-white text-2xl font-bold font-heading mb-12">Industries we work with</h3>
            
            <div className="relative h-[150px] w-full flex items-center justify-center pointer-events-none">
              <AnimatePresence>
                {industriesList.map((industry, i) => {
                  let offset = i - activeIndustry;
                  if (offset < -Math.floor(industriesList.length / 2)) offset += industriesList.length;
                  if (offset > Math.floor(industriesList.length / 2)) offset -= industriesList.length;

                  const isActive = offset === 0;
                  const absOffset = Math.abs(offset);
                  
                  return (
                    <motion.div 
                      key={industry}
                      initial={false}
                      animate={{ 
                        y: offset * 45, 
                        opacity: isActive ? 1 : absOffset === 1 ? 0.3 : 0,
                        scale: isActive ? 1 : 0.9,
                        filter: isActive ? 'blur(0px)' : `blur(${absOffset * 2}px)`
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute w-full flex items-center justify-center gap-4 py-3 border-b border-white/5 last:border-0"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-primary/20'}`} />
                      <span className={`font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${isActive ? 'text-primary' : 'text-primary/50'}`}>
                        {industry}
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-primary/20'}`} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Col 3: Portrait (4 spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-[40px]  border border-white/10 overflow-hidden relative group aspect-[4/5] md:aspect-auto"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
            >
              <source src={nafiCeoVideo} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col">
              <h3 className="text-white text-2xl font-bold font-heading mb-1">Nafargi Damena</h3>
              <p className="text-white/70 text-sm font-bold tracking-widest uppercase text-[10px]">CEO - BOLD IDENTITY</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
