import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cristianoRonaldo from "@/assets/cristiano-ronaldo.png";

const CristianoSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={cristianoRonaldo} 
                  alt="Cristiano Ronaldo"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <Badge className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-2 py-1 text-xs">
                  20%
                </Badge>
              </div>
              <div>
                <div className="text-2xl font-bold">CR7</div>
                <div className="text-sm text-muted-foreground">Global Wellness Ambassador</div>
                <div className="text-sm text-muted-foreground font-medium">Founder Cristiano Ronaldo</div>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Cristiano Ronaldo's Formula for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Corporate Well-Being & Success
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Step into Cristiano Ronaldo's wellness ecosystem, reimagined for today's corporate teams. 
              Erakulis has transformed Ronaldo's daily disciplines in training, recovery, nutrition, 
              and mindset into personalized, data-driven journeys that elevate employee well-being 
              and fuel business performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2">Performance & Health-Driven Approach</h4>
                <p className="text-sm text-muted-foreground">
                  Solutions designed for longevity and human performance
                </p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2">Holistic Wellness Philosophy</h4>
                <p className="text-sm text-muted-foreground">
                  Mind, body, and spirit integration
                </p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2">Global Impact Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Transforming wellness worldwide
                </p>
              </Card>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Find the Formula
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Erakulis Formula
              </Button>
            </div>
          </div>
          
          {/* Right Content - Would be a larger image in the original */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl h-[600px] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚽</div>
                <div className="text-xl font-bold">CR7 Wellness Ecosystem</div>
                <div className="text-lg opacity-90">Reimagined for Corporate Teams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CristianoSection;