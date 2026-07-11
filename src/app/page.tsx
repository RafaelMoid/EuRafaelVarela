'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Container } from '@/components/ui/Container';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { experiences } from '@/data/experiences';
import { ResumeCard } from '@/components/cards/ResumeCard';
import { ContactCard } from '@/components/cards/ContactCard';
import { skillGroups } from '@/data/skills';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './page.module.scss';

export default function HomePage() {
  const { translate } = useLanguage();

  return (
    <>
      <HeroSection />
      <section className={styles.section} aria-labelledby="about-title">
        <Container>
          <SectionTitle
            eyebrow={translate.home.about.eyebrow}
            title={translate.home.about.title}
            description={translate.home.about.description1}
          />
          <div className={styles.aboutGrid}>
            <div className={styles.textBlock}>
              <p>{translate.home.about.description1}</p>
              <p>{translate.home.about.description2}</p>
            </div>
            <div className={styles.valueCard}>
              <h3>{translate.home.skills.eyebrow}</h3>
              <ul>
                <li>WordPress customizado</li>
                <li>PHP e temas profissionais</li>
                <li>Front-end responsivo e acessível</li>
                <li>Gestão técnica e organização</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <Container>
          <SectionTitle eyebrow={translate.home.skills.eyebrow} title={translate.home.skills.title} />
          <div className={styles.skillGrid}>
            {skillGroups.map((group) => (
              <div key={group.title} className={styles.skillGroup}>
                <h3>{group.title}</h3>
                <div className={styles.skillList}>
                  {group.items.map((item) => (
                    <SkillBadge key={item}>{item}</SkillBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="projects-title">
        <Container>
          <SectionTitle eyebrow={translate.home.projects.eyebrow} title={translate.home.projects.title} />
          <div className={styles.sliderWrap}>
            <div className={styles.sliderRail} role="list">
              {projects.map((project) => (
                <div key={project.slug} className={styles.sliderItem} role="listitem">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="experience-title">
        <Container>
          <SectionTitle eyebrow={translate.home.experience.eyebrow} title={translate.home.experience.title} />
          <div className={styles.experienceSummary}>
            {experiences.slice(0, 3).map((item) => (
              <div key={item.company} className={styles.experienceCard}>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="resume-title">
        <Container>
          <SectionTitle eyebrow={translate.home.resume.eyebrow} title={translate.home.resume.title} />
          <div className={styles.resumeGrid}>
            <ResumeCard title="WordPress/PHP" description="Especialização em temas customizados, CMS, performance e SEO técnico." href="/curriculo/wordpress-php" />
            <ResumeCard title="React/Front-end" description="Foco em interfaces, acessibilidade e aplicações web com boa experiência de uso." href="/curriculo/react-front-end" />
            <ResumeCard title="Web/Fullstack/Gestão técnica" description="Visão conectada a sistemas, processos e entrega com responsabilidade técnica." href="/curriculo/web-fullstack-gestao-tecnica" />
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="contact-title">
        <Container>
          <SectionTitle
            eyebrow={translate.home.contact.eyebrow}
            title={translate.home.contact.title}
            description={translate.home.contact.description}
          />
          <ContactCard />
        </Container>
      </section>
    </>
  );
}
