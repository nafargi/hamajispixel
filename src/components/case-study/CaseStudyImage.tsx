import { motion } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
}

const CaseStudyImage = ({ images, alt }: Props) => {
  if (!images || images.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.7 }}
      className="px-6 md:px-12 mb-40 w-full"
    >
        <div className="max-w-[2000px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-10 space-y-6 md:space-y-10">
            {images.map((src, index) => (
                <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
                    className="break-inside-avoid relative group overflow-hidden rounded-sm bg-[#0a0a0a]"
                >
                    <img
                        src={src}
                        alt={`${alt} ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                        loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none"></div>
                </motion.div>
            ))}
        </div>
    </motion.section>
  );
};

export default CaseStudyImage;
