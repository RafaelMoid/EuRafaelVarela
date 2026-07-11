'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { useLanguage } from '@/components/language/LanguageProvider';

export const metadata: Metadata = constructMetadata({
  title: 'Sobre | Rafael Varela',
  description: 'Perfil profissional de Rafael Varela, com visão técnica, experiência em WordPress/PHP, front-end e gestão técnica.',
  path: '/sobre'
});

export default function AboutPage() {
  const { translate } = useLanguage();

  return (
    <section aria-labelledby="about-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow={translate.about.eyebrow} title={translate.about.title} description={translate.about.paragraphs[0]} />
        <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.4rem' }}>
          {translate.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
