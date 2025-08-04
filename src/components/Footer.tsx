import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, Youtube, Video } from "lucide-react";
import { T } from "@/hooks/useTranslation";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <img 
                src="/assets/images/1addcc93-546c-4d9c-88ee-7b3d3b0624ce.png" 
                alt="Erakulis" 
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-slate-300 leading-relaxed">
                <T>Your Wellness Ecosystem. Eat better, stay active, be mindful.</T>
              </p>
            </div>
            
            {/* App Store Links */}
            <div className="space-y-4">
              <p className="text-sm font-medium"><T>Download our app</T></p>
              <div className="flex gap-3">
                <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                  <img src="https://erakulis.com/app-store.svg" alt="App Store" className="h-10" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.erakulis&hl=en&pli=1" target="_blank" rel="noopener noreferrer">
                  <img src="https://erakulis.com/google-play.svg" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white"><T>Product</T></h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">
                  <T>Erakulis App</T>
                </a>
              </li>
              <li>
                <a href="/profissionais" className="text-slate-300 hover:text-white transition-colors">
                  <T>For Professionals</T>
                </a>
              </li>
              <li>
                <a href="/empresas" className="text-slate-300 hover:text-white transition-colors">
                  <T>For Companies</T>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white"><T>Company</T></h4>
            <ul className="space-y-3">
              <li>
                <a href="/why-erakulis" className="text-slate-300 hover:text-white transition-colors">
                  <T>Why Erakulis</T>
                </a>
              </li>
               <li>
                 <a href="https://erakulislda.freshdesk.com/support/home" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                   <T>Help Center</T>
                 </a>
               </li>
               <li>
                 <a href="https://hub.erakulis.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                   Erakulis Hub
                 </a>
               </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white"><T>Contact</T></h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  Rua de Gondarém, 867<br />
                  4150-374 Porto, Portugal
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@erakulis.com" className="text-sm hover:text-white transition-colors">
                  support@erakulis.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3"><T>Follow us</T></p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.instagram.com/erakulis/#" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ERAKULIS" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/erakulis" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/erakulis_app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@erakulis" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@erakulis" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2025 ERAKULIS, LDA. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="/cookies-policy" className="hover:text-white transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;