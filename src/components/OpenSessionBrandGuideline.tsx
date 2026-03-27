import { motion, useScroll, useTransform } from "framer-motion";
import { MoreProjects } from "./MoreProjects";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import mainLogoMark from "@/assets/open_session/main_logo_mark@8x-8.png";
import horizontalLogo from "@/assets/open_session/horizontal_main_logo@8x-8.png";
import verticalLogo from "@/assets/open_session/vertical_main_logo@8x-8.png";
import verticalLogoWhite from "@/assets/open_session/vertical_main_logo_white@8x-8.png";
import horizontalLogoV2 from "@/assets/open_session/horizontal_main_logo_v2@8x-8.png";
import sliceCutWhite from "@/assets/open_session/slice_cut_white@8x-8.png";
import horizontalLogoBlack from "@/assets/open_session/horizontal_main_logo_black@8x-8.png";
import verticalLogoBlack from "@/assets/open_session/vertical_main_logo_black@8x-8.png";

import slide49 from "@/assets/open_session/Slide 49.jpg";
import slide50 from "@/assets/open_session/Slide 50.jpg";
import slide51 from "@/assets/open_session/Slide 51.jpg";
import slide54 from "@/assets/open_session/Slide 54.jpg";

const OpenSessionBrandGuideline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-[#fcfcfc] text-[#111] font-inter overflow-hidden">
      
      {/* 1. Hero */}
      <section className="h-screen w-full relative flex flex-col justify-end p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 bg-[#E9E4F0]"
        >
          <motion.div 
            style={{ y: yParallax }} 
            className="absolute -right-[20%] -top-[20%] w-[80vw] h-[80vw] bg-[#6E44A7] rounded-full opacity-10 blur-[150px]"
          />
        </motion.div>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={horizontalLogo} alt="Open Session" className="w-[280px] md:w-[600px] mb-8" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-right"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#6E44A7]">Brand Identity</p>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mt-2">V2.0 / 2023</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Logo Definition Concept */}
      <section className="py-32 md:py-48 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-stretch max-w-[1800px] mx-auto">
        {/* Left Side: Concept Text */}
        <div className="lg:col-span-6 bg-white rounded-[2rem] p-12 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col justify-center">
          <div className="space-y-12 pr-4 md:pr-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold font-montserrat mb-6 text-[#111]">The Two People</h3>
              <p className="text-lg font-light leading-relaxed text-[#111]/80 mb-4">
                The logo shows <strong className="font-semibold text-[#111]">two figures</strong> connecting with each other.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg font-light leading-relaxed text-[#111]/80 marker:text-[#111]/40">
                <li>It represents the partnership between the therapist and the person seeking help.</li>
                <li>One person is reaching up and the other is reaching down, showing how they support each other during a session.</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-3xl font-bold font-montserrat mb-6 text-[#111]">The "O" and "S" Shapes</h3>
              <p className="text-lg font-light leading-relaxed text-[#111]/80 mb-4">
                The way the two people are positioned creates two specific letters:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-lg font-light leading-relaxed text-[#111]/80 marker:text-[#E73539] marker:text-sm">
                <li>
                  <strong className="font-semibold text-[#111]">The "O":</strong> The two figures join together to form a circle, which represents the word "Open." This circle creates a "safe space" where everything is contained and private.
                </li>
                <li className="marker:text-[#F9832D]">
                  <strong className="font-semibold text-[#111]">The "S":</strong> If you look at the <strong className="font-semibold text-[#111]">flow of the two bodies</strong>, they create a soft curve that looks like an "S" for "Session." This shows that the session is a smooth, continuous process of talking and healing.
                </li>
              </ul>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-lg font-light leading-relaxed text-[#111]/80 italic border-l-[3px] border-[#6E44A7] pl-6 py-2"
            >
              In short: The logo uses two people to build the letters O and S, showing that a "session" is a "connection" between two people.
            </motion.p>
          </div>
        </div>
        
        {/* Right Side: Visuals */}
        <div className="lg:col-span-6 flex flex-col gap-8 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[500px] bg-[#fdfdfd] rounded-[2rem] flex items-center justify-center p-16 border border-black/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]"
          >
            <img src={mainLogoMark} alt="Logo Mark Connection" className="w-[60%] drop-shadow-xl hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* 3. The Logo System */}
      <section className="py-32 md:py-48 bg-[#0D0D0D] text-white">
        <div className="px-8 md:px-16 max-w-[1800px] mx-auto mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold block mb-4">02 / Signatures</span>
          <h2 className="text-3xl md:text-5xl font-light font-montserrat tracking-tight">System & Variations</h2>
        </div>
        
        <div className="w-full flex flex-col border-y border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
             {/* Primary Stack */}
             <div className="bg-[#0D0D0D] p-16 md:p-32 flex items-center justify-center border-r border-white/10 group hover:bg-white/5 transition-colors">
                <img src={verticalLogoWhite} alt="Vertical" className="h-32 md:h-48 w-auto" />
             </div>
             {/* Horizontals */}
             <div className="flex flex-col">
                <div className="bg-white flex-1 p-16 md:p-24 flex items-center justify-center border-b border-black/10 group transition-colors">
                   <img src={horizontalLogo} alt="Horizontal" className="h-12 md:h-16 w-auto" />
                </div>
                <div className="bg-[#F8F9FA] flex-1 p-16 md:p-24 flex items-center justify-center group transition-colors">
                   <img src={horizontalLogoV2} alt="Horizontal Alternate" className="h-8 md:h-12 w-auto" />
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3">
             <div className="bg-[#0D0D0D] p-16 flex flex-col items-center justify-center border-r border-white/10 group hover:bg-white/5 transition-colors h-[40vh]">
                <img src={sliceCutWhite} alt="Slice White" className="h-20 md:h-24 w-auto mb-8" />
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-30 text-white">Lockup 01</span>
             </div>
             <div className="bg-white p-16 flex flex-col items-center justify-center border-r border-black/10 transition-colors h-[40vh]">
                <img src={horizontalLogoBlack} alt="Horizontal Black" className="h-10 md:h-12 w-auto mb-8" />
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-30 text-black">Lockup 02</span>
             </div>
             <div className="p-16 flex flex-col items-center justify-center transition-colors h-[40vh] bg-[#6E44A7]">
                <img src={verticalLogoWhite} alt="Vertical Purple" className="h-24 md:h-32 w-auto mb-8" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Primary Display</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Color Swatches (Gradient Steps) */}
      <section className="py-32 md:py-48 px-8 md:px-16 w-full bg-[#fcfcfc]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1800px] mx-auto"
        >
          <div className="flex gap-[1%] w-full aspect-[1/1] sm:aspect-[2/1] md:aspect-[2.5/1]">
            {[
              { hex: '#6E44A7', span: 2 },
              { hex: '#F9832D', span: 1 },
              { hex: '#1978A3', span: 1 },
              { hex: '#E73539', span: 1 },
              { hex: '#0F172A', span: 1 }
            ].map((col, i) => (
              <div key={i} className={`flex flex-col h-full bg-white ${col.span === 2 ? 'w-[33.33%]' : 'w-[16.66%]'} group`}>
                {[...Array(10)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className="flex-1 w-full transition-opacity duration-500 ease-out"
                    style={{ backgroundColor: col.hex, opacity: 1 - (idx * 0.09) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Typography (Editorial) */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-[#F5F5F7] border-y border-black/5">
         <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            
            <div className="flex flex-col border-t border-black/10 pt-8">
               <div className="flex justify-between items-end mb-16">
                 <div>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#6E44A7] font-bold block mb-4">04 / Primary Type</span>
                    <h3 className="text-4xl font-light font-montserrat tracking-tight">Montserrat</h3>
                 </div>
                 <span className="text-8xl md:text-[10rem] font-bold font-montserrat leading-none text-[#6E44A7] opacity-20 -mb-8">Aa</span>
               </div>
               
               <div className="space-y-8 font-montserrat">
                 <div className="border-b border-black/10 pb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Bold</p>
                   <p className="flex-1 text-2xl md:text-3xl font-bold tracking-tight text-[#111] leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-xl tracking-[0.2em] text-[#6E44A7]">0123456789</span>
                   </p>
                 </div>
                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Reg</p>
                   <p className="flex-1 text-2xl md:text-3xl font-normal tracking-tight text-[#111]/70 leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-xl tracking-[0.2em] text-[#6E44A7]/60">0123456789</span>
                   </p>
                 </div>
               </div>
            </div>

            <div className="flex flex-col border-t border-black/10 pt-8">
               <div className="flex justify-between items-end mb-16">
                 <div>
                    <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 font-bold block mb-4">Secondary Type</span>
                    <h3 className="text-4xl font-light font-inter tracking-tight">Inter</h3>
                 </div>
                 <span className="text-8xl md:text-[10rem] font-bold font-inter leading-none text-black opacity-10 -mb-8">Aa</span>
               </div>
               
               <div className="space-y-8 font-inter">
                 <div className="border-b border-black/10 pb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Semi</p>
                   <p className="flex-1 text-xl md:text-2xl font-semibold tracking-tight text-[#111] leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-lg tracking-[0.2em] text-black">0123456789</span>
                   </p>
                 </div>
                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Reg</p>
                   <p className="flex-1 text-xl md:text-2xl font-normal tracking-tight text-[#111]/60 leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-lg tracking-[0.2em] text-black/50">0123456789</span>
                   </p>
                 </div>
               </div>
            </div>
            
         </div>
      </section>

      {/* 6. Brand In Action (Structured Gallery Layout) */}
      <section className="py-32 md:py-48 bg-white border-t border-black/5">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
             <span className="text-[10px] tracking-[0.4em] uppercase text-[#6E44A7] font-bold block mb-4 md:mb-0">05 / Application</span>
             <h2 className="text-4xl md:text-5xl font-light font-montserrat tracking-tight text-[#111]">Real World Harmony</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-12 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={slide49} alt="Hero App" className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="md:col-span-6 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={slide50} alt="Stationery" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="md:col-span-6 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={slide54} alt="Digital Tool" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Outro */}
      <section className="py-48 bg-[#6E44A7] text-white flex items-center justify-center text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="text-[10px] tracking-[0.8em] uppercase font-bold mb-12 font-montserrat opacity-50">Connect. Heal. Grow.</p>
          <img src={horizontalLogo} alt="Open Session" className="w-[300px] md:w-[500px] mx-auto invert drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
        </motion.div>
      </section>

      <section className="py-32 text-center bg-white border-t border-black/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/239772409/Open-Session-Therapy-Brand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold font-montserrat hover:scale-105 transition-transform duration-500" style={{ color: '#6E44A7' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="open_session" />

    </div>
  );
};

export default OpenSessionBrandGuideline;
