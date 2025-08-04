import { Brain, Heart, Moon, Smile, Sparkles, ChevronLeft, ChevronRight, Shield, Target } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { T } from "@/hooks/useTranslation";
const mentalWellnessImage = "/assets/images/c3258352-4534-48f0-8d7b-c645e1fdb665.png";

export const MentalWellbeingSection = () => {
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

  const mentalWellbeingSlides = [
    {
      title: "Mood & Emotional Tracking",
      description: "Monitor your emotional patterns and mental state with intelligent insights.",
      features: [
        {
          icon: Brain,
          title: "Mood Analytics",
          description: "Track daily emotions and identify patterns in your mental wellness."
        },
        {
          icon: Heart,
          title: "Emotional Insights",
          description: "Get personalized recommendations based on your emotional data."
        }
      ]
    },
    {
      title: "Meditation & Mindfulness",
      description: "Access guided sessions and mindfulness tools for daily practice.",
      features: [
        {
          icon: Heart,
          title: "Guided Meditation",
          description: "Structured meditation sessions for stress relief and focus."
        },
        {
          icon: Shield,
          title: "Stress Management",
          description: "Tools and techniques to manage daily stress effectively."
        }
      ]
    },
    {
      title: "Sleep & Wellness Tracking",
      description: "Improve your rest quality and maintain a wellness journal.",
      features: [
        {
          icon: Moon,
          title: "Sleep Insights",
          description: "Monitor sleep patterns and get tips for better rest quality."
        },
        {
          icon: Smile,
          title: "Wellness Journal",
          description: "Daily reflection space to track thoughts and progress."
        }
      ]
    }
  ];

  return (
    <section id="mental-wellbeing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary"><T>Mental Wellness Support</T></span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>Mental Wellbeing Features</T>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <T>Enhance your mental health with guided meditation, mood tracking, and stress management tools designed to support your emotional wellbeing journey.</T>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {mentalWellbeingSlides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center space-y-8 lg:space-y-0 px-4">
                    {/* Mobile: Image on top, Desktop: Content first */}
                    <div className="lg:hidden flex justify-center">
                      <div className="relative">
                        <img 
                          src={mentalWellnessImage} 
                          alt="Mental Wellbeing App Interface" 
                          className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg hover-scale"
                        />
                      </div>
                    </div>

                    {/* Content */}
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

                    {/* Desktop: Image on right */}
                    <div className="hidden lg:flex justify-center lg:justify-end">
                      <div className="relative">
                        <img 
                          src={mentalWellnessImage} 
                          alt="Mental Wellbeing App Interface" 
                          className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg hover-scale"
                        />
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