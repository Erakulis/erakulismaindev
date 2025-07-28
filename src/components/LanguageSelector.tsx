import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  return (
    <Button variant="ghost" size="sm" className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      EN
    </Button>
  );
};

export default LanguageSelector;