'use client';

import styles from './LanguageSelector.module.scss';
import { useLanguage } from './LanguageProvider';

export function LanguageSelector() {
  const { language, setLanguage, translate, options } = useLanguage();

  return (
    <div className={styles.selector} aria-label={translate.selectLanguageLabel}>
      <label htmlFor="language-select" className={styles.label}>
        {translate.selectLanguageLabel}
      </label>
      <select
        id="language-select"
        className={styles.select}
        value={language}
        onChange={(event) => setLanguage(event.target.value as any)}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
