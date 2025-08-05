import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { T } from "@/hooks/useTranslation";

const WellnessSuiteSection = () => {
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
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            <T>Erakulis gives you all the tools your business needs to reduce costs, mitigate risks, and maximize organizational performance.</T>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-bold"><T>{feature.title}</T></h3>
                <p className="text-muted-foreground"><T>{feature.description}</T></p>
                {feature.tag && (
                  <Badge variant="outline" className="w-fit">
                    <T>{feature.tag}</T>
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Success Rate Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="text-6xl font-bold text-primary mb-4">95%</div>
            <p className="text-lg text-muted-foreground"><T>Success Rate</T></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSuiteSection;