import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactCard } from '@/components/cards/ContactCard';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Contato | Rafael Varela',
  description: 'Entre em contato com Rafael Varela para oportunidades de desenvolvimento web, WordPress/PHP, front-end e gestão técnica.',
  path: '/contato'
});

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Contato" title="Disponível para oportunidades técnicas e estratégicas" description="Estou disponível para conversas sobre oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/fullstack e gestão técnica de tecnologia." />
        <ContactCard />
      </Container>
    </section>
  );
}
