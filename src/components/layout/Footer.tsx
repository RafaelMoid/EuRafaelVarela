'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './Footer.module.scss';

export function Footer() {
  const pathname = usePathname();
  const { translate } = useLanguage();
  const year = new Date().getFullYear();

  if (pathname === '/pomodoro') {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.title}>{profile.name}</h2>
          <p className={styles.summary}>{translate.home.contact.description}</p>
        </div>
        <div className={styles.links}>
          <Link href="/projetos">{translate.nav.projects}</Link>
          <Link href="/experiencia">{translate.nav.experience}</Link>
          <ContactTrigger className={styles.contactLink}>{translate.nav.contact}</ContactTrigger>
        </div>
        <div className={styles.stack}>
          <span>WordPress/PHP</span>
          <span>Front-end</span>
          <span>SEO</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{translate.footer.copyright.replace('{year}', String(year)).replace('{name}', profile.name)}</p>
        <p>{translate.footer.techStack}</p>
      </div>
    </footer>
  );
}
