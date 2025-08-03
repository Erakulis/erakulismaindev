
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloaterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check scroll position
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Assuming hero section is full viewport height
      setHasScrolledPastHero(window.scrollY > heroHeight * 0.8); // Show after scrolling 80% of hero
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // On mobile, only show after scrolling past hero. On desktop, always show.
  const shouldShow = isVisible && (!isMobile || hasScrolledPastHero);

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl sm:rounded-2xl shadow-2xl border border-primary/20 p-3 sm:p-4 md:p-6 max-w-[280px] sm:max-w-xs md:max-w-sm backdrop-blur-sm">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        
        <div className="pr-3 sm:pr-4 md:pr-6">
          <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-2 leading-tight">Ready to Transform Your Business?</h3>
          <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 hidden sm:block leading-relaxed">
            Schedule a discovery call to learn how Erakulis can support your business.
          </p>
          
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 w-full text-xs sm:text-sm py-2 h-auto"
            onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}
          >
            <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="truncate">Schedule Discovery Call</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloaterBanner;
