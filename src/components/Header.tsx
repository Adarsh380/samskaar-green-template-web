import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0bdd1176-1d26-4038-a01a-4dae2dff5164.png" 
              alt="Samskaar Foundation Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Samskaar Foundation</h1>
              <p className="text-xs text-muted-foreground">Transforming Education</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <button 
              onClick={scrollToServices}
              className="transition-colors text-foreground hover:text-primary"
            >
              Services
            </button>
            <Link 
              to="/impact" 
              className={`transition-colors ${
                isActive('/impact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Impact
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-colors ${
                isActive('/gallery') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.instagram.com/samskaar.foundation/', '_blank')}
              className="hidden md:flex"
            >
              <Instagram className="w-4 h-4" />
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://github.com/Adarsh380/Pustak-Dhaan', '_blank')}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
