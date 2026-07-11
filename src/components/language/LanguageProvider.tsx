'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { baseTranslations, defaultLanguage, languageOptions, type LanguageCode } from '@/data/translations';

type TranslationRoot = typeof baseTranslations;

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
  translate: TranslationRoot;
  options: typeof languageOptions;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const [translate, setTranslate] = useState<TranslationRoot>(baseTranslations);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('selectedLanguage') as LanguageCode | null;
    if (storedLanguage) {
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

  useEffect(() => {
    if (language === 'pt-BR') {
      setTranslate(baseTranslations);
      return;
    }

    const cached = window.localStorage.getItem(`translations-${language}`);
    if (cached) {
      setTranslate(JSON.parse(cached) as TranslationRoot);
      return;
    }

    const controller = new AbortController();
    const translateData = async () => {
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: baseTranslations, target: language }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Translation request failed');
        }

        const data = await response.json();
        if (data?.translated) {
          setTranslate(data.translated);
          window.localStorage.setItem(`translations-${language}`, JSON.stringify(data.translated));
        }
      } catch {
        setTranslate(baseTranslations);
      }
    };

    translateData();

    return () => {
      controller.abort();
    };
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      translate,
      options: languageOptions,
    }),
    [language, translate]
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
