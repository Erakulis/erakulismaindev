import { Button } from "@/components/ui/button";
import { Smartphone, RefreshCw, CheckCircle } from "lucide-react";
import appIntegration from "@/assets/app-integration.jpg";

const IntegrationSection = () => {
  const integrationFeatures = [
    "Real-time visible workout plans",
    "Direct chat with trainer",
    "Automatically synchronized progress",
    "Personalized notifications",
    "Complete workout history",
    "Integrated nutrition data"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                <RefreshCw className="w-4 h-4" />
                100% Synchronized
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Transformed{" "}
                <span className="text-primary">
                  Client
                </span>{" "}
                Experience
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                While you plan and track on the PRO platform, 
                your clients experience a premium experience on the Erakulis App. 
                Everything connected, everything in real time.
              </p>
            </div>

            {/* Integration Features */}
            <div className="space-y-4">
              {integrationFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-gradient-card p-6 rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Active Sync</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-xl shadow-medium">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            <a href="https://hub.erakulis.com/erakulis-academy/" target="_blank" rel="noopener noreferrer">
              <Button variant="corporate" size="lg" className="text-lg px-8">
                Watch Video
              </Button>
            </a>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Phone mockup */}
              <div className="relative mx-auto w-80 max-w-sm">
                {/* Phone frame */}
                <div className="relative bg-gray-800 rounded-[3rem] p-2 shadow-xl">
                  <div className="bg-black rounded-[2.5rem] p-1">
                    <img 
                      src="/lovable-uploads/ba6120e4-bc3a-49c1-8aa4-9bb721b3b790.png" 
                      alt="App Erakulis - Experiência do Cliente"
                      className="w-full rounded-[2rem] shadow-medium hover:shadow-large transition-smooth"
                    />
                  </div>
                  {/* Phone details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Floating sync indicator */}
                <div className="absolute -top-4 -right-4 bg-gradient-card p-3 rounded-full shadow-medium animate-pulse">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                
                {/* Live indicator */}
                <div className="absolute top-8 left-8 flex items-center gap-2 bg-gradient-card px-3 py-2 rounded-full shadow-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">LIVE</span>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -left-8 top-1/2 bg-gradient-card p-4 rounded-xl shadow-medium max-w-48 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">New Workout</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your trainer has updated the plan. Check out what's new!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;