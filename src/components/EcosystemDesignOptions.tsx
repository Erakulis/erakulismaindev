import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import techInterface1 from "@/assets/tech-interface-1.jpg";
import techInterface2 from "@/assets/tech-interface-2.jpg";
import techInterface3 from "@/assets/tech-interface-3.jpg";
import techInterface4 from "@/assets/tech-interface-4.jpg";

export const EcosystemDesignOption2 = () => {
  const interfaces = [
    { image: techInterface1, title: "Erakulis PRO", professionals: "500+", clients: "10k+" },
    { image: techInterface2, title: "Erakulis PRO", professionals: "500+", clients: "10k+" },
    { image: techInterface3, title: "Erakulis PRO", professionals: "500+", clients: "10k+" },
    { image: techInterface4, title: "Erakulis PRO", professionals: "500+", clients: "10k+" }
  ];

  return (
    <div className="space-y-8">
      <Carousel className="w-full">
        <CarouselContent>
          {interfaces.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-6">
                <img 
                  src={item.image} 
                  alt={`${item.title} interface ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{item.professionals}</div>
                    <div className="text-sm text-muted-foreground">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{item.clients}</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <Card className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
        <p className="text-muted-foreground mb-6">
          Schedule a discovery call to learn how Erakulis PRO can transform your fitness business
        </p>
        <Button size="lg">Schedule Discovery Call</Button>
      </Card>
    </div>
  );
};

export const EcosystemDesignOption3 = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">500+</div>
        <div className="text-lg">Professionals</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">10k+</div>
        <div className="text-lg">Clients Managed</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2">95%</div>
        <div className="text-lg">Success Rate</div>
      </div>
    </div>
  );
};

export const EcosystemDesignOption4 = () => {
  const features = [
    {
      title: "Certified Wellness Coaches",
      description: "Access to licensed nutritionists, fitness experts, and mental health professionals providing personalized guidance for your workforce.",
      badge: "Enterprise Ready"
    },
    {
      title: "Expert-Driven Health Assessments", 
      description: "Human professionals analyze employee wellness data to provide personalized recommendations and intervention strategies.",
      badge: "HIPAA Compliant"
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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
        <p className="text-lg text-muted-foreground">Everything you need to succeed</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6">
            <div className="space-y-4">
              {feature.badge && (
                <Badge variant="secondary">{feature.badge}</Badge>
              )}
              <h4 className="text-xl font-bold">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button size="lg">Explore PRO Platform</Button>
      </div>
    </div>
  );
};