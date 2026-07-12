'use client';

import styles from './LanguageSelector.module.scss';
import { useLanguage } from './LanguageProvider';
import type { LanguageCode } from '@/data/translations';

export function LanguageSelector() {
  const { language, setLanguage, translate, translating, options } = useLanguage();

  return (
    <div className={styles.selector} aria-label={translate.selectLanguageLabel} data-language-control>
      <label htmlFor="language-select" className={styles.label}>
        {translate.selectLanguageLabel}
      </label>
      <select
        id="language-select"
        className={styles.select}
        value={language}
        aria-busy={translating}
        onChange={(event) => setLanguage(event.target.value as LanguageCode)}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}{translating && option.code === language ? '...' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
