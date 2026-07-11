'use client';

import Image from 'next/image';
import Link from 'next/link';
import { openContactModal } from '@/components/contact/ContactModal';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import styles from './HeroSection.module.scss';

const qualityCards = [
  { label: 'Clean Code', value: 'Escalavel' },
  { label: 'Performance', value: 'Otimizado' },
  { label: 'Accessibility', value: 'Inclusivo' },
];

const metricCards = [
  { title: 'SEO', score: '98', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Robots.txt'] },
  { title: 'Performance', score: '96', items: ['Core Web Vitals', 'Fast Load', 'Assets otimizados'] },
  { title: 'Accessibility', score: '100', items: ['Keyboard', 'Screen Reader', 'Semantic HTML'] },
];

export function HeroSection() {
  const featuredProjects = projects.slice(1, 7);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.left}>
        <p className={styles.kicker}>Full-Stack Developer • Tech Enthusiast • Problem Solver</p>
        <h1 id="hero-title" className={styles.title}>
          Rafael Varela <span>Portfolio Hub</span>
        </h1>
        <div className={styles.shortLine} aria-hidden="true" />
        <p className={styles.description}>
          Construo experiencias web rapidas, acessiveis e preparadas para SEO, com foco em WordPress, front-end, sistemas web e gestao tecnica.
        </p>

        <div className={styles.qualityStrip}>
          {qualityCards.map((item) => (
            <div key={item.label} className={styles.qualityItem}>
              <span aria-hidden="true">&lt;/&gt;</span>
              <strong>{item.label}</strong>
              <small>{item.value}</small>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryAction} type="button" onClick={openContactModal}>
            Vamos trabalhar juntos
          </button>
          <Link className={styles.secondaryAction} href={profile.cvPath}>
            Download Resume
          </Link>
        </div>

        <div className={styles.skillsMini}>
          <h2>Skills & Technologies</h2>
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
            <h2>Projects</h2>
            <Link href="/projetos">View All Projects</Link>
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
            <h2>Resume</h2>
            <p>Rafael Varela</p>
            <small>Full-Stack Developer</small>
          </div>
          <ul>
            <li>4+ Years Experience</li>
            <li>Full-Stack Specialist</li>
            <li>Problem Solver and Builder</li>
          </ul>
          <Link href="/curriculo">View Full Resume</Link>
        </div>
      </div>

      <aside className={styles.right} aria-label="Diferenciais tecnicos">
        <div className={styles.profileCard}>
          <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={160} height={160} priority />
          <div>
            <strong>Rafael Varela</strong>
            <span>Full-Stack Developer</span>
            <small>Available for work</small>
          </div>
        </div>

        <div className={styles.codeCard} aria-hidden="true">
          <div className={styles.codeTabs}>
            <span>page.tsx</span>
            <span>globals.css</span>
          </div>
          <pre>{`export default function Home() {
  return (
    <main className="portfolio">
      <h1>Building digital experiences</h1>
    </main>
  )
}`}</pre>
        </div>

        {metricCards.map((metric) => (
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
          <h2>Vamos construir algo grande</h2>
          <p>Tem um projeto em mente ou quer colaborar? Vamos conversar.</p>
          <button type="button" onClick={openContactModal}>Get In Touch</button>
        </div>
      </aside>
    </section>
  );
}
