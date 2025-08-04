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
          'Cookies Policy': 'Política de cookies'
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