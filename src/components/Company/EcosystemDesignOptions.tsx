import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Users, BarChart3, Target, Calendar, Briefcase, Shield, Activity, Apple, Brain, Gift, Moon, Heart, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

// Design Option 2: Hero Background with Overlay Features
export const EcosystemDesignOption2 = () => {
  const [selectedProduct, setSelectedProduct] = useState<"pro" | "mobile">("pro");

  const productContent = {
    pro: {
      title: "Erakulis PRO",
      subtitle: "Professional Platform",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      description: "Empower fitness and nutrition professionals with advanced client management, personalized program creation, and comprehensive analytics.",
      features: [
        "Client Management Hub",
        "Advanced Analytics Dashboard", 
        "Personalized Program Builder",
        "Smart Scheduling System",
        "Business Management Tools",
        "Compliance & Security"
      ]
    },
    mobile: {
      title: "Erakulis Mobile",
      subtitle: "User Experience Platform",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      description: "Transform your wellness journey with personalized plans, real-time tracking, and motivation that keeps you moving forward.",
      features: [
        "Real-Time Activity Tracking",
        "AI Nutrition Coach",
        "Mental Wellness Support", 
        "Gamified Rewards System",
        "Sleep Optimization",
        "Wellness Community"
      ]
    }
  };

  const current = productContent[selectedProduct];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/90 p-2 rounded-full border border-gray-200 shadow-lg">
          <ToggleGroup type="single" value={selectedProduct} onValueChange={(value) => value && setSelectedProduct(value as "pro" | "mobile")} className="gap-0">
            <ToggleGroupItem value="pro" className="rounded-full px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              PRO
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" className="rounded-full px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-white">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Hero Background */}
      <div className="relative rounded-3xl overflow-hidden h-[600px]">
        <img 
          src={current.image} 
          alt={current.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Info */}
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                {current.subtitle}
              </Badge>
              <h3 className="text-4xl font-bold mb-4">{current.title}</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {current.description}
              </p>
              <Button size="lg" variant="secondary" className="text-lg">
                {selectedProduct === "pro" ? "Explore PRO Platform" : "Download Mobile App"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: Features List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6">Key Features</h4>
              <div className="space-y-4">
                {current.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Design Option 3: Product Showcase Cards
export const EcosystemDesignOption3 = () => {
  const [selectedProduct, setSelectedProduct] = useState<"pro" | "mobile">("pro");

  const productShowcase = {
    pro: {
      title: "Erakulis PRO",
      subtitle: "For Fitness Professionals",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Active Professionals", value: "500+" },
        { label: "Clients Managed", value: "10k+" },
        { label: "Success Rate", value: "95%" }
      ],
      features: [
        { icon: <Users className="h-6 w-6" />, title: "Client Management", desc: "Complete client lifecycle management" },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Analytics", desc: "Real-time performance insights" },
        { icon: <Target className="h-6 w-6" />, title: "Goal Tracking", desc: "Automated progress monitoring" },
        { icon: <Calendar className="h-6 w-6" />, title: "Scheduling", desc: "Smart appointment system" }
      ]
    },
    mobile: {
      title: "Erakulis Mobile",
      subtitle: "For Health Enthusiasts",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Active Users", value: "50k+" },
        { label: "Workouts Completed", value: "1M+" },
        { label: "Satisfaction Rate", value: "98%" }
      ],
      features: [
        { icon: <Activity className="h-6 w-6" />, title: "Activity Tracking", desc: "Real-time fitness monitoring" },
        { icon: <Apple className="h-6 w-6" />, title: "Nutrition", desc: "AI-powered meal planning" },
        { icon: <Brain className="h-6 w-6" />, title: "Mental Health", desc: "Mindfulness and meditation" },
        { icon: <Gift className="h-6 w-6" />, title: "Rewards", desc: "Gamified achievement system" }
      ]
    }
  };

  const current = productShowcase[selectedProduct];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-xl">
          <ToggleGroup type="single" value={selectedProduct} onValueChange={(value) => value && setSelectedProduct(value as "pro" | "mobile")} className="gap-1">
            <ToggleGroupItem value="pro" className="rounded-lg px-8 py-3 data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Briefcase className="mr-2 h-5 w-5" />
              Erakulis PRO
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" className="rounded-lg px-8 py-3 data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Smartphone className="mr-2 h-5 w-5" />
              Erakulis Mobile
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Product Card */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-full">
            <div className="relative h-80">
              <img 
                src={current.image} 
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-white/20 text-white border-white/30 mb-3">
                  {current.subtitle}
                </Badge>
                <h3 className="text-3xl font-bold">{current.title}</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {current.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button className="w-full" size="lg">
                {selectedProduct === "pro" ? "Start Free Trial" : "Download Now"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Column */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-center">Key Features</h4>
          {current.features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{feature.title}</h5>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Design Option 4: Inspired by Reference Image - 2x2 Grid Layout
export const EcosystemDesignOption4 = () => {
  const wellnessAreas = [
    {
      title: "Physical Activity",
      highlight: "Active lifestyle",
      description: "Personalized fitness routines that adapt to your schedule and preferences, keeping you moving towards your goals.",
      icon: <Activity className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      badge: "Progress: 85%"
    },
    {
      title: "Mental Wellness",
      highlight: "Clear mind",
      description: "Comprehensive mental health support including mindfulness, stress management, and cognitive wellness tools.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      progress: true,
      badge: "Daily sessions"
    },
    {
      title: "Nutrition",
      highlight: "Healthy eating",
      description: "AI-powered meal planning and nutrition tracking that makes healthy eating simple and sustainable.",
      icon: <Apple className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
      badge: "Meals tracked"
    },
    {
      title: "Sleep & Recovery",
      highlight: "Quality rest",
      description: "Sleep optimization tools and recovery tracking to ensure your body gets the rest it needs to thrive.",
      icon: <Moon className="h-8 w-8" />,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      progress: true,
      badge: "Sleep score: 92%"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Asymmetric Grid Layout: Left tall + Right split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[600px]">
        {/* Left Column - Tall Card (Physical Activity) */}
        <div className="h-[300px] lg:h-auto lg:row-span-2 relative overflow-hidden rounded-2xl bg-blue-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
              alt="Physical Activity"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative p-8 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-gray-700 border border-gray-200">
                Progress: 85%
              </div>
            </div>

            {/* Title with highlight */}
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Physical</span>
              <span className="text-gray-800"> Activity</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-lg">
              Personalized fitness routines that adapt to your schedule and preferences, keeping you moving towards your goals.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white">
                <Activity className="h-10 w-10" />
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500">Status</div>
                <div className="font-medium text-gray-700">Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Top - Large Card (Nutrition) */}
        <div className="h-[300px] lg:h-auto lg:col-span-2 relative overflow-hidden rounded-2xl bg-green-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80"
              alt="Nutrition"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative p-8 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-gray-700 border border-gray-200">
                Meals tracked
              </div>
            </div>

            {/* Title with highlight */}
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-pink-500">Nutrition</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
              AI-powered meal planning and nutrition tracking that makes healthy eating simple and sustainable.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white">
                <Apple className="h-8 w-8" />
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Status</div>
                <div className="font-medium text-gray-700">Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Bottom Left - Mental Wellness */}
        <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-purple-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Content */}
          <div className="relative p-6 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-3">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200">
                Daily sessions
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              <span className="text-pink-500">Mental</span>
              <span className="text-gray-800"> Wellness</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
              Comprehensive mental health support including mindfulness.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                  style={{ width: '75%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Bottom Right - Sleep & Recovery */}
        <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-indigo-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Content */}
          <div className="relative p-6 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-3">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200">
                Sleep score: 92%
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              <span className="text-pink-500">Sleep</span>
              <span className="text-gray-800"> & Recovery</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
              Sleep optimization tools and recovery tracking.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 text-white">
                <Moon className="h-6 w-6" />
              </div>
              <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600"
                  style={{ width: '90%' }}
                />
              </div>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="absolute top-3 right-3 bg-white rounded-lg shadow-lg p-2 max-w-[100px] border border-gray-200">
            <div className="text-xs font-medium text-gray-700 mb-1">Sleep</div>
            <div className="space-y-0.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Deep</span>
                <span className="text-indigo-600">3h 20m</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Light</span>
                <span className="text-indigo-600">4h 15m</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <Smartphone className="h-5 w-5 mr-2" />
          <span className="font-medium">Experience the Complete Ecosystem</span>
        </div>
      </div>
    </div>
  );
};