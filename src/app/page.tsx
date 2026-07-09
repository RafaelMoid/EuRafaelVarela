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
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className={styles.section} aria-labelledby="about-title">
        <Container>
          <SectionTitle eyebrow="Apresentação" title="Desenvolvedor web com visão técnica e orientado a impacto" description="Minha trajetória reúne desenvolvimento front-end, WordPress/PHP, sistemas web, SEO técnico, performance, acessibilidade e gestão técnica de soluções digitais." />
          <div className={styles.aboutGrid}>
            <div className={styles.textBlock}>
              <p>
                Sou Rafael Varela, profissional de tecnologia com atuação em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Minha trajetória combina experiência prática em desenvolvimento de interfaces, criação de sites profissionais, integração com APIs, performance, acessibilidade, SEO técnico e organização de soluções digitais para ambientes reais de negócio.
              </p>
              <p>
                Ao longo da minha carreira, atuei em projetos para agências, empresas privadas e setor público, desenvolvendo soluções com WordPress, PHP, ACF, Elementor, React, Next.js, JavaScript, TypeScript, SCSS e consumo de APIs. Também tive experiência em projetos internacionais, trabalhando remotamente com demandas digitais para marcas globais, o que ampliou minha visão sobre qualidade técnica, colaboração, prazos e entrega profissional.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Valor técnico</h3>
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
          <SectionTitle eyebrow="Stacks principais" title="Competências que sustentam soluções reais" />
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
          <SectionTitle eyebrow="Projetos" title="Portfólio técnico com foco em aplicações reais" />
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
          <SectionTitle eyebrow="Experiência" title="Trajetória prática e posicionamento de valor" />
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
          <SectionTitle eyebrow="Currículos por foco" title="Escolha o perfil mais alinhado à oportunidade" />
          <div className={styles.resumeGrid}>
            <ResumeCard title="WordPress/PHP" description="Especialização em temas customizados, CMS, performance e SEO técnico." href="/curriculo/wordpress-php" />
            <ResumeCard title="React/Front-end" description="Foco em interfaces, acessibilidade e aplicações web com boa experiência de uso." href="/curriculo/react-front-end" />
            <ResumeCard title="Web/Fullstack/Gestão técnica" description="Visão conectada a sistemas, processos e entrega com responsabilidade técnica." href="/curriculo/web-fullstack-gestao-tecnica" />
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="contact-title">
        <Container>
          <SectionTitle eyebrow="Contato" title="Pronto para conversar sobre a próxima oportunidade" description="Estou disponível para recrutadores, gestores técnicos e empresas que buscam um profissional com forte base em WordPress, front-end e soluções digitais reais." />
          <ContactCard />
        </Container>
      </section>
    </>
  );
}
