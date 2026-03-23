import { motion } from "framer-motion";
import { Search, Compass, PenTool, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import processImage from "@/assets/creative-collection/sketch1649595081370 - Copy.png";
import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/nafargidamena";

const processSteps = [
  {
    icon: <Search size={20} />,
    title: "Discovery",
    description: "Understand your business, audience, and goals to set a solid foundation."
  },
  {
    icon: <Compass size={20} />,
    title: "Strategy",
    description: "Define brand positioning, messaging, and a personality that resonates."
  },
  {
    icon: <PenTool size={20} />,
    title: "Design",
    description: "Create the logo, color system, typography, and core visual assets."
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Refinement",
    description: "Collaborative feedback, revisions, and strict alignment with your vision."
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Delivery",
    description: "Complete brand system delivered with guidelines for consistent use."
  }
];

const Process = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <section className="py-section px-6 md:px-12 rich-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP: Header & Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 items-center">
          
          {/* Header Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">⚡ Design Process</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-none">
              Process
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-10 w-full max-w-sm">
              Crafting bold visuals that inspire and elevate brands with a structured, transparent thought process.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handleBookCall}
                className="bg-primary hover:bg-[#E85B2A] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)]"
              >
                Book for Strategy Call
              </button>
              <a 
                href="#work"
                className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                See Projects
              </a>
            </div>
          </motion.div>

          {/* Wide Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[60%] w-full h-[300px] md:h-[400px] rounded-[40px] overflow-hidden relative shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src={processImage} 
              alt="Design Process" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2s] hover:scale-105" 
            />
          </motion.div>

        </div>

        {/* BOTTOM: Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-[30px] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  {step.icon}
                </div>
                <span className="text-white/20 font-bold font-heading text-2xl group-hover:text-white/40 transition-colors duration-300">
                  0{i + 1}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-heading text-white mb-3">{step.title}</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed flex-grow">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
