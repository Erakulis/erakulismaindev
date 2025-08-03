import { Button } from "@/components/ui/button";
import { Zap, Calendar, GraduationCap, ArrowRight } from "lucide-react";

const CTAHeroSection = () => {
  const ctaOptions = [
    {
      icon: Zap,
      title: "Create Free Account",
      description: "No commitment. No limitations",
      action: "Get Started",
      variant: "corporate" as const,
      highlight: true
    },
    {
      icon: Calendar,
      title: "Schedule DEMO",
      description: "Personalized demo with specialist",
      action: "Book DEMO",
      variant: "secondary" as const,
      highlight: false
    },
    {
      icon: GraduationCap,
      title: "Erakulis Academy",
      description: "Tutorials and best practices",
      action: "Discover",
      variant: "accent" as const,
      highlight: false
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <img 
            src="/assets/images/1ec2046c-56d6-4b03-8700-698f7a4efbe2.png" 
            alt="Erakulis PRO" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the smartest way to manage clients and plans.
          </p>
        </div>
        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-white transition-smooth transform hover:-translate-y-1 ${
                  option.highlight ? 'ring-2 ring-primary/20 scale-[1.02]' : ''
                }`}
              >
                {option.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    No cost
                  </div>
                )}

                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  {option.action === "Get Started" ? (
                    <a href="https://pro.erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="default" 
                        className="w-full group-hover:scale-105 transition-smooth"
                      >
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : option.action === "Book DEMO" ? (
                    <a href="https://calendar.app.google/A7P2okznUfLdeNhg8" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="default" 
                        className="w-full group-hover:scale-105 transition-smooth"
                      >
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : option.action === "Discover" ? (
                    <a href="https://hub.erakulis.com/erakulis-academy/" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="default" 
                        className="w-full group-hover:scale-105 transition-smooth"
                        style={{ backgroundColor: "#FFA953" }}
                      >
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      variant={option.variant}
                      size="default" 
                      className="w-full group-hover:scale-105 transition-smooth"
                    >
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTAHeroSection;