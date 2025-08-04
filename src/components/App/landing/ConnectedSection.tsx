import { Watch, Smartphone, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/App/ui/button";

export const ConnectedSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(154_100%_42%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full">
                <Watch className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Connected Experience</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Your Wearable</span>
                <br />
                <span className="text-foreground">Gives you the</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Data</span>
                <br />
                <span className="text-foreground">Erakulis gives you</span>
                <br />
                <span className="text-foreground">the</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Plan</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Seamlessly connect your favorite wearables and let our AI transform your data 
                into actionable insights and personalized wellness plans.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Smart Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms analyze your biometric data to provide insights you can actually use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    Get custom workout, nutrition, and wellness plans based on your unique data patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Connect Your Device
              </Button>
              <Button variant="glass" size="lg">
                See Supported Devices
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="space-y-8">
              {/* Wearable Device Card */}
              <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Watch className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Apple Watch</h3>
                    <p className="text-muted-foreground">Connected</p>
                  </div>
                  <div className="ml-auto w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">72</div>
                    <div className="text-xs text-muted-foreground">BPM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8.5k</div>
                    <div className="text-xs text-muted-foreground">Steps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">420</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                </div>
              </div>

              {/* AI Insights Card */}
              <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <p className="text-sm text-foreground font-medium mb-1">
                      🎯 Recommended workout intensity: Moderate
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Based on your heart rate variability and sleep quality
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <p className="text-sm text-foreground font-medium mb-1">
                      🥗 Nutrition focus: Increase protein intake
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your recovery metrics suggest need for muscle repair
                    </p>
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