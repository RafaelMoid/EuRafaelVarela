'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ResumeCard } from '@/components/cards/ResumeCard';
import { useLanguage } from '@/components/language/LanguageProvider';

export function ResumeFocusPageClient({ slug }: { slug: string }) {
  const { content, translate } = useLanguage();
  const focus = content.resumeFocuses.find((item) => item.slug === slug);
  const { projects, resumeFocuses } = content;
  const labels = translate.resumeFocus;

  if (!focus) {
    return null;
  }

  const relatedProjects = projects.filter((project) => focus.projectSlugs.includes(project.slug));
  const otherFocuses = resumeFocuses.filter((item) => item.slug !== focus.slug);

  return (
    <section aria-labelledby="resume-focus-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow={labels.eyebrow} title={focus.title} description={focus.intro} />

        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.2rem' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>{labels.stackSummary}</h3>
            <p>{focus.stackSummary}</p>
            <h3>{labels.pageOverview}</h3>
            <p>{focus.overview}</p>
          </div>

          {relatedProjects.length > 0 ? (
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>{labels.relatedProjects}</h3>
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: '1.2rem' }}>
          {otherFocuses.map((item) => (
            <ResumeCard key={item.slug} title={item.title} description={item.intro} href={`/curriculo/${item.slug}`} />
          ))}
        </div>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>{labels.profileSummary}</h3>
            <p>{focus.summary}</p>
            <h3>{labels.idealRoles}</h3>
            <ul>
              {focus.idealRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <h3>{labels.highlightedExperience}</h3>
            <ul>
              {focus.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>{labels.strengths}</h3>
              <ul>
                {focus.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>{labels.relevantStack}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {focus.stack.map((item) => (
                  <span key={item} style={{ padding: '0.4rem 0.7rem', borderRadius: '999px', background: 'rgba(37,99,235,0.16)', color: '#60a5fa' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
