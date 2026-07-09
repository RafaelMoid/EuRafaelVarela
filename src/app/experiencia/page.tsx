import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ExperienceTimeline } from '@/components/cards/ExperienceTimeline';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Experiência | Rafael Varela',
  description: 'Linha do tempo profissional de Rafael Varela com foco em WordPress, front-end, sistemas web e gestão técnica.',
  path: '/experiencia'
});

export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Experiência" title="Trajetória profissional com foco em entrega, organização e impacto" description="A experiência abaixo reúne atuação em projetos reais, ambientes com prazos, demandas técnicas e necessidade de comunicação clara com times e stakeholders." />
        <ExperienceTimeline />
      </Container>
    </section>
  );
}
