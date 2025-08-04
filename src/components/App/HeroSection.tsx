import { T } from "@/hooks/useTranslation";

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-8 px-4 md:px-6">
      <div 
        className="relative h-[calc(100vh-120px)] md:h-[calc(85vh+50px)] flex items-start justify-center overflow-hidden rounded-2xl md:rounded-3xl mx-2 md:mx-10 mt-2 pt-8 md:pt-16"
        style={{ 
          background: 'linear-gradient(135deg, hsl(195 55% 9%) 0%, hsl(195 55% 12%) 50%, hsl(195 55% 8%) 100%)'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-30">
          <div className="flex flex-col items-center text-center py-8 md:py-12 min-h-[65vh] justify-center -mt-8 md:-mt-12">
            
            {/* Main Content */}
            <div className="max-w-4xl mx-auto mb-8 relative z-40 -mt-4 md:-mt-7.5">
              {/* Main Headline */}
               <h1 className="font-bold leading-tight text-white mb-4 md:mb-6 relative z-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                 <T>Live</T>{" "}
                 <span className="text-primary"><T>Healthier</T></span>,
                 <br />
                 <T>Live Longer</T>
               </h1>
              
               <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
                 <T>Discover the ultimate app to track workouts, monitor progress, and achieve your fitness goals. Stay on top of your health journey today!</T>
               </p>
              
              {/* Download Buttons - Mobile: Hidden, Desktop: Side by Side */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 justify-center items-center mb-8 mt-3 md:mt-0">
                <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/assets/images/86fd7106-dd74-44ea-98b1-1ad6d67c95fa.png" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto max-w-[200px] cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>
                
                <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/assets/images/b214088a-05e2-4b56-baff-bddeefc80c25.png" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto max-w-[200px] cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};