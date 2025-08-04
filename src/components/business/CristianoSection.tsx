import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { T } from "@/hooks/useTranslation";
 

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
                  src="/assets/images/Cristiano-Ronaldo-App-Empresas.png"
                  alt="Cristiano Ronaldo"
                  className="w-20 h-20 rounded-full object-cover"
                /> 
                <Badge className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-2 py-1 text-xs">
                  20%
                </Badge>
              </div>
              <div>
                <div className="text-2xl font-bold">CR7</div>
                <div className="text-sm text-muted-foreground"><T>Global Wellness Ambassador</T></div>
                <div className="text-sm text-muted-foreground font-medium"><T>Founder Cristiano Ronaldo</T></div>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              <T>Cristiano Ronaldo's Formula for</T>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                <T>Corporate Well-Being & Success</T>
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <T>Step into Cristiano Ronaldo's wellness ecosystem, reimagined for today's corporate teams. Erakulis has transformed Ronaldo's daily disciplines in training, recovery, nutrition, and mindset into personalized, data-driven journeys that elevate employee well-being and fuel business performance.</T>
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2"><T>Performance & Health-Driven Approach</T></h4>
                <p className="text-sm text-muted-foreground">
                  <T>Solutions designed for longevity and human performance</T>
                </p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2"><T>Holistic Wellness Philosophy</T></h4>
                <p className="text-sm text-muted-foreground">
                  <T>Mind, body, and spirit integration</T>
                </p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-medium transition-all duration-300">
                <h4 className="font-bold mb-2"><T>Global Impact Vision</T></h4>
                <p className="text-sm text-muted-foreground">
                  <T>Transforming wellness worldwide</T>
                </p>
              </Card>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <T>Find the Formula</T>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <T>Erakulis Formula</T>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Would be a larger image in the original */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl h-[600px] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚽</div>
                <div className="text-xl font-bold"><T>CR7 Wellness Ecosystem</T></div>
                <div className="text-lg opacity-90"><T>Reimagined for Corporate Teams</T></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CristianoSection;