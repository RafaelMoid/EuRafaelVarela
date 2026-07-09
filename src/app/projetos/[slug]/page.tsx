import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import { getProjectBySlug, projects } from '@/data/projects';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({ title: 'Projeto não encontrado', description: 'O projeto solicitado não está disponível.', path: '/projetos' });
  }

  return constructMetadata({
    title: `${project.title} | Rafael Varela`,
    description: project.description,
    path: `/projetos/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section aria-labelledby="project-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Projeto" title={project.title} description={project.description} />
        {project.planned ? (
          <p style={{ color: '#f59e0b', marginBottom: '1.2rem' }}>
            Este projeto está em desenvolvimento como parte de um portfólio técnico voltado à demonstração de habilidades em aplicações reais.
          </p>
        ) : null}
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Tipo:</strong> {project.type}</p>
            <p><strong>Stack:</strong> {project.stack.join(', ')}</p>
            <p><strong>Problema resolvido:</strong> {project.problem}</p>
            <p><strong>Funcionalidades previstas ou implementadas:</strong> {project.features.join(', ')}</p>
            <p><strong>Decisões técnicas:</strong> {project.decisions.join(', ')}</p>
            <p><strong>Melhorias futuras:</strong> {project.futureImprovements.join(', ')}</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link href={project.deployUrl} style={{ color: '#60a5fa', fontWeight: 700 }}>
                Ver deploy
              </Link>
              <Link href={project.githubUrl} style={{ color: '#60a5fa', fontWeight: 700 }}>
                Ver GitHub
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1rem' }}>
              <Image src={project.image} alt={`Imagem do projeto ${project.title}`} width={1600} height={900} />
            </div>
            <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>Interessado em conversar?</h3>
              <p>Posso discutir esse projeto, a arquitetura e como ele se conecta ao meu perfil técnico e comercial.</p>
              <ContactTrigger style={{ color: '#60a5fa', fontWeight: 700, background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}>
                Falar comigo
              </ContactTrigger>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
