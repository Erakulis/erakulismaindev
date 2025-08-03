import { Activity, Target, TrendingUp, Zap } from "lucide-react";

const marqueeItems = [
  { icon: Activity, text: "Start Workout Now" },
  { icon: Target, text: "Manage Your Exercise" },
  { icon: TrendingUp, text: "Track Fitness Goals" },
  { icon: Zap, text: "Improve Your Strength" },
];

export const MarqueeSection = () => {
  return (
    <section className="py-4 bg-white border-y border-gray-100 overflow-hidden relative z-10 pt-16">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeat items multiple times for seamless scrolling */}
        {[...Array(6)].map((_, setIndex) => 
          marqueeItems.map((item, index) => (
            <div key={`${setIndex}-${index}`} className="flex items-center gap-3 mx-12 flex-shrink-0">
              <item.icon className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium text-foreground">{item.text}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};