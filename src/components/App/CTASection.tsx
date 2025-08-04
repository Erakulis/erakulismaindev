import { T } from "@/hooks/useTranslation";

const googlePlayButton = "/assets/images/86fd7106-dd74-44ea-98b1-1ad6d67c95fa.png";
const appStoreButton = "/assets/images/b214088a-05e2-4b56-baff-bddeefc80c25.png";

export const CTASection = () => {
  return (
    <section className="py-20 px-10">
      <div 
        className="container mx-auto rounded-3xl overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, hsl(195 55% 9%) 0%, hsl(195 55% 12%) 50%, hsl(195 55% 8%) 100%)'
        }}
      >
        <div className="px-16 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Mobile: Center Image Only */}
            <div className="md:hidden flex justify-center">
              <div className="w-48 h-96">
                <img 
                  src="/assets/images/e465ffa9-e735-4c40-9be1-733427c11b9f.png" 
                  alt="Founded by CR7 App" 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:flex flex-col lg:flex-row items-center gap-16">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  <T>Download now and begin your Journey to Better Health</T>
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                  The Fitness Builder app empowers you to craft personalized workouts tailored to your goals. 
                  Download it on any device and prioritize your health.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://play.google.com/store/apps/details?id=com.erakulis" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={googlePlayButton} 
                      alt="Get it on Google Play" 
                      className="h-14 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </a>
                  
                  <a href="https://apps.apple.com/us/app/erakulis/id6473955690" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={appStoreButton} 
                      alt="Download on the App Store" 
                      className="h-14 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
              </div>

              {/* Right Content - Phone Mockups */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-8">
                  {/* Left Single Phone */}
                  <div className="w-48 h-96">
                    <img 
                      src="/assets/images/e465ffa9-e735-4c40-9be1-733427c11b9f.png" 
                      alt="Founded by CR7 App" 
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                  
                  {/* Right Stacked Phones */}
                  <div className="flex flex-col gap-4">
                    {/* Top Phone (Upside Down) */}
                    <div className="w-32 h-64 transform rotate-180">
                      <img 
                        src="/assets/images/da2eb4a4-ce08-4a17-992e-37935ed1dbe1.png" 
                        alt="Fitness Dashboard Interface" 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                    
                    {/* Bottom Phone */}
                    <div className="w-32 h-64">
                      <img 
                        src="/assets/images/1aa692bc-5818-4fbe-b48a-aa21c28c575f.png" 
                        alt="Sleep Tracking Interface" 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};