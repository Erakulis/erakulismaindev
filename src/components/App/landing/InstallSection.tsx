import { Button } from "@/components/ui/button";
import { Smartphone, Download, Apple } from "lucide-react";

export const InstallSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(154_100%_42%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow">
                <Smartphone className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>

            {/* Headlines */}
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Healthy choices</span>
              <br />
              <span className="text-foreground">better life</span>
            </h2>

            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of your health is defined by the choices you make today.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  <Apple className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Download for iOS
                </Button>
              </a>
              
              <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Get on Android
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Downloads</div>
              </div>
              
              <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              
              <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">User Rating</div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="pt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Join millions who have transformed their lives
              </p>
              <Button variant="glass" size="lg">
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};