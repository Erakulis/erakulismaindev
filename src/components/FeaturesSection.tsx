import { 
  Users, 
  BarChart3, 
  MessageCircle, 
  ClipboardList, 
  Video, 
  Smartphone,
  Heart,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Unlimited Clients",
      description: "Manage as many clients as you need without limitations"
    },
    {
      icon: BarChart3,
      title: "Smart Dashboard",
      description: "Complete overview of all clients' progress"
    },
    {
      icon: MessageCircle,
      title: "Integrated Chat",
      description: "Direct and real-time communication with clients"
    },
    {
      icon: ClipboardList,
      title: "Personalized Assessments",
      description: "Customized evaluations for each client"
    },
    {
      icon: Video,
      title: "Library +4,000 Videos",
      description: "Vast ready-to-use library + your own videos"
    },
    {
      icon: Smartphone,
      title: "Synchronized Client App",
      description: "Client sees everything in real-time on smartphone"
    },
    {
      icon: Heart,
      title: "Health Data",
      description: "Apple Watch, Garmin and other devices"
    },
    {
      icon: Zap,
      title: "Adaptive Plans",
      description: "Automatic adjustment based on real data"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-accent/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Features that{" "}
            <span className="text-primary">
              Make the Difference
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to offer excellent service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card p-6 rounded-xl shadow-medium hover:shadow-large transition-smooth animate-fade-in-up border border-border/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth mb-4 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-smooth pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-4">
            <Zap className="w-4 h-4" />
            Everything included in the free version
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;