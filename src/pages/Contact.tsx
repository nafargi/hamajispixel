import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import BookCall from "@/components/BookCall";
const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black overflow-x-hidden pt-32 relative font-inter">
      {/* Global Premium Texture Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/linen.png")' }} />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <Navigation />

      <main className="min-h-[80vh] relative z-20 flex flex-col items-center justify-center py- w-screen left-1/2 -ml-[50vw] overflow-hidden">
        {/* Connection Arcs Pattern - Full Width (No Grain) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.92] top-96 overflow-hidden h-[100vh]">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="contactArcPremium" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M ${-150 + i * 40} ${300 + i * 15} Q 500 ${-200 + i * 40} ${1150 - i * 40} ${300 + i * 15}`}
                fill="none"
                stroke="url(#contactArcPremium)"
                strokeWidth="0.8"
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={`rev-${i}`}
                d={`M ${1150 - i * 40} ${300 - i * 15} Q 500 ${800 - i * 40} ${-150 + i * 40} ${300 - i * 15}`}
                fill="none"
                stroke="url(#contactArcPremium)"
                strokeWidth="0.8"
              />
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 w-full">
          <ContactSection />
        </div>
      </main>
      <BookCall />
      <Footer />
    </div>
  );
};

export default Contact;
