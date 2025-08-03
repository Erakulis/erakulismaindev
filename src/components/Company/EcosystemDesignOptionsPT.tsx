import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Users, BarChart3, Target, Calendar, Briefcase, Shield, Activity, Apple, Brain, Gift, Moon, Heart, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

// Design Option 2: Hero Background with Overlay Features
export const EcosystemDesignOption2PT = () => {
  const [selectedProduct, setSelectedProduct] = useState<"pro" | "mobile">("pro");

  const productContent = {
    pro: {
      title: "Erakulis PRO",
      subtitle: "Plataforma Profissional",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      description: "Capacite profissionais de fitness e nutrição com gestão avançada de clientes, criação de programas personalizados e análises abrangentes.",
      features: [
        "Centro de Gestão de Clientes",
        "Dashboard de Análises Avançado", 
        "Construtor de Programas Personalizados",
        "Sistema de Agendamento Inteligente",
        "Ferramentas de Gestão de Negócios",
        "Conformidade e Segurança"
      ]
    },
    mobile: {
      title: "Erakulis Mobile",
      subtitle: "Plataforma de Experiência do Utilizador",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      description: "Transforme a sua jornada de bem-estar com planos personalizados, acompanhamento em tempo real e motivação que o mantém em movimento.",
      features: [
        "Acompanhamento de Atividade em Tempo Real",
        "Coach de Nutrição com IA",
        "Apoio ao Bem-Estar Mental", 
        "Sistema de Recompensas Gamificado",
        "Otimização do Sono",
        "Comunidade de Bem-Estar"
      ]
    }
  };

  const current = productContent[selectedProduct];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/90 p-2 rounded-full border border-gray-200 shadow-lg">
          <ToggleGroup type="single" value={selectedProduct} onValueChange={(value) => value && setSelectedProduct(value as "pro" | "mobile")} className="gap-0">
            <ToggleGroupItem value="pro" className="rounded-full px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              PRO
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" className="rounded-full px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-white">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Hero Background */}
      <div className="relative rounded-3xl overflow-hidden h-[600px]">
        <img 
          src={current.image} 
          alt={current.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Info */}
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                {current.subtitle}
              </Badge>
              <h3 className="text-4xl font-bold mb-4">{current.title}</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {current.description}
              </p>
              <Button size="lg" variant="secondary" className="text-lg">
                {selectedProduct === "pro" ? "Explorar Plataforma PRO" : "Descarregar App Mobile"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: Features List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6">Funcionalidades Principais</h4>
              <div className="space-y-4">
                {current.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Design Option 3: Product Showcase Cards
export const EcosystemDesignOption3PT = () => {
  const [selectedProduct, setSelectedProduct] = useState<"pro" | "mobile">("pro");

  const productShowcase = {
    pro: {
      title: "Erakulis PRO",
      subtitle: "Para Profissionais de Fitness",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Profissionais Ativos", value: "500+" },
        { label: "Clientes Geridos", value: "10k+" },
        { label: "Taxa de Sucesso", value: "95%" }
      ],
      features: [
        { icon: <Users className="h-6 w-6" />, title: "Gestão de Clientes", desc: "Gestão completa do ciclo de vida do cliente" },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Análises", desc: "Insights de desempenho em tempo real" },
        { icon: <Target className="h-6 w-6" />, title: "Acompanhamento de Objetivos", desc: "Monitorização automática do progresso" },
        { icon: <Calendar className="h-6 w-6" />, title: "Agendamento", desc: "Sistema inteligente de marcações" }
      ]
    },
    mobile: {
      title: "Erakulis Mobile",
      subtitle: "Para Entusiastas da Saúde",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Utilizadores Ativos", value: "50k+" },
        { label: "Treinos Concluídos", value: "1M+" },
        { label: "Taxa de Satisfação", value: "98%" }
      ],
      features: [
        { icon: <Activity className="h-6 w-6" />, title: "Acompanhamento de Atividade", desc: "Monitorização de fitness em tempo real" },
        { icon: <Apple className="h-6 w-6" />, title: "Nutrição", desc: "Planeamento de refeições com IA" },
        { icon: <Brain className="h-6 w-6" />, title: "Saúde Mental", desc: "Mindfulness e meditação" },
        { icon: <Gift className="h-6 w-6" />, title: "Recompensas", desc: "Sistema de conquistas gamificado" }
      ]
    }
  };

  const current = productShowcase[selectedProduct];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-xl">
          <ToggleGroup type="single" value={selectedProduct} onValueChange={(value) => value && setSelectedProduct(value as "pro" | "mobile")} className="gap-1">
            <ToggleGroupItem value="pro" className="rounded-lg px-8 py-3 data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Briefcase className="mr-2 h-5 w-5" />
              Erakulis PRO
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" className="rounded-lg px-8 py-3 data-[state=on]:bg-white data-[state=on]:shadow-sm">
              <Smartphone className="mr-2 h-5 w-5" />
              Erakulis Mobile
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Product Card */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-full">
            <div className="relative h-80">
              <img 
                src={current.image} 
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-white/20 text-white border-white/30 mb-3">
                  {current.subtitle}
                </Badge>
                <h3 className="text-3xl font-bold">{current.title}</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {current.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button className="w-full" size="lg">
                {selectedProduct === "pro" ? "Iniciar Teste Gratuito" : "Descarregar Agora"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Column */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-center">Funcionalidades Principais</h4>
          {current.features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{feature.title}</h5>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Design Option 4: Inspired by Reference Image - 2x2 Grid Layout
export const EcosystemDesignOption4PT = () => {
  const wellnessAreas = [
    {
      title: "Atividade Física",
      highlight: "Estilo de vida ativo",
      description: "Planos de treino personalizados que se adaptam aos horários e preferências dos utilizadores, mantendo-os em movimento rumo aos seus objetivos.",
      icon: <Activity className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      badge: "Progresso: 85%"
    },
    {
      title: "Bem-Estar Mental",
      highlight: "Mente clara",
      description: "Apoio completo à saúde mental, incluindo práticas de mindfulness.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      progress: true,
      badge: "Sessões diárias"
    },
    {
      title: "Nutrição",
      highlight: "Alimentação saudável",
      description: "Planeamento de refeições e acompanhamento nutricional com tecnologia de IA, que torna a alimentação saudável mais simples e sustentável.",
      icon: <Apple className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
      badge: "Refeições registadas"
    },
    {
      title: "Sono e Recuperação",
      highlight: "Descanso de qualidade",
      description: "Ferramentas para otimização do sono e acompanhamento da recuperação.",
      icon: <Moon className="h-8 w-8" />,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      progress: true,
      badge: "Pontuação do sono: 92%"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Asymmetric Grid Layout: Left tall + Right split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[600px]">
        {/* Left Column - Tall Card (Physical Activity) */}
        <div className="h-[300px] lg:h-auto lg:row-span-2 relative overflow-hidden rounded-2xl bg-blue-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
              alt="Atividade Física"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative p-8 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-gray-700 border border-gray-200">
                Progresso: 85%
              </div>
            </div>

            {/* Title with highlight */}
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Atividade</span>
              <span className="text-gray-800"> Física</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-lg">
              Planos de treino personalizados que se adaptam aos horários e preferências dos utilizadores, mantendo-os em movimento rumo aos seus objetivos.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white">
                <Activity className="h-10 w-10" />
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500">Estado</div>
                <div className="font-medium text-gray-700">Ativo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Top - Large Card (Nutrition) */}
        <div className="h-[300px] lg:h-auto lg:col-span-2 relative overflow-hidden rounded-2xl bg-green-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80"
              alt="Nutrição"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative p-8 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-gray-700 border border-gray-200">
                Refeições registadas
              </div>
            </div>

            {/* Title with highlight */}
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-pink-500">Nutrição</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
              Planeamento de refeições e acompanhamento nutricional com tecnologia de IA, que torna a alimentação saudável mais simples e sustentável.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white">
                <Apple className="h-8 w-8" />
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Estado</div>
                <div className="font-medium text-gray-700">Ativo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Bottom Left - Mental Wellness */}
        <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-purple-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Content */}
          <div className="relative p-6 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-3">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200">
                Sessões diárias
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              <span className="text-pink-500">Bem-Estar</span>
              <span className="text-gray-800"> Mental</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
              Apoio completo à saúde mental, incluindo práticas de mindfulness.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                  style={{ width: '75%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Bottom Right - Sleep & Recovery */}
        <div className="h-[300px] lg:h-auto relative overflow-hidden rounded-2xl bg-indigo-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Content */}
          <div className="relative p-6 h-full flex flex-col">
            {/* Badge */}
            <div className="mb-3">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200">
                Pontuação do sono: 92%
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              <span className="text-pink-500">Sono e</span>
              <span className="text-gray-800"> Recuperação</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
              Ferramentas para otimização do sono e acompanhamento da recuperação.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 text-white">
                <Moon className="h-6 w-6" />
              </div>
              <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600"
                  style={{ width: '92%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button size="lg" className="text-lg px-8 py-4">
          Descubra O Nosso Ecosistema de Bem-Estar
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};