'use client';

import Image from 'next/image';
import Link from 'next/link';
import { openContactModal } from '@/components/contact/ContactModal';
import { useLanguage } from '@/components/language/LanguageProvider';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import styles from './HeroSection.module.scss';

export function HeroSection() {
  const { translate } = useLanguage();
  const content = translate.heroDashboard;
  const featuredProjects = projects.slice(1, 7);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.left}>
        <h1 id="hero-title" className={styles.title}>
          {content.titleName} <span>{content.titleHighlight}</span>
        </h1>
        <div className={styles.shortLine} aria-hidden="true" />
        <p className={styles.description}>{content.description}</p>

        <div className={styles.qualityStrip}>
          {content.qualities.map((item) => (
            <div key={item.label} className={styles.qualityItem}>
              <span aria-hidden="true">&lt;/&gt;</span>
              <strong>{item.label}</strong>
              <small>{item.value}</small>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryAction} type="button" onClick={openContactModal}>
            {content.primaryCta}
          </button>
          <Link className={styles.secondaryAction} href={profile.cvPath}>
            {content.secondaryCta}
          </Link>
        </div>

        <div className={styles.skillsMini}>
          <h2>{content.skillsTitle}</h2>
          <div className={styles.skillRows}>
            <span>WordPress</span>
            <span>PHP</span>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>SCSS</span>
            <span>GitHub</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.projectsPanel}>
          <div className={styles.panelHeader}>
            <h2>{content.projectsTitle}</h2>
            <Link href="/projetos">{content.projectsCta}</Link>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <Link key={project.slug} className={styles.projectMini} href={`/projetos/${project.slug}`}>
                <Image src={project.image} alt={`Preview do projeto ${project.title}`} width={520} height={292} />
                <strong>{project.title.replace(' — Controle financeiro de casal', '')}</strong>
                <small>{project.type}</small>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.resumePanel}>
          <div>
            <h2>{content.resumeTitle}</h2>
            <p>Rafael Varela</p>
            <small>{content.resumeRole}</small>
          </div>
          <ul>
            {content.resumeBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/curriculo">{content.resumeCta}</Link>
        </div>
      </div>

      <aside className={styles.right} aria-label="Diferenciais tecnicos">
        <div className={styles.profileCard}>
          <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={160} height={160} priority />
          <div>
            <strong>Rafael Varela</strong>
            <span>{content.resumeRole}</span>
            <small>{content.profileStatus}</small>
          </div>
        </div>

        {content.metrics.map((metric) => (
          <div key={metric.title} className={styles.metricCard}>
            <div className={styles.score}>{metric.score}</div>
            <div>
              <h3>{metric.title}</h3>
              <ul>
                {metric.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className={styles.contactPanel}>
          <h2>{content.contactTitle}</h2>
          <p>{content.contactDescription}</p>
          <button type="button" onClick={openContactModal}>{content.contactCta}</button>
        </div>
      </aside>
    </section>
  );
}
