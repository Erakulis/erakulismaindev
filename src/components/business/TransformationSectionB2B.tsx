import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TransformationSectionB2B = () => {
  const transformationData = {
    companies: [
      // This section would be for companies but based on the content it seems to be empty or handled differently
    ],
    people: [
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
      },
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
        tag: "Premium Benefits"
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
        
        <Tabs defaultValue="people" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies" className="space-y-8">
            {/* Companies content would go here if needed */}
          </TabsContent>
          
          <TabsContent value="people" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationData.people.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                  <div className="space-y-6">
                    {item.tag && (
                      <Badge className="mb-4">
                        {item.tag}
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Success Rate Highlight */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <div className="text-6xl font-bold text-primary mb-2">20%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSectionB2B;