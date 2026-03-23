import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GlowingSketches = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/glowing-portrait/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allSketches = Object.values(imagesRecord).map((src, id) => ({
    title: `Luminous Form ${id + 1}`,
    img: src as string
  }));

  const sketches = preview ? allSketches.slice(0, 3) : allSketches;

  return (
    <section id="glowing" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[500px] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase mb-4 neon-text-glow">
            Glowing Sketches
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto">
            Where traditional artistry meets neon-infused digital illumination.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm">
          {sketches.map((item, idx) => {
            const getFlexBasis = (idx: number) => {
              const bases = ["basis-[30%]", "basis-[25%]", "basis-[40%]", "basis-[20%]", "basis-[35%]"];
              return bases[idx % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] group relative bg-black overflow-hidden ${getFlexBasis(idx)}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover block transition-all duration-700 factor contrast-125 saturate-150 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 mix-blend-overlay transition-colors duration-500 pointer-events-none"></div>
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] text-cyan-300 tracking-widest uppercase mb-2 block drop-shadow-md">Luminous Form</span>
                  <h3 className="text-xl md:text-2xl text-white font-medium tracking-wide group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                    {item.title}
                  </h3>
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
               to="/collection/glowing"
               className="inline-flex items-center gap-4 border border-white/20 px-8 py-4 rounded-full text-xs tracking-widest uppercase text-white hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-500"
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

export default GlowingSketches;
