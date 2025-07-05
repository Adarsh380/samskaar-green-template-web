
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Samskaar Foundation</h1>
              <p className="text-xs text-muted-foreground">Transforming Education</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
            <a href="#donate" className="text-foreground hover:text-primary transition-colors">Donate</a>
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
