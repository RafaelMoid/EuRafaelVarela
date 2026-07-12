import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { FloatingContactButton } from '@/components/contact/FloatingContactButton';
import { SkipLink } from '@/components/language/SkipLink';
import { constructMetadata } from '@/utils/seo';
import { LanguageProvider } from '@/components/language/LanguageProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = constructMetadata({
  title: 'Rafael Varela | Desenvolvedor Web, WordPress/PHP e Front-end',
  description:
    'Portfolio profissional de Rafael Varela, desenvolvedor web de Recife com experiencia em WordPress, PHP, CSS/SCSS, JavaScript, React, SEO tecnico, performance, acessibilidade, sistemas internos e gestao tecnica.'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingContactButton />
          <ContactModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
