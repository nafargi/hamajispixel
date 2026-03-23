import { motion } from "framer-motion";

import { BrandColor } from "@/data/brands";

interface Props {
  colors: BrandColor[];
}

const CaseStudyColors = ({ colors }: Props) => (
  <section className="px-0 py-24 md:py-32 rich-black border-t border-white/5">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 text-center md:text-left">
        <div className="md:col-span-12 mb-16">
          <span className="text-primary text-[10px] tracking-widest uppercase font-bold mb-4 inline-block">· Chromaticity ·</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tightest text-white font-heading uppercase">
            COLOR <span className="text-white/40 italic font-editorial font-light">SYSTEM</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {colors.map((color, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group"
          >
            <div 
              className="aspect-square rounded-lg mb-6 border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="px-2">
              <span className="text-white text-xs font-bold tracking-widest uppercase block mb-1">{color.name}</span>
              <span className="text-white/30 text-[10px] tracking-widest uppercase font-medium">{color.hex}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyColors;
