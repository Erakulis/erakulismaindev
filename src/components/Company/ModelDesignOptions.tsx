import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Target } from 'lucide-react';

// Original Design (Current)
export const OriginalModelDesign = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Base Fee */}
    <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-foreground"></div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-6xl font-bold text-muted-foreground/30">01</span>
        </div>
        <CardTitle className="text-2xl mb-2">Base Fee</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Covers platform access, onboarding, technical support, and reporting tools. 
          Ensures foundational delivery and full operational readiness from day one.
        </p>
        <Button className="w-full mt-6" variant="outline">
          Get Started
        </Button>
      </CardContent>
    </Card>

    {/* Success Fee */}
    <Card className="relative overflow-hidden border-2 border-primary hover:shadow-xl transition-all duration-300 scale-105">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute top-4 right-4">
        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-6xl font-bold text-muted-foreground/30">02</span>
        </div>
        <CardTitle className="text-2xl mb-2">Success Fee</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Only applied when pre-defined KPIs are met. You pay only when we deliver 
          measurable health and productivity impact.
        </p>
        <Button className="w-full mt-6">
          Schedule Demo
        </Button>
      </CardContent>
    </Card>

    {/* Scale on Success */}
    <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-accent"></div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-6xl font-bold text-muted-foreground/30">03</span>
        </div>
        <CardTitle className="text-2xl mb-2">Scale on Success</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Once impact is proven we progressively expand the program, reaching a broader 
          user base with confidence and cost-efficiency, backed by results.
        </p>
        <Button className="w-full mt-6" variant="outline">
          Learn More
        </Button>
      </CardContent>
    </Card>
  </div>
);

// Timeline Flow Design
export const TimelineModelDesign = () => (
  <div className="relative max-w-4xl mx-auto">
    {/* Timeline line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
    
    <div className="space-y-16">
      {/* Step 1 */}
      <div className="flex items-center justify-center">
        <div className="flex-1 text-right pr-8">
          <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 ml-auto max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Base Fee</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Platform access, onboarding, and foundational support
              </p>
              <Button size="sm" variant="outline">Get Started</Button>
            </CardContent>
          </Card>
        </div>
        <div className="w-6 h-6 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center">
          <span className="text-xs font-bold text-primary-foreground">1</span>
        </div>
        <div className="flex-1 pl-8"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center justify-center">
        <div className="flex-1 pr-8"></div>
        <div className="w-6 h-6 bg-secondary rounded-full border-4 border-background z-10 flex items-center justify-center">
          <span className="text-xs font-bold text-secondary-foreground">2</span>
        </div>
        <div className="flex-1 text-left pl-8">
          <Card className="relative overflow-hidden border-2 border-primary hover:shadow-xl transition-all duration-300 mr-auto max-w-md">
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Success Fee</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Pay only when measurable KPIs are achieved
              </p>
              <Button size="sm">Schedule Demo</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center justify-center">
        <div className="flex-1 text-right pr-8">
          <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 ml-auto max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Scale on Success</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Expand program reach with proven impact and results
              </p>
              <Button size="sm" variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        </div>
        <div className="w-6 h-6 bg-accent rounded-full border-4 border-background z-10 flex items-center justify-center">
          <span className="text-xs font-bold text-accent-foreground">3</span>
        </div>
        <div className="flex-1 pl-8"></div>
      </div>
    </div>
  </div>
);

// Progressive Flow Design
export const ProgressiveModelDesign = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Base Fee",
      icon: Users,
      description: "Platform access, onboarding, technical support, and reporting tools.",
      details: "Ensures foundational delivery and full operational readiness from day one.",
      color: "primary"
    },
    {
      title: "Success Fee",
      icon: Target,
      description: "Only applied when pre-defined KPIs are met.",
      details: "You pay only when we deliver measurable health and productivity impact.",
      color: "secondary",
      popular: true
    },
    {
      title: "Scale on Success",
      icon: TrendingUp,
      description: "Progressive expansion of the program.",
      details: "Reaching a broader user base with confidence and cost-efficiency, backed by results.",
      color: "accent"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => setCurrentStep(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {index + 1}
              </button>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 rounded transition-all duration-300 ${
                  index < currentStep ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Step details */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              steps[currentStep].color === 'primary' ? 'bg-primary/10' :
              steps[currentStep].color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
            }`}>
              {React.createElement(steps[currentStep].icon, {
                className: `w-8 h-8 ${
                  steps[currentStep].color === 'primary' ? 'text-primary' :
                  steps[currentStep].color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`
              })}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{steps[currentStep].title}</h3>
              {steps[currentStep].popular && (
                <Badge className="bg-primary text-primary-foreground mt-1">Most Popular</Badge>
              )}
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground">
            {steps[currentStep].description}
          </p>
          
          <p className="text-base text-muted-foreground">
            {steps[currentStep].details}
          </p>

          <div className="flex gap-3">
            <Button className="flex-1">
              {currentStep === 1 ? 'Schedule Demo' : currentStep === 0 ? 'Get Started' : 'Learn More'}
            </Button>
            {currentStep < steps.length - 1 && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Right side - Visual representation */}
        <div className="relative">
          <Card className="p-8 border-2 hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-primary/10 border-2 border-primary/20' 
                      : index < currentStep 
                        ? 'bg-green-50 opacity-80'
                        : 'bg-muted/30 opacity-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === currentStep 
                      ? `bg-${step.color}` 
                      : index < currentStep 
                        ? 'bg-green-500'
                        : 'bg-muted'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <step.icon className={`w-5 h-5 ${
                        index === currentStep ? 'text-white' : 'text-muted-foreground'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${index === currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${index === currentStep ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Comparison Table Design
export const ComparisonModelDesign = () => (
  <div className="max-w-5xl mx-auto">
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Base Fee</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-foreground relative">
              Success Fee
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs">
                Most Popular
              </Badge>
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Scale on Success</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-6 py-4 text-sm text-muted-foreground">Platform Access</td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
          </tr>
          <tr className="border-b border-border bg-muted/10">
            <td className="px-6 py-4 text-sm text-muted-foreground">Technical Support</td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-6 py-4 text-sm text-muted-foreground">Performance-based Pricing</td>
            <td className="px-6 py-4 text-center">-</td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
          </tr>
          <tr className="border-b border-border bg-muted/10">
            <td className="px-6 py-4 text-sm text-muted-foreground">KPI-driven Results</td>
            <td className="px-6 py-4 text-center">-</td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-6 py-4 text-sm text-muted-foreground">Program Expansion</td>
            <td className="px-6 py-4 text-center">-</td>
            <td className="px-6 py-4 text-center">-</td>
            <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Button variant="outline" className="w-full">Get Started</Button>
      <Button className="w-full">Schedule Demo</Button>
      <Button variant="outline" className="w-full">Learn More</Button>
    </div>
  </div>
);

// Main component with tabs to switch between designs
export const ModelDesignOptions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Model - Design Options</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Performance-based pricing that ensures you only pay when we deliver measurable results.
          </p>
        </div>
        
        <Tabs defaultValue="original" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="original">Original</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="progressive">Progressive</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="original" className="space-y-8">
            <OriginalModelDesign />
          </TabsContent>
          
          <TabsContent value="timeline" className="space-y-8">
            <TimelineModelDesign />
          </TabsContent>
          
          <TabsContent value="progressive" className="space-y-8">
            <ProgressiveModelDesign />
          </TabsContent>
          
          <TabsContent value="comparison" className="space-y-8">
            <ComparisonModelDesign />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};