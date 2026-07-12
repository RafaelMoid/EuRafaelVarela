'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProjectsByLanguage, projects, type Project } from '@/data/projects';
import { experiences, getExperiencesByLanguage, type Experience } from '@/data/experiences';
import { getResumeFocusesByLanguage, resumeFocuses, type ResumeFocus } from '@/data/resume';
import { getSkillGroupsByLanguage, skillGroups, type SkillGroup } from '@/data/skills';
import { baseTranslations, defaultLanguage, languageOptions, translations, type LanguageCode } from '@/data/translations';

type TranslationRoot = typeof baseTranslations;
type LocalizedContent = {
  translate: TranslationRoot;
  projects: Project[];
  experiences: Experience[];
  resumeFocuses: ResumeFocus[];
  skillGroups: SkillGroup[];
};

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
  translate: TranslationRoot;
  content: LocalizedContent;
  translating: boolean;
  setTranslating: (value: boolean) => void;
  options: ReadonlyArray<{ code: LanguageCode; label: string }>;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const baseContent: LocalizedContent = {
  translate: baseTranslations,
  projects,
  experiences,
  resumeFocuses,
  skillGroups,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const [translating, setTranslating] = useState(false);

  const isValidLanguage = (value: string | null): value is LanguageCode =>
    Boolean(value && languageOptions.some((option) => option.code === value));

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('selectedLanguage');

    if (isValidLanguage(storedLanguage)) {
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
    document.documentElement.lang = language;
  }, [language]);

  const contextValue = useMemo(
    () => {
      const content =
        language === defaultLanguage
          ? baseContent
          : {
              translate: translations[language] ?? baseTranslations,
              projects: getProjectsByLanguage(language),
              experiences: getExperiencesByLanguage(language),
              resumeFocuses: getResumeFocusesByLanguage(language),
              skillGroups: getSkillGroupsByLanguage(language),
            };

      return {
        language,
        setLanguage,
        translate: content.translate,
        content,
        translating,
        setTranslating,
        options: languageOptions,
      };
    },
    [language, translating]
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
