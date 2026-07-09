import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ResumeCard } from '@/components/cards/ResumeCard';
import { projects } from '@/data/projects';
import { getResumeFocusBySlug, resumeFocuses } from '@/data/resume';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return resumeFocuses.map((focus) => ({ slug: focus.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const focus = getResumeFocusBySlug(slug);

  if (!focus) {
    return constructMetadata({ title: 'Foco não encontrado', description: 'Este foco de currículo não está disponível.', path: '/curriculo' });
  }

  return constructMetadata({
    title: `${focus.title} | Currículo Rafael Varela`,
    description: focus.intro,
    path: `/curriculo/${focus.slug}`
  });
}

export default async function ResumeFocusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const focus = getResumeFocusBySlug(slug);

  if (!focus) {
    notFound();
  }

  const relatedProjects = projects.filter((project) => focus.projectSlugs.includes(project.slug));
  const otherFocuses = resumeFocuses.filter((item) => item.slug !== focus.slug);

  return (
    <section aria-labelledby="resume-focus-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Currículo por foco" title={focus.title} description={focus.intro} />

        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.2rem' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>Resumo das stacks</h3>
            <p>{focus.stackSummary}</p>
            <h3>Overview desta página</h3>
            <p>{focus.overview}</p>
          </div>

          {relatedProjects.length > 0 ? (
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>Projetos que usam esta stack</h3>
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
            <h3 style={{ marginTop: 0 }}>Resumo do perfil</h3>
            <p>{focus.summary}</p>
            <h3>Funções e posições ideais</h3>
            <ul>
              {focus.idealRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <h3>Experiência destacada</h3>
            <ul>
              {focus.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>Pontos fortes</h3>
              <ul>
                {focus.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>Stack relevante</h3>
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
