import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AfricanPortraits = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/african-portrait/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allItems = Object.values(imagesRecord).map((src, id) => ({
    id,
    title: `Portrait 0${id + 1}`,
    src: src as string
  }));

  const items = preview ? allItems.slice(0, 3) : allItems;

  return (
    <section id="african-portraits" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-editorial italic text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-amber-600"></span> African Portraits
          </h2>
          <p className="text-white/50 text-sm max-w-xl pl-16 mb-8">
            Capturing the raw beauty, deep heritage, and powerful narratives of African culture through high-contrast cinematic lighting and rich warm tones.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm">
          {items.map((item, idx) => {
            const getFlexBasis = (i: number) => {
              const bases = ["basis-[30%]", "basis-[20%]", "basis-[40%]", "basis-[25%]", "basis-[35%]", "basis-[20%]"];
              return bases[i % bases.length];
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] group relative overflow-hidden bg-black ${getFlexBasis(idx)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 duration-500 group-hover:from-black/90 pointer-events-none"></div>
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover block transition-transform duration-[2s] group-hover:scale-110 sepia-[0.3]"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-80 group-hover:opacity-100 flex flex-col justify-end">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-amber-500/80 mb-2 block">Portraiture</span>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide text-white">{item.title}</h3>
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
               to="/collection/african-portraits"
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

export default AfricanPortraits;
