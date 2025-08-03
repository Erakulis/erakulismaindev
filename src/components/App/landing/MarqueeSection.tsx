import { Activity, Target, TrendingUp, Zap } from "lucide-react";

const marqueeItems = [
  { icon: Activity, text: "Start Workout Now" },
  { icon: Target, text: "Manage Your Exercise" },
  { icon: TrendingUp, text: "Track Fitness Goals" },
  { icon: Zap, text: "Improve Your Strength" },
];

export const MarqueeSection = () => {
  return (
    <section className="py-6 bg-background border-y border-border overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        {marqueeItems.map((item, index) => (
          <div key={`first-${index}`} className="flex items-center gap-3 mx-12">
            <item.icon className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground">{item.text}</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless scroll */}
        {marqueeItems.map((item, index) => (
          <div key={`second-${index}`} className="flex items-center gap-3 mx-12">
            <item.icon className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground">{item.text}</span>
          </div>
        ))}
        
        {/* Third set for extra smoothness */}
        {marqueeItems.map((item, index) => (
          <div key={`third-${index}`} className="flex items-center gap-3 mx-12">
            <item.icon className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};