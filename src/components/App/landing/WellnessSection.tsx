import { Activity, Apple, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const wellnessAreas = [
  {
    icon: Activity,
    title: "Fitness",
    subtitle: "Stay Active",
    description: "Personalized workout plans, real-time form analysis, and performance tracking to optimize your physical potential.",
    features: [
      "AI-powered workout recommendations",
      "Real-time form correction",
      "Progress tracking & analytics",
      "Custom training programs"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Apple,
    title: "Nutrition",
    subtitle: "Eat Better",
    description: "Smart meal planning, macro tracking, and nutritional insights tailored to your goals and preferences.",
    features: [
      "Personalized meal plans",
      "Macro & calorie tracking",
      "Nutritional analysis",
      "Recipe recommendations"
    ],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Brain,
    title: "Mental Health",
    subtitle: "Lower Your Stress",
    description: "Mindfulness practices, stress management techniques, and mental wellness tools for a balanced life.",
    features: [
      "Guided meditation sessions",
      "Stress monitoring",
      "Sleep optimization",
      "Mental wellness insights"
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export const WellnessSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Complete Wellness</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Three Pillars of</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Optimal Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erakulis integrates fitness, nutrition, and mental wellness into one comprehensive platform, 
            delivering personalized insights and actionable plans for your complete transformation.
          </p>
        </div>

        {/* Wellness Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {wellnessAreas.map((area, index) => (
            <div 
              key={area.title}
              className="group relative bg-gradient-card backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="text-sm text-primary font-semibold mb-2">{area.subtitle}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join over 1 million users who have already started their wellness journey with Erakulis. 
              Get personalized plans across all three pillars of health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Free Trial
              </Button>
              <Button variant="glass" size="lg">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};