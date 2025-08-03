import { Download, Target, Play } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Download the App",
      description: "Install the app on your phone and set up your account to start tracking your progress."
    },
    {
      number: "2", 
      icon: Target,
      title: "Set Your Goals",
      description: "Define your fitness goals and preferences to create a plan that works for you."
    },
    {
      number: "3",
      icon: Play,
      title: "Start Your Journey", 
      description: "Begin your fitness routine, monitor your progress, and stay motivated with real-time insights"
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Fitness Journey in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              
              <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};