'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ContactCard } from '@/components/cards/ContactCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { HeroSection } from '@/components/sections/HeroSection';
import { Container } from '@/components/ui/Container';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { profile } from '@/data/profile';
import styles from './page.module.scss';

const aboutStats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '100+', label: 'Custom Features Delivered' },
  { value: '98', label: 'SEO Score Average' },
  { value: '96', label: 'Performance Score Average' },
];

const differentiators = [
  {
    title: 'SEO',
    score: '98',
    text: 'Construido para visibilidade e descoberta.',
    items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Structured Data'],
  },
  {
    title: 'Performance',
    score: '96',
    text: 'Sites rapidos e otimizados por padrao.',
    items: ['Core Web Vitals', 'Fast Load', 'Efficient Rendering', 'Optimized Assets'],
  },
  {
    title: 'Accessibility',
    score: '100',
    text: 'Usavel por todos, com empatia e criterio.',
    items: ['Keyboard Navigation', 'Screen Reader Friendly', 'Color Contrast', 'Semantic HTML'],
  },
];

const resumeItems = [
  { title: 'WordPress/PHP', text: 'Temas customizados, CMS, WooCommerce, ACF, performance e SEO tecnico.' },
  { title: 'Front-end', text: 'Interfaces responsivas com React, Next.js, TypeScript, SCSS e acessibilidade.' },
  { title: 'Gestao tecnica', text: 'Planejamento, organizacao de fluxos, documentacao e visao de entrega.' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className={styles.section} aria-labelledby="about-title">
        <Container>
          <div className={styles.aboutPanel}>
            <div className={styles.panelIntro}>
              <span className={styles.panelIcon} aria-hidden="true">&lt;/&gt;</span>
              <h2 id="about-title">About Me</h2>
              <p className={styles.gradientLead}>
                I build fast, accessible and SEO-friendly web experiences that deliver results.
              </p>
              <p>
                Sou Rafael Varela, desenvolvedor web com 4+ anos de experiencia criando sites, sistemas e interfaces modernas. Tenho foco em WordPress/PHP, front-end, performance, acessibilidade e organizacao tecnica.
              </p>
              <div className={styles.aboutTags}>
                {['WordPress & PHP', 'Front-end Development', 'Web Systems', 'SEO & Performance', 'Accessibility', 'Technical Management'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.statsGrid}>
              {aboutStats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.aboutFooter}>
              <span>Clean Code</span>
              <span>Technical Vision</span>
              <span>Delivery Focus</span>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <Container>
          <div className={styles.skillsPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.panelIcon} aria-hidden="true">&lt;/&gt;</span>
              <h2 id="skills-title">Skills & Technologies</h2>
            </div>
            <div className={styles.skillRows}>
              {skillGroups.map((group) => (
                <div key={group.title} className={styles.skillRow}>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.title.includes('WordPress') ? 'Construindo experiencias rapidas e flexiveis.' : 'Tecnologias aplicadas em entregas reais.'}</p>
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
            <h2 id="projects-title">Projetos em destaque</h2>
            <Link href="/projetos">Ver todos os projetos</Link>
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
              <span>Technical Differentiators</span>
              <h2 id="differentiators-title">Built Different. <strong>Built to Perform.</strong></h2>
              <p>Performance, visibilidade e acessibilidade nao sao detalhes finais. Eles fazem parte da arquitetura desde o inicio.</p>
              <div className={styles.diffChips}>
                <span>Optimized Performance</span>
                <span>Search Ready</span>
                <span>Accessible by Design</span>
                <span>Clean Standards</span>
              </div>
            </div>
            <div className={styles.diffCards}>
              {differentiators.map((item) => (
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

      <section className={styles.section} aria-labelledby="resume-title">
        <Container>
          <div className={styles.resumePanel}>
            <div className={styles.resumeProfile}>
              <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={280} height={280} />
              <h2 id="resume-title">Rafael Varela</h2>
              <p>Web Developer</p>
              <Link href={profile.cvPath}>View Full Resume</Link>
            </div>
            <div className={styles.timeline}>
              <h3>Experience</h3>
              <article>
                <strong>Senior Web Developer</strong>
                <span>2022 - Present</span>
                <p>Desenvolvimento de plataformas, sites institucionais, dashboards e solucoes web com foco em entrega e qualidade.</p>
              </article>
              <article>
                <strong>Web Developer</strong>
                <span>2020 - 2022</span>
                <p>Construcao de websites responsivos, temas WordPress, interfaces e componentes reutilizaveis.</p>
              </article>
              <article>
                <strong>Junior Developer</strong>
                <span>2018 - 2020</span>
                <p>Manutencao de sites, paginas de campanha, ajustes de front-end e suporte tecnico.</p>
              </article>
            </div>
            <div className={styles.resumeSide}>
              <h3>Skills</h3>
              {resumeItems.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
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
              <h2 id="contact-title">Vamos conversar</h2>
              <p>Estou disponivel para projetos web, WordPress/PHP, front-end, web/fullstack e gestao tecnica de tecnologia.</p>
            </div>
            <ContactCard />
          </div>
        </Container>
      </section>
    </>
  );
}
