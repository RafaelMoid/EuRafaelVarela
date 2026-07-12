'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { useLanguage } from '@/components/language/LanguageProvider';

export function ProjectsPageClient() {
  const { content, translate } = useLanguage();
  const { projects } = content;

  return (
    <section aria-labelledby="projects-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle
          eyebrow={translate.projectsPage.eyebrow}
          title={translate.projectsPage.title}
          description={translate.projectsPage.description}
        />
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
