import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { constructMetadata } from '@/utils/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = constructMetadata({
  title: 'Rafael Varela | Desenvolvedor Web, WordPress/PHP e Front-end',
  description:
    'Portfólio profissional de Rafael Varela, desenvolvedor web de Recife com experiência em WordPress, PHP, CSS/SCSS, JavaScript, React, SEO técnico, performance, acessibilidade, sistemas internos e gestão técnica.'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
