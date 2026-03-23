import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-40 md:py-56 px-6 md:px-12 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-3"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-text-dim">
            About the Studio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 md:col-start-5"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight mb-16">
            We believe that a brand is not what you say it is —{" "}
            <span className="font-editorial italic text-muted-foreground">
              it's what they feel it is.
            </span>
          </h2>

          <div className="h-px bg-border mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm text-text-subtle leading-[2]">
                Ātelier is a branding studio built on the conviction that great design is invisible — it simply feels right. We work with founders, creative directors, and visionary companies to distill complex ideas into clear, resonant brand identities.
              </p>
            </div>
            <div>
              <p className="text-sm text-text-subtle leading-[2]">
                Every project begins with deep strategic thinking and ends with meticulous craft. We don't follow trends. We create systems that endure — identities that become more valuable with time, not less.
              </p>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Brands Created" },
              { number: "12", label: "Countries" },
              { number: "6", label: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="text-4xl md:text-5xl font-light mb-3 tracking-tight">{stat.number}</div>
                <div className="text-[10px] text-text-dim tracking-[0.3em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
