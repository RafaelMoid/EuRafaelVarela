import { ProjectsPageClient } from './ProjectsPageClient';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Projetos | Rafael Varela',
  description: 'Projetos e demonstracoes tecnicas de Rafael Varela, incluindo portfolio, aplicacoes web e iniciativas WordPress.',
  path: '/projetos'
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
