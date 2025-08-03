import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import wellnessLifestyle from "@/assets/wellness-lifestyle.jpg";

const CompanyHeroSection = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">
                Erakulis for Companies
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Wellbeing Into{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Measurable Business Results
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Traditional wellness programs failed to deliver results. Erakulis' digital wellness solution 
              delivers lasting impact on people's health and key business KPIs, backed by data & technology, 
              and a holistic approach.
            </p>
            
            <Button size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          {/* Right Content - Hero Image with Stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img 
                src={wellnessLifestyle} 
                alt="Wellness and fitness lifestyle"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Stats Overlays */}
              <Card className="absolute top-6 left-6 p-4 bg-background/95 backdrop-blur-sm border-none shadow-soft">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25%</div>
                  <div className="text-sm text-muted-foreground">Reduced Absenteeism</div>
                </div>
              </Card>
              
              <Card className="absolute top-6 right-6 p-4 bg-background/95 backdrop-blur-sm border-none shadow-soft">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3-6x</div>
                  <div className="text-sm text-muted-foreground">ROI</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHeroSection;