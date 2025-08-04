import { Button } from "@/components/App/ui/button";
import { Heart, Download, Apple } from "lucide-react";
import { T } from "@/hooks/useTranslation";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-foreground">ERAKULIS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              <T>The complete wellness app that transforms your health journey. Live healthier, live longer with Erakulis.</T>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                <Button variant="store" size="lg" className="flex items-center gap-3">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
              </a>
              
              <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                <Button variant="store" size="lg" className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Free Trial</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Erakulis Team</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground mt-8">
            © 2024 Erakulis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};