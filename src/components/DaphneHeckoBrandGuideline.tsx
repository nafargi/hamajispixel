import { motion, useScroll, useTransform } from "framer-motion";
import { MoreProjects } from "./MoreProjects";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Logos
import mainLogoMark from "@/assets/daphne_Hecko/logo_burgendy@4x.png";
import logoWhite from "@/assets/daphne_Hecko/logo_white@4x.png";
import horizontalBurgendy from "@/assets/daphne_Hecko/horizontal_burgendy@4x.png";
import horizontalWhite from "@/assets/daphne_Hecko/horizontal_white@4x.png";
import verticalBurgendy from "@/assets/daphne_Hecko/vertical_burgendy@4x.png";

// Images / Mockups
import bannerMockup from "@/assets/daphne_Hecko/Banner_Mockup.jpg";
import businessCardMockup from "@/assets/daphne_Hecko/Free-PSD-Premium-Brand-Identity-Business-Card-Mockup.jpg";
import laptopMockup from "@/assets/daphne_Hecko/glowing-laptop-mockup.jpg";
import slide31 from "@/assets/daphne_Hecko/31.jpg";
import slide26 from "@/assets/daphne_Hecko/26.jpg";

const DaphneHeckoBrandGuideline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#2c2b2b] font-montserrat overflow-hidden">
      
      {/* 1. Hero */}
      <section className="h-screen w-full relative flex flex-col justify-between py-12 px-8 md:px-16 bg-[#590620] overflow-hidden">
        <motion.div 
          style={{ y: yParallax }} 
          className="absolute inset-0 z-0 bg-gradient-to-tr from-[#30010E] to-[#590620]"
        />

        <div className="relative z-10 w-full flex justify-between items-start pt-24 text-[#DAAB5B]">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-[#E5D1D0]">Brand Identity Guidelines</p>
          <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-70">CONFIDENTIAL</p>
        </div>
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} 
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={horizontalWhite} alt="DH Legal Ops" className="w-[300px] md:w-[600px]" />
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy & Concept */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-[1800px] mx-auto border-b border-[#2c2b2b]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#590620] font-bold block mb-12">01 / The Promise</span>
            <h2 className="text-4xl md:text-6xl font-bold font-nexa tracking-tight leading-tight mb-8">
              Lifting the <span className="text-[#DAAB5B]">Operational Burden.</span>
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl text-[#2c2b2b]/80">
              DH Legal Ops delivers streamlined operational support for law firm owners—handling everything from client intake to billing, marketing, and team performance. Enabling legal professionals to focus on practicing law, serving clients, and driving growth.
            </p>
          </div>
          
          <div className="flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white p-16 md:p-32 flex flex-col items-center justify-center border border-black/5 rounded-3xl shadow-sm"
            >
              <img src={mainLogoMark} alt="Logo Mark" className="w-[40%] mb-12" />
              <p className="text-center text-sm leading-relaxed max-w-sm opacity-70">
                <strong className="text-[#590620]">The Concept:</strong> The letters "d" and "h" are rendered in a bold, rounded Nexa Heavy style. The stem of the "h" transforms into a fountain pen nib, symbolizing law, precision, and professionalism. Let the negative space add visual sharpness, reinforcing accuracy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Color Pairings (As requested by user screenshot) */}
      <section className="py-32 px-8 xl:px-8 w-full">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-24 flex justify-between items-end">
             <h2 className="text-4xl md:text-6xl font-bold font-nexa text-[#590620]">Color Pairings</h2>
          </div>
          
          {/* Animated Color Grid Container */}
          <div className="w-full flex flex-col">
             
             {/* Burgundy Row */}
             <div className="flex flex-row w-full h-[150px] md:h-[200px] items-stretch">
                {/* RGB label */}
                <div className="w-[120px] shrink-0 hidden lg:flex flex-col justify-center text-xs font-light tracking-wide text-[#2c2b2b]/60 leading-relaxed pr-8">
                   <p>R: 89</p>
                   <p>G: 6</p>
                   <p>B: 32</p>
                </div>
                
                {/* Solid main panel */}
                <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="w-1/3 md:w-1/4 shrink-0 bg-[#590620] flex items-center justify-center text-[#DAAB5B] text-xl md:text-2xl tracking-widest font-light"
                >
                   #590620
                </motion.div>

                {/* Fade sequence */}
                <div className="flex-1 flex flex-row bg-white">
                   {[90, 80, 70, 60, 50, 40, 20].map((opacity, idx) => (
                      <motion.div 
                         key={`burgundy-${opacity}`}
                         initial={{ opacity: 0, scaleY: 0 }}
                         whileInView={{ opacity: opacity / 100, scaleY: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.3 + (idx * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                         className="flex-1 h-full origin-bottom"
                         style={{ backgroundColor: `#590620` }}
                      />
                   ))}
                </div>

                {/* CMYK label */}
                <div className="w-[120px] shrink-0 hidden lg:flex flex-col justify-center text-xs font-light tracking-wide text-[#2c2b2b]/60 leading-relaxed pl-8">
                   <p>C: 39%</p>
                   <p>M: 96%</p>
                   <p>Y: 69%</p>
                   <p>K: 58%</p>
                </div>
             </div>

             {/* Gold Row */}
             <div className="flex flex-row w-full h-[150px] md:h-[200px] items-stretch">
                {/* RGB label */}
                <div className="w-[120px] shrink-0 hidden lg:flex flex-col justify-center text-xs font-light tracking-wide text-[#2c2b2b]/60 leading-relaxed pr-8">
                   <p>R: 218</p>
                   <p>G: 171</p>
                   <p>B: 91</p>
                </div>
                
                {/* Solid main panel */}
                <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                   className="w-1/3 md:w-1/4 shrink-0 bg-[#DAAB5B] flex items-center justify-center text-[#590620] text-xl md:text-2xl tracking-widest font-light"
                >
                   #DAAB5B
                </motion.div>

                {/* Fade sequence */}
                <div className="flex-1 flex flex-row bg-white">
                   {[90, 80, 70, 60, 50, 40, 20].map((opacity, idx) => (
                      <motion.div 
                         key={`gold-${opacity}`}
                         initial={{ opacity: 0, scaleY: 0 }}
                         whileInView={{ opacity: opacity / 100, scaleY: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                         className="flex-1 h-full origin-top"
                         style={{ backgroundColor: `#DAAB5B` }}
                      />
                   ))}
                </div>

                {/* CMYK label */}
                <div className="w-[120px] shrink-0 hidden lg:flex flex-col justify-center text-xs font-light tracking-wide text-[#2c2b2b]/60 leading-relaxed pl-8 pt-4">
                   <p>C: 15%</p>
                   <p>M: 33%</p>
                   <p>Y: 75%</p>
                   <p>K: 0%</p>
                </div>
             </div>
             
             {/* Slide number context from image */}
             <div className="w-full mt-4 text-right hidden lg:block">
               <span className="text-xs font-bold mr-12 opacity-60">15</span>
             </div>

          </div>
        </div>
      </section>

      {/* 4. Typography Showcase */}
      <section className="py-32 md:py-48 px-8 md:px-16 border-y border-[#2c2b2b]/10 bg-white">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
           {/* Primary Font: Nexa Heavy (represented configuration) */}
           <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#590620] font-bold block mb-4">Primary Headings</span>
              <h3 className="text-5xl font-bold font-nexa tracking-tight mb-16 text-[#590620]">Nexa Heavy</h3>
              
              <div className="space-y-12">
                 <p className="text-4xl md:text-5xl font-bold font-nexa text-[#2c2b2b] leading-tight break-all">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                 </p>
                 <p className="text-3xl font-bold font-nexa text-[#DAAB5B] tracking-widest">
                    0 1 2 3 4 5 6 7 8 9
                 </p>
              </div>
           </div>

           {/* Secondary Font: Montserrat */}
           <div className="flex flex-col border-t md:border-t-0 md:border-l border-[#2c2b2b]/10 pt-16 md:pt-0 md:pl-24">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 font-bold block mb-4">Body Copy</span>
              <h3 className="text-5xl font-medium font-montserrat tracking-tight mb-16 text-[#2c2b2b]">Montserrat</h3>
              
              <div className="space-y-12">
                 <p className="text-3xl md:text-4xl font-normal font-montserrat text-[#2c2b2b]/80 leading-relaxed break-all">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                 </p>
                 <p className="text-2xl font-light font-montserrat text-[#2c2b2b]/60 tracking-[0.2em]">
                    0 1 2 3 4 5 6 7 8 9
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Logo Signatures (Comprehensive Grid) */}
      <section className="py-32 bg-[#F3ECE6]">
         <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex flex-col gap-12">
            <div className="text-center mb-16">
               <span className="text-[10px] tracking-[0.4em] uppercase text-[#590620] font-bold block mb-4">Logo System</span>
               <h2 className="text-4xl md:text-5xl font-bold font-nexa text-[#2c2b2b]">Variations & Lockups</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Wordmark Primary */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="col-span-1 md:col-span-2 p-16 md:p-24 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex items-center justify-center">
                  <img src={horizontalBurgendy} alt="Horizontal Burgundy" className="w-[80%] max-w-[400px] object-contain" />
               </motion.div>
               
               {/* Vertical Primary */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="p-16 bg-[#590620] rounded-3xl shadow-sm hover:shadow-2xl transition-shadow flex flex-col items-center justify-center gap-8">
                  <img src={verticalBurgendy} alt="Vertical Burgundy" className="w-[60%] max-w-[200px] brightness-0 invert object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#DAAB5B] opacity-80">White Lockup</span>
               </motion.div>

               {/* Horizontal White */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="p-16 bg-[#1A1A1A] rounded-3xl shadow-sm hover:shadow-2xl transition-shadow flex flex-col items-center justify-center gap-8">
                  <img src={horizontalWhite} alt="Horizontal White" className="w-[80%] max-w-[300px] object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Dark Mode</span>
               </motion.div>

               {/* Logo Mark Only */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="p-16 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center justify-center gap-8">
                  <img src={mainLogoMark} alt="Brand Mark" className="w-[50%] max-w-[150px] object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Primary Mark</span>
               </motion.div>

               {/* Logo Mark White */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="p-16 bg-[#DAAB5B] rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center justify-center gap-8">
                  <img src={logoWhite} alt="White Mark" className="w-[50%] max-w-[150px] object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#590620] opacity-80">Gold Lockup</span>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 6. Brand In Action Mockups */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] tracking-[0.4em] uppercase text-[#DAAB5B] font-bold block mb-4">Application</span>
             <h2 className="text-4xl md:text-5xl font-bold font-nexa text-[#590620]">Professional Presence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
             <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
                className="md:col-span-12 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={bannerMockup} alt="Banner" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.1 }}
                className="md:col-span-6 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={businessCardMockup} alt="Business Cards" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
                className="md:col-span-6 rounded-[2rem] overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
             >
                <img src={laptopMockup} alt="Digital Tool" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
                className="md:col-span-12 rounded-[2rem] overflow-hidden group bg-neutral-100 flex items-center justify-center p-8 mt-12"
             >
                <img src={slide31} alt="Slide Context" className="w-full md:w-3/4 h-auto shadow-xl" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Outro */}
      <section className="py-48 bg-[#1A1A1A] text-white flex items-center justify-center text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="text-[10px] tracking-[0.8em] uppercase font-bold mb-12 font-montserrat opacity-50 text-[#DAAB5B]">Accuracy & Expertise</p>
          <img src={horizontalWhite} alt="DH Legal Ops" className="w-[300px] md:w-[400px] mx-auto" />
        </motion.div>
      </section>

      <section className="py-32 text-center bg-[#FAF9F6] border-t border-black/5">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#4A1021]/60 mb-8 font-bold">Full Presentation Available</p>
        <a href="https://www.behance.net/gallery/233839147/Brand-Identity-For-Law-Firms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:scale-105 transition-transform duration-500" style={{ color: '#4A1021' }}>
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </section>

      <MoreProjects currentBrandId="daphne_Hecko" />

    </div>
  );
};

export default DaphneHeckoBrandGuideline;
