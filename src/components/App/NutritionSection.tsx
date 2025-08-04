import { Apple, BarChart3, Utensils, Calculator, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { T } from "@/hooks/useTranslation";
const nutritionImage = "/assets/images/de813fc4-7d5a-4693-8abc-0ca450bd07c0.png";

export const NutritionSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const nutritionSlides = [
    {
      title: "Meal Tracking & Analysis",
      description: "Log meals and track nutritional values with intelligent analysis tools.",
      features: [
        {
          icon: Apple,
          title: "Smart Food Logging",
          description: "Quick meal entry with photo recognition and barcode scanning."
        },
        {
          icon: BarChart3,
          title: "Macro Breakdown",
          description: "Detailed analysis of proteins, carbs, and fats in your diet."
        }
      ]
    },
    {
      title: "Recipe & Meal Planning",
      description: "Access thousands of healthy recipes and plan your meals effectively.",
      features: [
        {
          icon: Utensils,
          title: "Recipe Library",
          description: "Curated collection of healthy recipes with full nutritional data."
        },
        {
          icon: Calculator,
          title: "Meal Planner",
          description: "Weekly meal planning with automatic grocery lists."
        }
      ]
    },
    {
      title: "Calorie & Goal Tracking",
      description: "Calculate your needs and track progress towards your nutrition goals.",
      features: [
        {
          icon: Calculator,
          title: "Calorie Calculator",
          description: "Personalized daily caloric needs based on your goals."
        },
        {
          icon: BarChart3,
          title: "Progress Tracking",
          description: "Monitor your nutrition journey with detailed analytics."
        }
      ]
    }
  ];

  return (
    <section id="nutrition" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary"><T>Smart Nutrition Tracking</T></span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>Nutrition Power Features</T>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <T>Transform your eating habits with intelligent nutrition tracking, personalized meal plans, and comprehensive dietary analysis to fuel your body optimally.</T>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {nutritionSlides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
                    {/* Left Column - Image */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        <img 
                          src={nutritionImage} 
                          alt="Nutrition App Interface" 
                          className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg hover-scale"
                        />
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                          <T>{slide.title}</T>
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          <T>{slide.description}</T>
                        </p>
                      </div>

                      {/* Feature Cards */}
                      <div className="grid grid-cols-1 gap-6">
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="group hover-scale">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary/20 flex-shrink-0">
                                <feature.icon className="w-6 h-6 text-primary" />
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                  <T>{feature.title}</T>
                                </h4>
                                
                                <p className="text-muted-foreground leading-relaxed">
                                  <T>{feature.description}</T>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button 
            onClick={scrollPrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-primary shadow-lg scale-110' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-6 lg:hidden">
            <p className="text-sm text-muted-foreground">
              Swipe left or right to explore features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};