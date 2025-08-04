import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = (text: string) => {
  const { translate, currentLanguage } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const translateText = async () => {
      if (currentLanguage === 'en') {
        setTranslatedText(text);
        return;
      }

      setIsLoading(true);
      try {
        const result = await translate(text);
        setTranslatedText(result);
      } catch (error) {
        console.warn('Translation failed:', error);
        setTranslatedText(text);
      } finally {
        setIsLoading(false);
      }
    };

    translateText();
  }, [text, translate, currentLanguage]);

  return { translatedText, isLoading };
};

export const T = ({ children }: { children: string }) => {
  const { translatedText } = useTranslation(children);
  return <>{translatedText}</>;
};