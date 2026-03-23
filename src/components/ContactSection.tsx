import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    project: "Brand Identity", 
    budget: "$300 - $1000",
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xreywpkk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ 
          name: "", 
          email: "", 
          project: "Brand Identity", 
          budget: "$300 - $1000",
          message: "" 
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <section id="contact" className="py-12 px-6 md:px-12 relative overflow-hidden text-white selection:bg-primary selection:text-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Massive Centered Headline - Scaled Down */}
        <div className="text-center mb-16">
          <motion.span 
            {...fadeInUp}
            className="text-primary text-[10px] tracking-[0.8em] uppercase font-bold block mb-6"
          >
            Start Your Project
          </motion.span>
          <motion.h2 
            {...fadeInUp} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[6.5vw] font-bold tracking-tightest leading-[0.85] text-white font-heading uppercase"
          >
            LET'S <br />
            <span className="text-white/20 italic font-editorial font-light underline decoration-primary/20 underline-offset-[12px]">ARCHITECT</span> <br />
            YOUR VISION.
          </motion.h2>
        </div>

        {/* Centered Integrated Form - Minimized */}
        <motion.div 
          {...fadeInUp} transition={{ delay: 0.3 }}
          className="w-full max-w-3xl relative group"
        >
          {/* Form Backdrop Glow */}
          <div className="absolute -inset-10 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <form 
            onSubmit={handleSubmit}
            className="relative z-10 p-8 md:p-12 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] space-y-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-white/40 tracking-widest uppercase font-bold ml-4">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Nafargi Damena"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary/50 transition-all text-base"
                   value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-white/40 tracking-widest uppercase font-bold ml-4">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="vision@brand.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary/50 transition-all text-base"
                   value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-[10px] text-white/40 tracking-widest uppercase font-bold ml-4">Project Architecture</label>
              <div className="relative">
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer text-base"
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                >
                  <option className="bg-neutral-900" value="Brand Identity">Brand Identity</option>
                  <option className="bg-neutral-900" value="Digital Ecosystem">Digital Ecosystem</option>
                  <option className="bg-neutral-900" value="Visual System">Visual System</option>
                  <option className="bg-neutral-900" value="Strategy Partnership">Strategy Partnership</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-[10px] text-white/40 tracking-widest uppercase font-bold ml-4">Budget Range</label>
              <div className="relative">
                <select 
                  name="budget"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer text-base"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option className="bg-neutral-900" value="$100 - $300">$100 - $300</option>
                  <option className="bg-neutral-900" value="$300 - $1000">$300 - $1000</option>
                  <option className="bg-neutral-900" value="$1000+">$1000+</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-[10px] text-white/40 tracking-widest uppercase font-bold ml-4">Your Message</label>
              <textarea 
                rows={3} 
                required 
                placeholder="Briefly describe your vision..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary/50 transition-all resize-none text-base"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                value={formData.message}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-primary text-black font-bold text-xs tracking-[0.4em] uppercase rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_15px_40px_rgba(255,133,51,0.3)] flex items-center justify-center gap-4 group"
            >
              {status === "loading" ? "Processing..." : status === "success" ? "Message Sent!" : status === "error" ? "Error, Try Again" : "Submit Inquiry"}
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </form>
        </motion.div>

        {/* Centered Integrated Links - Tightened */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
           <motion.a 
             {...fadeInUp} transition={{ delay: 0.5 }}
             href="mailto:nafargidamena@gmail.com" 
             className="group p-8 bg-white/[0.02] border border-white/5 rounded-[32px] flex flex-col items-center hover:bg-white/[0.04] transition-all duration-700"
           >
              <span className="text-primary text-[10px] tracking-widest uppercase font-bold mb-3">Direct Communication</span>
              <span className="text-xl font-bold tracking-tightest group-hover:scale-105 transition-transform duration-700">nafargidamena@gmail.com</span>
           </motion.a>

           <div className="grid grid-cols-2 gap-8">
              <motion.a 
                {...fadeInUp} transition={{ delay: 0.6 }}
                href="https://www.linkedin.com/in/nafargidamena/" target="_blank" rel="noopener noreferrer"
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors duration-700 group"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(255,133,51,0.4)] transition-all">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-white/30">LinkedIn</span>
              </motion.a>

              <motion.a 
                {...fadeInUp} transition={{ delay: 0.7 }}
                href="https://instagram.com/nafargi" target="_blank" rel="noopener noreferrer"
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors duration-700 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-black transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-white/30">Instagram</span>
              </motion.a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
