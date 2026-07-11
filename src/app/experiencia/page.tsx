import { ExperienciaPageClient } from './ExperienciaPageClient';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Experiência | Rafael Varela',
  description: 'Linha do tempo profissional de Rafael Varela com foco em WordPress, front-end, sistemas web e gestão técnica.',
  path: '/experiencia'
});

export default function ExperiencePage() {
  return <ExperienciaPageClient />;
}
