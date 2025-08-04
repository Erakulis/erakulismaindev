import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import wellnessLifestyle from "@/assets/wellness-lifestyle.jpg";
import nutrition from "@/assets/nutrition.jpg";
import { T } from "@/hooks/useTranslation";

const WellnessPlatformSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <T>Next-Generation Wellness Platform</T>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <T>Erakulis is the only digital wellness solution that integrates physical activity, mental, nutrition, stress and sleep in one single experience.</T>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Physical Activity */}
          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <div className="space-y-4">
              <img 
                src={wellnessLifestyle} 
                alt="Physical Activity"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress:</span>
                  <span className="font-semibold">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <h3 className="text-xl font-bold text-primary"><T>Physical Activity</T></h3>
              <p className="text-muted-foreground">
                <T>Personalized fitness routines that adapt to your schedule and preferences, keeping you moving towards your goals.</T>
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
            </div>
          </Card>
          
          {/* Nutrition */}
          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <div className="space-y-4">
              <img 
                src={nutrition} 
                alt="Nutrition"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Meals tracked</div>
              </div>
              <h3 className="text-xl font-bold text-primary"><T>Nutrition</T></h3>
              <p className="text-muted-foreground">
                <T>AI-powered meal planning and nutrition tracking that makes healthy eating simple and sustainable.</T>
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
            </div>
          </Card>
          
          {/* Mental Wellness */}
          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Daily sessions</div>
                  <div className="text-2xl font-bold">🧠</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary"><T>Mental Wellness</T></h3>
              <p className="text-muted-foreground">
                <T>Comprehensive mental health support including mindfulness.</T>
              </p>
            </div>
          </Card>
          
          {/* Sleep & Recovery */}
          <Card className="p-6 hover:shadow-medium transition-all duration-300">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gradient-subtle rounded-lg p-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Sleep score: 92%</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Deep</span>
                      <span className="text-sm font-semibold">3h 20m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Light</span>
                      <span className="text-sm font-semibold">4h 15m</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary"><T>Sleep & Recovery</T></h3>
              <p className="text-muted-foreground">
                <T>Sleep optimization tools and recovery tracking.</T>
              </p>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-muted-foreground">
            <T>Experience the Complete Ecosystem</T>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WellnessPlatformSection;