import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import { T } from "@/hooks/useTranslation";

export const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <T>Download now and begin your Journey to Better Health</T>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              The Fitness Builder app empowers you to craft personalized workouts tailored to your goals. 
              Download it on any device and prioritize your health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-full font-medium">
                  <Download className="w-5 h-5 mr-3" />
                  Download for Android
                </Button>
              </a>
              
              <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-full font-medium">
                  <Download className="w-5 h-5 mr-3" />
                  Download for iOS
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-[500px] relative">
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