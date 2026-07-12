'use client';

import { useLanguage } from './LanguageProvider';

export function SkipLink() {
  const { translate } = useLanguage();

  return (
    <a href="#main-content" className="skip-link">
      {translate.accessibilityLabels.skipToContent}
    </a>
  );
}
