'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './ResumeCard.module.scss';

export function ResumeCard({
  title,
  description,
  href,
  downloadHref,
  downloadLabel
}: {
  title: string;
  description: string;
  href: string;
  downloadHref?: string;
  downloadLabel?: string;
}) {
  const { translate } = useLanguage();

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <Link className={styles.link} href={href}>
          {translate.resumeCard.openFocus}
        </Link>
        {downloadHref ? (
          <a className={styles.link} href={downloadHref}>
            {downloadLabel ?? translate.resume.downloadText}
          </a>
        ) : null}
      </div>
    </article>
  );
}
