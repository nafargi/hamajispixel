import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Portfolio", href: "/#work" },
  { label: "Guarantee", href: "/#refund" },
  { label: "Logos", href: "/logos" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const { pathname, hash } = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Use IntersectionObserver to detect theme changes
    // This is more performant than checking elementFromPoint on every scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'white' || bgColor.includes('255, 255, 255')) {
              setIsDarkSection(false);
            } else {
              setIsDarkSection(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0% -80% 0%' }
    );

    const sections = document.querySelectorAll('section, div[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  // Handle hash scrolling for SPA
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash, pathname]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const navThemeClass = isDarkSection
    ? (scrolled ? 'bg-black/90 border-white/10 shadow-2xl' : 'bg-black/40 border-white/5')
    : (scrolled ? 'bg-white/90 border-black/10 shadow-2xl' : 'bg-white/40 border-black/5');

  const textColorClass = isDarkSection ? 'text-white' : 'text-black';
  const linkColorClass = isDarkSection ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black';

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4"
      >
        <div className={`flex items-center justify-between gap-6 lg:gap-10 px-5 py-2.5 rounded-full border backdrop-blur-xl transition-[background-color,border-color,box-shadow,color] duration-500 ease-in-out ${navThemeClass} ${textColorClass}`}>

          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-1.5 whitespace-nowrap">
            <img
              src="/hamajis_logo.svg"
              alt="Hamaji's Pixel"
              className={`h-4 md:h-5 w-auto transition-all duration-500 ${isDarkSection ? 'brightness-0 invert' : 'brightness-0'}`}
            />
            <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold">Hamajis Pixel</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[10px] tracking-widest uppercase transition-colors font-medium ${linkColorClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/nafargidamena/" target="_blank" rel="noopener noreferrer" className={`${linkColorClass} transition-colors hidden md:block`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="/#book-call"
              className="px-5 py-2 bg-primary text-black text-[10px] tracking-widest uppercase font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/10 hidden md:block whitespace-nowrap"
            >
              Book a Call
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[10px] tracking-widest uppercase font-bold"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl"
          >
            <div className="h-full flex flex-col items-center justify-center gap-10">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-4xl font-bold tracking-tightest uppercase hover:text-primary transition-colors font-bdo"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              <motion.a
                href="https://www.linkedin.com/in/nafargidamena/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-8 py-4 bg-primary text-black text-[11px] tracking-widest uppercase font-bold rounded-full shadow-2xl shadow-primary/20"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
