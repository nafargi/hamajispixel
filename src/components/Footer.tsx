import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 rich-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <img
                src="/hamajis_logo.svg"
                alt="HP"
                className="w-5 h-auto brightness-0"
              />
            </div>
            <span className="text-white text-base tracking-[0.2em] uppercase font-bold">Hamajis Pixel</span>
          </Link>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">
            Engineering Visual Perception.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center md:items-end gap-6"
        >
          <div className="flex items-center gap-8">
            <Link to="/logos" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Archive</Link>
            <Link to="/contact" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Contact</Link>
            <a href="https://www.behance.net/nafargi" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Behance</a>
          </div>
          <p className="text-[10px] text-white/10 uppercase tracking-[0.4em] font-bold">
            © 2024 Hamajis Pixel • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
