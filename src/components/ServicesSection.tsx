import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Complete brand identity systems — strategy, positioning, naming, and visual identity design that defines how the world perceives you.",
  },
  {
    number: "02",
    title: "Logo Design",
    description: "Distinctive logomarks and logotypes crafted with geometric precision, conceptual depth, and mathematical balance.",
  },
  {
    number: "03",
    title: "Visual Systems",
    description: "Comprehensive design systems — typography, color, photography direction, and brand guidelines that scale across every touchpoint.",
  },
  {
    number: "04",
    title: "Creative Direction",
    description: "Strategic oversight ensuring every brand expression communicates with clarity, intention, and unwavering consistency.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 md:py-56 px-6 md:px-12 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase text-text-dim">
          Services
        </span>
      </motion.div>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="group border-t border-border py-12 md:py-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <span className="text-[10px] text-text-dim tracking-[0.3em] md:col-span-1">
                {service.number}
              </span>
              <h3 className="text-2xl md:text-4xl font-light tracking-tight md:col-span-4 group-hover:text-muted-foreground transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-text-subtle leading-[1.9] md:col-span-5 md:col-start-7">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ServicesSection;
