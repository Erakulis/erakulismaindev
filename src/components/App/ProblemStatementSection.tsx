import { T } from "@/hooks/useTranslation";

export const ProblemStatementSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md border border-primary/20 rounded-full mb-8">
            <span className="text-lg font-semibold text-primary">
              <T>Problem Statement</T>
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            <T>Medicine promised longer, healthier lives but delivered longer, sicker ones.</T>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            <T>Erakulis empowers you to live longer but healthier by helping you to eat better, stay active and lower your stress.</T>
          </p>
        </div>
      </div>
    </section>
  );
};