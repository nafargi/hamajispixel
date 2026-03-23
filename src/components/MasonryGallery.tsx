import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { presentationBrands } from "@/data/presentationBrands";

// We combine branding projects and some featured art collections for the masonry grid
const generateGalleryItems = () => {
  const items: any[] = [];
  
  // Add branding projects with diverse grid spans
  presentationBrands.forEach((brand, idx) => {
    items.push({
      id: `brand-${brand.id}`,
      type: "brand",
      link: `/work/${brand.id}`, // Unified route to case study
      title: brand.name,
      category: brand.category,
      src: brand.coverImage,
      span: idx % 4 === 0 ? "col-span-12 md:col-span-8 row-span-2" : 
            idx % 4 === 1 ? "col-span-12 md:col-span-4 row-span-1" :
            idx % 4 === 2 ? "col-span-12 md:col-span-4 row-span-2" :
            "col-span-12 md:col-span-8 row-span-1",
      aspectRatio: idx % 4 === 0 ? "aspect-[16/10]" : 
                   idx % 4 === 1 ? "aspect-[4/5]" :
                   idx % 4 === 2 ? "aspect-[3/4]" :
                   "aspect-[16/9]"
    });
  });

  // Inject diverse art collections to break up the rhythm and showcase versatility
  const artCollections = [
    {
      id: "art-cyberpunk",
      type: "collection",
      link: "#",
      title: "Neo-Tokyo Vibes",
      category: "Cyberpunk Art",
      src: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-12 md:col-span-6 row-span-1",
      aspectRatio: "aspect-[16/9]"
    },
    {
      id: "art-game",
      type: "collection",
      link: "#",
      title: "Abyssal Knights",
      category: "Game Posters",
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
      span: "col-span-12 md:col-span-6 row-span-2",
      aspectRatio: "aspect-[9/16]"
    },
    {
      id: "art-african",
      type: "collection",
      link: "#",
      title: "Ancestral Echo",
      category: "African Portraits",
      src: "https://images.unsplash.com/photo-1531123414708-eb7fb89de4ce?q=80&w=800&auto=format&fit=crop",
      span: "col-span-12 md:col-span-4 row-span-1",
      aspectRatio: "aspect-square"
    },
    {
      id: "art-ai",
      type: "collection",
      link: "#",
      title: "Synthetic Visions",
      category: "AI Art Collections",
      src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      span: "col-span-12 md:col-span-8 row-span-1",
      aspectRatio: "aspect-[21/9]"
    }
  ];

  // Randomly splice art collections into the branding projects
  const mixedItems = [...items];
  mixedItems.splice(2, 0, artCollections[0]);
  mixedItems.splice(5, 0, artCollections[1]);
  mixedItems.splice(7, 0, artCollections[2]);
  mixedItems.splice(9, 0, artCollections[3]);

  return mixedItems;
};

const MasonryGallery = () => {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(generateGalleryItems());
  }, []);

  const filteredItems = filter === "all" 
    ? items 
    : items.filter(item => item.type === filter);

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 px-4 md:px-8">
      {/* Intro & Filters */}
      <div className="max-w-[1800px] mx-auto mb-16 px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4 block">
            Curated Exhibition
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]">
            We shape <span className="font-editorial italic text-white/80">distinct</span> brand narratives through high-end visual design.
          </h1>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="flex gap-6 text-xs tracking-[0.2em] uppercase"
        >
          <button 
            onClick={() => setFilter("all")}
            className={`transition-colors duration-300 pb-1 border-b ${filter === "all" ? "text-white border-white" : "text-white/40 border-transparent hover:text-white"}`}
          >
            All Work
          </button>
          <button 
            onClick={() => setFilter("brand")}
            className={`transition-colors duration-300 pb-1 border-b ${filter === "brand" ? "text-white border-white" : "text-white/40 border-transparent hover:text-white"}`}
          >
            Branding
          </button>
          <button 
            onClick={() => setFilter("collection")}
            className={`transition-colors duration-300 pb-1 border-b ${filter === "collection" ? "text-white border-white" : "text-white/40 border-transparent hover:text-white"}`}
          >
            Art Collections
          </button>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-[1800px] mx-auto">
        <motion.div layout className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group overflow-hidden ${item.span}`}
              >
                <Link to={item.link} className="block w-full h-full">
                  <div className={`relative w-full overflow-hidden bg-[#050505] ${item.aspectRatio}`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      loading={idx < 4 ? "eager" : "lazy"}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2 block border border-white/20 w-max px-3 py-1 rounded-full glassmorphism">
                          {item.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                          {item.title}
                        </h2>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MasonryGallery;
