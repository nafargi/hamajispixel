import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CyberpunkArt = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/cyberpunk/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allImages = Object.values(imagesRecord).map(src => src as string);
  const images = preview ? allImages.slice(0, 3) : allImages;

  return (
    <section id="cyberpunk" className="py-32 px-6 md:px-0 bg-black relative border-y border-fuchsia-900/30 overflow-hidden">
      {/* Glitch lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz4KPC9zdmc+')] opacity-20 z-0 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 uppercase tracking-tighter mix-blend-screen neon-text-glow">
            NEO-TOKYO VIBES
          </h2>
          <p className="text-fuchsia-400/80 text-xs tracking-[0.5em] uppercase mt-4">Cyberpunk Chronicles</p>
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm group/cyber">
          {images.map((src, idx) => {
            const getFlexBasis = (i: number) => {
              const bases = ["basis-[40%]", "basis-[20%]", "basis-[25%]", "basis-[30%]"];
              return bases[i % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] relative overflow-hidden bg-black ${getFlexBasis(idx)} border-4 border-transparent hover:border-fuchsia-500/50 transition-colors duration-300 block`}
              >
                <img
                  src={src}
                  alt={`Cyberpunk Art ${idx + 1}`}
                  className="w-full h-full object-cover filter contrast-125 saturate-[1.2] transition-transform duration-[2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-10 z-20 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <span className="text-cyan-400 text-[10px] font-mono tracking-widest block mb-1">SYNDICATE // 00{idx + 1}</span>
                    <h3 className="text-xl md:text-3xl font-bold text-white drop-shadow-md">NIGHT CITY DRIFTERS</h3>
                  </div>
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
            <Link to="/collection/cyberpunk" className="inline-block px-8 py-4 bg-fuchsia-600/20 border border-fuchsia-500 text-fuchsia-300 text-xs tracking-widest uppercase hover:bg-fuchsia-500 hover:text-white transition-all neon-glow">
              Access Full Databank
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CyberpunkArt;
