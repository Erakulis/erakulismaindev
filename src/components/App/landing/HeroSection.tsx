import { Button } from "@/components/ui/button";
import { Star, Download, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-athlete.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import cr7Image from "@/assets/cr7-fitness.jpg";
import { useState } from "react";
import { T } from "@/hooks/useTranslation";

export const HeroSection = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'hsl(var(--hero-bg))' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] py-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  <T>Track</T>{" "}
                  <span className="text-primary"><T>Fitness</T></span>, <T>Stay</T>
                  <br />
                  <T>Motivated</T>
                </h1>
                <p className="text-xl lg:text-2xl text-white/80 max-w-2xl">
                  <T>Discover the ultimate app to track workouts, monitor progress, and achieve your fitness goals. Stay on top of your health journey today!</T>
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-white/90 h-14 px-6 rounded-full font-medium">
                    <Download className="w-5 h-5 mr-3" />
                    <T>Download for Android</T>
                  </Button>
                </a>
                
                <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-white/90 h-14 px-6 rounded-full font-medium">
                    <Download className="w-5 h-5 mr-3" />
                    <T>Download for iOS</T>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Three Phone Mockups */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative flex items-end gap-4">
              {/* Left Phone */}
              <div className="w-64 h-[500px] relative transform rotate-12 -translate-y-8">
                <img 
                  src={appMockup} 
                  alt="Erakulis App Interface" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Center Phone (Main) */}
              <div className="w-72 h-[550px] relative z-10">
                <img 
                  src={appMockup} 
                  alt="Erakulis App Interface" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Right Phone */}
              <div className="w-64 h-[500px] relative transform -rotate-12 -translate-y-8">
                <img 
                  src={appMockup} 
                  alt="Erakulis App Interface" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};