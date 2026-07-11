'use client';

import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactCard } from '@/components/cards/ContactCard';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { useLanguage } from '@/components/language/LanguageProvider';

export const metadata: Metadata = constructMetadata({
  title: 'Contato | Rafael Varela',
  description: 'Entre em contato com Rafael Varela para oportunidades de desenvolvimento web, WordPress/PHP, front-end e gestão técnica.',
  path: '/contato'
});

export default function ContactPage() {
  const { translate } = useLanguage();

  return (
    <section aria-labelledby="contact-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow={translate.contact.eyebrow} title={translate.contact.title} description={translate.contact.description} />
        <ContactCard />
      </Container>
    </section>
  );
}
