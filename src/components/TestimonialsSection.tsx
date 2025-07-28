import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Personal Trainer",
      location: "Lisbon",
      rating: 5,
      text: "Since I use Erakulis PRO, my work has become much more efficient. My clients love the app and I can track everything in real time.",
      metric: "↑ 40% retention"
    },
    {
      name: "Carlos Mendes",
      role: "Physical Trainer",
      location: "Porto",
      rating: 5,
      text: "The video library is incredible! I save hours creating workouts and the wearable data helps me adjust plans perfectly.",
      metric: "↑ 60% efficiency"
    },
    {
      name: "Mariana Costa",
      role: "Nutritionist & PT",
      location: "Coimbra",
      rating: 5,
      text: "The integrated chat revolutionized my communication with clients. They feel more accompanied and I have everything centralized.",
      metric: "↑ 50% satisfaction"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 to-primary/3 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            What the{" "}
            <span className="text-primary">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from trainers who transformed their business 
            with Erakulis PRO
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-8 rounded-xl shadow-medium hover:shadow-large transition-smooth animate-fade-in-up border border-border/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-primary/30 transform rotate-180" />
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-smooth">
                  {testimonial.metric}
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.location}</div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/10 transition-smooth pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <div className="text-sm text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;