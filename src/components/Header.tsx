
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
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
          
          <Button className="bg-primary hover:bg-primary/90">
            Get Involved
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
