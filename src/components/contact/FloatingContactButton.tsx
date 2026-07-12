'use client';

import { useLanguage } from '@/components/language/LanguageProvider';
import { openContactModal } from './ContactModal';
import styles from './FloatingContactButton.module.scss';

export function FloatingContactButton() {
  const { translate } = useLanguage();

  return (
    <button className={styles.button} type="button" onClick={openContactModal} aria-label={translate.accessibilityLabels.floatingContact}>
      <span className={styles.pulse} aria-hidden="true" />
      <svg className={styles.icon} viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M4 5.5h16v11H4z" />
        <path d="m4 6 8 6.5L20 6" />
      </svg>
    </button>
  );
}
