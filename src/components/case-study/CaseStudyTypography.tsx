import { motion } from "framer-motion";
import { BrandTypography } from "@/data/brands";

interface Props {
  typography: BrandTypography[];
}

const CaseStudyTypography = ({ typography }: Props) => (
  <section className="px-0 py-24 md:py-32 rich-black border-t border-white/5">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
              TYPOGRAPHY
            </span>
          </div>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="md:col-span-12 mt-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tightest text-white font-heading uppercase mb-24">
            SPECIMEN <span className="text-white/40 italic font-editorial font-light">HIERARCHY</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {typography.map((type, i) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="p-modular bg-neutral-900 border border-white/5 rounded-lg group hover:border-primary/50 transition-all duration-500"
          >
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold block mb-12">
              {type.name}
            </span>
            <div className="text-3xl md:text-5xl font-bold tracking-tightest leading-tight text-white font-heading uppercase group-hover:text-primary transition-colors">
              {type.style}
            </div>
            <p className="mt-8 text-white/30 text-xs tracking-widest uppercase font-bold">Main Character Set A-Z 0-9</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyTypography;
