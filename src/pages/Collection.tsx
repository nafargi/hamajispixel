import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";
import { logos } from "@/data/logos";

const LogoMarquee = ({ items, direction = 1, speed = 80 }: { items: any[]; direction?: 1 | -1; speed?: number }) => (
  <div className="overflow-hidden relative w-full">
    <motion.div
      animate={{
        x: direction > 0 ? [0, -1920] : [-1920, 0],
      }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="flex gap-0"
    >
      {[...items, ...items].map((logo, i) => (
        <div key={i} className="flex items-center justify-center">
          <img src={logo.image} alt={logo.name} className="max-w-[220px] max-h-[220px] object-contain" />
        </div>
      ))}
    </motion.div>
  </div>
);

const LogoShowcase = ({ logos }: { logos: any[] }) => (
  <section className="py-20 relative max-w-[1800px] mx-auto">
    {/* L Shape */}
    <div className="flex gap-6 mb-20">
      <div className="flex flex-col gap-6 w-1/3">
        {logos.slice(0, 3).map((logo, i) => (
          <motion.img
            key={i}
            src={logo.image}
            alt={logo.name}
            className="w-full object-contain"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        {logos.slice(3, 9).map((logo, i) => (
          <motion.img
            key={i}
            src={logo.image}
            alt={logo.name}
            className="w-full object-contain"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>

    {/* C Shape */}
    <div className="flex gap-6 mb-20">
      <div className="grid grid-rows-4 gap-6 w-1/3">
        {logos.slice(9, 13).map((logo, i) => (
          <motion.img
            key={i}
            src={logo.image}
            alt={logo.name}
            className="w-full object-contain"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center px-8">
        <h3 className="text-white text-2xl md:text-4xl font-bold mb-4">Designed to scale</h3>
        <p className="text-white/40 text-sm md:text-base">
          Every logo you see here was curated to hold weight. Not decoration — but a system that works.
        </p>
      </div>
    </div>

    {/* Full Archive */}
    <div className="grid grid-cols-6 gap-2">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo.image}
          alt={logo.name}
          className="w-full aspect-square object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        />
      ))}
    </div>
  </section>
);

const LogoSystemPage = () => {
  return (
    <div className="bg-black text-white">
      <Navigation />

      {/* HERO */}
      <section className="h-[70vh] flex items-center justify-center text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Logos Built to Hold Weight
          </h1>
          <p className="text-white/40 mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-base">
            Not decoration. Not trends. Identity systems designed to last.
          </p>
        </motion.div>
      </section>

      {/* TRUST MARQUEE */}
      <LogoMarquee items={logos.slice(0, 15)} direction={1} speed={170} />
      <LogoMarquee items={logos.slice(15, 30)} direction={-1} speed={120} />

      {/* EDITORIAL LOGO SHOWCASE */}
      <LogoShowcase logos={logos} />

      {/* PHILOSOPHY */}
      <section className="py-32 text-center max-w-3xl mx-auto">
        <p className="text-white/40 text-lg leading-relaxed">
          Every logo here was built with intention. Not to impress — but to perform. Clear, recognizable, and scalable. Because identity is a system, not decoration.
        </p>
      </section>

      <BookCall />
      <Footer />
    </div>
  );
};

export default LogoSystemPage;