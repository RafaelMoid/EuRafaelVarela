'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import styles from './ContactCard.module.scss';

export function ContactCard({ framed = false, showContent = false, titleId }: { framed?: boolean; showContent?: boolean; titleId?: string }) {
  const [copied, setCopied] = useState(false);

  const fallbackCopyEmail = () => {
    const textarea = document.createElement('textarea');
    textarea.value = profile.email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);

    if (!successful) {
      throw new Error('Email copy failed');
    }
  };

  const copyEmail = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(profile.email);
        return true;
      } catch {
        fallbackCopyEmail();
        return true;
      }
    }

    fallbackCopyEmail();
    return true;
  };

  const showCopiedFeedback = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  const handleEmailClick = async () => {
    try {
      await copyEmail();
      showCopiedFeedback();
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className={`${styles.card} ${framed ? styles.framed : ''}`}>
      {showContent ? (
        <div className={styles.content}>
          <h3 className={styles.title} id={titleId}>
            Pronto para conversar?
          </h3>
          <p className={styles.description}>
            Estou disponível para oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/fullstack e gestão técnica de tecnologia.
          </p>
        </div>
      ) : null}
      <div className={styles.actions} aria-label="Acoes de contato">
        <button className={`${styles.actionButton} ${styles.primary}`} type="button" onClick={handleEmailClick}>
          {copied ? 'E-mail copiado' : 'Copiar meu e-mail'}
        </button>
        <a className={`${styles.actionButton} ${styles.secondary}`} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          Acesse meu LinkedIn
        </a>
        <a className={`${styles.actionButton} ${styles.secondary}`} href={profile.github} target="_blank" rel="noopener noreferrer">
          Acesse meu GitHub
        </a>
      </div>
    </article>
  );
}
