import { motion } from "framer-motion";
import { BrandApplication } from "@/data/brands";

interface Props {
  applications: BrandApplication[];
}

const CaseStudyApplications = ({ applications }: Props) => (
  <section className="px-0 py-24 md:py-32 rich-black border-t border-white/5">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
              REAL WORLD
            </span>
          </div>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="md:col-span-8 md:col-start-5"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tightest text-white font-heading uppercase">
            CONCEPT TO <span className="text-white/40 italic font-editorial font-light">REALITY.</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applications.map((app, i) => (
          <motion.div
            key={app.type}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="p-modular bg-neutral-900 border border-white/5 rounded-lg group hover:border-primary/50 transition-all duration-500"
          >
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold block mb-8">
              {app.type}
            </span>
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed font-heading tracking-tight group-hover:text-white/70 transition-colors">
              {app.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyApplications;
