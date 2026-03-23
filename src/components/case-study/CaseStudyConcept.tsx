import { motion } from "framer-motion";
import { BrandConcept } from "@/data/brands";

interface Props {
  concept: BrandConcept;
}

const CaseStudyConcept = ({ concept }: Props) => (
  <section className="px-0 py-24 md:py-32 rich-black border-t border-white/5">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
              BRAND THINKING
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 md:col-start-5"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1] text-white font-heading uppercase">
            THE STRATEGIC <br />
            <span className="text-white/40 italic font-editorial font-light">INTENT.</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {[
          { label: "The Idea", text: concept.idea },
          { label: "The Meaning", text: concept.meaning },
          { label: "The Message", text: concept.message },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="md:col-span-4 p-modular bg-neutral-900 border border-white/5 rounded-lg group hover:border-primary/50 transition-all duration-500"
          >
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold block mb-8">
              {item.label}
            </span>
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed font-heading tracking-tight group-hover:text-white/70 transition-colors">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyConcept;
