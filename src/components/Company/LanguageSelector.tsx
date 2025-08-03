import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentLang = location.pathname.startsWith('/pt') ? 'pt' : 'en';
  
  const handleLanguageChange = (lang: string) => {
    if (lang === 'en') {
      navigate('/');
    } else {
      navigate('/pt');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-accent">
          <Globe className="h-4 w-4 mr-2" />
          {currentLang === 'en' ? 'EN' : 'PT'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-lg z-50">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className={currentLang === 'en' ? 'bg-primary/10' : ''}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('pt')}
          className={currentLang === 'pt' ? 'bg-primary/10' : ''}
        >
          🇵🇹 Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;