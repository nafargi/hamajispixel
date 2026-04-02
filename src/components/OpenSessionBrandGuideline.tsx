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
    <div ref={containerRef} className="bg-white text-[#111] font-inter overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden bg-black">
        {/* Ultra-HD Image Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center opacity-60" alt="Open Session Cinematic Hero" />
          {/* Subtle Brand Color Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent mix-blend-multiply opacity-80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={verticalLogoWhite} className="w-[120px] md:w-[150px] mb-12" alt="Open Session Minimal Logo" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed drop-shadow-md"
          >
            Connect. Heal. Grow. A safe space for transformational therapy.
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT THE BRAND */}
      <section className="py-32 px-6 md:px-24 bg-[#050505] text-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-bold mb-6 block">01 / Purpose</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Open Session removes the barriers to mental health care, fostering an honest, supportive environment where personal healing naturally occurs.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-white text-[#111] border-y border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block font-bold">Logo Concept</span>
            <h2 className="text-4xl font-light tracking-tight mb-8">Connection & Session</h2>
            <p className="text-lg text-[#111]/80 leading-relaxed font-light">
              Two figures unite—one reaching up, one reaching down—forming an 'O' for Open and a flowing 'S' for Session. It physically illustrates the supportive connection between therapist and client.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center bg-[#fdfdfd] p-16 border border-black/5"
          >
            <img src={mainLogoMark} alt="Open Session Symbol" className="w-[150px] md:w-[250px]" />
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
             <div className="p-16 flex flex-col items-center justify-center transition-colors h-[40vh] bg-black">
                <img src={verticalLogoWhite} alt="Vertical Purple" className="h-24 md:h-32 w-auto mb-8" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Primary Display</span>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-8 md:px-16 w-full bg-[#fcfcfc] border-y border-black/5 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1800px] mx-auto"
        >
          <div className="mb-16 flex justify-between items-end border-b border-black/10 pb-8">
             <h2 className="text-3xl md:text-5xl font-light font-montserrat text-[#111] tracking-tight uppercase">Empathy Palette</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               { name: 'Healing Teal', hex: '#008080', rgb: '0 128 128', text: 'white' },
               { name: 'Deep Navy', hex: '#002366', rgb: '0 35 102', text: 'white' },
               { name: 'Vitality Orange', hex: '#FF8C00', rgb: '255 140 0', text: 'white' },
               { name: 'Calm Purple', hex: '#6A0D91', rgb: '106 13 145', text: 'white' },
               { name: 'Mist Gray', hex: '#F5F5F7', rgb: '245 245 247', text: 'black' }
             ].map((color, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 flex flex-col justify-between h-[300px] border border-black/5"
                 style={{ backgroundColor: color.hex, color: color.text }}
               >
                 <div className="w-10 h-10 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                 <div>
                   <h3 className="text-xl font-light tracking-tight mb-2 uppercase">{color.name}</h3>
                   <div className="text-[10px] tracking-[0.2em] font-light opacity-60">
                     <span>{color.hex}</span>
                     <span className="block mt-1">RGB {color.rgb}</span>
                   </div>
                 </div>
               </motion.div>
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
                    <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 font-bold block mb-4">04 / Primary Type</span>
                    <h3 className="text-4xl font-light font-montserrat tracking-tight">Montserrat</h3>
                 </div>
                 <span className="text-8xl md:text-[10rem] font-bold font-montserrat leading-none text-black/10 -mb-8">Aa</span>
               </div>
               
               <div className="space-y-8 font-montserrat">
                 <div className="border-b border-black/10 pb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Bold</p>
                   <p className="flex-1 text-2xl md:text-3xl font-bold tracking-tight text-[#111] leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-xl tracking-[0.2em] text-black">0123456789</span>
                   </p>
                 </div>
                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                   <p className="text-[10px] w-16 tracking-widest uppercase opacity-40">Reg</p>
                   <p className="flex-1 text-2xl md:text-3xl font-normal tracking-tight text-[#111]/70 leading-snug">
                     ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                     abcdefghijklmnopqrstuvwxyz<br/>
                     <span className="font-mono text-xl tracking-[0.2em] text-black/40">0123456789</span>
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
             <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 font-bold block mb-4 md:mb-0">05 / Application</span>
             <h2 className="text-4xl md:text-5xl font-light font-montserrat tracking-tight text-[#111]">Real World Harmony</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-12 overflow-hidden group"
             >
                <img src={slide49} alt="Hero App" className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="md:col-span-6 overflow-hidden group"
             >
                <img src={slide50} alt="Stationery" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="md:col-span-6 overflow-hidden group"
             >
                <img src={slide54} alt="Digital Tool" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Outro */}
      <section className="py-48 bg-black text-white flex items-center justify-center text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="text-[10px] tracking-[0.8em] uppercase font-bold mb-12 font-montserrat opacity-50">Connect. Heal. Grow.</p>
          <img src={horizontalLogo} alt="Open Session" className="w-[300px] md:w-[500px] mx-auto invert drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
        </motion.div>
      </section>

      <section className="py-32 text-center bg-white border-t border-black/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/239772409/Open-Session-Therapy-Brand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold font-montserrat hover:scale-105 transition-transform duration-500 text-black">
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="open_session" />

    </div>
  );
};

export default OpenSessionBrandGuideline;
