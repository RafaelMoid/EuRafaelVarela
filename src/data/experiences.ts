export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  note: string;
};

export const experiences: Experience[] = [
  {
    company: 'SEDUH',
    role: 'Desenvolvedor Web / Gestão Técnica / Sistemas Internos',
    period: 'Experiência profissional',
    summary:
      'Atuação em desenvolvimento de soluções digitais, organização de dados, aplicações internas, dashboards, suporte a fluxos administrativos, WordPress, automações e gestão técnica de demandas de tecnologia.',
    stack: ['WordPress', 'JavaScript', 'Dados', 'Dashboards', 'Sistemas internos', 'Gestão técnica'],
    note: 'Informações sensíveis, dados internos e sistemas restritos não são exibidos por segurança e confidencialidade.'
  },
  {
    company: 'The Brooklyn Brothers',
    role: 'Front-end Developer',
    period: 'Projetos internacionais',
    summary:
      'Atuação em projetos digitais internacionais com foco em interfaces responsivas, manutenção front-end, WordPress, AEM, React, SCSS e adaptação de layouts para marcas globais.',
    stack: ['AEM', 'WordPress', 'React', 'SCSS', 'JavaScript', 'Front-end responsivo'],
    note: 'Detalhes protegidos por NDA foram anonimizados.'
  },
  {
    company: 'JAZZZ Agência Digital',
    role: 'Front-end Developer',
    period: 'Desenvolvimento web',
    summary:
      'Desenvolvimento e manutenção de sites WordPress, criação de interfaces, ajustes com PHP, Elementor, ACF, JavaScript e CSS/SCSS.',
    stack: ['WordPress', 'PHP', 'Elementor', 'ACF', 'JavaScript', 'CSS'],
    note: 'Projetos com foco em sites profissionais, manutenção e entrega com qualidade.'
  },
  {
    company: 'TDS Company',
    role: 'Estágio Front-end',
    period: 'Início de carreira',
    summary:
      'Apoio em desenvolvimento front-end, interfaces web, integrações e evolução técnica em ambiente profissional.',
    stack: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Git'],
    note: 'Experiência inicial com aprendizado prático e adaptação ao ambiente profissional.'
  }
];
