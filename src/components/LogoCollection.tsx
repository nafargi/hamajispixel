import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logos } from "@/data/logos";

const MarqueeRow = ({ items, direction = 1, speed = 60 }) => (
  <div className="relative overflow-hidden border-t border-black">

    {/* LOGO STRIP */}
    <motion.div
      animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="flex w-max"
    >
      {[...items, ...items].map((logo, i) => (
        <div key={i} className="flex items-center justify-center border-r border-black">
          <img
            src={logo.image}
            alt={logo.name}
            className="h-[200px] w-[200px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

const LogoCollection = () => {
  const displayLogos = logos.slice(0, 32);

  return (
    <section className="py-12 rich-black relative overflow-hidden ">

      {/* HEADER */}
      <div className="mb-28 text-center">
        <span className="text-white/50 text-[9px] tracking-[0.6em] uppercase font-bold block mb-6">
          Strategic Partnerships
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading uppercase tracking-tightest">
          <span className="text-white">TRUSTED BY </span> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic font-editorial font-light whitespace-normal sm:whitespace-nowrap">
            GLOBAL BRANDS
          </span>
        </h2>
      </div>

      {/* LOGO ROWS WITH REAL EDGE FADE */}
      <div className="max-w-[1400px] mx-auto px-6 relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-96 z-20 bg-gradient-to-r from-black to-transparent" />
        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-96 z-20 bg-gradient-to-l from-black to-transparent" />

        <MarqueeRow items={displayLogos.slice(0, 16)} direction={1} speed={200} />
        <MarqueeRow items={displayLogos.slice(16, 32)} direction={-1} speed={220} />
      </div>

      {/* CTA */}
      <div className="mt-32 flex justify-center">
        <Link
          to="/logos"
          className="group relative px-16 py-6 border border-white/10 text-white text-[12px] tracking-[0.5em] uppercase font-bold overflow-hidden"
        >
          {/* hover fill */}
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

          <span className="relative z-10 group-hover:text-black transition duration-500">
            Explore All Logos
          </span>
        </Link>
      </div>
    </section>
  );
};

export default LogoCollection;