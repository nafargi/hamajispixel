import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";
import { motion } from "framer-motion";
import {
  Figma,
  Layers,
  PenTool,
  Edit3,
} from "lucide-react";

// Import all images
import img1 from "@/assets/about_img/20211227_184731.jpg";
import img2 from "@/assets/about_img/ab0b97d1-aea3-4e1f-a776-27bf7624995c (1).jpg";
import img3 from "@/assets/about_img/b7c50381-b644-458e-95a3-34e7d26a98f3 - Copy.jpg";
import img4 from "@/assets/about_img/backupPreview.jpg";
import img5 from "@/assets/about_image/about_page_nafi_img.png";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
  };

  const stacks = [
    { name: "Adobe Photoshop", desc: "Advanced photo manipulation and digital art", icon: <Layers className="text-white" /> },
    { name: "Adobe Illustrator", desc: "Precision vector design and brand assets", icon: <PenTool className="text-white" /> },
    { name: "Figma", desc: "Collaborative interface design and prototyping", icon: <Figma className="text-white" /> },
    { name: "Sketchbook", desc: "Digital sketching and ideation", icon: <Edit3 className="text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff8533] selection:text-black overflow-x-hidden pt-2 font-inter relative">
      {/* Global Premium Texture Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/linen.png")' }} />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <Navigation />

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10">

        {/* ULTRA-PREMIUM FULL-WIDTH HERO WITH ARCHITECTURAL GRID LINES (NO GRAIN) */}
        <section className="mb-60 text-center relative py-40 flex flex-col items-center overflow-hidden w-screen left-1/2 -ml-[50vw]">
           {/* Architectural Grid Line Pattern - Full Width */}
           <div 
             className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none" 
             style={{ 
               backgroundImage: `
                 linear-gradient(rgba(255, 255, 255, 0.8) 1.5px, transparent 1.5px),
                 linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1.5px, transparent 1.5px)
               `,
               backgroundSize: "80px 80px",
               maskImage: 'radial-gradient(ellipse 70% 50% at center, black, transparent 90%)'
             }} 
           />
           <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
           
           {/* Sophisticated Accent Lines */}
           <div className="absolute top-[15%] left-0 right-0 h-px bg-white/10 z-0" />
           <div className="absolute bottom-[15%] left-0 right-0 h-px bg-white/10 z-0" />
           
           <motion.div className="relative z-10 px-6 md:px-12 flex flex-col items-center">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[#ff8533] text-[10px] font-bold tracking-[1em] uppercase block mb-12"
             >
               Founder & Creative Director
             </motion.span>
             
             <motion.h1 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-[1.05] tracking-tightest uppercase font-heading mb-12 max-w-5xl mx-auto"
             >
               Nafargi Damena
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.5, delay: 0.4 }}
               className="text-white/40 text-base md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
             >
               Architecting strategic visual identities for high-end brands that value clarity, consistency, and uncompromising luxury.
             </motion.p>
           </motion.div>
        </section>

        {/* SIDE-BY-SIDE: NAFI IMAGE & CONTENT - CENTERED FEEL */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-60 items-center">
          <motion.div
            {...fadeInUp}
            className="aspect-[4/5] rounded-[40px] overflow-hidden bg-white/5 border border-white/5 relative group order-2 lg:order-1"
          >
            <img src={img5} alt="Founder Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
          </motion.div>

          <div className="space-y-16 order-1 lg:order-2">
            <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="text-[#ff8533] text-[10px] font-bold tracking-[0.4em] uppercase">The Visionary</h2>
              <div className="text-white/70 text-lg md:text-2xl font-light leading-relaxed space-y-8">
                <p>
                  My approach to design is rooted in the belief that every aesthetic decision must be a strategic one. As a specialist in luxury brand identity, I don't just create logos—I build comprehensive visual systems that command attention and foster unquestionable trust.
                </p>
                <p>
                  With a deep background in strategic brand building, I transform complex business challenges into sophisticated, minimalist narratives that resonate with visionary leaders and their audiences.
                </p>
                <p>
                  Based in the intersection of art and strategy, my goal is to ensure your brand remains impactful for decades. I believe in stripping away the unnecessary to let the core soul of your business shine with absolute clarity.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SOPHISTICATED SIDE-BY-SIDE: GALLERY & MY STACKS (PREMIUM GRID) */}
        <section className="mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Image Gallery Grid */}
            <div className="space-y-6">
              <motion.div {...fadeInUp} className="mb-12">
                <h2 className="text-[#ff8533] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 text-left">Process & Perspective</h2>
                <p className="text-white/30 text-xs tracking-widest uppercase">Visual narratives from the field</p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  {...fadeInUp}
                  className="aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 border border-white/5 relative group"
                >
                  <img src={img1} alt="Portrait 1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                </motion.div>
                <motion.div
                  {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}
                  className="aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 border border-white/5 relative group"
                >
                  <img src={img2} alt="Portrait 2" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                </motion.div>
                <motion.div
                  {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}
                  className="aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 border border-white/5 relative group"
                >
                  <img src={img3} alt="Project Detail" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                </motion.div>
                <motion.div
                  {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}
                  className="aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 border border-white/5 relative group"
                >
                  <img src={img4} alt="Studio Life" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                </motion.div>
              </div>
            </div>

            {/* Right Column: My Stacks Experience */}
            <div className="space-y-12">
              <div className="mb-16">
                <motion.h2 {...fadeInUp} className="text-3xl font-bold tracking-tight uppercase font-heading mb-8 text-left">My stacks</motion.h2>
                <motion.div {...fadeInUp} className="flex flex-wrap gap-4">
                  <a href="https://www.linkedin.com/in/nafargi-damena-6869b0200" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest uppercase font-bold border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">LinkedIn</a>
                  <a href="https://www.upwork.com/freelancers/~013898fd17f63004bb" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest uppercase font-bold bg-[#ff8533] text-black px-8 py-4 rounded-full border border-[#ff8533] hover:shadow-[0_0_20px_rgba(255,133,51,0.4)] transition-all">Hire on Upwork</a>
                </motion.div>
              </div>

              <div className="space-y-4 w-full">
                {stacks.map((stack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-8 rounded-[32px] border border-white/5 flex items-center gap-6 group transition-all duration-700 bg-white/[0.02] hover:bg-white/[0.05] text-left relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-4 shrink-0 transition-all duration-700 bg-white/5 group-hover:bg-[#ff8533]/20 z-10`}>
                      {stack.icon}
                    </div>
                    <div className="z-10">
                      <h3 className={`text-lg font-bold tracking-tight mb-1 uppercase font-heading text-white group-hover:text-[#ff8533] transition-colors duration-500`}>{stack.name}</h3>
                      <p className={`text-xs leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-500`}>{stack.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <BookCall />
      <Footer />
    </div>
  );
};

export default About;

