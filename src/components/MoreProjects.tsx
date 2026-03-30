import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { presentationBrands } from "@/data/presentationBrands";

export const MoreProjects = ({ currentBrandId }: { currentBrandId?: string }) => {
  return (
    <section className="px-4 md:px-8 py-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-5xl font-light mb-16 font-editorial italic text-white/80"
            >
                More Projects
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                {presentationBrands
                  .filter(b => b.id !== currentBrandId)
                  .sort(() => 0.5 - Math.random()) // Shuffle the remaining
                  .slice(0, 3)
                  .map((otherBrand) => {
                    return (
                      <Link to={`/brand/${otherBrand.id}`} key={otherBrand.id}>
                        <div className="group cursor-pointer bg-[#0a0a0a] overflow-hidden rounded-2xl border border-white/5 hover:border-white/30 transition-all duration-500 shadow-xl">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img 
                                    src={otherBrand.coverImage} 
                                    alt={otherBrand.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>
                            <div className="p-8">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-3 font-bold">{otherBrand.category}</span>
                                <h4 className="text-2xl font-light text-white group-hover:text-white transition-colors font-heading uppercase tracking-tight">{otherBrand.name}</h4>
                            </div>
                        </div>
                      </Link>
                    );
                  })
                }
            </div>
        </div>
    </section>
  );
};
