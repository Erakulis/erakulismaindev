import { Clock, Users, TrendingUp } from "lucide-react";
import { T } from "@/hooks/useTranslation";

const ClaimsSection = () => {
  const claims = [
    {
      icon: Clock,
      title: "Efficient Work",
      subtitle: "Agile platform and complete library",
      features: [
        "Library with +4,000 ready videos",
        "Creating personalized workouts",
        "Customized assessments",
        "Quick client management"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Better Service",
      subtitle: "Total integration with Erakulis App",
      features: [
        "Client app with visible plan",
        "Communication via integrated chat",
        "Workouts, nutrition and wellness",
        "Synchronized experience"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "More Retention",
      subtitle: "Real-time data",
      features: [
        "Sync with all wearables",
        "Real-time tracking",
        "Continuous plan adaptation",
        "Health and nutrition data"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            <T>Why Choose</T>{" "}
            <span className="text-primary">
              <T>Erakulis PRO?</T>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <T>Three fundamental pillars that transform your work</T>
          </p>
        </div>

        {/* Claims Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {claims.map((claim, index) => {
            const IconComponent = claim.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-card p-8 rounded-xl shadow-medium hover:shadow-large transition-smooth animate-fade-in-up border border-border/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${claim.gradient} opacity-0 group-hover:opacity-3 rounded-xl transition-smooth`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${claim.gradient} mb-6 group-hover:scale-105 transition-smooth`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    <T>{claim.title}</T>
                  </h3>
                  <p className="text-muted-foreground mb-6 font-medium">
                    <T>{claim.subtitle}</T>
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {claim.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${claim.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-foreground"><T>{feature}</T></span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/10 transition-smooth"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClaimsSection;