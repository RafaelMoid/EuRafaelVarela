import { SobrePageClient } from './SobrePageClient';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Sobre | Rafael Varela',
  description: 'Perfil profissional de Rafael Varela, com visão técnica, experiência em WordPress/PHP, front-end e gestão técnica.',
  path: '/sobre'
});

export default function AboutPage() {
  return <SobrePageClient />;
}
