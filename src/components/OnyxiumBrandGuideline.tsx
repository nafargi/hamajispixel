import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MoreProjects } from "./MoreProjects";

// Onyxium Assets (0-17)
import img0 from "@/assets/onyxium/0.jpg";
import img1 from "@/assets/onyxium/1.jpg";
import img2 from "@/assets/onyxium/2.jpg";
import img3 from "@/assets/onyxium/3.jpg";
import img4 from "@/assets/onyxium/4.jpg";
import img5 from "@/assets/onyxium/5.jpg";
import img6 from "@/assets/onyxium/6.jpg";
import img7 from "@/assets/onyxium/7.jpg";
import img8 from "@/assets/onyxium/8.jpg";
import img9 from "@/assets/onyxium/9.jpg";
import img10 from "@/assets/onyxium/10.jpg";
import img11 from "@/assets/onyxium/11.jpg";
import img12 from "@/assets/onyxium/12.jpg";
import img13 from "@/assets/onyxium/13.jpg";
import img14 from "@/assets/onyxium/14.jpg";
import img15 from "@/assets/onyxium/15.jpg";
import img16 from "@/assets/onyxium/16.jpg";
import img17 from "@/assets/onyxium/17.jpg";

const OnyxiumBrandGuideline: React.FC = () => {
  const allImages = [
    { src: img0, id: 0, full: true },
    { src: img1, id: 1, full: true },
    { src: img2, id: 2, full: true },
    { src: img3, id: 3, full: true },
    { src: img4, id: 4, full: true },
    { src: img5, id: 5, full: true },
    { src: img6, id: 6, full: false },
    { src: img7, id: 7, full: false },
    { src: img8, id: 8, full: true },
    { src: img9, id: 9, full: false },
    { src: img10, id: 10, full: false },
    { src: img11, id: 11, full: false },
    { src: img12, id: 12, full: true },
    { src: img13, id: 13, full: true },
    { src: img14, id: 14, full: false },
    { src: img15, id: 15, full: false },
    { src: img16, id: 16, full: false },
    { src: img17, id: 17, full: true },
  ];

  return (
    <div className="min-h-screen bg-[#05052c] text-white selection:bg-white/20 overflow-x-hidden">
      <div className="flex flex-col">
        {allImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full flex justify-center ${image.full ? '' : 'px-6 md:px-24'}`}
          >
            <img
              src={image.src}
              alt={`Onyxium Brand ${image.id}`}
              className={`${image.full ? 'w-full h-auto' : 'max-w-[1400px] w-full h-auto rounded-sm shadow-2xl'}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Explore on Behance Button */}
      <section className="py-40 text-center flex flex-col items-center justify-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-12 font-bold">
          Full Presentation Available
        </p>
        <a 
          href="https://www.behance.net/gallery/236882049/ONYXIUM-software-full-brand-Identity" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold transition-all hover:opacity-60 px-10 py-5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md"
        >
          Explore on Behance <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
        </a>
      </section>

      <MoreProjects currentBrandId="onyxium" />

      <footer className="py-12 text-center text-white/20 text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
        &copy; 2024 Onyxium Technologies &middot; Precision. Elegance. Power.
      </footer>
    </div>
  );
};

export default OnyxiumBrandGuideline;
