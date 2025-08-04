import { Check } from "lucide-react";
import { T } from "@/hooks/useTranslation";

export const InfoSection = () => {
  const benefits = [
    "Count steps and calories burned.",
    "Monitor daily and weekly progress.",
    "Sync data with wearables easily."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <T>Track Every Move</T><br />
              <T>Effortlessly</T>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <T>Stay on top of your fitness routine with precise and seamless activity tracking to keep you motivated and informed.</T>
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium"><T>{benefit}</T></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Placeholder for images */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-2xl aspect-square"></div>
              <div className="bg-gray-200 rounded-2xl aspect-square"></div>
              <div className="bg-gray-200 rounded-2xl aspect-square"></div>
              <div className="bg-gray-100 rounded-2xl aspect-square"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};