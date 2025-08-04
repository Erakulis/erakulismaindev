import { Download } from "lucide-react";
import { T } from "@/hooks/useTranslation";

const googlePlayButton = "/assets/images/86fd7106-dd74-44ea-98b1-1ad6d67c95fa.png";
const appStoreButton = "/assets/images/b214088a-05e2-4b56-baff-bddeefc80c25.png";

export const MobileInstallBanner = () => {
  return (
    <div 
      className="md:hidden fixed bottom-4 left-4 right-4 border border-gray-200 p-4 z-50 shadow-lg rounded-2xl"
      style={{ 
        background: 'linear-gradient(135deg, hsl(180 25% 25%) 0%, hsl(155 30% 15%) 50%, hsl(155 100% 8%) 100%)'
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <img 
              src="/assets/images/5957da67-016d-4373-8f07-16fbd1370656.png" 
              alt="App icon" 
              className="w-10 h-10 rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-white"><T>Get the App</T></h3>
            <p className="text-xs text-white/80 leading-tight"><T>Download for a longer and healthier life.</T></p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <a 
            href="https://erakulis.com/apps-download"
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <T>Download</T>
          </a>
        </div>
      </div>
    </div>
  );
};