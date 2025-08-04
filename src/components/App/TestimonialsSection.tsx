import { T } from "@/hooks/useTranslation";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Kim",
      role: "Gym Trainer", 
      text: "Erakulis makes fitness fun! The detailed progress reports keep me motivated. I love how it adapts to my routine and helps me improve step by step.",
      rating: 5
    },
    {
      name: "Emily W.",
      role: "Yoga Enthusiast",
      text: "Finally, a fitness tracker that works for me! Erakulis has completely transformed the way I track my workouts and progress.",
      rating: 5
    },
    {
      name: "Jane Cooper", 
      role: "Working Mom",
      text: "Best fitness tracker I've ever used! Erakulis's advanced tracking and AI-driven suggestions have helped me get in the best shape of my life.",
      rating: 5
    },
    {
      name: "Merry S. Myrick",
      role: "Runner",
      text: "Erakulis keeps me accountable with real-time stats and personalized goals. It's like having a personal trainer on my wrist!",
      rating: 5
    },
    {
      name: "Samantha R.",
      role: "Athlete",
      text: "I recommend this app to all my clients. It perfectly integrates nutrition and exercise, ensuring they stay on track towards their fitness goals.",
      rating: 5
    },
    {
      name: "Laura B",
      role: "Personal Trainer",
      text: "With Erakulis's calorie tracking and workout recommendations, I've lost 15 pounds in just two months. Highly recommended!",
      rating: 5
    },
    {
      name: "Felix E. Pierre",
      role: "Fitness Beginner",
      text: "I love how Erakulis syncs with my schedule and reminds me to move. Even on busy days, I stay active without stress.",
      rating: 5
    },
    {
      name: "Rachel L.",
      role: "Personal Trainer",
      text: "Since using this app, my training has never been better. The insights and personalized feedback have made a huge difference in my performance.",
      rating: 5
    },
    {
      name: "Elias R. Roland",
      role: "Cyclist",
      text: "I've tried many fitness trackers, but Erakulis stands out with its accuracy and insights. It keeps me moving every day!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>What Client say about our Business</T>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};