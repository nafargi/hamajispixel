import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

// Update this link later if needed
const CALENDLY_URL = "https://calendly.com/nafargidamena";

const BookCall = () => {
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
    <section className="py-24 px-6 md:px-12 rich-black relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#050505] border border-white/10 rounded-[40px] p-12 md:p-24 text-center overflow-hidden flex flex-col items-center shadow-2xl"
        >
          {/* Intense Bottom Glow (matching screenshot) */}
          <div className="absolute -bottom-[60%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-primary/40 blur-[100px] rounded-full pointer-events-none z-0" />
          <div className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary/60 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />

          {/* Dot Pattern Background */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 relative z-10 leading-[1.1] tracking-tight">
            Start Your Bold Transformation Today
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
            Harness the power of strategic design to elevate your brand with confidence, clarity, and uncompromising quality.
          </p>

          <button
            onClick={handleBookCall}
            className="relative z-10 inline-flex items-center gap-4 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-[30px] font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,107,53,0.3)]"
          >
            Book for Strategy Call
            <div className="bg-black text-white p-1.5 rounded-full flex items-center justify-center">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
