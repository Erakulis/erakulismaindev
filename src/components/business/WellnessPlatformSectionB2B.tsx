import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Brain, Moon } from "lucide-react";

const WellnessPlatformSectionB2B = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Next-Generation Wellness Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Erakulis is the only digital wellness solution that integrates physical activity, 
            mental, nutrition, stress and sleep in one single experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Physical Activity */}
          <Card className="p-6 space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
              alt="Physical Activity"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Progress: 85%</div>
              <Progress value={85} className="h-2" />
            </div>
            <h3 className="text-xl font-semibold">Physical Activity</h3>
            <p className="text-sm text-muted-foreground">
              Personalized fitness routines that adapt to your schedule and preferences, 
              keeping you moving towards your goals.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="secondary">Active</Badge>
            </div>
          </Card>

          {/* Nutrition */}
          <Card className="p-6 space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80"
              alt="Nutrition"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="text-sm text-muted-foreground mb-2">Meals tracked</div>
            <h3 className="text-xl font-semibold">Nutrition</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered meal planning and nutrition tracking that makes healthy eating 
              simple and sustainable.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="secondary">Active</Badge>
            </div>
          </Card>

          {/* Mental Wellness */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground mb-2">Daily sessions</div>
            <h3 className="text-xl font-semibold">Mental Wellness</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive mental health support including mindfulness.
            </p>
          </Card>

          {/* Sleep & Recovery */}
          <Card className="p-6 space-y-4">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Sleep score: 92%</span>
                <Moon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Deep</span>
                  <span>3h 20m</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Light</span>
                  <span>4h 15m</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Sleep & Recovery</h3>
            <p className="text-sm text-muted-foreground">
              Sleep optimization tools and recovery tracking.
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Experience the Complete Ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};

export default WellnessPlatformSectionB2B;