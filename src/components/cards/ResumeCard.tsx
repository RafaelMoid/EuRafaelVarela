'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './ResumeCard.module.scss';

export function ResumeCard({ title, description, href }: { title: string; description: string; href: string }) {
  const { translate } = useLanguage();

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} href={href}>
        {translate.resumeCard.openFocus}
      </Link>
    </article>
  );
}
