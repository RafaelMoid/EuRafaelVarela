'use client';

import { useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { openContactModal } from '@/components/contact/ContactModal';
import { useLanguage } from '@/components/language/LanguageProvider';
import { getPrimaryCvPath } from '@/data/cv';
import styles from './HeroSection.module.scss';

export function HeroSection() {
  const { content: localizedContent, language, translate } = useLanguage();
  const heroContent = translate.heroDashboard;
  const projects = localizedContent.projects;
  const featuredProjects = projects.slice(1, 7);
  const carouselProjects = useMemo(() => [...projects, ...projects, ...projects], [projects]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || projects.length === 0) {
      return;
    }

    const centerCarousel = () => {
      const singleTrackWidth = carousel.scrollWidth / 3;
      carousel.scrollLeft = singleTrackWidth;
    };

    const keepLooping = () => {
      const singleTrackWidth = carousel.scrollWidth / 3;

      if (carousel.scrollLeft < singleTrackWidth * 0.45) {
        carousel.scrollLeft += singleTrackWidth;
      }

      if (carousel.scrollLeft > singleTrackWidth * 1.55) {
        carousel.scrollLeft -= singleTrackWidth;
      }
    };

    centerCarousel();
    carousel.addEventListener('scroll', keepLooping, { passive: true });
    window.addEventListener('resize', centerCarousel);

    return () => {
      carousel.removeEventListener('scroll', keepLooping);
      window.removeEventListener('resize', centerCarousel);
    };
  }, [projects]);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.left}>
        <h1 id="hero-title" className={styles.title}>
          {heroContent.titleName} <span>{heroContent.titleHighlight}</span>
        </h1>
        <div className={styles.shortLine} aria-hidden="true" />
        <p className={styles.description}>{heroContent.description}</p>

        <div className={styles.qualityStrip}>
          {heroContent.qualities.map((item) => (
            <div key={item.label} className={styles.qualityItem}>
              <span aria-hidden="true">&lt;/&gt;</span>
              <strong>{item.label}</strong>
              <small>{item.value}</small>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryAction} type="button" onClick={openContactModal}>
            {heroContent.primaryCta}
          </button>
          <Link className={styles.secondaryAction} href={getPrimaryCvPath(language)}>
            {heroContent.secondaryCta}
          </Link>
        </div>

        <div className={styles.skillsMini}>
          <h2>{heroContent.skillsTitle}</h2>
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
            <h2>{heroContent.projectsTitle}</h2>
            <Link href="/projetos">{heroContent.projectsCta}</Link>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <Link key={project.slug} className={styles.projectMini} href={`/projetos/${project.slug}`}>
                <Image src={project.image} alt={`${translate.accessibilityLabels.projectPreview} ${project.title}`} width={520} height={292} />
                <strong>{project.title}</strong>
                <small>{project.type}</small>
              </Link>
            ))}
          </div>
          <div className={styles.projectCarousel} ref={carouselRef} aria-label={heroContent.projectsTitle}>
            {carouselProjects.map((project, index) => (
              <Link key={`${project.slug}-${index}`} className={styles.projectMini} href={`/projetos/${project.slug}`}>
                <Image src={project.image} alt={`${translate.accessibilityLabels.projectPreview} ${project.title}`} width={520} height={292} />
                <strong>{project.title}</strong>
                <small>{project.type}</small>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <aside className={styles.right} aria-label={translate.accessibilityLabels.technicalDifferentiators}>
        <div className={styles.profileCard}>
          <Image src="/assets/profile/rafael-varela.webp" alt={translate.home.resume.profileAlt} width={160} height={160} priority />
          <div>
            <strong>Rafael Varela</strong>
            <span>{heroContent.resumeRole}</span>
            <small>{heroContent.profileStatus}</small>
          </div>
        </div>

        {heroContent.metrics.map((metric) => (
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
          <h2>{heroContent.contactTitle}</h2>
          <p>{heroContent.contactDescription}</p>
          <button type="button" onClick={openContactModal}>{heroContent.contactCta}</button>
        </div>
      </aside>
    </section>
  );
}
