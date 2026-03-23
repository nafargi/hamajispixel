import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-40 md:py-56 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-text-dim">
            Design Philosophy
          </span>
        </motion.div>

        <div className="space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-4xl">
              A brand is not just a logo.{" "}
              <span className="font-editorial italic text-muted-foreground">
                It is a system of meaning, perception, and identity.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                title: "Simplicity",
                text: "We strip away the unnecessary until only the essential remains. Great brands are built on clarity — a single idea, expressed with absolute precision.",
              },
              {
                title: "Symbolism",
                text: "Every mark carries meaning. We design symbols that resonate on a subconscious level, creating instant recognition and lasting emotional connection.",
              },
              {
                title: "Timelessness",
                text: "Trends expire. We design identities that gain value over time — systems so fundamentally sound that they become more relevant with each passing year.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="h-px bg-border mb-8" />
                <h3 className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
                  {item.title}
                </h3>
                <p className="text-sm text-text-subtle leading-[2]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
