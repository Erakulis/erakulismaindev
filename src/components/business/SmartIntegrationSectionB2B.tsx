import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SmartIntegrationSectionB2B = () => {
  const carouselData = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      title: "Erakulis PRO",
      professionals: "500+",
      clients: "10k+"
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      title: "Erakulis PRO",
      professionals: "500+",
      clients: "10k+"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "Erakulis PRO",
      professionals: "500+",
      clients: "10k+"
    },
    {
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
      title: "Erakulis PRO",
      professionals: "500+",
      clients: "10k+"
    }
  ];

  const features = [
    { label: "Certified Wellness Coaches", detail: "Access to licensed nutritionists, fitness experts, and mental health professionals providing personalized guidance for your workforce." },
    { label: "Expert-Driven Health Assessments", detail: "Human professionals analyze employee wellness data to provide personalized recommendations and intervention strategies." },
    { label: "Human-Curated Wellness Programs", detail: "Experienced wellness experts design and adapt corporate programs based on your team's specific needs and health goals." },
    { label: "Live Expert Consultations", detail: "Scheduled one-on-one sessions with certified professionals for nutrition counseling, fitness coaching, and mental wellness support." },
    { label: "Dedicated Wellness Specialists", detail: "Assigned human wellness coordinators who understand your company culture and employee needs for optimal program success." },
    { label: "Professional Health Oversight", detail: "Medical professionals and certified wellness experts ensure all programs meet safety standards and health regulations." }
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Smart Wellness Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Where professional expertise meets user-friendly wellness. Discover how our seamlessly 
            integrated ecosystem creates lasting impact.
          </p>
        </div>
        
        <Tabs defaultValue="pro" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="pro">Erakulis PRO</TabsTrigger>
            <TabsTrigger value="mobile">Erakulis Mobile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pro" className="space-y-12">
            {/* Carousel */}
            <div className="relative">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {carouselData.map((item, index) => (
                    <CarouselItem key={index}>
                      <Card className="p-6">
                        <img 
                          src={item.image}
                          alt={`${item.title} interface ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="flex justify-center gap-8">
                            <div>
                              <div className="text-2xl font-bold text-primary">{item.professionals}</div>
                              <div className="text-sm text-muted-foreground">Professionals</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">{item.clients}</div>
                              <div className="text-sm text-muted-foreground">Clients</div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="text-center mb-12">
              <Card className="p-8 inline-block">
                <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a discovery call to learn how Erakulis PRO can transform your fitness business
                </p>
                <Button size="lg">Schedule Discovery Call</Button>
              </Card>
            </div>

            {/* Key Features */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Key Features</h3>
                <p className="text-muted-foreground mb-4">Everything you need to succeed</p>
                <div className="flex justify-center gap-4 mb-8">
                  <Badge variant="secondary">Enterprise Ready</Badge>
                  <Badge variant="secondary">HIPAA Compliant</Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-semibold">{feature.label}</h4>
                    <p className="text-muted-foreground text-sm">{feature.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <div className="text-muted-foreground">Clients Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore PRO Platform
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="space-y-8">
            <Card className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Erakulis Mobile Experience</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seamless mobile wellness experience that puts comprehensive health management 
                right in your employees' hands.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SmartIntegrationSectionB2B;