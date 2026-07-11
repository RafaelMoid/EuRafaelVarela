'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCard } from '@/components/cards/ContactCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { HeroSection } from '@/components/sections/HeroSection';
import { useLanguage } from '@/components/language/LanguageProvider';
import { Container } from '@/components/ui/Container';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { profile } from '@/data/profile';
import styles from './page.module.scss';

export default function HomePage() {
  const [resumeEmailCopied, setResumeEmailCopied] = useState(false);
  const { translate } = useLanguage();
  const home = translate.home;
  const contactModal = translate.contactModal;

  const fallbackCopyEmail = () => {
    const textarea = document.createElement('textarea');
    textarea.value = profile.email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const copyResumeEmail = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(profile.email);
    } else {
      fallbackCopyEmail();
    }

    setResumeEmailCopied(true);
    window.setTimeout(() => setResumeEmailCopied(false), 2400);
  };

  return (
    <>
      <HeroSection />

      <section id="about-section" className={styles.section} aria-labelledby="about-title">
        <Container>
          <div className={styles.aboutPanel}>
            <div className={styles.panelIntro}>
              <span className={styles.panelIcon} aria-hidden="true">&lt;/&gt;</span>
              <h2 id="about-title">{home.about.title}</h2>
              <p className={styles.gradientLead}>{home.about.lead}</p>
              <p>{home.about.description}</p>
              <div className={styles.aboutTags}>
                {home.about.tags.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.statsGrid}>
              {home.about.stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.aboutFooter}>
              {home.about.footer.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="resume-title">
        <Container>
          <div className={styles.resumePanel}>
            <div className={styles.resumeProfile}>
              <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={280} height={280} />
              <h2 id="resume-title">{home.resume.title}</h2>
              <p>{home.resume.role}</p>
              <Link href={profile.cvPath}>{home.resume.cta}</Link>
              <div className={styles.resumeContactActions} aria-label={contactModal.title}>
                <button className={styles.resumeActionCard} type="button" onClick={copyResumeEmail}>
                  {resumeEmailCopied ? contactModal.copiedMain : contactModal.email}
                </button>
                <a className={styles.resumeActionCard} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a className={styles.resumeActionCard} href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <button className={styles.resumePrimaryAction} type="button" onClick={copyResumeEmail}>
                  {resumeEmailCopied ? contactModal.copiedMain : contactModal.copyMain}
                </button>
              </div>
            </div>
            <div className={styles.timeline}>
              <h3>{home.resume.experienceTitle}</h3>
              {home.resume.timeline.map((item) => (
                <article key={`${item.role}-${item.company}-${item.period}`}>
                  <strong>{item.role}</strong>
                  <span>{item.company} • {item.period}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className={styles.resumeSide}>
              <h3>{home.resume.sideTitle}</h3>
              {home.resume.items.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <Container>
          <div className={styles.skillsPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.panelIcon} aria-hidden="true">&lt;/&gt;</span>
              <h2 id="skills-title">{home.skills.title}</h2>
            </div>
            <div className={styles.skillRows}>
              {skillGroups.map((group) => (
                <div key={group.title} className={styles.skillRow}>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.title.includes('WordPress') ? home.skills.wordpressDescription : home.skills.defaultDescription}</p>
                  </div>
                  <div className={styles.skillList}>
                    {group.items.slice(0, 8).map((item) => (
                      <SkillBadge key={item}>{item}</SkillBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="projects-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="projects-title">{home.projects.title}</h2>
            <Link href="/projetos">{home.projects.cta}</Link>
          </div>
          <div className={styles.projectGrid}>
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="differentiators-title">
        <Container>
          <div className={styles.diffPanel}>
            <div className={styles.diffIntro}>
              <span>{home.differentiators.eyebrow}</span>
              <h2 id="differentiators-title">{home.differentiators.titleStart} <strong>{home.differentiators.titleHighlight}</strong></h2>
              <p>{home.differentiators.description}</p>
              <div className={styles.diffChips}>
                {home.differentiators.chips.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.diffCards}>
              {home.differentiators.cards.map((item) => (
                <article key={item.title} className={styles.diffCard}>
                  <div className={styles.diffScore}>{item.score}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="contact-title">
        <Container>
          <div className={styles.contactSection}>
            <div>
              <span className={styles.panelIcon} aria-hidden="true">@</span>
              <h2 id="contact-title">{home.contact.title}</h2>
              <p>{home.contact.description}</p>
            </div>
            <ContactCard />
          </div>
        </Container>
      </section>
    </>
  );
}
