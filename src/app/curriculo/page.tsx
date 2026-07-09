import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ResumeCard } from '@/components/cards/ResumeCard';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { skillGroups } from '@/data/skills';
import { constructMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Currículo | Rafael Varela',
  description: 'Currículo profissional de Rafael Varela com foco em WordPress/PHP, front-end, web/fullstack e gestão técnica.',
  path: '/curriculo'
});

export default function ResumePage() {
  return (
    <section aria-labelledby="resume-title" style={{ padding: '2rem 0 4rem' }}>
      <Container>
        <SectionTitle eyebrow="Currículo" title="Resumo profissional e foco de carreira" description="Minha trajetória reúne desenvolvimento web, WordPress/PHP, front-end responsivo, sistemas internos e gestão técnica de demandas digitais." />
        <div style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1.25rem', marginBottom: '1.2rem' }}>
          <p>Minha trajetória reúne desenvolvimento web, WordPress/PHP, front-end responsivo, sistemas internos e gestão técnica de demandas digitais. Atuo com foco em criar soluções performáticas, acessíveis, seguras e alinhadas a necessidades reais de negócio.</p>
          <a href="/assets/cv/rafael-varela-cv.pdf" style={{ color: '#60a5fa', fontWeight: 700 }}>
            Baixar currículo em PDF
          </a>
        </div>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: '1.2rem' }}>
          <ResumeCard title="WordPress/PHP" description="Temas customizados, CMS, plugins, SEO técnico e performance." href="/curriculo/wordpress-php" />
          <ResumeCard title="React/Front-end" description="Interfaces com boas práticas, acessibilidade e componente reutilizável." href="/curriculo/react-front-end" />
          <ResumeCard title="Web/Fullstack/Gestão técnica" description="Organização, integração, processos e visão de produto e operação." href="/curriculo/web-fullstack-gestao-tecnica" />
        </div>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          {skillGroups.map((group) => (
            <div key={group.title} style={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid #334155', borderRadius: '18px', padding: '1rem' }}>
              <h3>{group.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
