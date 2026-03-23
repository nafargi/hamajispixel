import { motion } from "framer-motion";

interface Props {
  story: string;
}

const CaseStudyStory = ({ story }: Props) => (
  <section className="px-6 md:px-12 py-24 md:py-32 rich-black">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:col-span-3 pb-8 md:pb-0"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-primary/40" />
          <span className="text-primary text-[10px] tracking-widest uppercase font-bold">
            THE STORY
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-8 md:col-start-5"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/80 leading-[1.3] font-heading tracking-tight italic font-editorial">
          {story}
        </p>
      </motion.div>
    </div>
  </section>
);

export default CaseStudyStory;
