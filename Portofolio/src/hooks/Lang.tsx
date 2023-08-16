import { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '../Language/en'; // Import your translation files
import esTranslations from '../Language/es';

interface Translations {
  [key: string]: any; 
}

interface LanguageContextType {
  language: string;
  translations: Translations;
  setLanguageHandler: (lang: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);



export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en'); // Set the default language

  const translations: Translations = {
    en: enTranslations,
    es: esTranslations,
    english: 'English',
    spanish: 'Español',
    language:  language === 'es' ? 'Idioma' : 'Language',
  }; 

  const setLanguageHandler = (lang: string) => {
    setLanguage(lang);
  };

  const contextValue: LanguageContextType = {
    language,
    translations,
    setLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
