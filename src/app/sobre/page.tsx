import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Sobre | Rafael Varela',
  description: 'Perfil profissional de Rafael Varela, com visão técnica, experiência em WordPress/PHP, front-end e gestão técnica.',
  path: '/sobre'
});

export default function AboutPage() {
  return (
    <section aria-labelledby="about-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Sobre" title="Perfil profissional objetivo e orientado a resultados" description="Sou Rafael Varela, profissional de tecnologia de Recife/PE, com experiência em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos." />
        <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.4rem' }}>
          <p>Sou Rafael Varela, profissional de tecnologia de Recife/PE, com experiência em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Minha atuação combina execução técnica, visão de negócio e capacidade de organizar soluções digitais para problemas reais.</p>
          <p>Tenho forte domínio em WordPress customizado, PHP, CSS/SCSS, Git, SEO técnico, performance e criação de interfaces profissionais. Também atuo com JavaScript, React, Next.js, consumo de APIs, dashboards e organização de sistemas internos.</p>
          <p>Minha forma de trabalho é prática, objetiva e orientada à entrega. Busco entender o problema antes de propor a solução, mantendo atenção à experiência do usuário, acessibilidade, segurança, manutenibilidade e clareza na comunicação com equipes técnicas e não técnicas.</p>
        </div>
      </Container>
    </section>
  );
}
