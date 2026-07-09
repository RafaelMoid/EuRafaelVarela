import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Projetos | Rafael Varela',
  description: 'Projetos e demonstrações técnicas de Rafael Varela, incluindo portfólio, aplicações web e iniciativas WordPress.',
  path: '/projetos'
});

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Projetos" title="Demonstrações técnicas e portfólio profissional" description="A coleção abaixo reúne projetos de portfólio, aplicações web, conceitos WordPress e ideias em evolução para mostrar capacidade técnica e visão de produto." />
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
