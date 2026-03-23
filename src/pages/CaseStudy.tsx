import { useParams, Link } from "react-router-dom";
import { brands } from "@/data/brands";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyStory from "@/components/case-study/CaseStudyStory";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyConstruction from "@/components/case-study/CaseStudyConstruction";
import CaseStudyColors from "@/components/case-study/CaseStudyColors";
import CaseStudyTypography from "@/components/case-study/CaseStudyTypography";
import CaseStudyServices from "@/components/case-study/CaseStudyServices";
import CaseStudyApplications from "@/components/case-study/CaseStudyApplications";
import CaseStudyImage from "@/components/case-study/CaseStudyImage";

const CaseStudy = () => {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!brand) return null;

  const nextBrand = brands[(brands.indexOf(brand) + 1) % brands.length];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen rich-black text-white selection:bg-primary selection:text-black overflow-x-hidden"
    >
      <Navigation />
      
      <div className="pt-20">
        <CaseStudyHero brand={brand} />
        
        <motion.div
           initial={{ opacity: 0, scale: 1.02 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-[80vh] overflow-hidden relative"
        >
          <img 
            src={brand.image} 
            alt={brand.name} 
            className="w-full h-full object-cover grayscale opacity-50 focus:opacity-100 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <CaseStudyStory story={brand.story} />
          
          <div className="space-y-40 py-32">
            <CaseStudyConcept concept={brand.concept} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <CaseStudyConstruction construction={brand.logoConstruction} />
              <CaseStudyServices services={brand.services} />
            </div>

            <CaseStudyColors colors={brand.colors} />
            <CaseStudyTypography typography={brand.typography} />
            
            <div className="py-24 border-t border-white/5">
               <span className="text-primary text-[9px] tracking-[0.5em] uppercase font-bold block mb-16 text-center">· Visual Manifestation ·</span>
               <CaseStudyImage images={brand.gallery} alt={brand.name} />
            </div>

            <CaseStudyApplications applications={brand.applications} />
          </div>
        </div>
      </div> <BookCall />

      {/* Next Project: Minimal Rhythmic Footer */}
      <section className="px-6 md:px-12 py-40 border-t border-white/5 bg-black relative group overflow-hidden flex flex-col items-center justify-center">
        <Link to={`/work/${nextBrand.id}`} className="relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-[8px] tracking-[0.5em] uppercase block mb-6 font-bold"
          >
            Next Strategic Archive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tightest leading-none text-white uppercase font-heading group-hover:text-primary transition-colors duration-700"
          >
            {nextBrand.name}
          </motion.h2>
          <div className="mt-12 w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-primary transition-all duration-700" />
        </Link>
      </section>

     
      <Footer />
    </motion.div>
  );
};

export default CaseStudy;
