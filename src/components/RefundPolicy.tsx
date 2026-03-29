import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, RotateCcw } from "lucide-react";

const guaranteePoints = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Guaranteed Excellence",
    description: "We don't just deliver designs; we deliver market leadership. Our systems are engineered for absolute dominance in your niche."
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Zero-Risk Partnership",
    description: "We absorb the total risk so you can focus on the results. If you don't love the first phase, we return every cent. No friction."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Proven Authority",
    description: "Backed by 200+ successful brand deliveries and over $140M in funding unlocked for our elite tech partners worldwide."
  }
];

const RefundPolicy = () => {
  return (
    <section id="refund" className="py-24 lg:py-40 px-6 md:px-12 bg-[#030303] relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">⚡ Uncompromising Confidence</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-8 leading-[0.9] tracking-tightest">
              Absolute <br/> <span className="text-white/40">Guarantee.</span>
            </h2>
            
            <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-xl italic font-editorial">
              "We only win when you win. If you aren't completely obsessed with the strategic direction after our first phase, we'll return your full deposit—zero questions, zero friction."
            </p>

            <div className="flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-white text-4xl font-bold font-heading">$0</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Total Risk</span>
               </div>
               <div className="w-px h-12 bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-white text-4xl font-bold font-heading">100%</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Commitment</span>
               </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {guaranteePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 rounded-[32px] flex gap-6 items-start"
              >
                <div className="p-4 bg-white/[0.05] rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3 tracking-tight">{point.title}</h3>
                  <p className="text-white/40 text-sm md:text-base font-light leading-relaxed group-hover:text-white/60 transition-colors">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Abstract "100%" Seal */}
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-20 -right-20 lg:-top-40 lg:-right-40 w-64 h-64 lg:w-[400px] lg:h-[400px] border border-white/[0.03] rounded-full flex items-center justify-center opacity-30 pointer-events-none"
        >
           <div className="absolute inset-0 border-t border-primary/20 rounded-full" />
           <span className="text-[10px] lg:text-xs tracking-[1em] uppercase text-white/20 font-bold">Risk Free • Excellence • Absolute Confidence •</span>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicy;
