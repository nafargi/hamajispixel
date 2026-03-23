import { motion } from "framer-motion";

interface Props {
  services: string[];
}

const CaseStudyServices = ({ services }: Props) => (
  <section className="px-0 py-24 rich-black border-t border-white/5">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
              DELIVERABLES
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
            STRATEGIC <span className="text-white/40 italic font-editorial font-light">OUTPUTS.</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 max-w-4xl mx-auto md:mx-0 md:ml-[33.33%]">
        {services.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="px-8 py-4 bg-neutral-900 border border-white/5 rounded-full text-white/70 text-xs tracking-widest uppercase font-bold hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {service}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudyServices;
