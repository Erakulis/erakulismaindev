import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Kim",
      role: "Gym Trainer", 
      text: "Apura makes fitness fun! The detailed progress reports keep me motivated. I love how it adapts to my routine and helps me improve step by step.",
      rating: 5
    },
    {
      name: "Emily W.",
      role: "Yoga Enthusiast",
      text: "Finally, a fitness tracker that works for me! Apura has completely transformed the way I track my workouts and progress.",
      rating: 5
    },
    {
      name: "Jane Cooper", 
      role: "Working Mom",
      text: "Best fitness tracker I've ever used! Apura's advanced tracking and AI-driven suggestions have helped me get in the best shape of my life.",
      rating: 5
    },
    {
      name: "Merry S. Myrick",
      role: "Runner",
      text: "Apura keeps me accountable with real-time stats and personalized goals. It's like having a personal trainer on my wrist!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Client say about our Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-card-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
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