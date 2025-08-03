import { Activity, Utensils, Brain } from "lucide-react";

export const ProblemStatementSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(154_100%_42%/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Problem Statement Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-8">
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Problem Statement
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Medicine promised longer,</span>{" "}
              <span className="text-foreground">healthier lives but</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">delivered longer, sicker ones.</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This healthspan gap represents humanity's greatest design flaw and biggest opportunity for companies.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Stay Active */}
            <div className="group text-center">
              <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300 hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Activity className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Stay Active
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Transform sedentary lifestyles with personalized fitness plans that adapt to your schedule and goals, making movement a natural part of your day.
                </p>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Physical Activity
                  </div>
                </div>
              </div>
            </div>

            {/* Eat Better */}
            <div className="group text-center">
              <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300 hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Utensils className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Eat Better
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Break free from processed foods and poor nutrition with AI-powered meal planning, smart food scanning, and personalized dietary guidance.
                </p>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Nutrition
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Your Stress */}
            <div className="group text-center">
              <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 hover:shadow-card transition-all duration-300 hover:scale-105 h-full">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Lower Your Stress
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Combat mental health challenges with guided meditation, stress management tools, and daily check-ins that promote emotional well-being.
                </p>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Well-being
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Statement */}
          <div className="text-center">
            <div className="bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-3xl p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-foreground">Erakulis bridges this gap with</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">one integrated solution</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                No more juggling multiple apps, conflicting advice, or fragmented health data. 
                Experience true wellness integration that actually works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};