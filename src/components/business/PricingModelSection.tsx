import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingModelSection = () => {
  const pricingSteps = [
    {
      number: "01",
      title: "Base Fee",
      description: "Covers platform access, onboarding, technical support, and reporting tools. Ensures foundational delivery and full operational readiness from day one.",
      cta: "Get Started",
      highlight: false
    },
    {
      number: "02",
      title: "Success Fee",
      description: "Only applied when pre-defined KPIs are met. You pay only when we deliver measurable health and productivity impact.",
      cta: "Schedule Demo",
      highlight: true
    },
    {
      number: "03",
      title: "Scale on Success",
      description: "Once impact is proven we progressively expand the program, reaching a broader user base with confidence and cost-efficiency, backed by results.",
      cta: "Learn More",
      highlight: false
    }
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Performance-based pricing that ensures you only pay when we deliver measurable results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingSteps.map((step, index) => (
            <Card key={index} className={`p-8 relative ${step.highlight ? 'ring-2 ring-primary shadow-glow' : ''} hover:shadow-medium transition-all duration-300`}>
              {step.highlight && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Pay on Results
                </Badge>
              )}
              
              <div className="space-y-6">
                <div className="text-4xl font-bold text-primary">{step.number}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                <Button 
                  variant={step.highlight ? "default" : "outline"} 
                  className="w-full text-lg py-6"
                >
                  {step.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Final CTA */}
        <Card className="p-12 text-center bg-gradient-card">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a discovery call to learn how Erakulis can support your business.
          </p>
          <Button size="lg" className="text-lg px-12 py-6">
            Schedule Discovery Call
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default PricingModelSection;