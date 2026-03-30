import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brands } from "@/data/brands";

const SelectedWork = () => {
  return (
    <section id="work" className="py-section px-4 md:px-12 rich-black noise-overlay relative min-h-screen">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr border border-white/10 p-6">
          {brands.map((brand, i) => {
            const isWide = brand.id === "axerio" || brand.id === "open_session" || brand.id === "sunzenith";

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-lg border border-white/10 transition-all duration-700 hover:border-white/30 shadow-2xl ${isWide ? "md:col-span-8 h-[500px]" : "md:col-span-4 h-[500px]"
                  }`}
              >
                <Link to={`/brand/${brand.id}`} className="block w-full h-full relative group">
                  {/* Category Tag */}
                  <div className="absolute top-8 left-8 z-20">
                    <span className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white/60 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                      {brand.category}
                    </span>
                  </div>

                  {/* View Case Study Button - links to internal brand page */}
                  <div className="absolute bottom-10 left-10 z-30">
                    <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[9px] sm:text-[10px] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-auto">
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Background Image: B&W by default, full color on hover, NO overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={brand.coverImage}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
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
