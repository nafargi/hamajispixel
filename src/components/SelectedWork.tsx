import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brands } from "@/data/brands";

const SelectedWork = () => {
  return (
    <section id="work" className="py-section px-4 md:px-12 rich-black noise-overlay relative min-h-screen">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] tracking-widest uppercase text-primary font-bold mb-4">
            · ARCHIVE ·
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tightest uppercase">
            SELECTED <span className="text-white/40 italic font-editorial font-light">WORKS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr border border-white/15 rounded-lg p-6">
          {brands.map((brand, i) => {
            const isWide = brand.id === "axerio" || brand.id === "open_session" || brand.id === "sunzenith";
            
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-lg bg-neutral-900 border border-white/10 transition-all duration-700 hover:border-primary/50 shadow-2xl ${
                  isWide ? "md:col-span-8 h-[500px]" : "md:col-span-4 h-[500px]"
                }`}
              >
                <Link to={`/brand/${brand.id}`} className="block w-full h-full relative group ">
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                    <span className="text-[10px] text-white/50 tracking-widest uppercase font-bold px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      {brand.category}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 bg-primary/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Title and Detail */}
                  <div className="absolute bottom-10 left-10 right-10 z-20">
                    <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tightest mb-4 group-hover:text-primary transition-colors duration-500 font-heading uppercase leading-none">
                      {brand.name}
                    </h3>
                    <p className="text-white/40 text-sm font-light max-w-sm group-hover:text-white/70 transition-colors duration-500 font-heading tracking-tight mb-8">
                      {brand.description}
                    </p>
                    
                    {/* Explore on Behance Button */}
                    <div className="inline-flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[9px] sm:text-[10px] transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(255,107,53,0.3)] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 relative z-30 pointer-events-auto" onClick={(e) => { e.stopPropagation(); window.open("https://www.behance.net/nafargi", "_blank"); }}>
                      Explore on Behance
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                         <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Background Image with Natural Visibility */}
                  <div className="absolute inset-0 z-0 ">
                    <img
                      src={brand.coverImage}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-60 " />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
