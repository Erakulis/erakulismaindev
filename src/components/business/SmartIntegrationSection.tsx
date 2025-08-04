import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { T } from "@/hooks/useTranslation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const SmartIntegrationSection = () => {
  const carouselData = [
    {
      image: "/lovable-uploads/056f5064-4778-418b-9c08-33d39e2f4cff.png",
      title: "Erakulis PRO",
      professionals: "500+",
      clients: "10k+"
    }
  ];

  const features = [
    {
      title: "Certified Wellness Coaches",
      description: "Access to licensed nutritionists, fitness experts, and mental health professionals providing personalized guidance for your workforce."
    },
    {
      title: "Expert-Driven Health Assessments",
      description: "Human professionals analyze employee wellness data to provide personalized recommendations and intervention strategies."
    },
    {
      title: "Human-Curated Wellness Programs",
      description: "Experienced wellness experts design and adapt corporate programs based on your team's specific needs and health goals."
    },
    {
      title: "Live Expert Consultations",
      description: "Scheduled one-on-one sessions with certified professionals for nutrition counseling, fitness coaching, and mental wellness support."
    },
    {
      title: "Dedicated Wellness Specialists",
      description: "Assigned human wellness coordinators who understand your company culture and employee needs for optimal program success."
    },
    {
      title: "Professional Health Oversight",
      description: "Medical professionals and certified wellness experts ensure all programs meet safety standards and health regulations."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <T>Smart Wellness Integration</T>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <T>Where professional expertise meets user-friendly wellness. Discover how our seamlessly integrated ecosystem creates lasting impact.</T>
          </p>
        </div>
        
        <Tabs defaultValue="pro" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="pro" className="text-lg"><T>Erakulis PRO</T></TabsTrigger>
            <TabsTrigger value="mobile" className="text-lg"><T>Erakulis Mobile</T></TabsTrigger>
          </TabsList>
          
          <TabsContent value="pro" className="space-y-12">
            {/* Single Image Display */}
            <div className="relative max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/056f5064-4778-418b-9c08-33d39e2f4cff.png" 
                    alt="Erakulis PRO Dashboard interface"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Card className="p-4 bg-background/95 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-4"><T>Erakulis PRO</T></h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">500+</div>
                          <div className="text-sm text-muted-foreground"><T>Professionals</T></div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">10k+</div>
                          <div className="text-sm text-muted-foreground"><T>Clients</T></div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <Card className="p-8 text-center bg-gradient-card">
              <h3 className="text-2xl font-bold mb-4"><T>Ready to Scale Your Business?</T></h3>
              <p className="text-muted-foreground mb-6">
                <T>Schedule a discovery call to learn how Erakulis PRO can transform your fitness business</T>
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                <T>Schedule Discovery Call</T>
              </Button>
            </Card>

            {/* Key Features */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4"><T>Key Features</T></h3>
                <p className="text-muted-foreground"><T>Everything you need to succeed</T></p>
                <div className="flex justify-center gap-4 mt-4">
                  <Badge variant="outline" className="text-lg px-4 py-2"><T>Enterprise Ready</T></Badge>
                  <Badge variant="outline" className="text-lg px-4 py-2"><T>HIPAA Compliant</T></Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                    <h4 className="font-bold mb-3"><T>{feature.title}</T></h4>
                    <p className="text-sm text-muted-foreground"><T>{feature.description}</T></p>
                  </Card>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground"><T>Professionals</T></div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-muted-foreground"><T>Clients Managed</T></div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground"><T>Success Rate</T></div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <T>Explore PRO Platform</T>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4"><T>Mobile Experience</T></h3>
              <p className="text-muted-foreground"><T>Complete wellness platform in your pocket</T></p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SmartIntegrationSection;