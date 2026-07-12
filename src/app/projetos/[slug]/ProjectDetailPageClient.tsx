'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import { useLanguage } from '@/components/language/LanguageProvider';

export function ProjectDetailPageClient({ slug }: { slug: string }) {
  const { content: localizedContent, translate } = useLanguage();
  const project = localizedContent.projects.find((item) => item.slug === slug);
  const content = translate.projectDetail;

  if (!project) {
    return (
      <section aria-labelledby="project-title" style={{ padding: '2rem 0 4rem' }}>
        <Container>
          <SectionTitle eyebrow={content.eyebrow} title={content.notFoundTitle} description={content.notFoundDescription} />
        </Container>
      </section>
    );
  }

  return (
    <section aria-labelledby="project-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={project.title} description={project.description} />
        {project.planned ? (
          <p style={{ color: '#f59e0b', marginBottom: '1.2rem' }}>
            {content.plannedNotice}
          </p>
        ) : null}
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
            <p><strong>{content.status}:</strong> {project.status}</p>
            <p><strong>{content.type}:</strong> {project.type}</p>
            <p><strong>{content.stack}:</strong> {project.stack.join(', ')}</p>
            <p><strong>{content.problem}:</strong> {project.problem}</p>
            <p><strong>{content.features}:</strong> {project.features.join(', ')}</p>
            <p><strong>{content.decisions}:</strong> {project.decisions.join(', ')}</p>
            <p><strong>{content.futureImprovements}:</strong> {project.futureImprovements.join(', ')}</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link href={project.deployUrl} style={{ color: '#60a5fa', fontWeight: 700 }}>
                {content.deploy}
              </Link>
              <Link href={project.githubUrl} style={{ color: '#60a5fa', fontWeight: 700 }}>
                {content.github}
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1rem' }}>
              <Image src={project.image} alt={`${content.imageAlt} ${project.title}`} width={1600} height={900} />
            </div>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>{content.contactTitle}</h3>
              <p>{content.contactText}</p>
              <ContactTrigger style={{ color: '#60a5fa', fontWeight: 700, background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
                {content.contactCta}
              </ContactTrigger>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
