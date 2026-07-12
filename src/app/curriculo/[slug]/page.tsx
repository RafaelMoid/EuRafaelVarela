import { getResumeFocusBySlug, resumeFocuses } from '@/data/resume';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { ResumeFocusPageClient } from './ResumeFocusPageClient';

export function generateStaticParams() {
  return resumeFocuses.map((focus) => ({ slug: focus.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const focus = getResumeFocusBySlug(slug);

  if (!focus) {
    return constructMetadata({ title: 'Foco nao encontrado', description: 'Este foco de curriculo nao esta disponivel.', path: '/curriculo' });
  }

  return constructMetadata({
    title: `${focus.title} | Curriculo Rafael Varela`,
    description: focus.intro,
    path: `/curriculo/${focus.slug}`
  });
}

export default async function ResumeFocusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ResumeFocusPageClient slug={slug} />;
}
