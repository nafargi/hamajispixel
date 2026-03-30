import { motion } from "framer-motion";
import { ArrowRight, Columns, Aperture, FileImage, LayoutTemplate } from "lucide-react";
import servicesImage from "@/assets/brand-noire.jpg";
import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/nafargidamena";

const services = [
  {
    icon: <Aperture size={24} />,
    title: "Brand Strategy",
    description: "We define your brand vision and positioning for clarity and impact."
  },
  {
    icon: <Columns size={24} />,
    title: "Visual Identity",
    description: "Logo, typography, color, and a design system that communicates luxury."
  },
  {
    icon: <FileImage size={24} />,
    title: "Digital Assets",
    description: "Website, social media, and marketing visuals aligned with your brand."
  },
  {
    icon: <LayoutTemplate size={24} />,
    title: "Brand Guidelines",
    description: "Comprehensive guide to maintain consistency across all platforms."
  }
];

const tags = [
  "Product Design", "Brand Identity Design", "Branding", "Packaging Design", "Mockup Design"
];

const Services = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <section className="py-section px-6 md:px-12 rich-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION: Header & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">

          {/* Header Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full mb-8 self-start">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">⚡ Design Services</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold font-heading uppercase leading-[1.1] tracking-tightest mb-6">
              <span className="text-white">Design</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic font-editorial font-light whitespace-normal sm:whitespace-nowrap">Services</span>
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-10">
              Helping businesses standout with high-fidelity brand systems that captivate and convert effectively.
            </p>

            <div className="relative overflow-hidden w-full mb-10 mask-edges-fade max-w-[400px]">
              {/* Fade masks for the marquees */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-[#050505] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-[#050505] to-transparent" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 70, ease: "linear", repeat: Infinity }}
                className="flex gap-3 w-max"
              >
                {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/[0.03] border border-white/5 text-white/70 text-[10px] tracking-widest uppercase font-bold rounded-full flex-shrink-0">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleBookCall}
                className="gleaming-button px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105"
              >
                Book for Strategy Call
              </button>
              <a
                href="/#work"
                className="bg-white/[0.05] border border-white/10 hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                See Projects
              </a>
            </div>
          </motion.div>

          {/* Intro Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative rounded-[40px] overflow-hidden aspect-video lg:aspect-auto min-h-[400px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 border border-white/5 hover:border-white/10 rounded-[32px] p-8 md:p-12 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-white/50 group-hover:text-white transition-colors">
                      {svc.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">{svc.title}</h3>
                  </div>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                    {svc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: Services Grid */}


      </div>
    </section>
  );
};

export default Services;
