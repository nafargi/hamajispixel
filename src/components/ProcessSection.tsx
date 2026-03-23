import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "Deep immersion into business goals, audience psychology, and competitive landscape. We define the brand's strategic position before a single pixel is designed.",
    duration: "2–3 weeks",
  },
  {
    number: "02",
    title: "Identity",
    description: "Translating strategy into visual language. Logo development, typography selection, color philosophy, and the foundational elements that define how the brand looks and feels.",
    duration: "4–6 weeks",
  },
  {
    number: "03",
    title: "System",
    description: "Building a comprehensive design system that ensures consistency across every touchpoint. Guidelines, templates, and rules that make the brand scalable.",
    duration: "3–4 weeks",
  },
  {
    number: "04",
    title: "Execution",
    description: "Bringing the brand to life across all channels — digital, print, environmental, and experiential. Every application is crafted with the same precision as the identity itself.",
    duration: "4–8 weeks",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-40 md:py-56 px-6 md:px-12 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-3"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-text-dim">
            Our Process
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 md:col-start-5"
        >
          <h2 className="text-2xl md:text-4xl font-light leading-[1.3] tracking-tight">
            Every brand we build follows a rigorous methodology.{" "}
            <span className="text-muted-foreground">
              Strategy informs identity. Identity becomes system. System enables execution.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="border-t border-border py-12 md:py-16 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              <span className="text-[10px] text-text-dim tracking-[0.3em] md:col-span-1">
                {step.number}
              </span>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-4xl font-light tracking-tight group-hover:text-muted-foreground transition-colors duration-500">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-text-subtle leading-[1.9] md:col-span-5 md:col-start-5">
                {step.description}
              </p>
              <span className="text-[10px] text-text-dim tracking-[0.3em] uppercase md:col-span-2 md:col-start-11 md:text-right">
                {step.duration}
              </span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProcessSection;
