import type { LanguageCode } from './translations';

type CvType = 'frontend' | 'wordpress';

const cvPaths: Record<CvType, Record<LanguageCode, string>> = {
  frontend: {
    'pt-BR': '/assets/cv/rafael-varela-frontend-pt.pdf',
    'en-US': '/assets/cv/rafael-varela-frontend-en.pdf',
    'es-ES': '/assets/cv/rafael-varela-frontend-en.pdf',
  },
  wordpress: {
    'pt-BR': '/assets/cv/rafael-varela-wordpress-pt.pdf',
    'en-US': '/assets/cv/rafael-varela-wordpress-en.pdf',
    'es-ES': '/assets/cv/rafael-varela-wordpress-en.pdf',
  },
};

export function getPrimaryCvPath(language: LanguageCode) {
  return cvPaths.frontend[language];
}

export function getCvPathByResumeSlug(slug: string, language: LanguageCode) {
  return cvPaths[slug === 'wordpress-php' ? 'wordpress' : 'frontend'][language];
}
