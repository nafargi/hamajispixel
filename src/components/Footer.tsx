import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/hamajis_logo.svg"
              alt="Hamaji's Pixel"
              className="h-6 w-auto brightness-0 invert group-hover:scale-110 transition-transform duration-500"
            />
            <span className="text-white text-lg tracking-[0.2em] uppercase font-bold">Hamajis Pixel</span>
          </Link>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
            Building trust through elite branding.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <div className="flex items-center gap-8">
            <Link to="/logos" className="text-[10px] text-white/50 hover:text-primary transition-colors uppercase tracking-widest font-bold">Logo Archive</Link>
            <Link to="/contact" className="text-[10px] text-white/50 hover:text-primary transition-colors uppercase tracking-widest font-bold">Contact</Link>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2024 Hamajis Pixel • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
