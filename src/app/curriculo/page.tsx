import { CurriculoPageClient } from './CurriculoPageClient';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Currículo | Rafael Varela',
  description: 'Currículo profissional de Rafael Varela com foco em WordPress/PHP, front-end, web/fullstack e gestão técnica.',
  path: '/curriculo'
});

export default function ResumePage() {
  return <CurriculoPageClient />;
}
