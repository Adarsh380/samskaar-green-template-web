
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSupportMission = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/d8bbb5d0-c938-4247-82b7-04cfe3b1b7b1.png)' }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Transforming Lives Through Education
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Empowering Rural Students with 
            <span className="text-primary block">Quality Education</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Samskaar Foundation is dedicated to transforming government schools through libraries, 
            summer camps, and digital literacy programs that create lasting impact in rural communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8" onClick={handleSupportMission}>
              Support Our Mission
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" onClick={scrollToServices}>
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">450+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">10</div>
              <div className="text-sm text-muted-foreground">Libraries Established</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">₹5.85L</div>
              <div className="text-sm text-muted-foreground">Funds Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
