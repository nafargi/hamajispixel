import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import BrandPresentation from "./pages/BrandPresentation.tsx";
import Collection from "./pages/Collection.tsx";
import LogoCollection from "./components/LogoCollection.tsx";
import LogoArchive from "./pages/LogoArchive.tsx";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load and ensure all fonts/assets are ready
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work/:id" element={<CaseStudy />} />
            <Route path="/brand/:id" element={<BrandPresentation />} />
            <Route path="/collection/:id" element={<Collection />} />
            <Route path="/logos" element={<LogoArchive />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
