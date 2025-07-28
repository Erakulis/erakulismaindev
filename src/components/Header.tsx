import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import erakulisLogo from "@/assets/erakulis-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50" style={{ backgroundColor: '#0a1b22' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 active:opacity-70 transition-opacity touch-manipulation">
              <img 
                src="/lovable-uploads/5ff04c11-c2a5-4e61-af41-440d12c1c49f.png" 
                alt="Erakulis" 
                className="h-6 md:h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-primary transition-smooth text-sm font-medium whitespace-nowrap">
              The App
            </a>
            <a href="/profissionais" className="text-white hover:text-primary transition-smooth text-sm font-medium whitespace-nowrap">
              I'm a Fitness PRO
            </a>
            <a href="/empresas" className="text-white hover:text-primary transition-smooth text-sm font-medium whitespace-nowrap">
              I'm a Company
            </a>
            <a href="/why-erakulis" className="text-white hover:text-primary transition-smooth text-sm font-medium whitespace-nowrap">
              Why Erakulis
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
              <a href="https://hub.erakulis.com" target="_blank" rel="noopener noreferrer">
                Erakulis Hub
              </a>
            </Button>
            <Button variant="ghost" className="text-white hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="https://erakulis.com/en-GB/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button variant="corporate" className="shadow-medium" asChild>
              <a href="https://erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                Start Free
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-lg transition-smooth active:bg-accent/50 touch-manipulation text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden py-6 border-t border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5 backdrop-blur-sm animate-fade-in"
            style={{ backgroundColor: 'rgba(10, 27, 34, 0.95)' }}
          >
            <nav className="flex flex-col space-y-1">
              <a 
                href="/" 
                className="text-white py-4 px-4 rounded-lg touch-manipulation hover:bg-primary/20 active:bg-primary/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                The App
              </a>
              <a 
                href="/profissionais" 
                className="text-white py-4 px-4 rounded-lg touch-manipulation hover:bg-primary/20 active:bg-primary/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                I'm a Fitness PRO
              </a>
              <a 
                href="/empresas" 
                className="text-white py-4 px-4 rounded-lg touch-manipulation hover:bg-primary/20 active:bg-primary/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                I'm a Company
              </a>
              <a 
                href="/why-erakulis" 
                className="text-white py-4 px-4 rounded-lg touch-manipulation hover:bg-primary/20 active:bg-primary/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Erakulis
              </a>
              <div className="flex flex-col space-y-3 pt-6 border-t border-primary/30 mt-4">
                <Button 
                  variant="ghost" 
                  className="justify-start h-12 text-left text-black bg-white hover:bg-white/90 hover:text-black active:bg-white/80 transition-all touch-manipulation" 
                  asChild
                >
                  <a href="https://hub.erakulis.com" target="_blank" rel="noopener noreferrer">
                    Erakulis Hub
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start h-12 text-left text-white hover:bg-primary/20 active:bg-primary/30 transition-all touch-manipulation" 
                  asChild
                >
                  <a href="https://erakulis.com/en-GB/login" target="_blank" rel="noopener noreferrer">
                    Login
                  </a>
                </Button>
                <Button 
                  variant="corporate" 
                  className="justify-start h-12 text-left active:scale-95 transition-transform touch-manipulation" 
                  asChild
                >
                  <a href="https://erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;