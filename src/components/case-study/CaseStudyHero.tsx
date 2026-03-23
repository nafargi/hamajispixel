import { motion } from "framer-motion";
import { Brand } from "@/data/brands";

interface Props {
  brand: Brand;
}

const CaseStudyHero = ({ brand }: Props) => (
  <section className="pt-40 md:pt-56 pb-20 md:pb-28 px-6 md:px-12 rich-black">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
          {brand.category} · {brand.year}
        </span>
      </motion.div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tightest leading-[0.9] text-white font-heading uppercase"
        >
          {brand.name}
        </motion.h1>
      </div>
    </div>
  </section>
);

export default CaseStudyHero;
