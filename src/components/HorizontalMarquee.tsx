import { motion } from "framer-motion";

const HorizontalMarquee = () => {
  return (
    <section className="py-6 overflow-hidden rich-black noise-overlay border-y border-white/5">
      <div className="flex w-max animate-marquee text-2xl md:text-4xl font-bold uppercase tracking-tightest whitespace-nowrap font-heading opacity-100">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="flex items-center">
            <span className="mx-8">STRATEGIC BRANDING</span>
            <span className="mx-8 text-primary italic font-editorial font-light">AUTHORITY</span>
            <span className="mx-8">PIXEL PERFECTION</span>
            <span className="mx-8 text-primary border border-primary/20 px-6 rounded-full">EST. 2026</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalMarquee;
