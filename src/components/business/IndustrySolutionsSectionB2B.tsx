import { T } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IndustrySolutionsSectionB2B = () => {
  const industries = [
    {
      id: "tech",
      name: "Tech Consultancies",
      stat: "25%",
      statLabel: "Absenteeism Reduction",
      title: "HR Leaders",
      description: "Combat employee absenteeism, burnout, and mental health challenges with comprehensive wellness solutions",
      features: [
        { label: "Personalized Plans", detail: "Fitness & mental health" },
        { label: "400+ Integrations", detail: "Wearables & health apps" },
        { label: "Productivity Boost", detail: "Enhanced retention rates" },
        { label: "Real-time Analytics", detail: "Health-Monitor Dashboard" }
      ],
      cta: "Explore HR Solutions"
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      stat: "3-6x",
      statLabel: "ROI",
      title: "Operations Managers",
      description: "Address workforce sedentarism and health-related productivity issues with targeted interventions",
      features: [
        { label: "Combat Sedentarism", detail: "Active lifestyle programs" },
        { label: "Actionable Insights", detail: "Wearable data analysis" },
        { label: "Energy & Focus", detail: "Increased productivity" },
        { label: "Safety Improvement", detail: "Reduced workplace injuries" }
      ],
      cta: "Discover Manufacturing Solutions"
    },
    {
      id: "startups",
      name: "Startups",
      stat: "5",
      statLabel: "Months to ROI",
      title: "Startup Founders",
      description: "Build a culture of wellness and address mental health challenges while scaling your team",
      features: [
        { label: "Scalable Solution", detail: "Grows with your team" },
        { label: "Stress Management", detail: "Mental wellness support" },
        { label: "Talent Attraction", detail: "Competitive advantage" },
        { label: "Team Morale", detail: "Enhanced engagement" }
      ],
      cta: "Build Your Wellness Culture"
    },
    {
      id: "education",
      name: "Education",
      stat: "400+",
      statLabel: "App Integrations",
      title: "University Leaders",
      description: "Enhance student well-being, engagement and academic success with campus-wide wellness programs",
      features: [
        { label: "Campus Ecosystem", detail: "Comprehensive wellness" },
        { label: "Inter-Faculty Challenges", detail: "Peer support network" },
        { label: "Academic Performance", detail: "Real-time insights" },
        { label: "ESG Goals", detail: "Social sustainability" }
      ],
      cta: "Transform Campus Wellness"
    },
    {
      id: "insurance-brokers",
      name: "Insurance Brokers",
      stat: "30%",
      statLabel: "Client Retention",
      title: "Insurance Brokers Leaders",
      description: "Enhance client value propositions with comprehensive wellness solutions that reduce claims and improve satisfaction",
      features: [
        { label: "Client Differentiation", detail: "Unique wellness offerings" },
        { label: "Claims Reduction", detail: "Preventive care programs" },
        { label: "Client Engagement", detail: "Year-round touchpoints" },
        { label: "Revenue Growth", detail: "Premium service tiers" }
      ],
      cta: "Expand Broker Services"
    },
    {
      id: "insurance-solutions",
      name: "Insurance Solutions",
      stat: "40%",
      statLabel: "Claims Reduction",
      title: "Insurance Solutions",
      description: "Transform risk management with proactive wellness solutions that reduce claims and improve member health outcomes",
      features: [
        { label: "Preventive Care", detail: "Reduce long-term costs" },
        { label: "Risk Assessment", detail: "Data-driven insights" },
        { label: "Member Engagement", detail: "Wellness incentives" },
        { label: "Cost Savings", detail: "Lower premiums" }
      ],
      cta: "Optimize Insurance Solutions"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-5xl font-bold mb-6">
             <T>Industry-Specific Solutions</T>
           </h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             <T>Tailored Wellness Solutions for Every Industry</T>
           </p>
           <p className="text-base text-muted-foreground max-w-4xl mx-auto mt-4">
             <T>ERAKULIS adapts to your unique challenges across diverse sectors, delivering measurable results that transform workforce well-being into tangible business outcomes.</T>
           </p>
        </div>
        
        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
            {industries.map((industry) => (
              <TabsTrigger key={industry.id} value={industry.id} className="text-xs lg:text-sm">
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <Card className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left: Stats and Description */}
                  <div className="space-y-6">
                    <div className="text-center lg:text-left">
                      <div className="text-5xl font-bold text-primary mb-2">{industry.stat}</div>
                      <div className="text-lg text-muted-foreground mb-6">{industry.statLabel}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                  
                  {/* Right: Features */}
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      {industry.features.map((feature, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                          <div>
                            <div className="font-semibold">{feature.label}</div>
                            <div className="text-sm text-muted-foreground">{feature.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button size="lg" className="w-full text-lg py-6">
                      {industry.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default IndustrySolutionsSectionB2B;