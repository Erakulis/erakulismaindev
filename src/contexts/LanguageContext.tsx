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
          'Get Started': 'Começar',
          'Start Free': 'Começe Grátis',
          'Learn More': 'Saber Mais',
          'Sign Up': 'Registar',
          'Login': 'Entrar',
          'The App': 'A Aplicação',
          'I\'m a Fitness PRO': 'Sou um profissional de fitness',
          'Download our app': 'Transferir a nossa aplicação',
          'Privacy Policy': 'Política de Privacidade',
          'Terms & Conditions': 'Termos e Condições',
          'Cookies Policy': 'Política de Cookies'
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
          'The App': 'A App',
          'I\'m a Fitness PRO': 'Eu sou um pro de fitness',
          'Download our app': 'Faça Download da App',
          'Privacy Policy': 'Política de Privacidade',
          'Terms & Conditions': 'Termos e Condições',
          'Cookies Policy': 'Política de Cookies'
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