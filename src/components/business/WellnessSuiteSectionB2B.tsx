import { T } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WellnessSuiteSectionB2B = () => {
  const features = [
    {
      title: "Real-Time Analytics",
      description: "Health-Monitor Dashboard provides visibility into stress-score reductions, engagement rates, and overall Erakulis Impact Index.",
      tag: "Data-Driven Insights"
    },
    {
      title: "400+ Integrations",
      description: "Seamless integration with wearables and health apps ensures high adoption and continuous engagement.",
      tag: "Universal Compatibility"
    },
    {
      title: "Personalized Journey",
      description: "AI-driven meal and workout plans plus rich multimedia mental-wellness content.",
      tag: "AI-Powered"
    },
    {
      title: "Dedicated Wellness App",
      description: "Complete mobile application for wellness tracking, goal setting, and progress monitoring."
    },
    {
      title: "Online Appointments",
      description: "Direct access to certified wellness experts for fitness and nutrition consultations.",
      tag: "Expert Support"
    },
    {
      title: "Exclusive Perks",
      description: "Access to exclusive benefits from ERAKULIS network of wellness and lifestyle partners.",
      tag: "Premium Network"
    },
    {
      title: "Dedicated Engagement Program",
      description: "Customized engagement strategies to maximize participation and maintain long-term wellness habits.",
      tag: "Long-term Success"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-5xl font-bold mb-6">
             <T>Your Complete Wellness Suite</T>
           </h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             <T>Erakulis gives you all the tools your business needs to reduce costs, mitigate risks, and maximize organizational performance.</T>
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
              <div className="space-y-4">
                {feature.tag && (
                  <Badge className="mb-2">
                    {feature.tag}
                  </Badge>
                )}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Success Rate Highlight */}
        <div className="text-center">
          <div className="inline-block">
            <div className="text-6xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSuiteSectionB2B;