import { motion } from "framer-motion";
import { logos } from "@/data/logos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";

type TileColor = "purple" | "cobalt" | "electric" | "white" | "dark";

const colorMap: Record<TileColor, string> = {
  purple: "bg-[#030303]",
  cobalt: "bg-[#050505]",
  electric: "bg-[#080808]",
  white: "bg-[#0A0A0A]",
  dark: "bg-[#0D0D0D]",
};

const MiniLogoGroup = ({ logosArr, color }: { logosArr: any[]; color: TileColor }) => (
  <div className={`${colorMap[color]} grid grid-cols-2 grid-rows-2 aspect-square gap-[2px] p-[2px] bg-white/10`}>
    {logosArr.slice(0, 4).map((logo, i) => (
      <div key={i} className="relative group overflow-hidden bg-black">
        <div
          className="w-full h-full p-6 transition-all duration-700  group-hover:scale-105"
          style={{
            backgroundImage: `url(${logo.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0  group-hover:bg-white/5 transition-colors duration-700 pointer-events-none" />
      </div>
    ))}
  </div>
);

const LogoTile = ({ logo, color, size = "1x1" }: { logo: any; color: TileColor; size?: "1x1" | "2x2" }) => {
  if (!logo) return null;
  const spanClass = size === "2x2" ? "col-span-2 row-span-2" : "col-span-1 row-span-1";
  return (
    <motion.div
      className={`${spanClass} ${colorMap[color]} aspect-square relative border border-white/5 group overflow-hidden`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
        style={{
          backgroundImage: `url(${logo.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0  transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );
};

type ContentType = "horizontal" | "vertical" | "wide" | "square";
const ContentTile = ({ title, text, type }: { title: string; text: string; type: ContentType }) => {
  const spanMap: Record<ContentType, string> = {
    horizontal: "col-span-2 row-span-1 aspect-[2/1]",
    vertical: "col-span-1 row-span-2 aspect-[1/2]",
    wide: "col-span-3 row-span-1 aspect-[3/1]",
    square: "col-span-2 row-span-2 aspect-square",
  };

  return (
    <div className={`${spanMap[type]} bg-[#050505] p-10 flex flex-col justify-center border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute -inset-full duration-700 pointer-events-none" />
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white text-3xl lg:text-5xl font-bold uppercase mb-6 tracking-tighter leading-[0.85] font-heading relative z-10"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-primary text-[10px] lg:text-xs leading-relaxed uppercase tracking-[0.3em] font-bold max-w-[90%] relative z-10"
      >
        {text}
      </motion.p>
    </div>
  );
};

const EditorialBlockA = ({ items }: { items: any[] }) => (
  <>
    <LogoTile logo={items[0]} color="purple" />
    <LogoTile logo={items[1]} color="white" />
    <LogoTile logo={items[2]} color="cobalt" />
    <LogoTile logo={items[3]} color="electric" />
    <LogoTile logo={items[4]} color="white" />
    <ContentTile type="square" title="Strategic Minimal" text="We specialise in crafting minimal logos that embody the essence of your brand with precision." />
    <LogoTile logo={items[5]} color="cobalt" />
    <LogoTile logo={items[6]} color="electric" />
    <LogoTile logo={items[7]} color="purple" />
    <LogoTile logo={items[8]} color="white" />
    <MiniLogoGroup logosArr={items.slice(9, 13)} color="electric" />
    <LogoTile logo={items[13]} color="cobalt" />
    <LogoTile logo={items[14]} color="purple" />
  </>
);

const EditorialBlockB = ({ items }: { items: any[] }) => (
  <>
    <ContentTile type="wide" title="Synthesized Essence" text="Engineering minimal identities that synthesize brand essence into timeless visual marks for modern systems." />
    <LogoTile logo={items[0]} color="electric" />
    <LogoTile logo={items[1]} color="white" />
    <LogoTile logo={items[2]} color="electric" />
    <LogoTile logo={items[3]} color="purple" />
    <LogoTile logo={items[4]} color="white" />
    <LogoTile logo={items[5]} color="cobalt" />
    <ContentTile type="vertical" title="Iconic Purity" text="The art of subtraction: crafting essential symbols that speak volumes through minimal, powerful form." />
    <LogoTile logo={items[6]} color="purple" />
    <LogoTile logo={items[7]} color="white" />
    <LogoTile logo={items[8]} color="electric" />
    <LogoTile logo={items[9]} color="cobalt" />
    <LogoTile logo={items[10]} color="purple" />
    <LogoTile logo={items[11]} color="electric" />
    <LogoTile logo={items[12]} color="white" />
    <LogoTile logo={items[13]} color="cobalt" />
    <LogoTile logo={items[14]} color="purple" />
  </>
);

const EditorialBlockC = ({ items }: { items: any[] }) => (
  <>
    <LogoTile logo={items[0]} color="electric" />
    <LogoTile logo={items[1]} color="purple" />
    <LogoTile logo={items[2]} color="white" />
    <LogoTile logo={items[3]} color="cobalt" />
    <ContentTile type="horizontal" title="Visual Distillation" text="Your brand's DNA, perfectly distilled into a single, powerful mark that resonates across all platforms." />
    <LogoTile logo={items[4]} color="white" />
    <LogoTile logo={items[5]} color="purple" />
    <LogoTile logo={items[6]} color="cobalt" />
    <ContentTile type="square" title="Minimal Architecture" text="Building robust identity systems that maintain their standard from the first pixel to the final impression." />
    <LogoTile logo={items[7]} color="electric" />
    <LogoTile logo={items[8]} color="white" />
    <LogoTile logo={items[9]} color="purple" />
    <LogoTile logo={items[10]} color="cobalt" />
    <MiniLogoGroup logosArr={items.slice(11, 15)} color="purple" />
    <div className="bg-[#0A0A0A] aspect-square border border-white/5" />
    <div className="bg-[#0A0A0A] aspect-square border border-white/5" />
  </>
);

const EditorialShowcase = () => {
  const allLogos = [...logos];

  return (
    <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white overflow-x-hidden relative font-inter">
      {/* Global Premium Texture Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/linen.png")' }} />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <Navigation />

      {/* ULTRA-PREMIUM HERO WITH CONCENTRIC TARGET LINES (NO GRAIN) - CENTERED */}
      <div className="relative  px-6 lg:px-24 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center text-center z-10 max-w-[1700px] mx-auto border border-white/5 bg-white/[0.01] my-12 shadow-2xl">
        {/* Concentric Circle Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.18]">
          <svg width="800" height="800" viewBox="0 0 800 800" className="scale-[1.5]">
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx="400"
                cy="400"
                r={40 + i * 40}
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="4 8"
              />
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/10 to-black/95 pointer-events-none" />
        
        {/* Intersection Lines */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 z-0 -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10 z-0 -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 to-primary" />
            <span className="text-primary text-[10px] tracking-[0.8em] uppercase font-bold">
              STRATEGIC VISUAL ARCHITECTURE
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-[85px] font-bold tracking-tightest leading-[1.05] text-white font-heading uppercase max-w-4xl mx-auto">
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                We specialise in
              </motion.span>
            </div>
            <div className="overflow-hidden mb-2 relative">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block text-primary drop-shadow-[0_0_40px_rgba(255,133,51,0.3)]"
              >
                crafting minimal
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="block"
              >
                logos that embody the{" "}
                <span className="text-white italic font-editorial font-light block  text-3xl md:text-5xl lg:text-5xl opacity-30">
                  essence of your brand.
                </span>
              </motion.span>
            </div>
          </h1>
        </div>

        <div className="absolute bottom-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="py-4 px-6 lg:px-24 relative z-10">
        <main className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 border border-white/5 shadow-2xl">
            {Array.from({ length: Math.ceil(allLogos.length / 15) }, (_, i) => {
              const chunk = allLogos.slice(i * 15, (i + 1) * 15);
              const type = i % 3;
              if (type === 0) return <EditorialBlockA key={i} items={chunk} />;
              if (type === 1) return <EditorialBlockB key={i} items={chunk} />;
              return <EditorialBlockC key={i} items={chunk} />;
            })}
          </div>
        </main>
      </div>
      
      <BookCall />
      <Footer />
    </div>
  );
};

export default EditorialShowcase;