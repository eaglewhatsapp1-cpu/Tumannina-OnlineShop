import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    // Detect browser language on mount
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'ar', 'es', 'fr'];
    if (supportedLangs.includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // Here you would typically integrate with i18n library
    // For now, we'll just store in localStorage
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
          <span className="mr-2">🇸🇦</span>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("es")}>
          <span className="mr-2">🇪🇸</span>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("fr")}>
          <span className="mr-2">🇫🇷</span>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
