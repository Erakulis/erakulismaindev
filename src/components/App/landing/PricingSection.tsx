import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const features = [
  { name: "Daily Check-ins", free: true, premium: true },
  { name: "Basic Workouts", free: true, premium: true },
  { name: "Nutrition Tracking", free: true, premium: true },
  { name: "AI Food Scanner", free: false, premium: true },
  { name: "Personalized Plans", free: false, premium: true },
  { name: "Guided Meditation", free: false, premium: true },
  { name: "Wearable Integration", free: false, premium: true },
  { name: "Advanced Analytics", free: false, premium: true },
  { name: "Custom Recipes", free: false, premium: true },
  { name: "Priority Support", free: false, premium: true },
];

export const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-6">
            <Crown className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Choose Your Plan</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Start</span>{" "}
            <span className="text-primary font-extrabold">Free</span>
            <br />
            <span className="text-foreground">Upgrade when ready</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your wellness journey with our free plan, then unlock the full potential 
            of Erakulis with premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Free Plan */}
          <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-3xl p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free Plan</h3>
              <div className="text-4xl font-bold text-primary mb-2">€0</div>
              <p className="text-muted-foreground">Forever free</p>
            </div>

            <Button variant="default" size="lg" className="w-full mb-8">
              Get Started Free
            </Button>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">What's included:</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {feature.free ? (
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 border border-muted rounded-full flex-shrink-0" />
                  )}
                  <span className={`text-sm ${feature.free ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Plan */}
          <div 
            className="backdrop-blur-sm border border-primary/20 rounded-3xl p-8 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, hsl(180 25% 25%) 0%, hsl(155 30% 15%) 50%, hsl(155 100% 8%) 100%)'
            }}
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">€9.99</div>
                <div className="text-sm text-white/80">per month</div>
                <div className="text-sm text-white/80">or €99.90/year (save 17%)</div>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="w-full mb-8 bg-white text-black hover:bg-white/90 font-semibold text-lg py-4 shadow-lg"
            >
              Start Free Trial
            </Button>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Everything in Free, plus:</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-white">
                    {feature.name}
                  </span>
                  {!feature.free && (
                    <div className="ml-auto">
                      <span className="bg-gradient-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Premium
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 backdrop-blur-md border border-primary/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-white">14-day free trial</span>
              </div>
              <p className="text-xs text-white/80">
                No commitment. Cancel anytime during trial period.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by passionate users worldwide
          </p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm font-medium text-foreground">4.8 out of 5</span>
          </div>
        </div>
      </div>
    </section>
  );
};