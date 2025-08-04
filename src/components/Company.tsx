import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/Company/LeadForm";
import FloaterBanner from "@/components/FloaterBanner";
import LanguageSelector from "@/components/Company/LanguageSelector";
import { EcosystemDesignOption2, EcosystemDesignOption3, EcosystemDesignOption4 } from "@/components/EcosystemDesignOptions";
import { ModelDesignOptions } from "@/components/Company/ModelDesignOptions";
import { Users, TrendingUp, Shield, Heart, Building2, Factory, Lightbulb, GraduationCap, FileText, CheckCircle, ArrowRight, Star, BarChart3, Activity, Apple, Moon, Brain, Smartphone, Calendar, Gift, Target, Briefcase, Users2, TrendingDown, Watch, Calculator, DollarSign, PieChart, TrendingDownIcon } from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ROISimulator = () => {
  const [employees, setEmployees] = useState([1000]);
  const [avgSalary, setAvgSalary] = useState([60000]);
  const [currentAbsenteeism, setCurrentAbsenteeism] = useState([8]);
  const [healthcareCosts, setHealthcareCosts] = useState([12000]);

  // ROI Calculations
  const employeeCount = employees[0];
  const salary = avgSalary[0];
  const absenteeismRate = currentAbsenteeism[0];
  const healthCosts = healthcareCosts[0];

  // Expected improvements with Erakulis
  const absenteeismReduction = 0.35; // 35% reduction
  const healthcareReduction = 0.25; // 25% reduction
  const productivityIncrease = 0.15; // 15% increase
  const turnoverReduction = 0.20; // 20% reduction

  // Cost savings calculations
  const currentAbsenteeismCost = employeeCount * salary * (absenteeismRate / 100) / 365 * 8; // 8 sick days avg
  const absenteeismSavings = currentAbsenteeismCost * absenteeismReduction;
  const totalHealthcareCosts = employeeCount * healthCosts;
  const healthcareSavings = totalHealthcareCosts * healthcareReduction;
  const productivityGains = employeeCount * salary * productivityIncrease / 12; // Monthly

  const avgTurnoverCost = salary * 0.5; // 50% of salary
  const turnoverSavings = employeeCount * 0.15 * avgTurnoverCost * turnoverReduction; // 15% baseline turnover

  const totalAnnualSavings = absenteeismSavings + healthcareSavings + productivityGains * 12 + turnoverSavings;
  const erakulisCost = employeeCount * 120; // $120 per employee per year
  const netROI = totalAnnualSavings - erakulisCost;
  const roiPercentage = netROI / erakulisCost * 100;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Controls */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Company Details</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Customize the parameters to see your specific ROI calculation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <Label className="text-base font-medium mb-4 block">Number of Employees</Label>
              <Slider value={employees} onValueChange={setEmployees} max={10000} min={100} step={50} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>100</span>
                <span className="font-semibold text-primary">{employeeCount.toLocaleString()}</span>
                <span>10,000+</span>
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Average Salary ($)</Label>
              <Slider value={avgSalary} onValueChange={setAvgSalary} max={150000} min={30000} step={5000} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$30k</span>
                <span className="font-semibold text-primary">${salary.toLocaleString()}</span>
                <span>$150k+</span>
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Current Absenteeism Rate (%)</Label>
              <Slider value={currentAbsenteeism} onValueChange={setCurrentAbsenteeism} max={15} min={3} step={0.5} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>3%</span>
                <span className="font-semibold text-primary">{absenteeismRate}%</span>
                <span>15%</span>
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Healthcare Cost per Employee ($)</Label>
              <Slider value={healthcareCosts} onValueChange={setHealthcareCosts} max={25000} min={5000} step={1000} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$5k</span>
                <span className="font-semibold text-primary">${healthCosts.toLocaleString()}</span>
                <span>$25k+</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Display */}
        <div className="space-y-6">
          {/* ROI Summary */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-green-50 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-foreground">Annual ROI Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-white/80 rounded-xl border">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-green-600">${netROI.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Net Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl border">
                  <PieChart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">{roiPercentage.toFixed(0)}%</div>
                  <div className="text-sm text-muted-foreground">Return on Investment</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                  <span className="text-muted-foreground">Investment Cost</span>
                  <span className="font-semibold text-red-600">-${erakulisCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                  <span className="text-muted-foreground">Total Savings</span>
                  <span className="font-semibold text-green-600">+${totalAnnualSavings.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Savings Breakdown */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-foreground flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-2" />
                Savings Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-medium">Reduced Absenteeism</div>
                  <div className="text-sm text-muted-foreground">35% reduction</div>
                </div>
                <div className="text-blue-600 font-semibold">${absenteeismSavings.toLocaleString()}</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium">Healthcare Cost Reduction</div>
                  <div className="text-sm text-muted-foreground">25% reduction</div>
                </div>
                <div className="text-green-600 font-semibold">${healthcareSavings.toLocaleString()}</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <div className="font-medium">Productivity Gains</div>
                  <div className="text-sm text-muted-foreground">15% increase</div>
                </div>
                <div className="text-purple-600 font-semibold">${(productivityGains * 12).toLocaleString()}</div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <div>
                  <div className="font-medium">Reduced Turnover</div>
                  <div className="text-sm text-muted-foreground">20% reduction</div>
                </div>
                <div className="text-orange-600 font-semibold">${turnoverSavings.toLocaleString()}</div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
              <p className="mb-6 opacity-90">Schedule a personalized demo to see how Erakulis can transform your organization's wellness ROI</p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => window.open('https://calendly.com/erakulis', '_blank')}>
                <Calendar className="mr-2 h-5 w-5" />
                Schedule ROI Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
const WhatErakulisAddsToggle = () => {
  const [selectedType, setSelectedType] = useState<"people" | "companies">("people");
  const peopleFeatures = [{
    icon: <Target className="h-8 w-8" />,
    title: "Daily Personalized Guidance",
    description: "Tailored fitness, nutrition and mental-wellness plans.",
    color: "from-orange-400 to-orange-500"
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Motivation & Performance Uplift",
    description: "Gamified challenges and coach support to keep energy and output high.",
    color: "from-purple-400 to-purple-500"
  }, {
    icon: <Heart className="h-8 w-8" />,
    title: "Long-Term Health & Quality of Life",
    description: "Focus on sustainable habits, reducing chronic risk, improving longevity.",
    color: "from-green-400 to-green-500"
  }, {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Wellness Education",
    description: "Access to expert knowledge on nutrition, fitness, mental health, and sustainable lifestyle habits.",
    color: "from-indigo-400 to-indigo-500"
  }, {
    icon: <Watch className="h-8 w-8" />,
    title: "Health Metrics Monitoring",
    description: "Track and monitor +400 health metrics through wearable integration with comprehensive health reports.",
    color: "from-teal-400 to-teal-500"
  }, {
    icon: <Gift className="h-8 w-8" />,
    title: "Wellness Savings & Benefits",
    description: "Save on personal trainers, nutritionists, and get exclusive discounts on premium wellness products and services.",
    color: "from-pink-400 to-pink-500"
  }];
  const employerFeatures = [{
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Data-Driven Health Insights Dashboard",
    description: "Anonymized, real-time health metrics to pinpoint risk areas and tailor interventions.",
    color: "from-orange-400 to-orange-500"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "ESG & Brand Enhancement",
    description: "Showcases companies' commitment to well-being, strengthening social reporting.",
    color: "from-blue-400 to-blue-500"
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Co-Branded App",
    description: "On-The-Go Wellness Hub with video workouts, healthy and easy recipes, meditations and breathing exercises.",
    color: "from-blue-400 to-blue-500"
  }, {
    icon: <Activity className="h-8 w-8" />,
    title: "Integrated, Actionable Dashboards",
    description: "HR can track adoption, outcomes, and ROI in one unified view.",
    color: "from-purple-400 to-purple-500"
  }, {
    icon: <TrendingDown className="h-8 w-8" />,
    title: "Cost & Productivity Gains",
    description: "Demonstrable reduction in health-claim costs, sick days and on-job productivity loss.",
    color: "from-green-400 to-green-500"
  }, {
    icon: <Users2 className="h-8 w-8" />,
    title: "Retention & Engagement Boost",
    description: "Lower turnover, higher morale, built on continuous dialogue and peer support.",
    color: "from-pink-400 to-pink-500"
  }];
  const currentFeatures = selectedType === "people" ? peopleFeatures : employerFeatures;
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/80 p-2 rounded-full border border-gray-200 shadow-sm">
          <ToggleGroup type="single" value={selectedType} onValueChange={value => value && setSelectedType(value as "people" | "companies")} className="gap-0">
            <ToggleGroupItem value="companies" className="rounded-full px-8 py-3 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100 text-gray-600">
              <Building2 className="mr-2 h-5 w-5" />
              Companies
            </ToggleGroupItem>
            <ToggleGroupItem value="people" className="rounded-full px-8 py-3 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100 text-gray-600">
              <Users className="mr-2 h-5 w-5" />
              People
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Features Asymmetric Grid Layout - All 6 Elements */}
      <div className="space-y-8">
        {/* Top Row - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[600px]">
          {/* Left Column - Tall Card (First Feature) */}
          <div className="h-[300px] lg:h-auto lg:row-span-2 relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[0].color.split(' ')[1]}, ${currentFeatures[0].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-8 h-full flex flex-col z-10">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${currentFeatures[0].color} text-white mb-6 self-start`}>
                {currentFeatures[0].icon}
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                {currentFeatures[0].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                {currentFeatures[0].description}
              </p>

              {/* Badge */}
              <div className="mt-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {selectedType === "people" ? "Personal Impact" : "Business Impact"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Top - Large Card (Second Feature) */}
          <div className="h-[300px] lg:h-auto lg:col-span-2 relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[1].color.split(' ')[1]}, ${currentFeatures[1].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-8 h-full flex flex-col z-10">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${currentFeatures[1].color} text-white mb-4 self-start`}>
                {currentFeatures[1].icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                {currentFeatures[1].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                {currentFeatures[1].description}
              </p>

              {/* Badge */}
              <div className="mt-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/50 text-secondary-foreground border border-secondary/30">
                  {selectedType === "people" ? "Daily Feature" : "Strategic Advantage"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Bottom Left - Third Feature */}
          <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[2].color.split(' ')[1]}, ${currentFeatures[2].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-6 h-full flex flex-col z-10">
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${currentFeatures[2].color} text-white mb-3 self-start`}>
                {currentFeatures[2].icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                {currentFeatures[2].title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {currentFeatures[2].description}
              </p>

              <div className="mt-3 text-xs text-muted-foreground">
                {selectedType === "people" ? "Lifestyle" : "Long-term ROI"}
              </div>
            </div>
          </div>

          {/* Right Column Bottom Right - Fourth Feature */}
          <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[3].color.split(' ')[1]}, ${currentFeatures[3].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-6 h-full flex flex-col z-10">
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${currentFeatures[3].color} text-white mb-3 self-start`}>
                {currentFeatures[3].icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                {currentFeatures[3].title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {currentFeatures[3].description}
              </p>

              {/* Progress bar for this feature */}
              <div className="mt-3">
                <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${currentFeatures[3].color}`} style={{
                  width: '85%'
                }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Two Wide Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fifth Feature */}
          <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[4].color.split(' ')[1]}, ${currentFeatures[4].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-8 h-full flex flex-col z-10">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${currentFeatures[4].color} text-white mb-4 self-start`}>
                {currentFeatures[4].icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                {currentFeatures[4].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                {currentFeatures[4].description}
              </p>

              {/* Badge */}
              <div className="mt-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/50 text-accent-foreground border border-accent/30">
                  {selectedType === "people" ? "Health Tech" : "Analytics"}
                </div>
              </div>
            </div>
          </div>

          {/* Sixth Feature */}
          <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Animated background circle */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" style={{
            background: `linear-gradient(135deg, ${currentFeatures[5].color.split(' ')[1]}, ${currentFeatures[5].color.split(' ')[3]})`
          }}>
            </div>
            
            <div className="relative p-8 h-full flex flex-col z-10">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${currentFeatures[5].color} text-white mb-4 self-start`}>
                {currentFeatures[5].icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                {currentFeatures[5].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                {currentFeatures[5].description}
              </p>

              {/* Special indicator for the last feature */}
              <div className="mt-4 flex items-center justify-between">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200">
                  {selectedType === "people" ? "Premium Benefits" : "Cost Savings"}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {selectedType === "people" ? "20%" : "30%"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const EcosystemProductToggle = () => {
  const [selectedProduct, setSelectedProduct] = useState<"pro" | "mobile">("pro");
  const proFeatures = [{
    icon: <Users className="h-8 w-8" />,
    title: "Certified Wellness Coaches",
    description: "Access to licensed nutritionists, fitness experts, and mental health professionals providing personalized guidance for your workforce.",
    color: "from-blue-400 to-blue-500"
  }, {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Expert-Driven Health Assessments",
    description: "Human professionals analyze employee wellness data to provide personalized recommendations and intervention strategies.",
    color: "from-green-400 to-green-500"
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Human-Curated Wellness Programs",
    description: "Experienced wellness experts design and adapt corporate programs based on your team's specific needs and health goals.",
    color: "from-purple-400 to-purple-500"
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Live Expert Consultations",
    description: "Scheduled one-on-one sessions with certified professionals for nutrition counseling, fitness coaching, and mental wellness support.",
    color: "from-orange-400 to-orange-500"
  }, {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Dedicated Wellness Specialists",
    description: "Assigned human wellness coordinators who understand your company culture and employee needs for optimal program success.",
    color: "from-pink-400 to-pink-500"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Professional Health Oversight",
    description: "Medical professionals and certified wellness experts ensure all programs meet safety standards and health regulations.",
    color: "from-teal-400 to-teal-500"
  }];
  const mobileFeatures = [{
    icon: <Activity className="h-8 w-8" />,
    title: "Real-Time Activity Tracking",
    description: "Continuous monitoring of workouts, steps, heart rate, and wellness metrics with wearable integration.",
    color: "from-blue-400 to-blue-500"
  }, {
    icon: <Apple className="h-8 w-8" />,
    title: "AI Nutrition Coach",
    description: "Personalized meal planning, calorie tracking, and nutritional guidance based on your goals and preferences.",
    color: "from-green-400 to-green-500"
  }, {
    icon: <Brain className="h-8 w-8" />,
    title: "Mental Wellness Support",
    description: "Guided meditation, stress management tools, and mood tracking for complete mental health support.",
    color: "from-purple-400 to-purple-500"
  }, {
    icon: <Gift className="h-8 w-8" />,
    title: "Gamified Rewards System",
    description: "Earn points, unlock achievements, and compete with friends to stay motivated on your wellness journey.",
    color: "from-orange-400 to-orange-500"
  }, {
    icon: <Moon className="h-8 w-8" />,
    title: "Sleep Optimization",
    description: "Sleep pattern analysis, smart wake-up times, and personalized recommendations for better rest and recovery.",
    color: "from-pink-400 to-pink-500"
  }, {
    icon: <Heart className="h-8 w-8" />,
    title: "Wellness Community",
    description: "Connect with like-minded individuals, share progress, and get support from a global wellness community.",
    color: "from-teal-400 to-teal-500"
  }];
  const currentFeatures = selectedProduct === "pro" ? proFeatures : mobileFeatures;
  const currentTitle = selectedProduct === "pro" ? "Erakulis PRO" : "Erakulis Mobile";
  const currentSubtitle = selectedProduct === "pro" ? "Human-Powered Wellness Platform" : "User Experience Features";
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/80 p-2 rounded-full border border-gray-200 shadow-sm">
          <ToggleGroup type="single" value={selectedProduct} onValueChange={value => value && setSelectedProduct(value as "pro" | "mobile")} className="gap-0">
            <ToggleGroupItem value="pro" className="rounded-full px-8 py-3 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100 text-gray-600">
              <Briefcase className="mr-2 h-5 w-5" />
              Erakulis PRO
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" className="rounded-full px-8 py-3 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100 text-gray-600">
              <Smartphone className="mr-2 h-5 w-5" />
              Erakulis Mobile
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Design Option 1: Split Screen Hero Layout */}
      <EcosystemDesignOption1 selectedProduct={selectedProduct} currentFeatures={currentFeatures} currentTitle={currentTitle} currentSubtitle={currentSubtitle} />
    </div>
  );
};
const EcosystemDesignOption1 = ({
  selectedProduct,
  currentFeatures,
  currentTitle,
  currentSubtitle
}) => {
  const productImages = {
    pro: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"],
    mobile: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"]
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      {/* Left: Product Image & Stats */}
      <div className="relative">
        {selectedProduct === 'mobile' ? <Carousel className="w-full">
            <CarouselContent>
              {productImages.mobile.map((image, index) => <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img src={image} alt={`${currentTitle} interface ${index + 1}`} className="w-full h-[600px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                        <h3 className="text-2xl font-bold text-primary mb-4">{currentTitle}</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">50k+</div>
                            <div className="text-sm text-muted-foreground">Users</div>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center">
                              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                  <span className="text-yellow-400 font-bold">4.8</span>
                                </div>
                                <span>Store Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
              {/* CTA Slide */}
              <CarouselItem>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[600px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Calendar className="h-16 w-16 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Wellness?</h3>
                    <p className="text-xl mb-8 opacity-90">Schedule a discovery call to learn how Erakulis Mobile can revolutionize your health journey</p>
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open('https://calendly.com/erakulis', '_blank')}>
                      Schedule Discovery Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel> : <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[600px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Calendar className="h-16 w-16 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h3>
                    <p className="text-xl mb-8 opacity-90">Schedule a discovery call to learn how Erakulis PRO can transform your fitness business</p>
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open('https://calendly.com/erakulis', '_blank')}>
                      Schedule Discovery Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>}
      </div>

      {/* Right: Features in Single Card */}
      <div className="flex items-center h-full">
        
        {/* Single Features Card */}
        <Card className="p-8 bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 hover:shadow-xl transition-all duration-300 h-[600px] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-xl ${selectedProduct === 'pro' ? 'bg-blue-100' : 'bg-green-100'} group-hover:scale-110 transition-transform`}>
                {selectedProduct === 'pro' ? <Briefcase className={`h-8 w-8 ${selectedProduct === 'pro' ? 'text-blue-600' : 'text-green-600'}`} /> : <Smartphone className={`h-8 w-8 ${selectedProduct === 'pro' ? 'text-blue-600' : 'text-green-600'}`} />}
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Key Features</h4>
                <p className="text-sm text-muted-foreground">Everything you need to succeed</p>
              </div>
            </div>
            
            {/* Info Badges */}
            <div className="flex flex-col space-y-2">
              <Badge variant="secondary" className={`${selectedProduct === 'pro' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'} text-xs`}>
                {selectedProduct === 'pro' ? 'Enterprise Ready' : 'Consumer Friendly'}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {selectedProduct === 'pro' ? 'HIPAA Compliant' : 'Cross Platform'}
              </Badge>
            </div>
          </div>

          {/* Features List */}
          <div className="overflow-y-auto h-[440px] pr-2 space-y-4 mb-8">
            {currentFeatures.slice(0, 6).map((feature, index) => <div key={`${selectedProduct}-${index}`} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">{feature.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>)}
          </div>

          {/* Stats Section */}
          <div className="border-t pt-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{selectedProduct === 'pro' ? '500+' : '50k+'}</div>
                <div className="text-sm text-muted-foreground">{selectedProduct === 'pro' ? 'Professionals' : 'Active Users'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{selectedProduct === 'pro' ? '10k+' : '1M+'}</div>
                <div className="text-sm text-muted-foreground">{selectedProduct === 'pro' ? 'Clients Managed' : 'Workouts Done'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{selectedProduct === 'pro' ? '95%' : '98%'}</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="w-full text-lg" onClick={() => {
          if (selectedProduct === 'pro') {
            window.open('https://pro.erakulis.com/pt-PT/', '_blank');
          } else {
            window.open('https://erakulis.com', '_blank');
          }
        }}>
            {selectedProduct === "pro" ? "Explore PRO Platform" : "Get Mobile App"} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Erakulis for Companies</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transform Wellbeing Into Measurable Business Results
              </h1>
              <p className="text-xl text-muted-foreground mb-8">

Traditional wellness programs failed to deliver results. Erakulis’ digital wellness solution delivers lasting impact on people's health and key business KPIs, backed by data & technology, and a holistic approach.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" alt="Wellness and fitness lifestyle" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Reduced Absenteeism</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-primary">3-6x</div>
                <div className="text-sm text-muted-foreground">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Complete Wellness Ecosystem Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Next-Generation Wellness Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Erakulis is the only digital wellness solution that integrates physical activity, mental, nutrition, stress and sleep in one single experience.</p>
          </div>
          
          <EcosystemDesignOption4 />
        </div>
      </section>

      {/* What Erakulis Adds To Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Erakulis <span className="text-primary">Transforms</span>
            </h2>
          </div>

          {/* Toggle Component */}
          <div className="flex justify-center mb-12">
            <WhatErakulisAddsToggle />
          </div>
        </div>
      </section>

      {/* CR7 Section */}
      <section id="cr7-section" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="/assets/images/Cristiano-Ronaldo-App-Empresas.png" alt="Cristiano Ronaldo" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-3xl font-bold mb-2">CR7</div>
                  <div className="text-lg">Global Wellness Ambassador</div>
                </div>
              </div>
            </div>
            
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Founder Cristiano Ronaldo
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Cristiano Ronaldo's Formula for Corporate Well-Being & Success
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Step into Cristiano Ronaldo's wellness ecosystem, reimagined for today's corporate teams. 
                Erakulis has transformed Ronaldo's daily disciplines in training, recovery, nutrition, and 
                mindset into personalized, data-driven journeys that elevate employee well-being and fuel 
                business performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Performance & Health-Driven Approach</div>
                    <div className="text-muted-foreground">Solutions designed for longevity and human performance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Holistic Wellness Philosophy</div>
                    <div className="text-muted-foreground">Mind, body, and spirit integration</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Global Impact Vision</div>
                    <div className="text-muted-foreground">Transforming wellness worldwide</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8 text-lg px-8" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                Find the Formula <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Erakulis Ecosystem - Interactive Product Features */}
      <section id="ecosystem" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Erakulis Formula
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Smart Wellness Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Where professional expertise meets user-friendly wellness. Discover how our seamlessly integrated ecosystem creates lasting impact.
            </p>
          </div>

          {/* Design Options - You can replace EcosystemProductToggle with any of these: */}
          {/* Option 1: Current grid layout with toggle */}
          <div className="flex justify-center mb-12">
            <EcosystemProductToggle />
          </div>

          {/* Uncomment any of these to try different designs: */}
          {/* <EcosystemDesignOption4 /> */}
          {/* <EcosystemDesignOption3 /> */}
          {/* <EcosystemDesignOption4 /> */}
        </div>
      </section>


      {/* Solutions by Industry */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Industry-Specific Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tailored Wellness Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ERAKULIS adapts to your unique challenges across diverse sectors, delivering measurable results 
              that transform workforce well-being into tangible business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* HR Leaders - Tech Consultancies */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-blue-500 hover:border-l-8 bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      Tech Consultancies
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                    <div className="text-xs text-muted-foreground">Absenteeism Reduction</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  HR Leaders
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Combat employee absenteeism, burnout, and mental health challenges with comprehensive wellness solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Personalized Plans</div>
                      <div className="text-sm text-muted-foreground">Fitness & mental health</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">400+ Integrations</div>
                      <div className="text-sm text-muted-foreground">Wearables & health apps</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Productivity Boost</div>
                      <div className="text-sm text-muted-foreground">Enhanced retention rates</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Real-time Analytics</div>
                      <div className="text-sm text-muted-foreground">Health-Monitor Dashboard</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Explore HR Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Operations Managers - Manufacturing */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-orange-500 hover:border-l-8 bg-gradient-to-br from-orange-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                      <Factory className="h-8 w-8 text-orange-600" />
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      Manufacturing
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">3-6x</div>
                    <div className="text-xs text-muted-foreground">ROI</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors">
                  Operations Managers
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Address workforce sedentarism and health-related productivity issues with targeted interventions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Combat Sedentarism</div>
                      <div className="text-sm text-muted-foreground">Active lifestyle programs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Actionable Insights</div>
                      <div className="text-sm text-muted-foreground">Wearable data analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Energy & Focus</div>
                      <div className="text-sm text-muted-foreground">Increased productivity</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Safety Improvement</div>
                      <div className="text-sm text-muted-foreground">Reduced workplace injuries</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-orange-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Discover Manufacturing Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Startup Founders */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-purple-500 hover:border-l-8 bg-gradient-to-br from-purple-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                      <Lightbulb className="h-8 w-8 text-purple-600" />
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      Startups
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">5</div>
                    <div className="text-xs text-muted-foreground">Months to ROI</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                  Startup Founders
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Build a culture of wellness and address mental health challenges while scaling your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Scalable Solution</div>
                      <div className="text-sm text-muted-foreground">Grows with your team</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Stress Management</div>
                      <div className="text-sm text-muted-foreground">Mental wellness support</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Talent Attraction</div>
                      <div className="text-sm text-muted-foreground">Competitive advantage</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Team Morale</div>
                      <div className="text-sm text-muted-foreground">Enhanced engagement</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-purple-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Build Your Wellness Culture <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* University Leaders */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-green-500 hover:border-l-8 bg-gradient-to-br from-green-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <GraduationCap className="h-8 w-8 text-green-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      Education
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">400+</div>
                    <div className="text-xs text-muted-foreground">App Integrations</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                  University Leaders
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Enhance student well-being, engagement and academic success with campus-wide wellness programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Campus Ecosystem</div>
                      <div className="text-sm text-muted-foreground">Comprehensive wellness</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Inter-Faculty Challenges</div>
                      <div className="text-sm text-muted-foreground">Peer support network</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Academic Performance</div>
                      <div className="text-sm text-muted-foreground">Real-time insights</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">ESG Goals</div>
                      <div className="text-sm text-muted-foreground">Social sustainability</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-green-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Transform Campus Wellness <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Insurance Brokers Leaders */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-teal-500 hover:border-l-8 bg-gradient-to-br from-teal-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-teal-100 rounded-xl group-hover:bg-teal-200 transition-colors">
                      <Briefcase className="h-8 w-8 text-teal-600" />
                    </div>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                      Insurance Brokers
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">30%</div>
                    <div className="text-xs text-muted-foreground">Client Retention</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-teal-600 transition-colors">
                  Insurance Brokers Leaders
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Enhance client value propositions with comprehensive wellness solutions that reduce claims and improve satisfaction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Client Differentiation</div>
                      <div className="text-sm text-muted-foreground">Unique wellness offerings</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Claims Reduction</div>
                      <div className="text-sm text-muted-foreground">Preventive care programs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Client Engagement</div>
                      <div className="text-sm text-muted-foreground">Year-round touchpoints</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Revenue Growth</div>
                      <div className="text-sm text-muted-foreground">Premium service tiers</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-teal-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Expand Broker Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Insurance Module */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-blue-500 hover:border-l-8 bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      Insurance Solutions
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-xs text-muted-foreground">Claims Reduction</div>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  Insurance Solutions
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Transform risk management with proactive wellness solutions that reduce claims and improve member health outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Preventive Care</div>
                      <div className="text-sm text-muted-foreground">Reduce long-term costs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Risk Assessment</div>
                      <div className="text-sm text-muted-foreground">Data-driven insights</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Member Engagement</div>
                      <div className="text-sm text-muted-foreground">Wellness incentives</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Cost Savings</div>
                      <div className="text-sm text-muted-foreground">Lower premiums</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors text-white" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Optimize Insurance Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>


      {/* Key Benefits - Comprehensive Wellness Ecosystem */}
      <section id="benefits" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Complete Wellness Suite</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erakulis gives you all the tools your business needs to reduce costs, mitigate risks, and maximize organizational performance.
            </p>
          </div>

          {/* Asymmetric Grid Layout - All 7 Elements */}
          <div className="space-y-8">
            {/* Top Row - Asymmetric Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
              {/* Left Column - Tall Card (Real-Time Analytics) */}
              <div className="lg:row-span-2 relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-6 self-start">
                    <BarChart3 className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    Real-Time Analytics
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                    Health-Monitor Dashboard provides visibility into stress-score reductions, engagement rates, and overall Erakulis Impact Index.
                  </p>

                  {/* Badge */}
                  <div className="mt-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
                      Data-Driven Insights
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Top - Large Card (400+ Integrations) */}
              <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white mb-4 self-start">
                    <Users className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    400+ Integrations
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Seamless integration with wearables and health apps ensures high adoption and continuous engagement.
                  </p>

                  {/* Badge */}
                  <div className="mt-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 border border-purple-200">
                      Universal Compatibility
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Bottom Left - Personalized Journey */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-6 h-full flex flex-col">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white mb-3 self-start">
                    <Star className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    Personalized Journey
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    AI-driven meal and workout plans plus rich multimedia mental-wellness content.
                  </p>

                  <div className="mt-3 text-xs text-muted-foreground">
                    AI-Powered
                  </div>
                </div>
              </div>

              {/* Right Column Bottom Right - Dedicated Wellness App */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-6 h-full flex flex-col">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 text-white mb-3 self-start">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    Dedicated Wellness App
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Complete mobile application for wellness tracking, goal setting, and progress monitoring.
                  </p>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600" style={{
                      width: '90%'
                    }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Three Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Online Appointments */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 text-white mb-4 self-start">
                    <Calendar className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    Online Appointments
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Direct access to certified wellness experts for fitness and nutrition consultations.
                  </p>

                  {/* Badge */}
                  <div className="mt-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 border border-indigo-200">
                      Expert Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Exclusive Perks */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 text-white mb-4 self-start">
                    <Gift className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    Exclusive Perks
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Access to exclusive benefits from ERAKULIS network of wellness and lifestyle partners.
                  </p>

                  {/* Badge */}
                  <div className="mt-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700 border border-pink-200">
                      Premium Network
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated Engagement Program */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white mb-4 self-start">
                    <Target className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    Dedicated Engagement Program
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Customized engagement strategies to maximize participation and maintain long-term wellness habits.
                  </p>

                  {/* Special indicator */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700 border border-teal-200">
                      Long-term Success
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      95%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Performance-based pricing that ensures you only pay when we deliver measurable results.
            </p>
          </div>
          
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
                <Button className="w-full mt-6" variant="outline" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Success Fee */}
            <Card className="relative overflow-hidden border-2 border-primary hover:shadow-xl transition-all duration-300 scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">Pay on Results</Badge>
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
                <Button className="w-full mt-6" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
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
                <Button className="w-full mt-6" variant="outline" onClick={() => window.open('https://calendar.app.google/XknyK8tYZCsQiC4Q8', '_blank')}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floater Banner */}
      <FloaterBanner />
    </div>
  );
};

export default Index;