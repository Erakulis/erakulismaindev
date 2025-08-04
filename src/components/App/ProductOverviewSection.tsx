import { Target, Smartphone, Users, Zap, Activity } from "lucide-react";
import { T } from "@/hooks/useTranslation";

export const ProductOverviewSection = () => {
  const features = [
    {
      icon: Target,
      title: "Holistic Integration",
      description: "We believe in a holistic approach to wellness. Our platform allows you to track your fitness activities, meals, mindfulness time, sleep, and more.",
      position: "top-left"
    },
    {
      icon: Activity,
      title: "Easy Tracking and Real-Time Monitoring",
      description: "Easily log your activities with AI-powered tools and experience real-time monitoring, driving measurable results and enhancing your wellness outcomes.",
      position: "center",
      featured: true
    },
    {
      icon: Users,
      title: "Personalized Plans",
      description: "Get a personalized plan for fitness, nutrition, and mental balance, tailored to deliver sustainable results.",
      position: "top-right"
    },
    {
      icon: Smartphone,
      title: "Goal Setting",
      description: "Set personalized fitness goals and crush them with our comprehensive tracking system.",
      position: "bottom-left"
    },
    {
      icon: Zap,
      title: "+300 Wearable Integration",
      description: "Seamless integration with over 300 wearables for real-time tracking and data-driven insights.",
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary"><T>Fitness, Nutrition</T></span> <T>and</T> <span className="text-primary"><T>Mind</T></span> <T>United</T>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <T>Our approach brings fitness, nutrition, and mental well-being together, creating a powerful foundation for lasting health.</T>
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-center gap-8">
          {/* Left Side - 2 cards stacked */}
          <div className="flex flex-col gap-6">
            {/* Top Left */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center w-80 h-60">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                <T>Holistic Integration</T>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <T>We believe in a holistic approach to wellness. Our platform allows you to track your fitness activities, meals, mindfulness time, sleep, and more.</T>
              </p>
            </div>

            {/* Bottom Left */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center w-80 h-60">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                <T>Goal Setting</T>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <T>Set personalized fitness goals and crush them with our comprehensive tracking system.</T>
              </p>
            </div>
          </div>

          {/* Center Featured Card */}
          <div className="flex-shrink-0">
            <div 
              className="rounded-2xl p-8 text-white relative overflow-hidden w-96 h-[480px]"
              style={{ 
                background: 'linear-gradient(135deg, hsl(180 25% 25%) 0%, hsl(155 30% 15%) 50%, hsl(155 100% 8%) 100%)'
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  <T>Easy Tracking and Real-Time Monitoring</T>
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed text-center text-base">
                  <T>Easily log your activities with AI-powered tools and experience real-time monitoring, driving measurable results and enhancing your wellness outcomes.</T>
                </p>
                
                {/* Phone Mockup */}
                <div className="flex justify-center">
                  <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-3 py-1 text-black text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-2 bg-black rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-3 py-2">
                        <div className="flex gap-2 mb-3">
                          <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">Daily</div>
                          <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">Calendar</div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-bold text-xs">Progress</h4>
                          <span className="text-xs text-gray-500">See All</span>
                        </div>
                        
                        {/* Progress Cards */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="bg-gray-50 rounded-lg p-2 text-center">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <div className="text-xs font-bold">5/12</div>
                            <div className="text-xs text-gray-500">Chest</div>
                            <div className="text-xs text-gray-400">15 min</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-center">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <div className="text-xs font-bold">3/20</div>
                            <div className="text-xs text-gray-500">Legs</div>
                            <div className="text-xs text-gray-400">23 min</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-center">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <div className="text-xs font-bold">10/1</div>
                            <div className="text-xs text-gray-500">Core</div>
                            <div className="text-xs text-gray-400">8 min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 2 cards stacked */}
          <div className="flex flex-col gap-6">
            {/* Top Right */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center w-80 h-60">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                <T>Personalized Plans</T>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <T>Get a personalized plan for fitness, nutrition, and mental balance, tailored to deliver sustainable results.</T>
              </p>
            </div>

            {/* Bottom Right */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center w-80 h-60">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                <T>+300 Wearable Integration</T>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <T>Seamless integration with over 300 wearables for real-time tracking and data-driven insights.</T>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 px-4">
          {/* Featured Card with rounded corners */}
          <div 
            className="rounded-2xl p-6 text-white relative overflow-hidden shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, hsl(180 25% 25%) 0%, hsl(155 30% 15%) 50%, hsl(155 100% 8%) 100%)'
            }}
          >
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold mb-3">
                <T>Easy Tracking and Real-Time Monitoring</T>
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                <T>Easily log your activities with AI-powered tools and experience real-time monitoring, driving measurable results and enhancing your wellness outcomes.</T>
              </p>
              
              {/* Simplified Phone Mockup */}
              <div className="flex justify-center">
                <div className="w-32 h-64 bg-gray-900 rounded-2xl p-1 shadow-xl">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                    <div className="p-2">
                      <div className="bg-primary text-white px-2 py-1 rounded-full text-xs mb-2 inline-block">Daily</div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="bg-gray-100 rounded p-1 text-center">
                          <div className="text-xs font-bold">5/12</div>
                          <div className="text-xs text-gray-500">Chest</div>
                        </div>
                        <div className="bg-gray-100 rounded p-1 text-center">
                          <div className="text-xs font-bold">3/20</div>
                          <div className="text-xs text-gray-500">Legs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                <T>Holistic Integration</T>
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                <T>Track fitness, meals, mindfulness, and sleep.</T>
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                <T>Personalized Plans</T>
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                <T>Tailored fitness, nutrition, and mental balance plans.</T>
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                <T>Goal Setting</T>
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                <T>Set and crush personalized fitness goals.</T>
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                <T>+300 Wearables</T>
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                <T>Seamless integration with 300+ wearables.</T>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};