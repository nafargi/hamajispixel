import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-section px-6 md:px-12 rich-black noise-overlay relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-9xl font-bold tracking-tightest leading-[0.85] text-white font-heading uppercase">
            LET'S ARCHITECT <br />
            <span className="text-white/40 italic font-editorial font-light">THE FUTURE.</span>
          </h2>
          
          <div className="mt-16 flex flex-col items-center justify-center gap-8">
            <a href="mailto:nafargidamena@gmail.com" className="inline-block px-12 py-6 bg-primary text-black font-bold text-sm tracking-widest uppercase transition-all rounded-full hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,107,53,0.3)]">
              Start the dialogue
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
