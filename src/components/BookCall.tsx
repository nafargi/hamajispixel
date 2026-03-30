import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import SmokeBackground from "@/components/ui/SmokeBackground";

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative gleaming-border rounded-[40px] p-12 md:p-24 text-center flex flex-col items-center"
        >
          {/* Intense Bottom Glow (Grayscale) */}
          <div className="absolute -bottom-[60%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />
          <div className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />

          {/* Smooth Smoke Background */}
          <SmokeBackground className="opacity-20" />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 relative z-10 leading-[1.1] tracking-tight">
            Start Your Bold Transformation Today
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
            Harness the power of strategic design to elevate your brand with confidence, clarity, and uncompromising quality.
          </p>

          <button
            onClick={handleBookCall}
            className="relative z-10 inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-[30px] font-bold text-sm md:text-base capitalize transition-all duration-300 hover:scale-105 gleaming-button"
          >
            Book for Strategy Call
            <div className="bg-white text-black p-1.5 rounded-full flex items-center justify-center">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
