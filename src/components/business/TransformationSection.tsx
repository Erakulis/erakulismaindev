import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TransformationSection = () => {
  const transformationData = {
    companies: [
      {
        title: "Daily Personalized Guidance",
        description: "Tailored fitness, nutrition and mental-wellness plans.",
        tag: "Personal Impact"
      },
      {
        title: "Motivation & Performance Uplift",
        description: "Gamified challenges and coach support to keep energy and output high.",
        tag: "Daily Feature"
      },
      {
        title: "Long-Term Health & Quality of Life",
        description: "Focus on sustainable habits, reducing chronic risk, improving longevity.",
        tag: "Lifestyle"
      }
    ],
    features: [
      {
        title: "Wellness Education",
        description: "Access to expert knowledge on nutrition, fitness, mental health, and sustainable lifestyle habits."
      },
      {
        title: "Health Metrics Monitoring",
        description: "Track and monitor +400 health metrics through wearable integration with comprehensive health reports.",
        tag: "Health Tech"
      },
      {
        title: "Wellness Savings & Benefits",
        description: "Save on personal trainers, nutritionists, and get exclusive discounts on premium wellness products and services.",
        tag: "Premium Benefits",
        highlight: "20%"
      }
    ]
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Erakulis Transforms
          </h2>
        </div>
        
        <Tabs defaultValue="companies" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="companies" className="text-lg">Companies</TabsTrigger>
            <TabsTrigger value="people" className="text-lg">People</TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {transformationData.companies.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Badge variant="outline" className="w-fit">
                      {item.tag}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="people" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {transformationData.features.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 relative">
                  <div className="space-y-4">
                    {item.highlight && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                          {item.highlight}
                        </Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.tag && (
                      <Badge variant="outline" className="w-fit">
                        {item.tag}
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TransformationSection;