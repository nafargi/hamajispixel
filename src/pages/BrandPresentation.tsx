import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { presentationBrands } from "@/data/presentationBrands";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AxerioBrandGuideline from "@/components/AxerioBrandGuideline";
import QuestifyAIBrandGuideline from "@/components/QuestifyAIBrandGuideline";
import OpenSessionBrandGuideline from "@/components/OpenSessionBrandGuideline";
import DaphneHeckoBrandGuideline from "@/components/DaphneHeckoBrandGuideline";
import SunZenithBrandGuideline from "@/components/SunZenithBrandGuideline";
import OnyxiumBrandGuideline from "@/components/OnyxiumBrandGuideline";
import BookCall from "@/components/BookCall";

// Load all images from the specific brand folders
const imageModules = import.meta.glob<{ default: string }>('/src/assets/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });

const getImagesForBrand = (brandId: string) => {
    const images: string[] = [];
    for (const path in imageModules) {
        if (path.includes(`/src/assets/${brandId}/`)) {
            images.push(imageModules[path].default);
        }
    }

    // Natural sort so "1.jpg" comes before "10.jpg"
    return images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
};


const BrandPresentation = () => {
    const { id } = useParams<{ id: string }>();
    const brand = presentationBrands.find((b) => b.id === id);

    if (!brand) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
                    <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    if (id === 'axerio') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <AxerioBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    if (id === 'questify_ai') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <QuestifyAIBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    if (id === 'open_session') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <OpenSessionBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    if (id === 'daphne_Hecko') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <DaphneHeckoBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    if (id === 'sunzenith') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <SunZenithBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    if (id === 'onyxium') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
                <OnyxiumBrandGuideline />
                <Footer />
            </motion.div>
        );
    }

    const images = getImagesForBrand(brand.id);
    const currentIndex = presentationBrands.findIndex((b) => b.id === id);
    const nextBrand = presentationBrands[(currentIndex + 1) % presentationBrands.length];

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen rich-black noise-overlay text-white selection:bg-primary selection:text-black"
        >
            <Navigation />

            {/* Introduction Hero Section */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-primary text-[10px] tracking-widest uppercase font-bold mb-8 block">
                        {brand.category} · {brand.year}
                    </span>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tightest leading-[0.85] text-white font-heading uppercase mb-12">
                        {brand.name}
                    </h1>
                    <p className="text-2xl md:text-4xl text-white/50 max-w-4xl font-light leading-relaxed font-heading tracking-tight italic font-editorial">
                        {brand.description}
                    </p>
                </motion.div>
            </section>

            {/* Vertical Presentation Gallery */}
            <section className="w-full pb-32 px-4">
                <div className="flex flex-col gap-4 w-full max-w-[1400px] mx-auto">
                    {images.map((src, index) => {
                        const elements: React.ReactNode[] = [];

                        elements.push(
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative group overflow-hidden bg-neutral-900 rounded-lg"
                            >
                                <img
                                    src={src}
                                    alt={`${brand.name} Presentation ${index + 1}`}
                                    className="w-full h-auto object-cover block transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                                    loading={index < 4 ? "eager" : "lazy"}
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none"></div>
                            </motion.div>
                        );

                        // Insert copy after 3rd image
                        if (index === 2) {
                            elements.push(
                                <div key="copy-1" className="py-24 md:py-32 px-6 text-center">
                                    <p className="text-white/40 text-xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed font-editorial italic">
                                        {brand.description}
                                    </p>
                                </div>
                            );
                        }

                        return elements;
                    })}
                </div>
                {images.length === 0 && (
                    <div className="py-20 text-white/50 text-center">No images found for this project.</div>
                )}

                {/* Brand Description */}
                <div className="max-w-3xl mx-auto mt-16 md:mt-24 text-center px-6">
                    <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-4">
                        {brand.description}
                    </p>
                    <p className="text-white/30 text-xs tracking-widest uppercase">
                        {brand.category} — {brand.year}
                    </p>
                </div>
            </section>

            {/* Related Brands */}
            <section className="px-4 md:px-8 py-32 bg-[#050505] border-t border-white/5">
                <div className="max-w-[1800px] mx-auto">
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-light mb-16 font-editorial italic text-white/80"
                    >
                        More Projects
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {presentationBrands
                          .filter(b => b.id !== id)
                          .slice(0, 3)
                          .map((otherBrand, idx) => {
                            const otherImages = getImagesForBrand(otherBrand.id);
                            const coverImg = otherImages[0];
                            return (
                              <Link to={`/brand/${otherBrand.id}`} key={otherBrand.id}>
                                <div className="group cursor-pointer bg-[#0a0a0a] overflow-hidden rounded-sm">
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        {coverImg && (
                                          <img 
                                              src={coverImg} 
                                              alt={otherBrand.name} 
                                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                          />
                                        )}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>
                                    <div className="p-6">
                                      <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-2">{otherBrand.category}</span>
                                      <h4 className="text-lg font-light text-white group-hover:text-white/70 transition-colors">{otherBrand.name}</h4>
                                    </div>
                                </div>
                              </Link>
                            );
                          })
                        }
                    </div>
                </div>
            </section>

            {/* Next Project */}
            <section className="px-6 md:px-12 py-40 md:py-56 border-t border-white/10 mt-10">
                <Link to={`/brand/${nextBrand.id}`} className="group block text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] text-white/50 tracking-[0.5em] uppercase block"
                    >
                        Next Masterpiece
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tight mt-8 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-1000"
                    >
                        {nextBrand.name}
                    </motion.h2>
                </Link>
            </section>
            <BookCall />

            <Footer />
        </motion.div>
    );
};

export default BrandPresentation;
