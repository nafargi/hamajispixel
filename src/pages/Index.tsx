import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import ValueProposition from "@/components/ValueProposition";
import SelectedWork from "@/components/SelectedWork";
import RefundPolicy from "@/components/RefundPolicy";
import Testimonials from "@/components/Testimonials";
import LogoCollection from "@/components/LogoCollection";
import Footer from "@/components/Footer";

import BentoGrid from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";

const Index = () => {
  return (
    <div className="min-h-screen rich-black text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      <Navigation />
      
      <main>
        <HeroSection />
        <HorizontalMarquee />
        <ValueProposition />
          
        <div id="work">
          <SelectedWork />
        </div>
        
        <LogoCollection />
      
        <BentoGrid />
        <RefundPolicy />
        <Testimonials />
        <FAQ />
        <BookCall />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
