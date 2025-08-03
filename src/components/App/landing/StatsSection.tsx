export const StatsSection = () => {
  const stats = [
    { value: "97%", label: "Client satisfaction" },
    { value: "100m+", label: "Monthly active user" },
    { value: "25k+", label: "New user per week" },
    { value: "70%", label: "Growth year-over-year" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering Your Fitness Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are passionate about helping individuals reach their fitness goals with the right tools, 
            motivation, and support. Our app is designed to be your personal fitness companion.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};