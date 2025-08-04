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
          'Industry-Specific Solutions': 'Soluções Específicas por Indústria',
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
          'Upgrade when ready': 'Atualize quando estiver pronto'
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