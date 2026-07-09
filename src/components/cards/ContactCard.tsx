'use client';

import { profile } from '@/data/profile';
import styles from './ContactCard.module.scss';

export function ContactCard({ compact = false, onClose }: { compact?: boolean; onClose?: () => void }) {
  const handleEmailClick = () => {
    const link = document.createElement('a');
    link.href = `mailto:${profile.email}`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose?.();
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{compact ? 'Pronto para conversar?' : 'Pronto para conversar?'}</h3>
      <p className={styles.description}>
        Estou disponível para oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/fullstack e gestão técnica de tecnologia.
      </p>
      <div className={styles.actions}>
        <button className={styles.link} type="button" onClick={handleEmailClick}>
          Enviar e-mail
        </button>
        <a className={styles.link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </article>
  );
}
