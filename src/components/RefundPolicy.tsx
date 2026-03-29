import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, Zap } from "lucide-react";

const RefundPolicy = () => {
  return (
    <section id="refund" className="py-24 lg:py-40 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-8"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary">Absolute Confidence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-white mb-8 leading-[0.8] tracking-tightest uppercase"
          >
            RISK <span className="text-primary italic">FREE.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl lg:text-3xl font-light leading-relaxed max-w-4xl italic font-editorial"
          >
            "Every project starts risk-free. If you don’t love the first phase of the design we have done for you, you’ll get a full refund—no questions asked."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Guaranteed Result or Full Refund",
              text: "We stand by our craft with an ironclad promise of excellence."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "We Take the Risk, You Take the Results",
              text: "Our partnership is built on your success, not your exposure."
            },
            {
              icon: <RotateCcw className="w-8 h-8" />,
              title: "That’s How Confident We Are",
              text: "A testament to the quality we deliver for global brand systems."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/10 rounded-[40px] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-4 leading-tight uppercase tracking-tight">{item.title}</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none select-none overflow-hidden w-full whitespace-nowrap opacity-[0.02]">
           <span className="text-[20vw] font-bold font-heading text-white leading-none">REFUND POLICY • 100% REFUND •</span>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
