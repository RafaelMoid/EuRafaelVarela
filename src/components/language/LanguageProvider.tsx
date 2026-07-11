'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, languageOptions, translations, type LanguageCode } from '@/data/translations';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
  translate: typeof translations[LanguageCode];
  options: typeof languageOptions;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('selectedLanguage') as LanguageCode | null;
    if (storedLanguage && translations[storedLanguage]) {
      setLanguage(storedLanguage);
      return;
    }

    const browserLanguage = navigator.language;
    const matchedLanguage = languageOptions.find((option) => browserLanguage.startsWith(option.code.split('-')[0]));

    if (matchedLanguage) {
      setLanguage(matchedLanguage.code);
      return;
    }

    setLanguage(defaultLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      translate: translations[language],
      options: languageOptions,
    }),
    [language]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
