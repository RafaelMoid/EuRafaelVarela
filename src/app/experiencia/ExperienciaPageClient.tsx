'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ExperienceTimeline } from '@/components/cards/ExperienceTimeline';
import { useLanguage } from '@/components/language/LanguageProvider';

export function ExperienciaPageClient() {
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
