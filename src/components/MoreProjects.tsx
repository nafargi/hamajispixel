import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { presentationBrands } from "@/data/presentationBrands";

export const MoreProjects = ({ currentBrandId }: { currentBrandId?: string }) => {
  return (
    <section className="px-4 md:px-8 py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-5xl font-light mb-16 font-heading uppercase tracking-tighter text-white/80"
            >
                More Projects
            </motion.h3>
            
            <div className="relative">
                {/* Horizontal Scrolling Container */}
                <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                    {presentationBrands
                      .filter(b => b.id !== currentBrandId)
                      .map((otherBrand) => {
                        return (
                          <motion.div 
                            key={otherBrand.id}
                            className="min-w-[300px] md:min-w-[450px] snap-start"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                          >
                            <Link to={`/brand/${otherBrand.id}`}>
                              <div className="group cursor-pointer bg-[#0a0a0a] overflow-hidden rounded-lg border border-white/5 hover:border-white/30 transition-all duration-500 shadow-xl">
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
                          </motion.div>
                        );
                      })
                    }
                </div>
            </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `}} />
    </section>
  );
};
