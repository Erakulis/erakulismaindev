import { T } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CristianoSectionB2B = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative inline-block">
              <img 
                src="assets/images/Cristiano-Ronaldo-App-Empresas.png"
                alt="Cristiano Ronaldo"
                className="w-32 h-32 rounded-full object-cover"
              />
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                20%
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="text-lg font-semibold text-primary">CR7</div>
              <div className="text-sm text-muted-foreground">Global Wellness Ambassador</div>
              <div className="text-sm text-muted-foreground"><T>Founder Cristiano Ronaldo</T></div>
            </div>
            
             <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
               <T>Cristiano Ronaldo's Formula for</T> <T>Corporate Well-Being & Success</T>
             </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <T>Step into Cristiano Ronaldo's wellness ecosystem, reimagined for today's corporate teams. Erakulis has transformed Ronaldo's daily disciplines in training, recovery, nutrition, and mindset into personalized, data-driven journeys that elevate employee well-being and fuel business performance.</T>
            </p>
            
            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3"><T>Performance & Health-Driven Approach</T></h3>
                <p className="text-muted-foreground">
                  <T>Solutions designed for longevity and human performance</T>
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3"><T>Holistic Wellness Philosophy</T></h3>
                <p className="text-muted-foreground">
                  <T>Mind, body, and spirit integration</T>
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3"><T>Global Impact Vision</T></h3>
                <p className="text-muted-foreground">
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
          
          {/* Right Content - Hero Section */}
          <div className="relative">
            <Card className="p-12 text-center bg-gradient-card">
              <div className="text-8xl mb-6">⚽</div>
              <h3 className="text-3xl font-bold mb-6"><T>CR7 Wellness Ecosystem</T></h3>
              <p className="text-lg text-muted-foreground">
                <T>Transform your corporate wellness with the same discipline and excellence that made Cristiano Ronaldo a global icon.</T>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CristianoSectionB2B;