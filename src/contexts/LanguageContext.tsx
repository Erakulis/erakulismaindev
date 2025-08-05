import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt' | 'pt-br' | 'fr' | 'es';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (text: string) => Promise<string>;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Simple translation cache to avoid repeated API calls
const translationCache = new Map<string, string>();

// Language persistence key
const LANGUAGE_STORAGE_KEY = 'erakulis_selected_language';

// Get initial language from localStorage or default to English
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && ['en', 'pt', 'pt-br', 'fr', 'es'].includes(savedLanguage)) {
      return savedLanguage as Language;
    }
  }
  return 'en';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);
  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Persist language selection to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  };

  const translate = async (text: string): Promise<string> => {
    // Return original text if English or empty
    if (currentLanguage === 'en' || !text.trim()) {
      return text;
    }

    // Check cache first
    const cacheKey = `${text}_${currentLanguage}`;
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey)!;
    }

    try {
      setIsTranslating(true);

      // Simple translation mapping for common terms
      const commonTranslations: Record<Language, Record<string, string>> = {
        'pt': {
          'Home': 'Início',
          'About': 'Acerca de',
          'Features': 'Funcionalidades',
          'Contact': 'Contacto',
          'Download': 'Transferir',
          'Start Free': 'Começe Grátis',
          'Learn More': 'Saber Mais',
          'Sign Up': 'Registar',
          'Login': 'Entrar',
          'The App': 'A Aplicação',
          'I\'m a Fitness PRO': 'Sou profissional de fitness',
          'I\'m a Company': 'Sou uma empresa',
          'Download our app': 'Transferir a nossa aplicação',
          'Problem Statement': 'O Problema',
          'Why Erakulis': 'Porquê Erakulis',
          'Medicine promised longer, healthier lives but delivered longer, sicker ones.': 'A medicina prometeu uma vida mais longa e saudável, mas entregou vidas mais longas e mais doentes.',
          'Erakulis empowers you to live longer but healthier by helping you to eat better, stay active and lower your stress.': 'A Erakulis capacita-te a viver mais e mais saudável, ajudando-te a comer melhor, permanecer activo e reduzir stress.',
          'Erakulis guides you to': 'A Erakulis guia-te para',
          'Take control of your health with our comprehensive approach to wellness': 'Assume o controlo da tua saúde com a nossa abordagem abrangente ao bem-estar',
          'Fitness, Nutrition': 'Fitness, Nutrição',
          'and': 'e',
          'Mind': 'Mente',
          'United': 'Unidos',
          'Our approach brings fitness, nutrition, and mental well-being together, creating a powerful foundation for lasting health.': 'A nossa abordagem une fitness, nutrição e bem-estar mental, criando uma base poderosa para uma saúde duradoura.',
          'Nutrition Power Features': 'Funcionalidades Avançadas de Nutrição',
          'Mental Wellbeing Features': 'Funcionalidades de Bem-estar Mental',
          'Connect All Your': 'Liga Todos os Teus',
          'Wearables & Apps': 'Wearables e Apps',
          'Smart Nutrition Tracking': 'Rastreamento Inteligente de Nutrição',
          'Mental Wellness Support': 'Apoio ao Bem-estar Mental',
          'The complete wellness app that transforms your health journey. Live healthier, live longer with Erakulis.': 'A aplicação completa de bem-estar que transforma a tua jornada de saúde. Vive mais saudável, vive mais tempo com a Erakulis.',
          'Privacy Policy': 'Política de Privacidade',
          'Terms & Conditions': 'Termos e Condições',
          'Cookies Policy': 'Política de Cookies',
          'Transform Wellbeing Into': 'Transformar Bem-estar Em',
          'Measurable Business Results': 'Resultados de Negócio Mensuráveis',
          'Next-Generation Wellness Platform': 'Plataforma de Bem-estar de Nova Geração',
          'Erakulis Transforms': 'A Erakulis Transforma',
          'Live Healthier,': 'Viva Mais Saudável,',
          'Live Longer': 'Viva Mais Tempo',
          'Trainers Who Want': 'Treinadores Que Querem',
          'Real Results': 'Resultados Reais',
          'Plan, track and transform your clients\' journey with Erakulis. The intelligent platform that syncs professionals and clients.': 'Planeia, acompanha e transforma a jornada dos teus clientes com a Erakulis. A plataforma inteligente que sincroniza profissionais e clientes.',
          'Start Now for Free': 'Começar Grátis',
          'Book DEMO with Specialist': 'Agendar DEMO com Especialista',
          '100% Free': '100% Grátis',
          '+4,000 Videos': '+4.000 Vídeos',
          'Unlimited Clients': 'Clientes Ilimitados',
          'Ready to Transform Your Business?': 'Pronto para Transformar o Seu Negócio?',
          'Discover the smartest way to manage clients and plans.': 'Descobre a forma mais inteligente de gerir clientes e planos.',
          'Create Free Account': 'Criar Conta Grátis',
          'No commitment. No limitations': 'Sem compromisso. Sem limitações',
          'Get Started': 'Começar',
          'Schedule DEMO': 'Agendar DEMO',
          'Personalized demo with specialist': 'Demo personalizada com especialista',
          'Book DEMO': 'Agendar DEMO',
          'Erakulis Academy': 'Academia Erakulis',
          'Tutorials and best practices': 'Tutoriais e melhores práticas',
          'Discover': 'Descobrir',
          'No cost': 'Sem custo',
          'Why Choose': 'Porquê Escolher',
          'Erakulis PRO?': 'Erakulis PRO?',
          'Three fundamental pillars that transform your work': 'Três pilares fundamentais que transformam o seu trabalho',
          'Efficient Work': 'Trabalho Eficiente',
          'Better Service': 'Melhor Serviço',
          'More Retention': 'Mais Retenção',
          'Solutions by Industry': 'Soluções por Indústria',
          'Smart Wellness Integration': 'Integração Inteligente de Bem-estar',
          'Global Wellness Ambassador': 'Embaixador Global de Bem-estar',
          'Founder Cristiano Ronaldo': 'Fundador Cristiano Ronaldo',
          'Cristiano Ronaldo\'s Formula for': 'Fórmula do Cristiano Ronaldo para',
          'Corporate Well-Being & Success': 'Bem-estar Corporativo e Sucesso',
          'Erakulis Power Features': 'Funcionalidades Poderosas da Erakulis',
          'Our platform offers a comprehensive range of powerful features designed to elevate your wellness experience across fitness, nutrition, and mental health.': 'A nossa plataforma oferece uma gama abrangente de funcionalidades poderosas concebidas para elevar a sua experiência de bem-estar em fitness, nutrição e saúde mental.',
          'What Client say about our Business': 'O que os Clientes dizem sobre o nosso Negócio',
          'Your Complete Wellness Suite': 'A Sua Suite Completa de Bem-estar',
          'Erakulis gives you all the tools your business needs to reduce costs, mitigate risks, and maximize organizational performance.': 'A Erakulis dá-lhe todas as ferramentas que o seu negócio precisa para reduzir custos, mitigar riscos e maximizar o desempenho organizacional.',
          'Our Model': 'O Nosso Modelo',
          'Tailored Wellness Solutions for Every Industry': 'Soluções de Bem-estar Personalizadas para Cada Indústria',
          'ERAKULIS adapts to your unique challenges across diverse sectors, delivering measurable results that transform workforce well-being into tangible business outcomes.': 'A ERAKULIS adapta-se aos seus desafios únicos em sectores diversificados, proporcionando resultados mensuráveis que transformam o bem-estar da força de trabalho em resultados de negócio tangíveis.',
          'Where professional expertise meets user-friendly wellness. Discover how our seamlessly integrated ecosystem creates lasting impact.': 'Onde a experiência profissional encontra o bem-estar fácil de usar. Descubra como o nosso ecossistema perfeitamente integrado cria um impacto duradouro.',
          'Workouts made easier and faster': 'Exercícios mais fáceis e rápidos',
          'Download now and begin your Journey to Better Health': 'Baixe agora e comece sua Jornada para uma Saúde Melhor',
          'Start': 'Começar',
          'Free': 'Grátis',
          'Upgrade when ready': 'Atualize quando estiver pronto',
          'Erakulis for Companies': 'Erakulis para Empresas',
          'Schedule Demo': 'Agendar Demo',
          'Traditional wellness programs failed to deliver results. Erakulis\' digital wellness solution delivers lasting impact on people\'s health and key business KPIs, backed by data & technology, and a holistic approach.': 'Os programas tradicionais de bem-estar falharam em entregar resultados. A solução digital de bem-estar da Erakulis proporciona um impacto duradouro na saúde das pessoas e nos KPIs-chave do negócio, apoiada por dados, tecnologia e uma abordagem holística.',
          'Erakulis is the only digital wellness solution that integrates physical activity, mental, nutrition, stress and sleep in one single experience.': 'A Erakulis é a única solução digital de bem-estar que integra atividade física, mental, nutrição, stress e sono numa única experiência.',
          'Cristiano Ronaldo\'s Formula for Corporate Well-Being & Success': 'Fórmula do Cristiano Ronaldo para Bem-estar Corporativo e Sucesso',
          'Companies': 'Empresas',
          'People': 'Pessoas',
          'Frequently Asked Questions': 'Perguntas Frequentes',
          'What is this fitness app?': 'O que é esta aplicação de fitness?',
          'This app provides a comprehensive fitness solution with personalized workout plans, delicious recipes, and a supportive community to help you reach your health goals.': 'Esta aplicação oferece uma solução abrangente de fitness com planos de treino personalizados, receitas deliciosas e uma comunidade de apoio para te ajudar a alcançar os teus objetivos de saúde.',
          'Who is this app for?': 'Para quem é esta aplicação?',
          'This app caters to everyone from beginners to seasoned athletes. Whether you\'re looking to lose weight, gain muscle, improve overall fitness, or train for a specific sport, we have something for you.': 'Esta aplicação serve para todos, desde iniciantes a atletas experientes. Seja para perder peso, ganhar músculo, melhorar a forma física geral ou treinar para um desporto específico, temos algo para ti.',
          'What are the benefits of using this fitness app?': 'Quais são os benefícios de usar esta aplicação de fitness?',
          'Enjoy personalized workout plans tailored to your fitness level and goals. Access a vast library of delicious and healthy recipes. Track your progress with detailed statistics and celebrate your achievements. Join a supportive community of like-minded individuals.': 'Desfruta de planos de treino personalizados adaptados ao teu nível de fitness e objetivos. Acede a uma vasta biblioteca de receitas deliciosas e saudáveis. Acompanha o teu progresso com estatísticas detalhadas e celebra as tuas conquistas. Junta-te a uma comunidade de apoio de pessoas com interesses semelhantes.',
          'What devices is this app compatible with?': 'Com que dispositivos é compatível esta aplicação?',
          'This app is available on both iOS and Android devices.': 'Esta aplicação está disponível para dispositivos iOS e Android.',
          'Does the app require an internet connection?': 'A aplicação requer uma ligação à internet?',
          'While an internet connection is required for initial setup and syncing, you can access most features offline, including workouts and recipes.': 'Embora seja necessária uma ligação à internet para a configuração inicial e sincronização, podes aceder à maioria das funcionalidades offline, incluindo treinos e receitas.',
          'Is there a free trial or free version available?': 'Há um período de teste gratuito ou versão gratuita disponível?',
          'Yes, we offer a 7-day free trial to experience the premium features. After the trial, you can choose from various subscription options to continue your fitness journey.': 'Sim, oferecemos um período de teste gratuito de 7 dias para experimentares as funcionalidades premium. Após o período de teste, podes escolher entre várias opções de subscrição para continuares a tua jornada de fitness.',
          'What type of workouts are included in the app?': 'Que tipo de treinos estão incluídos na aplicação?',
          'Explore a wide variety of workouts, including strength training, cardio, yoga, HIIT, and more. Our expert trainers design each workout to challenge and motivate you.': 'Explora uma grande variedade de treinos, incluindo treino de força, cardio, yoga, HIIT e muito mais. Os nossos treinadores especialistas desenham cada treino para te desafiar e motivar.',
          'Does the app provide nutrition guidance?': 'A aplicação fornece orientação nutricional?',
          'Absolutely! This app offers a vast collection of healthy and delicious recipes, meal plans, and nutritional guidance to support your fitness goals.': 'Absolutamente! Esta aplicação oferece uma vasta coleção de receitas saudáveis e deliciosas, planos de refeições e orientação nutricional para apoiar os teus objetivos de fitness.',
          'Choose Your Plan': 'Escolhe o Teu Plano',
          'Begin your wellness journey with our free plan, then unlock the full potential of Erakulis with premium features.': 'Inicia a tua jornada de bem-estar com o nosso plano gratuito, depois desbloqueia todo o potencial da Erakulis com funcionalidades premium.',
          'Free Plan': 'Plano Gratuito',
          'Forever free': 'Gratuito para sempre',
          'Get Started Free': 'Começar Grátis',
          'What\'s included:': 'O que está incluído:',
          'Daily Check-ins': 'Check-ins Diários',
          'Basic Workouts': 'Treinos Básicos',
          'Nutrition Tracking': 'Rastreamento Nutricional',
          'AI Food Scanner': 'Scanner de Comida AI',
          'Personalized Plans': 'Planos Personalizados',
          'Guided Meditation': 'Meditação Guiada',
          'Wearable Integration': 'Integração com Wearables',
          'Advanced Analytics': 'Análises Avançadas',
          'Custom Recipes': 'Receitas Personalizadas',
          'Priority Support': 'Suporte Prioritário',
          'Most Popular': 'Mais Popular',
          'Premium Plan': 'Plano Premium',
          'per month': 'por mês',
          'or €99.90/year (save 17%)': 'ou €99.90/ano (poupa 17%)',
          'Start Free Trial': 'Iniciar Período de Teste Gratuito',
          'Everything in Free, plus:': 'Tudo no Gratuito, mais:',
          'Premium': 'Premium',
          '14-day free trial': 'Período de teste gratuito de 14 dias',
          'No commitment. Cancel anytime during trial period.': 'Sem compromisso. Cancela a qualquer momento durante o período de teste.',
          'Trusted by passionate users worldwide': 'Confiado por utilizadores apaixonados em todo o mundo',
          'Company Details': 'Detalhes da Empresa',
          'Customize the parameters to see your specific ROI calculation': 'Personalize os parâmetros para ver o seu cálculo específico de ROI',
          'Number of Employees': 'Número de Funcionários',
          'Average Salary ($)': 'Salário Médio ($)',
          'Current Absenteeism Rate (%)': 'Taxa Atual de Absentismo (%)',
          'Healthcare Cost per Employee ($)': 'Custo de Saúde por Funcionário ($)',
          'Annual ROI Summary': 'Resumo Anual do ROI',
          'Net Annual Savings': 'Poupanças Líquidas Anuais',
          'Return on Investment': 'Retorno sobre Investimento',
          'Investment Cost': 'Custo do Investimento',
          'Total Savings': 'Poupanças Totais',
          'Savings Breakdown': 'Detalhamento das Poupanças',
          'Ready to Achieve These Results?': 'Pronto para Alcançar Estes Resultados?',
          'Schedule a personalized demo to see how Erakulis can transform your organization\'s wellness ROI': 'Agende uma demonstração personalizada para ver como a Erakulis pode transformar o ROI de bem-estar da sua organização',
          'Schedule ROI Demo': 'Agendar Demo ROI',
          'Industry-Specific Solutions': 'Soluções Específicas por Indústria',
          'Tech Consultancies': 'Consultorias Tecnológicas',
          'Absenteeism Reduction': 'Redução de Absentismo',
          'HR Leaders': 'Líderes de RH',
          'Combat employee absenteeism, burnout, and mental health challenges with comprehensive wellness solutions': 'Combata o absentismo dos funcionários, burnout e desafios de saúde mental com soluções abrangentes de bem-estar',
          'Personal Plans': 'Planos Pessoais',
          'Fitness & mental health': 'Fitness e saúde mental',
          '400+ Integrations': '400+ Integrações',
          'Wearables & health apps': 'Wearables e apps de saúde',
          'Productivity Boost': 'Aumento de Produtividade',
          'Enhanced retention rates': 'Taxas de retenção melhoradas',
          'Real-time Analytics': 'Análises em Tempo Real',
          'Health-Monitor Dashboard': 'Dashboard de Monitorização de Saúde',
          'Explore HR Solutions': 'Explorar Soluções de RH',
          'Manufacturing': 'Manufatura',
          'Operations Managers': 'Gestores de Operações',
          'Address workforce sedentarism and health-related productivity issues with targeted interventions': 'Abordar o sedentarismo da força de trabalho e questões de produtividade relacionadas à saúde com intervenções direcionadas'
        },
        'pt-br': {
          'Home': 'Início',
          'About': 'Sobre',
          'Features': 'Recursos',
          'Contact': 'Contato',
          'Download': 'Baixar',
          'Get Started': 'Começar',
          'Start Free': 'Começe Grátis',
          'Learn More': 'Saiba Mais',
          'Sign Up': 'Cadastrar',
          'Login': 'Entrar',
          'The App': 'Aplicativo',
          'I\'m a Fitness PRO': 'Sou profissional de fitness',
          'I\'m a Company': 'Sou uma empresa',
          'Download our app': 'Faça Download da App',
          'Problem Statement': 'O Problema',
          'Why Erakulis': 'Porquê Erakulis',
          'Medicine promised longer, healthier lives but delivered longer, sicker ones.': 'A medicina prometeu uma vida mais longa e saudável, mas entregou vidas mais longas e mais doentes.',
          'Erakulis empowers you to live longer but healthier by helping you to eat better, stay active and lower your stress.': 'A Erakulis capacita-te a viver mais e mais saudável, ajudando-te a comer melhor, permanecer activo e reduzir stress.',
          'Privacy Policy': 'Política de Privacidade',
          'Terms & Conditions': 'Termos e Condições',
          'Cookies Policy': 'Política de Cookies',
          'Transform Wellbeing Into': 'Transformar Bem-estar Em',
          'Measurable Business Results': 'Resultados de Negócio Mensuráveis',
          'Next-Generation Wellness Platform': 'Plataforma de Bem-estar de Nova Geração',
          'Erakulis Transforms': 'A Erakulis Transforma',
          'Live Healthier,': 'Viva Mais Saudável,',
          'Live Longer': 'Viva Mais Tempo'
        },
        'fr': {
          'Home': 'Accueil',
          'About': 'À propos',
          'Features': 'Fonctionnalités',
          'Contact': 'Contact',
          'Download': 'Télécharger',
          'Get Started': 'Commencer',
          'Start Free': 'Commencer',
          'Learn More': 'En savoir plus',
          'Sign Up': 'S\'inscrire',
          'Login': 'Connexion',
          'Privacy Policy': 'Politique de confidentialité',
          'Terms & Conditions': 'Conditions générales',
          'Cookies Policy': 'Politique des cookies'
        },
        'es': {
          'Home': 'Inicio',
          'About': 'Acerca de',
          'Features': 'Características',
          'Contact': 'Contacto',
          'Download': 'Descargar',
          'Get Started': 'Empezar',
          'Learn More': 'Saber más',
          'Sign Up': 'Registrarse',
          'Login': 'Iniciar sesión',
          'Privacy Policy': 'Política de privacidad',
          'Terms & Conditions': 'Términos y condiciones',
          'Cookies Policy': 'Política de cookies',
          
          // Company Hero Section
          'Erakulis for Companies': 'Erakulis para Empresas',
          'Traditional wellness programs failed to deliver results. Erakulis\' digital wellness solution delivers lasting impact on people\'s health and key business KPIs, backed by data & technology, and a holistic approach.': 'Os programas de bem-estar tradicionais falharam em entregar resultados. A solução digital de bem-estar da Erakulis oferece impacto duradouro na saúde das pessoas e KPIs empresariais chave, suportada por dados & tecnologia, e uma abordagem holística.',
           'Only applied when pre-defined KPIs are met. You pay only when we deliver measurable health and productivity impact.': 'Aplicada apenas quando KPIs pré-definidos são atingidos. Você paga apenas quando entregamos impacto mensurável na saúde e produtividade.',
           'Reduced Absenteeism': 'Absenteísmo Reduzido',
           
           // Key Features section
           'Key Features': 'Características Principais',
           'Everything you need to succeed': 'Tudo o que precisa para ter sucesso',
           'Enterprise Ready': 'Pronto para Empresas',
           'Consumer Friendly': 'Amigável ao Consumidor',
           'HIPAA Compliant': 'Compatível com HIPAA',
           'Cross Platform': 'Multiplataforma',
           
           // Professional services features
           'Certified Wellness Coaches': 'Treinadores de Bem-estar Certificados',
           'Access to licensed nutritionists, fitness experts, and mental health professionals providing personalized guidance for your workforce.': 'Acesso a nutricionistas licenciados, especialistas em fitness e profissionais de saúde mental que fornecem orientação personalizada para a sua força de trabalho.',
           'Expert-Driven Health Assessments': 'Avaliações de Saúde Orientadas por Especialistas',
           'Human professionals analyze employee wellness data to provide personalized recommendations and intervention strategies.': 'Profissionais humanos analisam dados de bem-estar dos funcionários para fornecer recomendações personalizadas e estratégias de intervenção.',
           'Human-Curated Wellness Programs': 'Programas de Bem-estar Curados por Humanos',
           'Experienced wellness experts design and adapt corporate programs based on your team\'s specific needs and health goals.': 'Especialistas em bem-estar experientes projetam e adaptam programas corporativos baseados nas necessidades específicas da sua equipe e objetivos de saúde.',
           'Live Expert Consultations': 'Consultas ao Vivo com Especialistas',
           'Scheduled one-on-one sessions with certified professionals for nutrition counseling, fitness coaching, and mental wellness support.': 'Sessões individuais agendadas com profissionais certificados para aconselhamento nutricional, treino de fitness e apoio ao bem-estar mental.',
           'Dedicated Wellness Specialists': 'Especialistas em Bem-estar Dedicados',
           'Assigned human wellness coordinators who understand your company culture and employee needs for optimal program success.': 'Coordenadores de bem-estar humanos atribuídos que compreendem a cultura da sua empresa e as necessidades dos funcionários para o sucesso ideal do programa.',
           'Professional Health Oversight': 'Supervisão Profissional de Saúde',
           'Medical professionals and certified wellness experts ensure all programs meet safety standards and health regulations.': 'Profissionais médicos e especialistas em bem-estar certificados garantem que todos os programas atendam aos padrões de segurança e regulamentações de saúde.',
           
           // Stats section
           'Active Users': 'Usuários Ativos',
           'Clients Managed': 'Clientes Gerenciados',
           'Workouts Done': 'Treinos Realizados',
           'Success Rate': 'Taxa de Sucesso',
           
           // ROI Simulator translations
           'Healthcare Cost Reduction': 'Redução de Custos de Saúde',
           'Productivity Gains': 'Ganhos de Produtividade',
           'Reduced Turnover': 'Redução de Rotatividade',
           
           // Percentages and reductions
           '35% reduction': '35% redução',
           '25% reduction': '25% redução', 
           '15% increase': '15% aumento',
           '20% reduction': '20% redução',
           
           // CTA and call to action texts
           'Ready to Transform Your Wellness?': 'Pronto para Transformar o Seu Bem-estar?',
           'Schedule a discovery call to learn how Erakulis Mobile can revolutionize your health journey': 'Agende uma chamada de descoberta para saber como o Erakulis Mobile pode revolucionar a sua jornada de saúde',
           'Schedule Discovery Call': 'Agendar Chamada de Descoberta',
           
           // Pricing/Model Section
           'Our Model': 'Nosso Modelo',
           'Performance-based pricing that ensures you only pay when we deliver measurable results.': 'Preços baseados em performance que garantem que você só paga quando entregamos resultados mensuráveis.',
           'Base Fee': 'Taxa Base',
           'Covers platform access, onboarding, technical support, and reporting tools. Ensures foundational delivery and full operational readiness from day one.': 'Cobre acesso à plataforma, integração, suporte técnico e ferramentas de relatório. Garante entrega fundamental e prontidão operacional completa desde o primeiro dia.',
           'Pay on Results': 'Pagar por Resultados',
           'Success Fee': 'Taxa de Sucesso',
           // Additional benefits features  
           'Real-Time Analytics': 'Análises em Tempo Real',
           'Health-Monitor Dashboard provides visibility into stress-score reductions, engagement rates, and overall Erakulis Impact Index.': 'O Painel Health-Monitor oferece visibilidade sobre reduções de pontuação de stress, taxas de envolvimento e o Índice de Impacto Erakulis geral.',
           'Data-Driven Insights': 'Insights Baseados em Dados',
           '400+ Integrations': '400+ Integrações',
           'Seamless integration with wearables and health apps ensures high adoption and continuous engagement.': 'A integração perfeita com wearables e aplicações de saúde garante alta adoção e envolvimento contínuo.',
           'Universal Compatibility': 'Compatibilidade Universal',
           'Personalized Journey': 'Jornada Personalizada',
           'AI-driven meal and workout plans plus rich multimedia mental-wellness content.': 'Planos de refeições e exercícios orientados por IA mais conteúdo multimédia rico de bem-estar mental.',
           'AI-Powered': 'Alimentado por IA',
           'Dedicated Wellness App': 'Aplicação Dedicada de Bem-estar',
           'Complete mobile application for wellness tracking, goal setting, and progress monitoring.': 'Aplicação móvel completa para rastreamento de bem-estar, definição de objetivos e monitoramento de progresso.',
           'Online Appointments': 'Consultas Online',
           'Direct access to certified wellness experts for fitness and nutrition consultations.': 'Acesso direto a especialistas certificados em bem-estar para consultas de fitness e nutrição.',
           'Expert Support': 'Suporte Especializado',
           'Exclusive Perks': 'Vantagens Exclusivas',
           'Access to exclusive benefits from ERAKULIS network of wellness and lifestyle partners.': 'Acesso a benefícios exclusivos da rede ERAKULIS de parceiros de bem-estar e estilo de vida.',
           'Premium Network': 'Rede Premium',
           'Dedicated Engagement Program': 'Programa de Envolvimento Dedicado',
           'Customized engagement strategies to maximize participation and maintain long-term wellness habits.': 'Estratégias de envolvimento personalizadas para maximizar a participação e manter hábitos de bem-estar a longo prazo.',
           'Long-term Success': 'Sucesso a Longo Prazo',
           
           // Wellness Platform Section
          'Erakulis is the only digital wellness solution that integrates physical activity, mental, nutrition, stress and sleep in one single experience.': 'A Erakulis é a única solução digital de bem-estar que integra atividade física, mental, nutrição, stress e sono numa única experiência.',
          'Physical Activity': 'Atividade Física',
          'Personalized fitness routines that adapt to your schedule and preferences, keeping you moving towards your goals.': 'Rotinas de fitness personalizadas que se adaptam ao seu horário e preferências, mantendo-o em movimento em direção aos seus objetivos.',
          'AI-powered meal planning and nutrition tracking that makes healthy eating simple and sustainable.': 'Planeamento de refeições e rastreamento nutricional com IA que torna a alimentação saudável simples e sustentável.',
          'Mental Wellness': 'Bem-estar Mental',
          'Comprehensive mental health support including mindfulness.': 'Suporte abrangente de saúde mental incluindo mindfulness.',
          'Sleep & Recovery': 'Sono e Recuperação',
          'Sleep optimization tools and recovery tracking.': 'Ferramentas de otimização do sono e rastreamento de recuperação.',
          'Experience the Complete Ecosystem': 'Experimente o Ecossistema Completo',
          
          // Transformation Section
          'Daily Personalized Guidance': 'Orientação Personalizada Diária',
          'Tailored fitness, nutrition and mental-wellness plans.': 'Planos personalizados de fitness, nutrição e bem-estar mental.',
          'Personal Impact': 'Impacto Pessoal',
          'Motivation & Performance Uplift': 'Elevação da Motivação e Performance',
          'Gamified challenges and coach support to keep energy and output high.': 'Desafios gamificados e suporte de treinador para manter a energia e produtividade altas.',
          'Daily Feature': 'Funcionalidade Diária',
          'Long-Term Health & Quality of Life': 'Saúde a Longo Prazo e Qualidade de Vida',
          'Focus on sustainable habits, reducing chronic risk, improving longevity.': 'Foco em hábitos sustentáveis, reduzindo riscos crônicos, melhorando a longevidade.',
          'Lifestyle': 'Estilo de Vida',
          'Wellness Education': 'Educação em Bem-estar',
          'Access to expert knowledge on nutrition, fitness, mental health, and sustainable lifestyle habits.': 'Acesso ao conhecimento especializado em nutrição, fitness, saúde mental e hábitos de estilo de vida sustentáveis.',
          'Health Metrics Monitoring': 'Monitoramento de Métricas de Saúde',
          'Track and monitor +400 health metrics through wearable integration with comprehensive health reports.': 'Rastreie e monitore +400 métricas de saúde através da integração de wearables com relatórios de saúde abrangentes.',
          'Health Tech': 'Tecnologia de Saúde',
          'Wellness Savings & Benefits': 'Poupanças e Benefícios de Bem-estar',
          'Save on personal trainers, nutritionists, and get exclusive discounts on premium wellness products and services.': 'Poupe em personal trainers, nutricionistas, e obtenha descontos exclusivos em produtos e serviços premium de bem-estar.',
          'Premium Benefits': 'Benefícios Premium',
          
          // Smart Integration Section
          'Smart Wellness Integration': 'Integração Inteligente de Bem-estar',
          
          // Wellness Suite Section
          'Your Complete Wellness Suite': 'O Seu Pacote Completo de Bem-estar',
          'Erakulis gives you all the tools your business needs to reduce costs, mitigate risks, and maximize organizational performance.': 'A Erakulis oferece todas as ferramentas que o seu negócio precisa para reduzir custos, mitigar riscos e maximizar o desempenho organizacional.',
          'Real-Time Analytics': 'Análises em Tempo Real',
          'Health-Monitor Dashboard provides visibility into stress-score reductions, engagement rates, and overall Erakulis Impact Index.': 'O Painel Health-Monitor oferece visibilidade sobre reduções de stress, taxas de envolvimento e o Índice de Impacto Erakulis geral.',
          'Data-Driven Insights': 'Insights Baseados em Dados',
          '400+ Integrations': '400+ Integrações',
          'Seamless integration with wearables and health apps ensures high adoption and continuous engagement.': 'A integração perfeita com wearables e aplicações de saúde garante alta adoção e envolvimento contínuo.',
          'Universal Compatibility': 'Compatibilidade Universal',
          'Personalized Journey': 'Jornada Personalizada',
          'AI-driven meal and workout plans plus rich multimedia mental-wellness content.': 'Planos de refeições e treinos orientados por IA, além de conteúdo multimédia rico de bem-estar mental.',
          'AI-Powered': 'Impulsionado por IA',
          'Dedicated Wellness App': 'Aplicação Dedicada de Bem-estar',
          'Complete mobile application for wellness tracking, goal setting, and progress monitoring.': 'Aplicação móvel completa para rastreamento de bem-estar, definição de objetivos e monitorização de progresso.',
          'Online Appointments': 'Consultas Online',
          'Direct access to certified wellness experts for fitness and nutrition consultations.': 'Acesso direto a especialistas certificados em bem-estar para consultas de fitness e nutrição.',
          'Expert Support': 'Suporte Especializado',
          'Exclusive Perks': 'Vantagens Exclusivas',
          'Access to exclusive benefits from ERAKULIS network of wellness and lifestyle partners.': 'Acesso a benefícios exclusivos da rede de parceiros de bem-estar e estilo de vida da ERAKULIS.',
          'Premium Network': 'Rede Premium',
          'Dedicated Engagement Program': 'Programa de Envolvimento Dedicado',
          'Customized engagement strategies to maximize participation and maintain long-term wellness habits.': 'Estratégias de envolvimento personalizadas para maximizar a participação e manter hábitos de bem-estar a longo prazo.',
           'Long-term Success': 'Sucesso a Longo Prazo',
           
           // Pricing Model Section
           // Benefits Section - Your Complete Wellness Suite
          'Ready to Transform Your Business?': 'Pronto para Transformar o Seu Negócio?',
          'Schedule a discovery call to learn how Erakulis can support your business.': 'Agende uma chamada de descoberta para saber como a Erakulis pode apoiar o seu negócio.',
          
          // Industry Solutions Section - Additional translations
          'Tech Consultancies': 'Consultorias de Tecnologia',
          'Absenteeism Reduction': 'Redução de Absenteísmo',
          'HR Leaders': 'Líderes de RH',
          'Combat employee absenteeism, burnout, and mental health challenges with comprehensive wellness solutions': 'Combata o absenteísmo dos funcionários, burnout e desafios de saúde mental com soluções abrangentes de bem-estar',
          'Personalized Plans': 'Planos Personalizados',
          'Fitness & mental health': 'Fitness e saúde mental',
          'Productivity Boost': 'Aumento de Produtividade',
          'Enhanced retention rates': 'Taxas de retenção melhoradas',
          'Real-time Analytics': 'Análises em Tempo Real',
          'Health-Monitor Dashboard': 'Painel Monitor de Saúde',
          'Explore HR Solutions': 'Explorar Soluções de RH',
          
          'Manufacturing': 'Indústria',
          'Operations Managers': 'Gestores de Operações',
          'Address workforce sedentarism and health-related productivity issues with targeted interventions': 'Aborde o sedentarismo da força de trabalho e questões de produtividade relacionadas à saúde com intervenções direcionadas',
          'Combat Sedentarism': 'Combater Sedentarismo',
          'Active lifestyle programs': 'Programas de estilo de vida ativo',
          'Actionable Insights': 'Insights Acionáveis',
          'Wearable data analysis': 'Análise de dados de wearables',
          'Energy & Focus': 'Energia e Foco',
          'Increased productivity': 'Produtividade aumentada',
          'Safety Improvement': 'Melhoria da Segurança',
          'Reduced workplace injuries': 'Redução de lesões no local de trabalho',
          'Discover Manufacturing Solutions': 'Descobrir Soluções Industriais',
          
          'Startups': 'Startups',
          'Months to ROI': 'Meses para ROI',
          'Startup Founders': 'Fundadores de Startups',
          'Build a culture of wellness and address mental health challenges while scaling your team': 'Construa uma cultura de bem-estar e aborde desafios de saúde mental enquanto escala a sua equipa',
          'Scalable Solution': 'Solução Escalável',
          'Grows with your team': 'Cresce com a sua equipa',
          'Stress Management': 'Gestão de Stress',
          'Mental wellness support': 'Suporte de bem-estar mental',
          'Talent Attraction': 'Atração de Talento',
          'Competitive advantage': 'Vantagem competitiva',
          'Team Morale': 'Moral da Equipa',
          'Enhanced engagement': 'Envolvimento melhorado',
          'Build Your Wellness Culture': 'Construa a Sua Cultura de Bem-estar',
          
          'Education': 'Educação',
          'App Integrations': 'Integrações de Aplicações',
          'University Leaders': 'Líderes Universitários',
          'Enhance student well-being, engagement and academic success with campus-wide wellness programs': 'Melhore o bem-estar, envolvimento e sucesso académico dos estudantes com programas de bem-estar em todo o campus',
          'Campus Ecosystem': 'Ecossistema do Campus',
          'Comprehensive wellness': 'Bem-estar abrangente',
          'Inter-Faculty Challenges': 'Desafios Inter-Faculdades',
          'Peer support network': 'Rede de apoio entre pares',
          'Academic Performance': 'Desempenho Académico',
          'Real-time insights': 'Insights em tempo real',
          'ESG Goals': 'Objetivos ESG',
          'Social sustainability': 'Sustentabilidade social',
          'Transform Campus Wellness': 'Transformar o Bem-estar do Campus',
          
          'Insurance Brokers': 'Corretores de Seguros',
          'Client Retention': 'Retenção de Clientes',
          'Insurance Brokers Leaders': 'Líderes de Corretores de Seguros',
          'Enhance client value propositions with comprehensive wellness solutions that reduce claims and improve satisfaction': 'Melhore as propostas de valor dos clientes com soluções abrangentes de bem-estar que reduzem sinistros e melhoram a satisfação',
          'Client Differentiation': 'Diferenciação de Clientes',
          'Unique wellness offerings': 'Ofertas únicas de bem-estar',
          'Claims Reduction': 'Redução de Sinistros',
          'Preventive care programs': 'Programas de cuidados preventivos',
          'Client Engagement': 'Envolvimento do Cliente',
          'Year-round touchpoints': 'Pontos de contacto durante todo o ano',
          'Revenue Growth': 'Crescimento de Receita',
          'Premium service tiers': 'Níveis de serviço premium',
          'Expand Broker Services': 'Expandir Serviços de Corretagem',
          
          'Insurance Solutions': 'Soluções de Seguros',
          'Claims Reduction Insurance': 'Redução de Sinistros',
          'Transform risk management with proactive wellness solutions that reduce claims and improve member health outcomes': 'Transforme a gestão de riscos com soluções proativas de bem-estar que reduzem sinistros e melhoram os resultados de saúde dos membros',
          'Preventive Care': 'Cuidados Preventivos',
          'Reduce long-term costs': 'Reduzir custos a longo prazo',
          'Risk Assessment': 'Avaliação de Riscos',
          'Data-driven insights': 'Insights baseados em dados',
          'Member Engagement': 'Envolvimento dos Membros',
          'Wellness incentives': 'Incentivos de bem-estar',
          'Cost Savings': 'Poupanças de Custos',
          'Lower premiums': 'Prémios mais baixos',
          'Optimize Insurance Solutions': 'Otimizar Soluções de Seguros',
          
           // Smart Integration Section - Additional translations
          // Company Hero Section B2B
          'Step into Cristiano Ronaldo\'s wellness ecosystem, reimagined for today\'s corporate teams. Erakulis has transformed Ronaldo\'s daily disciplines in training, recovery, nutrition, and mindset into personalized, data-driven journeys that elevate employee well-being and fuel business performance.': 'Entre no ecossistema de bem-estar do Cristiano Ronaldo, reimaginado para as equipas corporativas de hoje. A Erakulis transformou as disciplinas diárias do Ronaldo em treino, recuperação, nutrição e mentalidade em jornadas personalizadas e baseadas em dados que elevam o bem-estar dos funcionários e impulsionam o desempenho empresarial.',
          'Performance & Health-Driven Approach': 'Abordagem Orientada para Performance e Saúde',
          'Solutions designed for longevity and human performance': 'Soluções desenhadas para longevidade e performance humana',
          'Holistic Wellness Philosophy': 'Filosofia de Bem-estar Holística',
          'Mind, body, and spirit integration': 'Integração de mente, corpo e espírito',
          'Global Impact Vision': 'Visão de Impacto Global',
          'Transforming wellness worldwide': 'Transformando o bem-estar mundialmente',
          'Find the Formula': 'Descubra a Fórmula',
          'Erakulis Formula': 'Fórmula Erakulis',
          'CR7 Wellness Ecosystem': 'Ecossistema de Bem-estar CR7',
          'Transform your corporate wellness with the same discipline and excellence that made Cristiano Ronaldo a global icon.': 'Transforme o bem-estar corporativo da sua empresa com a mesma disciplina e excelência que fizeram do Cristiano Ronaldo um ícone global.',
          'Where professional expertise meets user-friendly wellness. Discover how our seamlessly integrated ecosystem creates lasting impact.': 'Onde a expertise profissional encontra o bem-estar amigável ao usuário. Descubra como o nosso ecossistema perfeitamente integrado cria impacto duradouro.',
          'Erakulis PRO': 'Erakulis PRO',
          'Erakulis Mobile': 'Erakulis Mobile',
          'Professionals': 'Profissionais',
          'Clients': 'Clientes',
          'Ready to Scale Your Business?': 'Pronto para Escalar o Seu Negócio?',
          'Schedule a discovery call to learn how Erakulis PRO can transform your fitness business': 'Agende uma chamada de descoberta para saber como o Erakulis PRO pode transformar o seu negócio de fitness',
          'Curated Wellness Programs': 'Programas de Bem-estar Curados por Humanos',
          'Expert wellness design and adapt corporate programs': 'Especialistas experientes em bem-estar desenham e adaptam programas corporativos baseados nas necessidades específicas e objetivos de saúde da sua equipe.',
          'Expert Consultations': 'Consultas ao Vivo com Especialistas',
          'Scheduled sessions with certified professionals': 'Sessões individuais agendadas com profissionais certificados para aconselhamento nutricional, coaching de fitness e suporte de bem-estar mental.',
          'Wellness Specialists': 'Especialistas em Bem-estar Dedicados',
          'Human wellness coordinators for company culture': 'Coordenadores de bem-estar humanos designados que compreendem a cultura da sua empresa e necessidades dos funcionários para sucesso ótimo do programa.',
           'Health Oversight': 'Supervisão Profissional de Saúde',
           'Medical professionals ensure safety standards': 'Profissionais médicos e especialistas certificados em bem-estar garantem que todos os programas atendam padrões de segurança e regulamentações de saúde.',
           'Explore PRO Platform': 'Explorar Plataforma PRO',
          'Erakulis Mobile Experience': 'Experiência Móvel Erakulis',
          'Seamless mobile wellness experience that puts comprehensive health management right in your employees\' hands.': 'Experiência móvel de bem-estar perfeita que coloca o gerenciamento abrangente de saúde diretamente nas mãos dos seus funcionários.',
          'Why Erakulis Page Mobile Experience': 'Experiência Móvel de Bem-estar perfeita que coloca o gerenciamento abrangente de saúde diretamente nas mãos dos seus funcionários.',
          'Industry-Specific Solutions': 'Soluções Específicas por Indústria',
          
          // Why Erakulis Page Translations
          'The Science of Longevity': 'A Ciência da Longevidade',
          'Fitness × Nutrition × Wellbeing = Longevity': 'Fitness × Nutrição × Bem-estar = Longevidade',
          '"You don\'t need to be perfect, you just need to be consistent. When you take care of your body and mind every day, life becomes easier."': '"Não precisas de ser perfeito, apenas precisas de ser consistente. Quando cuidas do teu corpo e mente todos os dias, a vida torna-se mais fácil."',
          'Evidence-Based': 'Baseado em Evidências',
          'Holistic Approach': 'Abordagem Holística',
          'Sustainable Results': 'Resultados Sustentáveis',
          'Start Your Journey': 'Iniciar a Tua Jornada',
          'Explore Erakulis Hub': 'Explorar Hub Erakulis',
          'The Science of Healthy Aging': 'A Ciência do Envelhecimento Saudável',
          'Research shows that integrating fitness, nutrition, and mental wellness is key to extend healthspan. Erakulis makes this science accessible and actionable.': 'A investigação mostra que integrar fitness, nutrição e bem-estar mental é fundamental para estender o período de vida saudável. A Erakulis torna esta ciência acessível e praticável.',
          'Lower chronic disease risk': 'Menor risco de doenças crónicas',
          'Slow cellular aging': 'Retardar o envelhecimento celular',
          'Optimize mind & body': 'Otimizar mente e corpo',
          'Enhanced cognition': 'Cognição melhorada',
          'Live longer, healthier': 'Viver mais tempo, mais saudável',
          'Our': 'Os Nossos',
          'Core Pillars': 'Pilares Fundamentais',
          'Three pillars to guide your wellness journey toward optimal health and longevity': 'Três pilares para guiar a tua jornada de bem-estar rumo à saúde ótima e longevidade',
          'Move Your Body': 'Move o Teu Corpo',
          'Physical fitness and activity': 'Fitness físico e atividade',
          'Personalized workout plans': 'Planos de treino personalizados',
          'Progress tracking': 'Acompanhamento do progresso',
          'Activity recommendations': 'Recomendações de atividade',
          'Movement motivation': 'Motivação para movimento',
          'Fuel Yourself': 'Alimenta-te',
          'Nutrition and healthy eating': 'Nutrição e alimentação saudável',
          'Balanced meal planning': 'Planeamento de refeições equilibradas',
          'Nutritional guidance': 'Orientação nutricional',
          'Healthy recipe suggestions': 'Sugestões de receitas saudáveis',
          'Mindful eating practices': 'Práticas de alimentação consciente',
          'Be Mindful': 'Sê Consciente',
          'Mental wellness and balance': 'Bem-estar mental e equilíbrio',
          'Meditation practices': 'Práticas de meditação',
          'Stress management': 'Gestão de stress',
          'Mental health support': 'Apoio à saúde mental',
          'Mindfulness exercises': 'Exercícios de mindfulness',
          'Built for Every Wellness Journey': 'Construído para Todas as Jornadas de Bem-estar',
          'Choose your path to wellness mastery': 'Escolhe o teu caminho para o domínio do bem-estar',
          'Biohackers': 'Biohackers',
          'I want to unlock my body\'s full potential and see how every metric connects to maximize my performance.': 'Quero desbloquear todo o potencial do meu corpo e ver como cada métrica se conecta para maximizar o meu desempenho.',
          'Optimize performance': 'Otimizar performance',
          'Insights across all pillars with wearable syncing': 'Insights em todos os pilares com sincronização de wearables',
          'Advanced biomarker tracking': 'Rastreamento avançado de biomarcadores',
          'Performance optimization algorithms': 'Algoritmos de otimização de performance',
          'Personalized intervention suggestions': 'Sugestões de intervenção personalizadas',
          'Burnt-out Professionals': 'Profissionais Esgotados',
          'I\'m tired of feeling exhausted every day. I need structure that helps me reclaim my energy and focus.': 'Estou cansado de me sentir exausto todos os dias. Preciso de estrutura que me ajude a recuperar a minha energia e foco.',
          'Regain energy, daily structure': 'Recuperar energia, estrutura diária',
          'Guided daily nudges based on health pillars': 'Incentivos diários orientados baseados nos pilares de saúde',
          'Energy-focused daily routines': 'Rotinas diárias focadas na energia',
          'Smart scheduling based on circadian rhythms': 'Agendamento inteligente baseado em ritmos circadianos',
          'Stress management protocols': 'Protocolos de gestão de stress',
          'Productivity-health balance tracking': 'Rastreamento do equilíbrio produtividade-saúde',
          'Fitness-focused Users': 'Utilizadores Focados no Fitness',
          'I train hard but missing the big picture. I want to see how workouts, nutrition, and recovery work together.': 'Treino intensamente mas perco a visão geral. Quero ver como treinos, nutrição e recuperação funcionam juntos.',
          'Holistic view of fitness, food, sleep': 'Visão holística de fitness, alimentação, sono',
          'Integrated tracking with multi wearable syncing': 'Rastreamento integrado com sincronização de múltiplos wearables',
          'Comprehensive fitness analytics': 'Análises abrangentes de fitness',
          'Nutrition-exercise correlation': 'Correlação nutrição-exercício',
          'Recovery optimization': 'Otimização da recuperação',
          'Multi-device wearable sync': 'Sincronização de wearables multi-dispositivo',
          'Life Optimizers': 'Otimizadores de Vida',
          'I\'m overwhelmed by apps & data. I want one app to give me clarity and help me stay disciplined.': 'Estou sobrecarregado por aplicações e dados. Quero uma aplicação que me dê clareza e me ajude a manter disciplina.',
          'Simplicity, insight, discipline': 'Simplicidade, insight, disciplina',
          'All-in-one, personalized health monitor': 'Monitor de saúde personalizado tudo-em-um',
          'Unified health dashboard': 'Painel de saúde unificado',
          'Behavioral pattern recognition': 'Reconhecimento de padrões comportamentais',
          'Habit formation algorithms': 'Algoritmos de formação de hábitos',
          'Seamless data consolidation': 'Consolidação perfeita de dados',
        },
        'en': {}
      };

      // Check if we have a direct translation
      if (commonTranslations[currentLanguage][text]) {
        const translation = commonTranslations[currentLanguage][text];
        translationCache.set(cacheKey, translation);
        return translation;
      }

      // For longer texts, use a simple Google Translate approach
      // In a real app, you'd use a proper translation service
      const targetLang = currentLanguage === 'pt-br' ? 'pt' : currentLanguage;
      
      try {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await response.json();
        const translation = data[0]?.[0]?.[0] || text;
        
        translationCache.set(cacheKey, translation);
        return translation;
      } catch (error) {
        console.warn('Translation failed, using original text:', error);
        return text;
      }
    } catch (error) {
      console.warn('Translation error:', error);
      return text;
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      isTranslating
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};