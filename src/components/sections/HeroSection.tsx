'use client';

import Image from 'next/image';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { openContactModal } from '@/components/contact/ContactModal';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './HeroSection.module.scss';

export function HeroSection() {
  const { translate } = useLanguage();

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>{translate.hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>{translate.hero.title}</h1>
        <p className={styles.description}>{translate.hero.description}</p>
        <div className={styles.actions}>
          <Button href="/projetos">{translate.hero.ctaProjects}</Button>
          <Button href={profile.cvPath} variant="secondary">{translate.hero.ctaCv}</Button>
          <Button variant="secondary" onClick={openContactModal}>{translate.hero.ctaContact}</Button>
        </div>
        <div className={styles.badges}>
          {profile.heroBadges.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
      <div className={styles.media}>
        <div className={styles.card}>
          <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={800} height={800} priority />
          <div className={styles.cardText}>
            <p>{translate.hero.ctaContact === 'Falar comigo' ? 'Desenvolvedor Web' : 'Web Developer'}</p>
            <strong>WordPress / Front-end / Sistemas web</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
