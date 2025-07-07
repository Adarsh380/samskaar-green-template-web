
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImpactSection />
      <ServicesSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
