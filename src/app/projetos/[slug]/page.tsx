import { projects, getProjectBySlug } from '@/data/projects';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { ProjectDetailPageClient } from './ProjectDetailPageClient';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({ title: 'Projeto nao encontrado', description: 'O projeto solicitado nao esta disponivel.', path: '/projetos' });
  }

  return constructMetadata({
    title: `${project.title} | Rafael Varela`,
    description: project.description,
    path: `/projetos/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPageClient slug={slug} />;
}
