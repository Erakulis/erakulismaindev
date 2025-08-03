import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Check, Apple, Smartphone, Heart, Brain, Activity, Moon, Users, Shield, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Workouts made easier and faster",
      description: "Take control of your fitness journey with our comprehensive approach to wellness. Track your progress, set goals, and stay motivated with our powerful features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      items: ["Activity Tracking", "Goal Setting"]
    },
    {
      title: "Meal planning made easier and smarter",
      description: "Transform your eating habits with intelligent nutrition tracking, personalized meal plans, and comprehensive dietary analysis to fuel your body optimally.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
      items: ["Meal Tracking", "Macro Analysis"]
    },
    {
      title: "Mindfulness made accessible and effective",
      description: "Enhance your mental health with guided meditation, mood tracking, and stress management tools designed to support your emotional wellbeing journey.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      items: ["Mood Tracking", "Meditation Guide"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kim",
      role: "Gym Trainer",
      quote: "Apura makes fitness fun! The detailed progress reports keep me motivated. I love how it adapts to my routine and helps me improve step by step.",
      initial: "S"
    },
    {
      name: "Emily W.",
      role: "Yoga Enthusiast", 
      quote: "Finally, a fitness tracker that works for me! Apura has completely transformed the way I track my workouts and progress.",
      initial: "E"
    },
    {
      name: "Jane Cooper",
      role: "Working Mom",
      quote: "Best fitness tracker I've ever used! Apura's advanced tracking and AI-driven suggestions have helped me get in the best shape of my life.",
      initial: "J"
    }
  ];

  const wearableLogos = [
    { name: "Apple Health", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" },
    { name: "Google Fit", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" },
    { name: "Fitbit", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" },
    { name: "Garmin", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" },
    { name: "Whoop", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" },
    { name: "Strava", src: "https://images.unsplash.com/photo-1611532736615-4c6d1b0c8e0e?auto=format&fit=crop&w=100&q=80" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Live <span className="text-primary">Healthier</span>,<br />
                Live Longer
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Discover the ultimate app to track workouts, monitor progress, and achieve your fitness goals. 
                Stay on top of your health journey today!
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-black border border-white/20 hover:bg-gray-900 text-white px-8 py-4"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.erakulis', '_blank')}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-black border border-white/20 hover:bg-gray-900 text-white px-8 py-4"
                  onClick={() => window.open('https://apps.apple.com/us/app/erakulis/id6473955690', '_blank')}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
                </Button>
              </div>
            </div>

            {/* Right Content - App Screenshots */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4">
                <div className="w-64 h-128 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl transform rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&q=80" 
                    alt="Fitness Dashboard Interface" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="w-64 h-128 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl p-2 shadow-2xl transform -rotate-2 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=300&q=80" 
                    alt="CR7 App Interface" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="w-64 h-128 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl transform rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" 
                    alt="Sleep Tracking Interface" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Download QR Code */}
              <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-lg mb-2 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-slate-600">Download App</p>
                  <p className="text-xs text-slate-500">Scan to download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="text-lg px-6 py-2">Problem Statement</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Medicine promised longer, healthier lives but delivered{" "}
              <span className="text-destructive">longer, sicker ones</span>.
            </h2>
            <p className="text-xl text-muted-foreground">
              Erakulis empowers you to live longer but healthier by helping you to eat better, stay active and lower your stress.
            </p>
          </div>
        </div>
      </section>

      {/* Erakulis Guides Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Erakulis guides you to</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take control of your health with our comprehensive approach to wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <Apple className="h-12 w-12" />, title: "Eat Better", description: "Personalized nutrition plans tailored to your lifestyle and goals.", color: "from-green-400 to-green-500" },
              { icon: <Activity className="h-12 w-12" />, title: "Stay Active", description: "Track your daily activities and maintain an active lifestyle.", color: "from-blue-400 to-blue-500" },
              { icon: <Brain className="h-12 w-12" />, title: "Lower your stress", description: "Mindfulness and stress management techniques for better mental health.", color: "from-purple-400 to-purple-500" },
              { icon: <Moon className="h-12 w-12" />, title: "Sleep Better", description: "Optimize your sleep patterns for improved recovery and well-being.", color: "from-indigo-400 to-indigo-500" },
              { icon: <Target className="h-12 w-12" />, title: "Find your perfect Workout", description: "Discover workouts that match your fitness level and preferences.", color: "from-orange-400 to-orange-500" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center space-y-4 bg-background border-none shadow-soft hover:shadow-medium transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness, Nutrition and Mind United */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Fitness, Nutrition and Mind United
              </h2>
              <p className="text-xl text-muted-foreground">
                Our approach brings fitness, nutrition, and mental well-being together, creating a powerful foundation for lasting health.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Holistic Integration", description: "Track fitness, meals, mindfulness, and sleep." },
                  { title: "Personalized Plans", description: "Tailored fitness, nutrition, and mental balance plans." },
                  { title: "Goal Setting", description: "Set and crush personalized fitness goals." },
                  { title: "+300 Wearables", description: "Seamless integration with 300+ wearables." }
                ].map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80" 
                  alt="App Interface Progress"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Features Carousel */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Erakulis Power Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform offers a comprehensive range of powerful features designed to elevate your wellness experience across fitness, nutrition, and mental health.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground">{feature.description}</p>
                      <div className="space-y-4">
                        {feature.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">← Swipe to explore all features →</p>
          </div>
        </div>
      </section>

      {/* Wearables Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect All Your Wearables & Apps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly integrate with your favorite fitness devices and health apps. Erakulis brings all your health data together in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {wearableLogos.map((logo, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <img src={logo.src} alt={logo.name} className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">{logo.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Currently syncing with Google Fit</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Start Your Fitness Journey in 3 Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "1", 
                title: "Download the App", 
                description: "Install the app on your phone and set up your account to start tracking your progress." 
              },
              { 
                step: "2", 
                title: "Set Your Goals", 
                description: "Define your fitness goals and preferences to create a plan that works for you." 
              },
              { 
                step: "3", 
                title: "Start Your Journey", 
                description: "Begin your fitness routine, monitor your progress, and stay motivated with real-time insights" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Clients Say About Our App</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-6 bg-background border-none shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start <span className="text-primary">Free</span> - Upgrade when ready
            </h2>
            <p className="text-xl text-muted-foreground">
              Begin your wellness journey with our free plan, then unlock the full potential of Erakulis with premium features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 space-y-6 bg-background border-none shadow-soft">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                <div className="text-4xl font-bold text-primary">€0</div>
                <p className="text-muted-foreground">Forever free</p>
              </div>
              <Button className="w-full" variant="outline">Get Started Free</Button>
              <div className="space-y-3">
                <p className="font-semibold">What's included:</p>
                {[
                  "Daily Check-ins",
                  "Basic Workouts", 
                  "Nutrition Tracking",
                  "AI Food Scanner"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 space-y-6 bg-gradient-primary text-primary-foreground border-none shadow-glow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold">€9.99</div>
                <p className="opacity-90">per month</p>
                <p className="text-sm opacity-75">or €99.90/year (save 17%)</p>
              </div>
              <Button className="w-full" variant="secondary">Start Free Trial</Button>
              <div className="space-y-3">
                <p className="font-semibold">Everything in Free, plus:</p>
                {[
                  "Personalized Plans",
                  "Guided Meditation",
                  "Wearable Integration", 
                  "Advanced Analytics",
                  "Custom Recipes",
                  "Priority Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4" />
                    <span className="text-sm">{feature}</span>
                    <Badge variant="secondary" className="text-xs">Premium</Badge>
                  </div>
                ))}
              </div>
              <div className="text-center pt-4 border-t border-primary-foreground/20">
                <p className="text-sm opacity-90">14-day free trial</p>
                <p className="text-xs opacity-75">No commitment. Cancel anytime during trial period.</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9 out of 5</span>
              <span className="text-muted-foreground">(12,450 reviews)</span>
            </div>
            <p className="text-muted-foreground mt-2">Trusted by over 1 million users worldwide</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Download now and begin your Journey to Better Health
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            The Fitness Builder app empowers you to craft personalized workouts tailored to your goals. 
            Download it on any device and prioritize your health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black border border-white/20 hover:bg-gray-900 text-white px-8 py-4"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.erakulis', '_blank')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
            </Button>
            <Button 
              size="lg" 
              className="bg-black border border-white/20 hover:bg-gray-900 text-white px-8 py-4"
              onClick={() => window.open('https://apps.apple.com/us/app/erakulis/id6473955690', '_blank')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;