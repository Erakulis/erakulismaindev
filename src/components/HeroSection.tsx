import { Button } from "@/components/ui/button";
import heroDashboard from "/assets/images/77e88ae5-477c-4ef8-9a43-5fc0608f4e26.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-primary-light/6"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-glow/15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Trainers Who Want{" "}
                  <span className="text-primary">
                    Real Results
                  </span>
                </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Plan, track and transform your clients' journey with Erakulis. 
                The intelligent platform that syncs professionals and clients.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://pro.erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Start Now for Free
                </Button>
              </a>
              <a href="https://calendar.app.google/A7P2okznUfLdeNhg8" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book DEMO with Specialist
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-glow"></div>
                <span className="text-sm text-muted-foreground font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-light rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-medium">+4,000 Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-medium">Unlimited Clients</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img 
                src={heroDashboard} 
                alt="Erakulis PRO Dashboard"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-large transition-smooth"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-card p-4 rounded-xl shadow-medium animate-fade-in-up border border-primary/10">
                <div className="text-sm font-semibold text-primary">Thousands of Active Clients</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 p-4 rounded-xl shadow-glow animate-fade-in-up delay-300" style={{ backgroundColor: "#FFA953" }}>
                <div className="text-sm font-semibold text-primary-foreground">Retention Rate</div>
                <div className="text-2xl font-bold text-primary-foreground">94%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;