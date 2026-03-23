import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AiArtCollections = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/anime/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allArt = Object.values(imagesRecord).map(src => src as string);
  
  const art = preview ? allArt.slice(0, 4) : allArt;

  return (
    <section id="ai-art" className="py-24 px-6 md:px-12 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="w-full md:w-1/3"
        >
          <div className="glassmorphism p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
            <h2 className="text-2xl md:text-4xl font-light text-white mb-6">
              Synthetic <br /><span className="font-semibold px-2 py-1 bg-white text-black mt-2 inline-block rounded-sm">Visions</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              AI-generated art collections pushing the boundaries of imagination. Sleek, minimalist, and deeply ethereal concepts curated for visionaries.
            </p>
            {preview ? (
              <Link to="/collection/ai-art" className="inline-block text-[10px] tracking-[0.3em] uppercase text-white/50 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                Explore Gallery
              </Link>
            ) : (
              <button className="text-[10px] tracking-[0.3em] uppercase text-white/50 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                Explore Gallery
              </button>
            )}
          </div>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-wrap gap-[1px] bg-white/20 p-[1px] rounded-sm max-w-none">
          {art.map((src, idx) => {
            const getFlexBasis = (idx: number) => {
              const bases = ["basis-[30%]", "basis-[20%]", "basis-[40%]", "basis-[25%]"];
              return bases[idx % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`flex-auto h-[200px] md:h-[250px] relative overflow-hidden bg-black group ${getFlexBasis(idx)}`}
              >
                <img 
                  src={src} 
                  alt="AI Art" 
                  className="w-full h-full object-cover block transition-transform duration-1000 group-hover:scale-[1.03] sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AiArtCollections;
