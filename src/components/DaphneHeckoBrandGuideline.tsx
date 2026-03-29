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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  };

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#2c2b2b] font-montserrat overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="h-[100svh] w-full relative flex items-center justify-center overflow-hidden bg-[#590620]">
        {/* Ultra-HD Image Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center" alt="DH Legal Ops Cinematic Hero" />
          {/* Subtle Brand Color Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#590620]/20 mix-blend-multiply" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={horizontalWhite} className="w-[130px] md:w-[200px] mb-12" alt="DH Legal Ops Logo" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-white font-light tracking-wide leading-relaxed drop-shadow-md"
          >
            Lifting the operational burden. Engineering efficiency for modern law firms.
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT THE BRAND */}
      <section className="py-32 px-6 md:px-24 bg-[#050505] text-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#DAAB5B] font-bold mb-6 block">The Purpose</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            DH Legal Ops delivers streamlined operational support—handling intake to billing—so legal professionals can focus entirely on practicing law and serving their clients.
          </h2>
        </motion.div>
      </section>

      {/* 3. LOGO CONCEPT */}
      <section className="py-32 px-6 md:px-24 bg-white text-[#2c2b2b] border-y border-[#2c2b2b]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.4em] uppercase opacity-40 mb-6 block font-bold">Logo Concept</span>
            <h2 className="text-4xl font-light tracking-tight mb-8">Professional Precision</h2>
            <p className="text-lg text-[#2c2b2b]/60 leading-relaxed">
              The 'd' and 'h' are rendered in a bold, rounded style for approachability. The stem of the 'h' seamlessly transforms into a fountain pen nib, a classic symbol of legal precision.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center p-16 border border-black/5 bg-[#FAF9F6]"
          >
            <img src={mainLogoMark} alt="DH Symbol" className="w-[150px] md:w-[200px]" />
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#590620] py-24 px-6 md:px-24 border-y border-black/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end border-b border-white/10 pb-8">
             <h2 className="text-4xl md:text-5xl font-light font-nexa text-white tracking-widest uppercase">Color Palette</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { name: 'Burgundy', hex: '#590620', rgb: '89 6 32', bg: '#2C0310', text: 'white' },
               { name: 'Gold', hex: '#DAAB5B', rgb: '218 171 91', bg: '#4A3A1F', text: 'white' },
               { name: 'Cream', hex: '#FAF9F6', rgb: '250 249 246', bg: '#FAF9F6', text: '#2c2b2b' }
             ].map((color, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-12 flex flex-col justify-between h-[350px] border border-white/10"
                 style={{ backgroundColor: color.bg, color: color.text }}
               >
                 <div className="w-12 h-12 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                 <div>
                   <h3 className="text-3xl font-light tracking-tight mb-8 uppercase">{color.name}</h3>
                   <div className="text-[10px] tracking-[0.2em] font-light flex justify-between opacity-50">
                     <span>{color.hex}</span>
                     <span>RGB {color.rgb}</span>
                   </div>
                 </div>
               </motion.div>
             ))}
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
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="col-span-1 md:col-span-2 p-16 md:p-24 bg-white flex items-center justify-center">
                  <img src={horizontalBurgendy} alt="Horizontal Burgundy" className="w-[80%] max-w-[400px] object-contain" />
               </motion.div>
               
               {/* Vertical Primary */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="p-16 bg-[#590620] flex flex-col items-center justify-center gap-8">
                  <img src={verticalBurgendy} alt="Vertical Burgundy" className="w-[60%] max-w-[200px] brightness-0 invert object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#DAAB5B] opacity-80">White Lockup</span>
               </motion.div>

               {/* Horizontal White */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="p-16 bg-[#1A1A1A] flex flex-col items-center justify-center gap-8">
                  <img src={horizontalWhite} alt="Horizontal White" className="w-[80%] max-w-[300px] object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Dark Mode</span>
               </motion.div>

               {/* Logo Mark Only */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="p-16 bg-white flex flex-col items-center justify-center gap-8">
                  <img src={mainLogoMark} alt="Brand Mark" className="w-[50%] max-w-[150px] object-contain" />
                  <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Primary Mark</span>
               </motion.div>

               {/* Logo Mark White */}
               <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="p-16 bg-[#DAAB5B] flex flex-col items-center justify-center gap-8">
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
                className="md:col-span-12 overflow-hidden group"
             >
                <img src={bannerMockup} alt="Banner" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.1 }}
                className="md:col-span-6 overflow-hidden group"
             >
                <img src={businessCardMockup} alt="Business Cards" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
                className="md:col-span-6 overflow-hidden group"
             >
                <img src={laptopMockup} alt="Digital Tool" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-[4s] hover:scale-105" />
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
                className="md:col-span-12 overflow-hidden group bg-neutral-100 flex items-center justify-center p-8 mt-12"
             >
                <img src={slide31} alt="Slide Context" className="w-full md:w-3/4 h-auto" />
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
