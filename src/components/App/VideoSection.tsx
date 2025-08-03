import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover How We Help<br />You Succeed
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-green-900 to-green-700 rounded-3xl overflow-hidden shadow-strong">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};