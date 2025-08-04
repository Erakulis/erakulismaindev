import { Heart, Activity, Brain, Moon, Dumbbell } from "lucide-react";
import { T } from "@/hooks/useTranslation";

export const GuidesSection = () => {
  const guides = [
    {
      icon: Heart,
      title: "Eat Better",
      description: "Personalized nutrition plans tailored to your lifestyle and goals.",
      backgroundImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "text-white",
      position: "top-wide" // 2/3 width on top
    },
    {
      icon: Activity,
      title: "Stay Active",
      description: "Track your daily activities and maintain an active lifestyle.",
      backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "text-white",
      position: "top-vertical" // 1/3 width vertical on top
    },
    {
      icon: Brain,
      title: "Lower your stress",
      description: "Mindfulness and stress management techniques for better mental health.",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "text-white",
      position: "middle-left" // 1/3 width middle left
    },
    {
      icon: Moon,
      title: "Sleep Better",
      description: "Optimize your sleep patterns for improved recovery and well-being.",
      backgroundImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "text-white",
      position: "middle-right" // 1/3 width middle right
    },
    {
      icon: Dumbbell,
      title: "Find your perfect Workout",
      description: "Discover workouts that match your fitness level and preferences.",
      backgroundImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "text-white",
      position: "bottom-full" // full width on bottom
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>Erakulis guides you to</T>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <T>Take control of your health with our comprehensive approach to wellness</T>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile: Simple stacked layout */}
          <div className="md:hidden space-y-4">
            {guides.map((guide, index) => (
              <div key={index} 
                className="h-[200px] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex items-center"
                style={{
                  backgroundImage: `url(${guide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${guide.iconColor} flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm flex-shrink-0`}>
                      <guide.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        <T>{guide.title}</T>
                      </h3>
                      <p className="text-white/90 leading-relaxed drop-shadow-md text-sm">
                        <T>{guide.description}</T>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop: Asymmetric Layout */}
          <div className="hidden md:grid grid-cols-12 gap-4">
            {/* Top Row */}
            <div className="col-span-8">
              <div 
                className="h-[190px] rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex items-center"
                style={{
                  backgroundImage: `url(${guides[0].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 ${guides[0].iconColor} flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm flex-shrink-0`}>
                      <Heart className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                        <T>{guides[0].title}</T>
                      </h3>
                      <p className="text-white/90 leading-relaxed drop-shadow-md text-lg">
                        <T>{guides[0].description}</T>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Vertical Card */}
            <div className="col-span-4 row-span-3">
              <div 
                className="h-[590px] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${guides[1].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${guides[1].iconColor} mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm`}>
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    <T>{guides[1].title}</T>
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">
                    <T>{guides[1].description}</T>
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row - Two cards */}
            <div className="col-span-4">
              <div 
                className="h-[384px] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${guides[2].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${guides[2].iconColor} mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm`}>
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    <T>{guides[2].title}</T>
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">
                    <T>{guides[2].description}</T>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div 
                className="h-[384px] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${guides[3].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${guides[3].iconColor} mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm`}>
                    <Moon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    <T>{guides[3].title}</T>
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">
                    <T>{guides[3].description}</T>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - Full width card */}
            <div className="col-span-12">
              <div 
                className="h-[190px] rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex items-center"
                style={{
                  backgroundImage: `url(${guides[4].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-6 max-w-4xl">
                    <div className={`w-16 h-16 ${guides[4].iconColor} flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-sm flex-shrink-0`}>
                      <Dumbbell className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                        <T>{guides[4].title}</T>
                      </h3>
                      <p className="text-white/90 leading-relaxed drop-shadow-md text-lg">
                        <T>{guides[4].description}</T>
                      </p>
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