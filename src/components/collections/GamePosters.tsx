import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GamePosters = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/game-poster/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allPosters = Object.values(imagesRecord).map((src, id) => ({
    title: `Game Artifact ${id + 1}`,
    style: "Digital Art",
    img: src as string
  }));

  const posters = preview ? allPosters.slice(0, 3) : allPosters;

  return (
    <section className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mix-blend-difference neon-text-glow">
              GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">POSTERS</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-sm mt-4 md:mt-0 text-right uppercase tracking-widest">
            Aggressive compositions, striking colors, and immersive worlds.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm group/gallery">
          {posters.map((poster, idx) => {
            const getFlexBasis = (i: number) => {
              const bases = ["basis-[20%]", "basis-[40%]", "basis-[25%]", "basis-[35%]", "basis-[30%]", "basis-[20%]"];
              return bases[i % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateY: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", stiffness: 50 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] relative group-hover/gallery:opacity-50 hover:!opacity-100 transition-opacity duration-500 perspective-1000 bg-black overflow-hidden ${getFlexBasis(idx)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/60 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0 pointer-events-none" />
                <img
                  src={poster.img}
                  alt={poster.title}
                  className="w-full h-full object-cover block transition-transform duration-[2s] hover:scale-[1.05]"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white drop-shadow-lg">{poster.title}</h3>
                  <span className="text-[8px] md:text-[10px] text-red-400 tracking-widest uppercase mt-1">Digital Art</span>
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
            className="mt-20 text-center"
          >
            <Link 
               to="/collection/game-posters"
               className="inline-flex items-center gap-4 bg-red-600 px-8 py-4 text-xs tracking-widest uppercase text-white hover:bg-red-700 transition-all duration-300 font-bold"
            >
              Enter The Gallery
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GamePosters;
