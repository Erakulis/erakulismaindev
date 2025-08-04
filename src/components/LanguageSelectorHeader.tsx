import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  { code: 'pt-br' as Language, name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
];

const LanguageSelectorHeader = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-primary/20 hover:text-white">
          <Globe className="h-4 w-4 mr-2" />
          {currentLang.flag} {currentLang.code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-lg z-50">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={currentLanguage === language.code ? 'bg-primary/10' : ''}
          >
            {language.flag} {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelectorHeader;