import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SocialMediaDesigns = ({ preview = false }: { preview?: boolean }) => {
  const imagesRecord = import.meta.glob('@/assets/social-media-post/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
  const allPosts = Object.values(imagesRecord).map((src, id) => ({
    brand: `Campaign ${id + 1}`,
    type: "Digital Asset",
    img: src as string
  }));

  const posts = preview ? allPosts.slice(0, 2) : allPosts;

  return (
    <section id="social-media" className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
             <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
               Social & Digital
             </h2>
             <p className="text-white/50 text-sm mt-4 max-w-sm">
               Scroll-stopping designs tailored for digital engagement and modern social feeds.
             </p>
          </div>
          {!preview && (
            <button className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-white/60 transition-colors mt-6 md:mt-0 underline underline-offset-4">
              View All Campaigns
            </button>
          )}
        </motion.div>

        <div className="flex flex-wrap gap-[1px] w-full max-w-[2000px] mx-auto bg-white/20 p-[1px] rounded-sm">
          {posts.map((post, idx) => {
            const getFlexBasis = (idx: number) => {
              const bases = ["basis-[25%]", "basis-[30%]", "basis-[20%]", "basis-[40%]", "basis-[35%]"];
              return bases[idx % bases.length];
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex-auto h-[250px] md:h-[350px] lg:h-[450px] bg-black relative group block overflow-hidden ${getFlexBasis(idx)}`}
              >
                <img 
                  src={post.img} 
                  alt={post.brand} 
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-medium text-sm md:text-xl drop-shadow-md">{post.brand}</h3>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest mt-2">{post.type}</p>
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
            <Link 
               to="/collection/social-media"
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

export default SocialMediaDesigns;
