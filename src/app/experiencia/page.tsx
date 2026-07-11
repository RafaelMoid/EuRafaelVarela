'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ExperienceTimeline } from '@/components/cards/ExperienceTimeline';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { useLanguage } from '@/components/language/LanguageProvider';

export const metadata: Metadata = constructMetadata({
  title: 'Experiência | Rafael Varela',
  description: 'Linha do tempo profissional de Rafael Varela com foco em WordPress, front-end, sistemas web e gestão técnica.',
  path: '/experiencia'
});

export default function ExperiencePage() {
  const { translate } = useLanguage();

  return (
    <section aria-labelledby="experience-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow={translate.experience.eyebrow} title={translate.experience.title} description={translate.experience.description} />
        <ExperienceTimeline />
      </Container>
    </section>
  );
}
