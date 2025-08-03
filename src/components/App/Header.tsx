import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">APURA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-foreground transition-colors font-medium">Home</a>
            <a href="#features" className="text-gray-600 hover:text-foreground transition-colors font-medium">Feature</a>
            <a href="#about" className="text-gray-600 hover:text-foreground transition-colors font-medium">About</a>
            <a href="#process" className="text-gray-600 hover:text-foreground transition-colors font-medium">Process</a>
            <a href="#reviews" className="text-gray-600 hover:text-foreground transition-colors font-medium">Review</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 font-medium">
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
          <div className="md:hidden border-t border-gray-100 bg-white py-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-600 hover:text-foreground transition-colors py-2 font-medium">Home</a>
              <a href="#features" className="text-gray-600 hover:text-foreground transition-colors py-2 font-medium">Feature</a>
              <a href="#about" className="text-gray-600 hover:text-foreground transition-colors py-2 font-medium">About</a>
              <a href="#process" className="text-gray-600 hover:text-foreground transition-colors py-2 font-medium">Process</a>
              <a href="#reviews" className="text-gray-600 hover:text-foreground transition-colors py-2 font-medium">Review</a>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 font-medium mt-4">
                Call Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};