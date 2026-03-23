import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CreativeArt = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/creative-collection/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allImages = Object.values(imagesRecord).map(src => src as string);
  
  const images = preview ? allImages.slice(0, 4) : allImages;

  return (
    <section id="creative" className="py-24 px-6 md:px-12 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 block">Experimental</span>
          <h2 className="text-4xl md:text-6xl font-editorial italic text-white font-light">
            Creative Canvas
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm">
          {images.map((src, idx) => {
            const getFlexBasis = (i: number) => {
              const bases = ["basis-[25%]", "basis-[35%]", "basis-[20%]", "basis-[40%]", "basis-[30%]"];
              return bases[i % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] relative overflow-hidden group bg-black ${getFlexBasis(idx)}`}
              >
                <img 
                  src={src} 
                  alt="Creative Art" 
                  className="w-full h-full object-cover block opacity-80 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="text-white font-grotesk text-sm uppercase tracking-widest drop-shadow-lg">Exhibition {idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
               to="/collection/creative"
               className="inline-flex items-center gap-4 border border-white/20 px-8 py-4 rounded-full text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CreativeArt;
