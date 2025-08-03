import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">ERAKULIS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Feature</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Review</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4 mb-6">
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors py-2">Home</a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">Feature</a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2">About</a>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors py-2">Process</a>
                <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors py-2">Review</a>
              </nav>
              <div className="flex flex-col gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};