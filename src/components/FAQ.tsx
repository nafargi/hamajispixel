import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  isPro?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "What makes your approach different?",
    answer: "We don't just design visuals—we build brand systems. Every decision is intentional, ensuring your brand is not only visually refined but also strategically aligned for growth.",
    isPro: true
  },
  {
    question: "How long does a branding project take?",
    answer: "Timelines typically range from 1 to 3 weeks depending on the scope. We prioritize quality and thoughtful execution over speed."
  },
  {
    question: "What will I receive at the end of the project?",
    answer: "You will receive a complete brand system, including logo files, color palette, typography, and a structured brand guideline to ensure consistent usage across all platforms."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. We include a defined number of revision rounds to refine the direction and ensure the final outcome aligns with your vision."
  },
  {
    question: "What if I don't like the initial concept?",
    answer: "Our process is built to minimize that risk through clear strategy and alignment from the start. However, we refine and iterate based on your feedback."
  },
  
  {
    question: "Do you provide support after the project?",
    answer: "We offer guidance and support to help you apply your brand effectively after delivery."
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the Pro Strategy by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-section px-6 md:px-12 rich-black relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex flex-col items-start"
          >
            <span className="text-white/60 text-[10px] tracking-[0.3em] font-bold uppercase mb-6 block border border-white/10 bg-white/5 px-4 py-2 rounded-full w-max">
              Clarity & Strategy
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-heading uppercase leading-[1.1] tracking-tightest mb-6">
              <span className="text-white">Common </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic font-editorial font-light whitespace-normal sm:whitespace-nowrap">
                Inquiries
              </span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
              Answers to help you understand our methodology, timelines, and the strategic value we bring to every partnership.
            </p>
          </motion.div>

          {/* Accordion List */}
          <div className="md:w-2/3 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border rounded-[30px] overflow-hidden transition-all duration-500 ${
                    faq.isPro 
                      ? isOpen ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'bg-white/[0.02] border-white/20'
                      : isOpen ? 'bg-white/[0.05] border-white/20' : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none group relative"
                  >
                    <div className="flex items-center gap-4 pr-6">
                      {faq.isPro ? (
                        <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-white text-black' : 'bg-white/10 text-white/80'}`}>
                          <Zap size={16} className={isOpen ? 'fill-black' : 'fill-white/80 text-white'} />
                        </div>
                      ) : (
                        <span className={`text-[9px] font-bold tracking-[0.2em] transition-colors duration-500 ${isOpen ? 'text-white' : 'text-white/30'}`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      )}
                      <h3 className={`text-lg md:text-xl font-bold font-heading transition-colors duration-500 ${
                        isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isOpen 
                        ? 'bg-white border-white text-black' 
                        : 'border-white/10 text-white/50 group-hover:border-white/30 group-hover:text-white'
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-6 pt-0 flex gap-4">
                          {/* visual spacer to align text properly */}
                          <div className="w-10 flex-shrink-0 hidden md:block"></div>
                          <p className={`text-base font-light leading-relaxed ${faq.isPro ? 'text-white/80' : 'text-white/50'}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
