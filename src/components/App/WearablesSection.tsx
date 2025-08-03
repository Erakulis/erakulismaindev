import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const wearables = [
  { name: "Apple Health", logo: "/assets/images/2ce2112d-442d-4240-85ea-51972f652003.png", color: "text-white", isImage: true },
  { name: "Google Fit", logo: "/assets/images/528f32d2-0733-4703-bfa2-89eadae8f5de.png", color: "text-blue-500", isImage: true },
  { name: "Fitbit", logo: "/assets/images/d2eb3562-118b-491f-b6fc-50b72163a6ef.png", color: "text-blue-400", isImage: true },
  { name: "Garmin", logo: "/assets/images/59678727-1ee1-41d8-af05-bdb00212bb6f.png", color: "text-red-500", isImage: true },
  { name: "Oura", logo: "/assets/images/8cb841a2-32e2-46e7-93dd-03bd19d3074a.png", color: "text-gray-300", isImage: true },
  { name: "Whoop", logo: "/assets/images/d3620cb9-294a-4537-ac40-4d3e99397440.png", color: "text-gray-900", isImage: true },
  { name: "Withings", logo: "/assets/images/3c9aa747-1085-4cbe-b9cc-78f27ea17b57.png", color: "text-blue-600", isImage: true },
  { name: "Strava", logo: "/assets/images/cd801201-97e4-4472-a685-11ae1c0f0ef8.png", color: "text-orange-500", isImage: true },
  { name: "More", logo: "+", color: "text-gray-600", isImage: false },
];

export const WearablesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % wearables.length;
        // Skip "More" item in animation
        return wearables[nextIndex].name === "More" ? (nextIndex + 1) % wearables.length : nextIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "Sync seamlessly with all devices.",
    "Real-time data synchronization.",
    "Universal health data integration."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Connect All Your<br />Wearables & Apps
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seamlessly integrate with your favorite fitness devices and health apps. 
              Erakulis brings all your health data together in one place.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Animated Wearables Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              {wearables.map((wearable, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square rounded-2xl flex flex-col items-center justify-center p-4
                    transition-all duration-500 transform
                    ${
                      activeIndex === index && wearable.name !== "More"
                        ? 'bg-white/10 backdrop-blur-sm scale-110 shadow-lg border-2 border-primary/30'
                        : wearable.name === "More"
                        ? 'bg-gradient-to-br from-gray-200 to-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }
                  `}
                >
                  <div className={`${
                    wearable.name === "More" 
                      ? "text-2xl" 
                      : "h-16 w-16"
                  } mb-2 flex items-center justify-center`}>
                    {wearable.isImage ? (
                      <img 
                        src={wearable.logo} 
                        alt={`${wearable.name} logo`}
                        className="h-16 w-16 object-contain"
                      />
                    ) : (
                      wearable.logo
                    )}
                  </div>
                  {(wearable.name === "Apple Health" || wearable.name === "Google Fit" || wearable.name === "Whoop" || wearable.name === "More") && (
                    <div 
                      className={`
                        text-xs font-medium text-center leading-tight md:block hidden
                        ${activeIndex === index && wearable.name !== "More" ? 'text-primary font-semibold' : 'text-gray-700'}
                      `}
                    >
                      {wearable.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Currently highlighted wearable */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 mb-2">Currently syncing with</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full">
                {wearables[activeIndex].isImage ? (
                  <img 
                    src={wearables[activeIndex].logo} 
                    alt={`${wearables[activeIndex].name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{wearables[activeIndex].logo}</span>
                )}
                <span className="font-medium text-primary">{wearables[activeIndex].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};