import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <footer
      className="relative w-full overflow-hidden border-t"
      style={{
        borderTopWidth: '1px',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        background: 'conic-gradient(at 50% 0%, rgba(0, 0, 0, 1) 100deg, rgba(255, 133, 51, 0.73) 181.299deg, rgba(0, 0, 0, 1) 260deg)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-6">

          {/* Left Side: Logo & Description */}
          <motion.div {...fadeInUp} className="flex flex-col gap-8 max-w-xs">
            <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              <img
                src="/hamajis_logo.svg"
                alt="Hamaji's Pixel"
                className="h-6 w-auto brightness-0 invert"
              />

              <p className="text-white text-xl  tracking-widest uppercase">Hamajis Pixel</p>
            </Link>

            <div
              className="h-[1px] w-full"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)'
              }}
            />

            <p className="text-white/50 text-sm font-medium leading-relaxed">
              Made remotely with <span className="text-white">💜</span> and passion <br />
              - <span className="text-white">Hamajis Pixel.</span>
            </p>
          </motion.div>

          {/* Right Side: Links & Form */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-24">

            {/* Pages Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-col gap-6">
              <h4 className="text-white text-sm font-bold tracking-widest uppercase">Template Pages</h4>
              <nav className="flex flex-col gap-4">
                {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-opacity text-sm font-medium"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 410%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Social Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col gap-6">
              <h4 className="text-white text-sm font-bold tracking-widest uppercase">Social</h4>
              <nav className="flex flex-col gap-4">
                {["Twitter (X)", "Instagram", "Youtube", "Framer"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-white transition-opacity text-sm font-medium"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 410%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Subscribe Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-col gap-6">
              <h4 className="text-white text-sm font-bold tracking-widest uppercase">Subscribe Form</h4>
              <form className="flex">
                <div
                  className="flex items-center gap-2 p-1.5 rounded-[25px]"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter Your Email...."
                    className="bg-transparent border-none outline-none py-2 px-4 text-sm text-white/80 placeholder:text-white/40 w-[180px]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-[30px] text-white text-[11px] font-bold tracking-wide uppercase shadow-2xl transition-all hover:scale-105 active:scale-95"
                    style={{
                      border: '3px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(180deg, #ffffff 0%, #dddddd 100%)',
                      boxShadow: '0 10px 50px -3px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Subscribe Us
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" flex flex-col gap-10">
          <div
            className="h-[1px] w-full"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)'
            }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-white/40 font-medium tracking-tightest uppercase">
              © 2024 Mandro Design
            </p>

            <div className="flex items-center gap-6">
              <Link to="/terms-conditions" className="text-[11px] text-white/40 hover:text-white transition-opacity uppercase font-medium">Terms & Conditions</Link>
              <div className="w-[1px] h-3 bg-white/15" />
              <Link to="/privacy-policy" className="text-[11px] text-white/40 hover:text-white transition-opacity uppercase font-medium">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


