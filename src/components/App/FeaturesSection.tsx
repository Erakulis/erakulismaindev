import { Activity, Target, Dumbbell, BarChart3, Share2, Sparkles, Heart, Apple, Brain } from "lucide-react";
import { useState } from "react";

const workoutImage = "/assets/images/6467c7bf-e014-47a5-ba48-bf9c9d9c379f.png";
const nutritionImage = "/assets/images/de813fc4-7d5a-4693-8abc-0ca450bd07c0.png";
const mentalWellnessImage = "/assets/images/c3258352-4534-48f0-8d7b-c645e1fdb665.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featureSections = [
    {
      id: "fitness",
      badge: "Empowering Features for Fitness",
      title: "Fitness Power Features",
      subtitle: "Workouts made easier and faster",
      description: "Take control of your fitness journey with our comprehensive approach to wellness. Track your progress, set goals, and stay motivated with our powerful features.",
      image: workoutImage,
      imageAlt: "Fitness App Interface",
      features: [
        {
          icon: Activity,
          title: "Activity Tracking",
          description: "Monitor steps, workouts, and calories seamlessly."
        },
        {
          icon: Target,
          title: "Goal Setting", 
          description: "Set personalized fitness goals and crush them."
        }
      ]
    },
    {
      id: "nutrition",
      badge: "Smart Nutrition Tracking",
      title: "Nutrition Power Features",
      subtitle: "Meal planning made easier and smarter",
      description: "Transform your eating habits with intelligent nutrition tracking, personalized meal plans, and comprehensive dietary analysis to fuel your body optimally.",
      image: nutritionImage,
      imageAlt: "Nutrition App Interface",
      features: [
        {
          icon: Apple,
          title: "Meal Tracking",
          description: "Log meals and track nutritional values effortlessly."
        },
        {
          icon: BarChart3,
          title: "Macro Analysis", 
          description: "Get detailed insights into your macronutrient intake."
        }
      ]
    },
    {
      id: "mental",
      badge: "Mental Wellness Support",
      title: "Mental Wellbeing Features",
      subtitle: "Mindfulness made accessible and effective",
      description: "Enhance your mental health with guided meditation, mood tracking, and stress management tools designed to support your emotional wellbeing journey.",
      image: mentalWellnessImage,
      imageAlt: "Mental Wellbeing App Interface",
      features: [
        {
          icon: Brain,
          title: "Mood Tracking",
          description: "Monitor your emotional patterns and mental state."
        },
        {
          icon: Heart,
          title: "Meditation Guide", 
          description: "Access guided sessions for mindfulness and relaxation."
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Erakulis Power Features
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers a comprehensive range of powerful features designed to elevate your wellness experience across fitness, nutrition, and mental health.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel 
            className="w-full" 
            opts={{ align: "start", loop: true }}
            setApi={(api) => {
              if (!api) return;
              
              api.on("select", () => {
                setCurrentSlide(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {featureSections.map((section, index) => (
                <CarouselItem key={index}>
                  <div className="space-y-8 min-h-[500px] lg:min-h-[400px]">
                    {/* Badge */}
                    <div className="flex justify-center">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full">
                        <Sparkles className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">{section.badge}</span>
                      </div>
                    </div>

                    {/* Mobile: Image on top, Desktop: Two Column Layout */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center space-y-8 lg:space-y-0">
                      {/* Mobile: Image first, Desktop: Content first */}
                      <div className="lg:hidden flex justify-center">
                        <div className="relative">
                          <img 
                            src={section.image} 
                            alt={section.imageAlt} 
                            className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg hover-scale"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-4">
                            {section.subtitle}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {section.description}
                          </p>
                        </div>

                        {/* Two Feature Cards Side by Side */}
                        <div className="grid grid-cols-2 gap-6">
                          {section.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="group hover-scale">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                                <feature.icon className="w-6 h-6 text-primary" />
                              </div>
                              
                              <h4 className="text-lg font-semibold text-foreground mb-2">
                                {feature.title}
                              </h4>
                              
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Desktop: Image on right */}
                      <div className="hidden lg:flex justify-center lg:justify-end">
                        <div className="relative">
                          <img 
                            src={section.image} 
                            alt={section.imageAlt} 
                            className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg hover-scale"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation - Hidden on mobile */}
            <CarouselPrevious className="hidden md:flex left-4 lg:-left-16 h-12 w-12 bg-background border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg transition-all duration-200" />
            <CarouselNext className="hidden md:flex right-4 lg:-right-16 h-12 w-12 bg-background border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg transition-all duration-200" />
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {featureSections.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-primary" 
                      : "bg-primary/30 hover:bg-primary/60"
                  }`}
                ></div>
              ))}
            </div>
          </Carousel>
          
          {/* Mobile swipe hint */}
          <div className="lg:hidden text-center mt-4">
            <p className="text-sm text-muted-foreground">← Swipe to explore all features →</p>
          </div>
        </div>
      </div>
    </section>
  );
};