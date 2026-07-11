export type LanguageCode = 'pt-BR' | 'en-US' | 'es-ES';

export const languageOptions = [
  { code: 'pt-BR', label: 'Português' },
  { code: 'en-US', label: 'English' },
  { code: 'es-ES', label: 'Español' },
] as const;

export const defaultLanguage: LanguageCode = 'pt-BR';

export const baseTranslations = {
  selectLanguageLabel: 'Selecionar idioma',
  nav: {
    home: 'Início',
    projects: 'Projetos',
    experience: 'Experiência',
    about: 'Sobre',
    resume: 'Currículo',
    contact: 'Contato',
  },
  hero: {
    eyebrow: 'Olá, sou Rafael Varela',
    title: 'Desenvolvedor Web com foco em WordPress, front-end e soluções digitais.',
    description:
      'Crio experiências web acessíveis, rápidas e pensadas para negócios que precisam de presença profissional e performance técnica.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar currículo',
    ctaContact: 'Falar comigo',
    role: 'Desenvolvedor Web',
  },
  home: {
    about: {
      eyebrow: 'Sobre mim',
      title: 'Construindo interfaces e experiências digitais reais',
      description1:
        'Sou um desenvolvedor que une WordPress, PHP e front-end para entregar sites e aplicações com qualidade, organização e foco em resultados.',
      description2:
        'Gosto de trabalhar em projetos que exigem atenção a performance, acessibilidade e boa experiência para usuários e clientes.',
    },
    skills: {
      eyebrow: 'Habilidades',
      title: 'Competências técnicas e entregas práticas',
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Trabalhos e estudos de caso',
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Resumo da jornada profissional',
    },
    resume: {
      eyebrow: 'Currículo',
      title: 'Focos de atuação técnica',
    },
    contact: {
      eyebrow: 'Vamos conversar',
      title: 'Quer trabalhar comigo?',
      description: 'Estou disponível para projetos web, WordPress, sistemas e colaboração técnica. Entre em contato para conversar sobre o seu desafio.',
    },
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Um desenvolvedor que transforma ideias em aplicações',
    paragraphs: [
      'Atuo com desenvolvimento web e WordPress, criando interfaces, temas customizados e experiências digitais claras e acessíveis.',
      'Meu foco é equilibrar entrega técnica, SEO e performance com uma base sólida de front-end e arquitetura de conteúdo.',
    ],
  },
  experience: {
    eyebrow: 'Experiência',
    title: 'Minha história profissional',
    description: 'Linha do tempo com projetos e trabalhos que mostram atuação em WordPress, front-end, sistemas internos e desenvolvimento web.',
  },
  resume: {
    eyebrow: 'Currículo',
    title: 'Resumo profissional',
    description: 'Conheça os focos de atuação, competências e principais perfis de entrega em WordPress, front-end e gestão técnica.',
    downloadText: 'Baixar currículo',
    downloadNote: 'Currículo em PDF disponível para download.',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Converse comigo',
    description: 'Use o formulário de contato para falar sobre vagas, projetos ou parcerias de desenvolvimento web.',
  },
  header: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  footer: {
    copyright: '© {year} {name}. Todos os direitos reservados.',
    techStack: 'Portfólio desenvolvido com Next.js, TypeScript e SCSS Modules.',
  },
} as const;

export const translations: Record<LanguageCode, typeof baseTranslations> = {
  'pt-BR': baseTranslations,
  'en-US': baseTranslations,
  'es-ES': baseTranslations,
};
