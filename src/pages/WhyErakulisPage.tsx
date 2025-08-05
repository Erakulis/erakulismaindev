import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, TrendingUp, Activity, Calendar, Smartphone, BarChart3, Users, CheckCircle, ArrowRight, Star, Heart, Rocket, Handshake, Sprout, Shield, Clock, Award, Lightbulb, Infinity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { T } from "@/hooks/useTranslation";
import womanLaptopWellness from "@/assets/woman-laptop-wellness.jpg";
import personLightbulb from "@/assets/person-lightbulb.jpg";
import womanWorkingLaptop from "@/assets/woman-working-laptop.jpg";
import wearableDevice from "@/assets/wearable-device.jpg";
import healthTrackingDashboard from "@/assets/health-tracking-dashboard.jpg";
import wearableIntegrationLifestyle from "@/assets/wearable-integration-lifestyle.jpg";
import actionableInsightsData from "@/assets/actionable-insights-data.jpg";
import dailyGuidanceRoutine from "@/assets/daily-guidance-routine.jpg";
const WhyErakulisPage = () => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  // Target segments with pain points and solutions
  const segments = [{
    title: "Biohackers",
    icon: Brain,
    painPoint: "I want to unlock my body's full potential and see how every metric connects to maximize my performance.",
    desiredOutcome: "Optimize performance",
    hook: "Insights across all pillars with wearable syncing",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50/50 dark:bg-purple-950/20",
    features: ["Advanced biomarker tracking", "Real-time wearable integration", "Performance optimization algorithms", "Personalized intervention suggestions"]
  }, {
    title: "Burnt-out Professionals",
    icon: Zap,
    painPoint: "I'm tired of feeling exhausted every day. I need structure that helps me reclaim my energy and focus.",
    desiredOutcome: "Regain energy, daily structure",
    hook: "Guided daily nudges based on health pillars",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50/50 dark:bg-orange-950/20",
    features: ["Energy-focused daily routines", "Smart scheduling based on circadian rhythms", "Stress management protocols", "Productivity-health balance tracking"]
  }, {
    title: "Fitness-focused Users",
    icon: Target,
    painPoint: "I train hard but missing the big picture. I want to see how workouts, nutrition, and recovery work together.",
    desiredOutcome: "Holistic view of fitness, food, sleep",
    hook: "Integrated tracking with multi wearable syncing",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50/50 dark:bg-green-950/20",
    features: ["Comprehensive fitness analytics", "Nutrition-exercise correlation", "Recovery optimization", "Multi-device wearable sync"]
  }, {
    title: "Life Optimizers",
    icon: TrendingUp,
    painPoint: "I'm overwhelmed by apps & data. I want one app to give me clarity and help me stay disciplined.",
    desiredOutcome: "Simplicity, insight, discipline",
    hook: "All-in-one, personalized health monitor",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50/50 dark:bg-blue-950/20",
    features: ["Unified health dashboard", "Behavioral pattern recognition", "Habit formation algorithms", "Seamless data consolidation"]
  }];

  // Core pillars of wellness
  const corePillars = [{
    icon: Zap,
    title: "Move Your Body",
    subtitle: "Physical fitness and activity",
    features: ["Personalized workout plans", "Progress tracking", "Activity recommendations", "Movement motivation"],
    gradient: "from-blue-500 to-cyan-500"
  }, {
    icon: Heart,
    title: "Fuel Yourself",
    subtitle: "Nutrition and healthy eating",
    features: ["Balanced meal planning", "Nutritional guidance", "Healthy recipe suggestions", "Mindful eating practices"],
    gradient: "from-green-500 to-emerald-500"
  }, {
    icon: Users,
    title: "Be Mindful",
    subtitle: "Mental wellness and balance",
    features: ["Meditation practices", "Stress management", "Mental health support", "Mindfulness exercises"],
    gradient: "from-purple-500 to-pink-500"
  }];

  // Key benefits and differentiators
  const benefits = [{
    icon: Activity,
    image: healthTrackingDashboard,
    title: "Health Tracking",
    description: "Monitor wellness in one platform"
  }, {
    icon: Smartphone,
    image: wearableIntegrationLifestyle,
    title: "Wearable Sync",
    description: "Connect all devices seamlessly"
  }, {
    icon: BarChart3,
    image: actionableInsightsData,
    title: "Smart Insights",
    description: "Personalized recommendations"
  }, {
    icon: Calendar,
    image: dailyGuidanceRoutine,
    title: "Daily Guidance",
    description: "Smart nudges for optimization"
  }];

  // Our values and what drives us
  const values = [{
    icon: Zap,
    title: "Empowerment",
    description: "We provide you with the tools and confidence to take charge of your wellness and feel your best every day."
  }, {
    icon: Star,
    title: "Holistic Well-being",
    description: "True wellness encompasses body, mind, and spirit. We help you find balance in all areas of life."
  }, {
    icon: Target,
    title: "Personalization",
    description: "Everyone's path is different. We create tailored solutions that fit your unique goals and lifestyle."
  }, {
    icon: Rocket,
    title: "Innovation",
    description: "We leverage cutting-edge technology to bring you smart, evolving solutions that make wellness easier."
  }, {
    icon: Handshake,
    title: "Community",
    description: "You're not alone. We build a supportive community that uplifts and inspires growth together."
  }, {
    icon: Sprout,
    title: "Sustainability",
    description: "Real change takes time. We help you create lasting, healthy habits that stick long-term."
  }];

  // Longevity and science benefits
  const longevityBenefits = [{
    icon: Shield,
    title: "Disease Prevention",
    description: "Lower chronic disease risk"
  }, {
    icon: Clock,
    title: "Biological Age Reduction",
    description: "Slow cellular aging"
  }, {
    icon: Award,
    title: "Peak Performance",
    description: "Optimize mind & body"
  }, {
    icon: Lightbulb,
    title: "Mental Clarity",
    description: "Enhanced cognition"
  }, {
    icon: Infinity,
    title: "Healthspan Extension",
    description: "Live longer, healthier"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/30 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 md:py-24 relative z-10 py-[80px]">
          <div className="text-center space-y-4 md:space-y-8 max-w-6xl mx-auto">
            <Badge variant="secondary" className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
              <T>The Science of Longevity</T>
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight px-2">
              <T>Fitness × Nutrition × Wellbeing = Longevity</T>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed px-4">
              <T>"You don't need to be perfect, you just need to be consistent. When you take care of your body and mind every day, life becomes easier."</T>
              <span className="block text-sm md:text-lg text-slate-400 mt-2 md:mt-4 font-medium">— Cristiano Ronaldo</span>
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-4 md:pt-8 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm text-slate-400 font-medium"><T>Evidence-Based</T></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm text-slate-400 font-medium"><T>Holistic Approach</T></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm text-slate-400 font-medium"><T>Sustainable Results</T></span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-8 px-4">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6" asChild>
                <a href="https://erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                  <T>Start Your Journey</T>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6" asChild>
                <a href="https://hub.erakulis.com" target="_blank" rel="noopener noreferrer">
                  <T>Explore Erakulis Hub</T>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity Science Section */}
      <section className="px-6 bg-muted/30 py-[40px] md:py-[50px]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <T>The Science of Healthy Aging</T>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xs"><T>Research shows that integrating fitness, nutrition, and mental wellness is key to extend healthspan. Erakulis makes this science accessible and actionable.</T></p>
          </div>

          {/* Mobile: Custom layout with Healthspan Extension in center */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-3 mb-3">
              {longevityBenefits.slice(0, 2).map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
                  <CardContent className="p-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-xs leading-tight"><T>{benefit.description}</T></p>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Center card - Healthspan Extension */}
            <div className="flex justify-center mb-3">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/10 to-secondary/10 w-40">
                <CardContent className="p-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    {(() => {
                    const IconComponent = longevityBenefits[4].icon;
                    return <IconComponent className="w-5 h-5 text-primary" />;
                  })()}
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight font-medium"><T>{longevityBenefits[4].description}</T></p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {longevityBenefits.slice(2, 4).map((benefit, index) => <Card key={index + 2} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
                  <CardContent className="p-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-xs leading-tight"><T>{benefit.description}</T></p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {longevityBenefits.map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
                <CardContent className="p-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-xs leading-tight"><T>{benefit.description}</T></p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="bg-background py-8 md:py-[40px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 px-2">
              <T>Our</T>{" "}
              <span className="text-primary">
                <T>Core Pillars</T>
              </span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
              <T>Three pillars to guide your wellness journey toward optimal health and longevity</T>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {corePillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return <div key={index} className="group relative bg-gradient-to-br from-card to-muted/20 p-4 md:p-6 lg:p-8 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 border border-border/30">
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-8 rounded-xl transition-all duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-2 md:p-3 lg:p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-3 md:mb-4 lg:mb-6 group-hover:scale-105 transition-all duration-300`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      <T>{pillar.title}</T>
                    </h3>
                    <p className="text-muted-foreground mb-3 md:mb-4 lg:mb-6 font-medium text-sm md:text-sm lg:text-base">
                      <T>{pillar.subtitle}</T>
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1 md:space-y-2 lg:space-y-3">
                      {pillar.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 md:gap-2 lg:gap-3">
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${pillar.gradient} mt-1 md:mt-1.5 lg:mt-2 flex-shrink-0`}></div>
                          <span className="text-xs md:text-sm text-foreground leading-tight"><T>{feature}</T></span>
                        </li>)}
                    </ul>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 px-2">
              <T>Built for Every Wellness Journey</T>
            </h2>
            <div className="text-center space-y-4">
              <p className="text-base md:text-xl text-muted-foreground max-w-5xl mx-auto px-4">
                <T>Choose your path to wellness mastery</T>
              </p>
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Type Radio Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2">
            {segments.map((segment, index) => <label key={index} className="relative cursor-pointer group">
                <input type="radio" name="wellness-journey" checked={selectedSegment === index} onChange={() => setSelectedSegment(index)} className="sr-only" />
                <div className={`
                  flex items-center justify-center gap-2 px-3 md:px-6 py-3 md:py-4 rounded-xl font-medium 
                  transition-all duration-300 text-xs md:text-sm border-2 w-56 md:w-64 whitespace-nowrap
                  ${selectedSegment === index ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105' : 'bg-card hover:bg-muted text-foreground border-border hover:border-primary/50 hover:shadow-md'}
                `}>
                  <div className={`
                    w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center
                    ${selectedSegment === index ? 'border-primary-foreground bg-primary-foreground' : 'border-muted-foreground group-hover:border-primary'}
                  `}>
                    {selectedSegment === index && <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary"></div>}
                  </div>
                  <span className="font-semibold">{segment.title}</span>
                </div>
              </label>)}
          </div>

          {/* Selected Segment Content */}
          <div className="max-w-6xl mx-auto">
            <Card className={`hover:shadow-lg transition-all duration-300 border border-border/30 ${segments[selectedSegment].bgColor}`}>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${segments[selectedSegment].color} text-white`}>
                    {(() => {
                    const IconComponent = segments[selectedSegment].icon;
                    return <IconComponent className="w-5 h-5 md:w-6 md:h-6" />;
                  })()}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{segments[selectedSegment].title}</h3>
                  </div>
                </div>

                {/* Customer Quote */}
                <div className="mb-6 md:mb-8 p-3 md:p-4 lg:p-6 bg-card rounded-lg border-l-4 border-primary shadow-sm">
                  <blockquote className="text-sm md:text-base lg:text-lg italic text-foreground/80 leading-relaxed">
                    "{segments[selectedSegment].painPoint}"
                  </blockquote>
                </div>

                {/* Desired Outcome and How Erakulis Helps - Side by Side */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
                  <div className="p-3 md:p-4 lg:p-6 bg-muted/70 rounded-lg border border-border/30">
                    <p className="text-xs md:text-xs lg:text-sm text-muted-foreground mb-1 md:mb-2 uppercase tracking-wide font-medium">Desired Outcome</p>
                    <p className="text-sm md:text-base lg:text-lg font-semibold">{segments[selectedSegment].desiredOutcome}</p>
                  </div>

                  <div className="p-3 md:p-4 lg:p-6 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="text-xs md:text-xs lg:text-sm text-primary mb-1 md:mb-2 uppercase tracking-wide font-medium">How Erakulis Helps</p>
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-primary">{segments[selectedSegment].hook}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Key Features</p>
                  <div className="grid md:grid-cols-2 gap-1 md:gap-2">
                    {segments[selectedSegment].features.map((feature, idx) => <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 px-2">
              Why Erakulis Stands Out
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-5xl mx-auto px-4">
              A solution that eliminates the need for multiple apps and disconnected data
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border border-border/30 bg-gradient-to-br from-card to-muted/20 overflow-hidden">
                <CardContent className="p-0">
                  {benefit.image ? <div className="relative h-20 md:h-24 lg:h-32 w-full mb-2 md:mb-3 lg:mb-4">
                      <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div> : <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 mt-4 md:mt-6 lg:mt-8">
                      <benefit.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                    </div>}
                  <div className="p-3 md:p-4 lg:p-6 pt-0">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 lg:mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 px-2">
              <span className="text-primary">
                Driven by Values
              </span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
              The values that guide everything we do and shape your wellness journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {values.map((value, index) => {
            const IconComponent = value.icon;
            return <div key={index} className="group bg-gradient-to-br from-card to-muted/20 p-3 md:p-4 lg:p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 border border-border/30">
                  {/* Icon */}
                  <div className="inline-flex p-2 md:p-2 lg:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 mb-2 md:mb-3 lg:mb-4 group-hover:scale-110">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 px-2">
              Trusted by Wellness Enthusiasts
            </h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">
              Join thousands who've transformed their health journey with Erakulis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[{
            stat: "10,000+",
            label: "Active Users",
            icon: Users
          }, {
            stat: "4.8/5",
            label: "App Store Rating",
            icon: Star
          }, {
            stat: "50M+",
            label: "Data Points Analyzed",
            icon: BarChart3
          }].map((item, index) => <Card key={index} className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/30">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-2 md:mb-3 lg:mb-4" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">{item.stat}</div>
                  <div className="text-muted-foreground text-sm md:text-base">{item.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-primary/8 to-secondary/8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Own Your Wellness?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your path to a healthier, more balanced life with Erakulis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="group relative bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border hover:bg-white transition-all duration-300 transform hover:-translate-y-1 ring-2 ring-primary/30 scale-[1.02]">
              <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 bg-primary px-2 md:px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                Start Today
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="inline-flex p-2 md:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Start Your Journey</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Begin your wellness transformation</p>
                </div>
                <Button variant="corporate" size="default" className="w-full group-hover:scale-105 transition-all duration-300 text-sm md:text-base" asChild>
                  <a href="https://erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="inline-flex p-2 md:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Erakulis Hub</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Learn and grow with our professionals</p>
                </div>
                <Button variant="secondary" size="default" className="w-full group-hover:scale-105 transition-all duration-300 text-sm md:text-base" asChild>
                  <a href="https://hub.erakulis.com" target="_blank" rel="noopener noreferrer">
                    Explore Now
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="group relative bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="inline-flex p-2 md:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Download App</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Get the Erakulis mobile experience</p>
                </div>
                <Button variant="accent" size="default" className="w-full group-hover:scale-105 transition-all duration-300 text-sm md:text-base" style={{
                backgroundColor: "#FFA953"
              }} asChild>
                  <a href="https://erakulis.com/en-GB/signup" target="_blank" rel="noopener noreferrer">
                    Download
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight px-2">
              Ready to Own{" "}
              <span className="text-white/90">
                Your Wellness?
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              Join our community and start your journey toward a healthier, more balanced, and longer life.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white/90 border border-white/20">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span className="font-medium text-sm md:text-base">Start Your Wellness Journey Today</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default WhyErakulisPage;