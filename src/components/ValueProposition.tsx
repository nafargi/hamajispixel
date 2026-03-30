import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section className="py-section px-6 md:px-12 rich-black noise-overlay flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tightest font-heading uppercase"
        >
          WE DON'T JUST DESIGN. <br />
          <span className="text-white/20">WE ENGINEER PERCEPTION.</span> <br />
          YOUR BRAND IS AN ASSET. <br />
          <span className="text-gradient italic font-editorial font-light px-4">PERFORM LIKE ONE.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ValueProposition;
