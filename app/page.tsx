import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import MenuSection from "@/components/sections/MenuSection";
import SignatureSection from "@/components/sections/SignatureSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-noise min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <StorySection />
        <SignatureSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
