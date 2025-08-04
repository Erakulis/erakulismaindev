import { Activity, Target, Brain, BarChart3, Smartphone, Sparkles } from "lucide-react";
import { T } from "@/hooks/useTranslation";

const workoutImage = "/assets/images/6467c7bf-e014-47a5-ba48-bf9c9d9c379f.png";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Activity Tracking",
      description: "Monitor steps, workouts, and calories seamlessly."
    },
    {
      icon: Target,
      title: "Goal Setting", 
      description: "Set personalized fitness goals and crush them."
    },
    {
      icon: Brain,
      title: "Custom Workouts",
      description: "Stay on top of your fitness routine with precise and seamless activity tracking to keep you motivated and informed."
    },
    {
      icon: BarChart3,
      title: "Insights & Analytics",
      description: "Get actionable data to improve your performance."
    },
    {
      icon: Smartphone,
      title: "Sync & Share",
      description: "Connect with devices and share progress effortlessly."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary"><T>Empowering Features for Fitness</T></span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>Empowering Features for Fitness</T>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <T>{feature.title}</T>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                <T>{feature.description}</T>
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};