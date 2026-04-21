import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IconFeatures from "@/components/IconFeatures";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IconFeatures />
      <ServicesGrid />
      <BeforeAfterGallery />
      <AboutSection />
      
      <LocationContact />
      <Footer />
    </main>
  );
};

export default Index;
//poner en linea 20 si se llega a necesitar <Testimonials />