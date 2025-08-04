import { Button } from "@/components/ui/button";
import { T } from "@/hooks/useTranslation";
import { Zap, Calendar, GraduationCap, ArrowRight } from "lucide-react";

const CTASection = () => {
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
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <T>Ready to Transform</T>{" "}
            <span className="text-white/90">
              <T>Your Business?</T>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <T>Discover the smartest way to manage clients and plans.</T>
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-smooth transform hover:-translate-y-2 animate-fade-in-up ${
                  option.highlight ? 'ring-2 ring-white/30 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {option.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-semibold text-primary">
                    <T>No cost</T>
                  </div>
                )}

                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-white/20 group-hover:bg-white/30 transition-smooth group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      <T>{option.title}</T>
                    </h3>
                    <p className="text-white/70">
                      <T>{option.description}</T>
                    </p>
                  </div>

                  {/* CTA Button */}
                  {option.action === "Get Started" ? (
                    <a href="https://pro.erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="lg" 
                        className="w-full text-lg group-hover:scale-105 transition-smooth"
                        style={{ backgroundColor: "#FFA953" }}
                      >
                        <T>{option.action}</T>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : option.action === "Book DEMO" ? (
                    <a href="https://calendar.app.google/A7P2okznUfLdeNhg8" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="lg" 
                        className="w-full text-lg group-hover:scale-105 transition-smooth text-black"
                      >
                        <T>{option.action}</T>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : option.action === "Discover" ? (
                    <a href="https://hub.erakulis.com/erakulis-academy/" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={option.variant}
                        size="lg" 
                        className="w-full text-lg group-hover:scale-105 transition-smooth bg-black text-white hover:bg-black/80"
                      >
                        <T>{option.action}</T>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      variant={option.variant}
                      size="lg" 
                      className="w-full text-lg group-hover:scale-105 transition-smooth"
                    >
                      <T>{option.action}</T>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom guarantee */}
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white/90 border border-white/20">
            <Zap className="w-5 h-5 text-white" />
            <span className="font-medium"><T>100% Free • No Limitations • No Commitments</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;