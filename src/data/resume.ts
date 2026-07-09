export type ResumeFocus = {
  slug: string;
  title: string;
  intro: string;
  overview: string;
  stackSummary: string;
  idealRoles: string[];
  summary: string;
  highlights: string[];
  stack: string[];
  experience: string[];
  projectSlugs: string[];
};

export const resumeFocuses: ResumeFocus[] = [
  {
    slug: 'wordpress-php',
    title: 'WordPress/PHP',
    intro: 'Foco em soluções profissionais em WordPress, desenvolvimento com PHP, temas customizados, SEO técnico e performance.',
    overview:
      'Trabalho com WordPress como base de projetos reais, com foco em temas customizados, estrutura de conteúdo, performance, SEO técnico e soluções fáceis de manter para clientes e negócios.',
    stackSummary:
      'Minha atuação em WordPress/PHP combina desenvolvimento de temas, personalização de campos e conteúdos, integração com plugins, otimização para buscadores e organização de projetos para entrega profissional.',
    idealRoles: ['Desenvolvedor WordPress/PHP Pleno', 'Desenvolvedor WordPress Sênior'],
    summary:
      'Perfil voltado para projetos com CMS, temas customizados, arquitetura de conteúdo, manutenção e boas práticas técnicas para ambientes reais.',
    highlights: ['Temas customizados', 'ACF, CPT e Elementor', 'Performance e SEO técnico', 'Estruturas fáceis de manter'],
    stack: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'WooCommerce', 'SEO técnico', 'Performance'],
    experience: [
      'Atuação em sites institucionais e profissionais com lógica de conteúdo e manutenção.',
      'Desenvolvimento de soluções com foco em organização, escalabilidade e qualidade técnica.',
      'Trabalho com front-end e back-end dentro do ecossistema WordPress.'
    ],
    projectSlugs: ['commercepress', 'institucional-pro-cms', 'headless-wp-showcase']
  },
  {
    slug: 'react-front-end',
    title: 'React/Front-end',
    intro: 'Foco em interfaces responsivas, acessibilidade, componentização e experiência de uso com boa base de front-end.',
    overview:
      'No front-end, priorizo interfaces claras, responsivas e acessíveis, traduzindo requisitos em experiências funcionais, bem organizadas e preparadas para evoluir com o produto.',
    stackSummary:
      'Meu trabalho em React/Front-end envolve HTML semântico, CSS/SCSS, JavaScript, React, responsividade e acessibilidade, sempre com atenção à estrutura e à manutenção do código.',
    idealRoles: ['Desenvolvedor Front-end Pleno', 'Desenvolvedor React/Web'],
    summary:
      'Perfil orientado para entregar interfaces claras, responsivas e acessíveis, com boa organização de componentes e foco em solução de problemas.',
    highlights: ['Interfaces responsivas', 'Acessibilidade', 'SCSS e componentização', 'Boa experiência de uso'],
    stack: ['HTML semântico', 'CSS', 'SCSS', 'JavaScript', 'React', 'Responsividade', 'Acessibilidade', 'Next.js'],
    experience: [
      'Atuação em interfaces para projetos digitais e ambientes com alta exigência visual.',
      'Boa capacidade de traduzir layouts em soluções de alto valor para o usuário.',
      'Experiência com manutenção, evolução e organização de front-end em projetos variados.'
    ],
    projectSlugs: ['casa-clara', 'servicedesk-angular', 'rafael-varela-portfolio-hub']
  },
  {
    slug: 'web-fullstack-gestao-tecnica',
    title: 'Web/Fullstack/Gestão Técnica',
    intro: 'Foco em soluções digitais completas, organização técnica, integração, processos e visão de negócio aplicada à tecnologia.',
    overview:
      'Nesta vertente, conecto execução técnica, organização de demandas e visão de produto para criar soluções web que funcionam na prática, com foco em clareza, operação e impacto real.',
    stackSummary:
      'Minha atuação em web/fullstack e gestão técnica une sistemas web, dashboards, APIs, organização de fluxos, documentação e comunicação com áreas técnicas e não técnicas.',
    idealRoles: ['Desenvolvedor Web/Fullstack', 'Profissional de tecnologia com atuação técnica e visão de negócio'],
    summary:
      'Perfil voltado para quem busca um profissional que une execução técnica, organização de demandas e capacidade de colaborar com áreas de negócio.',
    highlights: ['Sistemas web', 'Dashboards e processos', 'Gestão técnica de demandas', 'Visão prática e orientada a impacto'],
    stack: ['Sistemas web', 'APIs REST', 'Dashboards', 'Gestão técnica', 'Organização de fluxos', 'Git/GitHub', 'Documentação técnica'],
    experience: [
      'Atuação em soluções internas, organização de dados e suporte a decisões operacionais.',
      'Experiência com liderança técnica leve, comunicação com stakeholders e organização de demandas.',
      'Visão prática para transformar problemas reais em soluções digitais úteis e bem estruturadas.'
    ],
    projectSlugs: ['contrataflow-dashboard', 'rafael-varela-portfolio-hub', 'casa-clara']
  }
];

export function getResumeFocusBySlug(slug: string) {
  return resumeFocuses.find((focus) => focus.slug === slug);
}
