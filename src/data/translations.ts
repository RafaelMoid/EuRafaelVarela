export type LanguageCode = 'pt-BR' | 'en-US' | 'es-ES';

export const languageOptions = [
  { code: 'pt-BR', label: 'Português' },
  { code: 'en-US', label: 'English' },
  { code: 'es-ES', label: 'Español' },
] as const;

export const defaultLanguage: LanguageCode = 'pt-BR';

export const baseTranslations = {
  selectLanguageLabel: 'Idioma',
  nav: {
    home: 'Início',
    projects: 'Projetos',
    experience: 'Experiência',
    about: 'Sobre',
    resume: 'Currículo',
    contact: 'Contato',
    contactCta: 'Fale comigo',
  },
  heroDashboard: {
    kicker: 'Desenvolvedor Full-Stack • Entusiasta tech • Solucionador de problemas',
    titleName: 'Rafael Varela',
    titleHighlight: 'Hub de Portfólio',
    description:
      'Construo experiências web rápidas, acessíveis e preparadas para SEO, com foco em WordPress, front-end, sistemas web e gestão técnica.',
    primaryCta: 'Vamos trabalhar juntos',
    secondaryCta: 'Baixar currículo',
    skillsTitle: 'Habilidades e tecnologias',
    projectsTitle: 'Projetos',
    projectsCta: 'Ver todos',
    resumeTitle: 'Currículo',
    resumeRole: 'Desenvolvedor Full-Stack',
    resumeCta: 'Ver currículo',
    contactTitle: 'Vamos construir algo grande',
    contactDescription: 'Tem um projeto em mente ou quer colaborar? Vamos conversar.',
    contactCta: 'Entrar em contato',
    codeTitle: 'Construindo experiências digitais',
    profileStatus: 'Disponível para trabalho',
    qualities: [
      { label: 'Código limpo', value: 'Escalável' },
      { label: 'Performance', value: 'Otimizado' },
      { label: 'Acessibilidade', value: 'Inclusivo' },
    ],
    resumeBullets: ['4+ anos de experiência', 'Especialista Full-Stack', 'Problem solver e builder'],
    metrics: [
      { title: 'SEO', score: '93', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Robots.txt'] },
      { title: 'Performance', score: '91', items: ['Core Web Vitals', 'Carga rápida', 'Assets otimizados'] },
      { title: 'Acessibilidade', score: '100', items: ['Teclado', 'Leitor de tela', 'HTML semântico'] },
    ],
  },
  home: {
    about: {
      title: 'Sobre mim',
      lead: 'Construo experiências web rápidas, acessíveis e preparadas para SEO que geram resultados.',
      description:
        'Sou Rafael Varela, desenvolvedor web com 4+ anos de experiência criando sites, sistemas e interfaces modernas. Tenho foco em WordPress/PHP, front-end, performance, acessibilidade e organização técnica.',
      tags: ['WordPress & PHP', 'Desenvolvimento front-end', 'Sistemas web', 'SEO e performance', 'Acessibilidade', 'Gestão técnica'],
      footer: ['Código limpo', 'Visão técnica', 'Foco em entrega'],
      stats: [
        { value: '4+', label: 'Anos de experiência' },
        { value: '30+', label: 'Projetos concluídos' },
        { value: '20+', label: 'Clientes atendidos' },
        { value: '100+', label: 'Features entregues' },
        { value: '93', label: 'Média de SEO' },
        { value: '91', label: 'Média de performance' },
      ],
    },
    skills: {
      title: 'Habilidades e tecnologias',
      wordpressDescription: 'Construindo experiências rápidas e flexíveis.',
      defaultDescription: 'Tecnologias aplicadas em entregas reais.',
    },
    projects: {
      title: 'Projetos em destaque',
      cta: 'Ver todos os projetos',
      details: 'Ver detalhes',
    },
    differentiators: {
      eyebrow: 'Diferenciais técnicos',
      titleStart: 'Construído diferente.',
      titleHighlight: 'Construído para performar.',
      description:
        'Performance, visibilidade e acessibilidade não são detalhes finais. Eles fazem parte da arquitetura desde o início.',
      chips: ['Performance otimizada', 'Pronto para busca', 'Acessível por design', 'Padrões limpos'],
      cards: [
        {
          title: 'SEO',
          score: '93',
          text: 'Construído para visibilidade e descoberta.',
          items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Dados estruturados'],
        },
        {
          title: 'Performance',
          score: '91',
          text: 'Sites rápidos e otimizados por padrão.',
          items: ['Core Web Vitals', 'Carga rápida', 'Renderização eficiente', 'Assets otimizados'],
        },
        {
          title: 'Acessibilidade',
          score: '100',
          text: 'Usável por todos, com empatia e critério.',
          items: ['Navegação por teclado', 'Leitor de tela', 'Contraste de cor', 'HTML semântico'],
        },
      ],
    },
    resume: {
      title: 'Rafael Varela',
      role: 'Desenvolvedor web',
      cta: 'Ver currículo completo',
      experienceTitle: 'Experiência',
      sideTitle: 'Habilidades',
      timeline: [
        {
          role: 'Technology Manager',
          company: 'SEDUH-PE',
          period: 'Set/2025 - Presente',
          description: 'Coordenação da equipe de tecnologia, gestão de demandas de TI e suporte para governança de dados e inovação.',
        },
        {
          role: 'Data Analyst',
          company: 'SEDUH-PE',
          period: 'Abr/2025 - Out/2025',
          description: 'Desenvolvimento de dashboards, relatórios e aplicações web; coleta e estruturação de dados para gestão pública.',
        },
        {
          role: 'Frontend Developer',
          company: 'The Brooklyn Brothers',
          period: 'Jul/2023 - Jul/2024',
          description: 'Criação e manutenção de websites e aplicações para Unillever.',
        },
        {
          role: 'Frontend Developer',
          company: 'Jazzz digital agency',
          period: 'Abr/2025 - Out/2025',
          description: 'Desenvolvimento e manutenção de websites e aplicações, gestão de equipe e gestão e manutenção de hospedagem.',
        },
        {
          role: 'Frontend Developer',
          company: 'TDS Company',
          period: 'Jul/2021 - Ago/2022',
          description: 'Desenvolvimento de sites WordPress e aplicações web com React.',
        },
      ],
      items: [
        { title: 'WordPress/PHP', text: 'Temas customizados, CMS, WooCommerce, ACF, plugins, integrações, performance e SEO técnico para sites institucionais e comerciais.' },
        { title: 'Front-end', text: 'Interfaces responsivas com React, Next.js, TypeScript, JavaScript, SCSS, componentização, acessibilidade e foco em experiência de uso.' },
        { title: 'Gestão técnica', text: 'Planejamento, organização de fluxos, documentação, liderança de demandas, suporte a equipes e visão de entrega orientada a qualidade.' },
      ],
    },
    contact: {
      title: 'Vamos conversar',
      description: 'Estou disponível para projetos web, WordPress/PHP, front-end, web/fullstack e gestão técnica de tecnologia.',
    },
  },
  contactActions: {
    copyEmail: 'Copiar meu e-mail',
    copiedEmail: 'E-mail copiado',
    linkedin: 'Acesse meu LinkedIn',
    github: 'Acesse meu GitHub',
  },
  contactModal: {
    title: 'Contato',
    description:
      'Estou disponível para oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/full-stack e gestão técnica. Vamos construir algo excepcional juntos.',
    available: 'Disponível para trabalho',
    email: 'Email',
    copyMain: 'Copiar meu e-mail',
    copiedMain: 'E-mail copiado',
    privacy: 'Suas informações ficam seguras comigo. Respeito sua privacidade.',
    close: 'Fechar modal de contato',
    reasons: [
      { title: 'Resposta rápida', text: 'Retorno objetivo' },
      { title: 'Profissional', text: 'Entrega clara' },
      { title: 'Aberto a ideias', text: 'Vamos discutir' },
    ],
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
    description: 'Use os links de contato para falar sobre vagas, projetos ou parcerias de desenvolvimento web.',
  },
  header: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  footer: {
    copyright: '© {year} {name}. Todos os direitos reservados.',
    techStack: 'Portfólio desenvolvido com Next.js, TypeScript e SCSS Modules.',
  },
};

export const translations: Record<LanguageCode, typeof baseTranslations> = {
  'pt-BR': baseTranslations,
  'en-US': {
    ...baseTranslations,
    selectLanguageLabel: 'Language',
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      resume: 'Resume',
      contact: 'Contact',
      contactCta: 'Contact Me',
    },
    heroDashboard: {
      ...baseTranslations.heroDashboard,
      kicker: 'Full-Stack Developer • Tech Enthusiast • Problem Solver',
      description:
        'I build fast, accessible and SEO-ready web experiences focused on WordPress, front-end, web systems and technical management.',
      primaryCta: "Let's work together",
      secondaryCta: 'Download Resume',
      projectsTitle: 'Projects',
      projectsCta: 'View All',
      resumeTitle: 'Resume',
      resumeCta: 'View Resume',
      contactTitle: "Let's build something great",
      contactDescription: 'Have a project in mind or want to collaborate? Let’s talk.',
      contactCta: 'Get In Touch',
      codeTitle: 'Building digital experiences',
      profileStatus: 'Available for work',
      qualities: [
        { label: 'Clean Code', value: 'Scalable' },
        { label: 'Performance', value: 'Optimized' },
        { label: 'Accessibility', value: 'Inclusive' },
      ],
      resumeBullets: ['4+ years experience', 'Full-Stack specialist', 'Problem solver and builder'],
      metrics: [
        { title: 'SEO', score: '93', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Robots.txt'] },
        { title: 'Performance', score: '91', items: ['Core Web Vitals', 'Fast Load', 'Optimized assets'] },
        { title: 'Accessibility', score: '100', items: ['Keyboard', 'Screen reader', 'Semantic HTML'] },
      ],
    },
    home: {
      ...baseTranslations.home,
      about: {
        ...baseTranslations.home.about,
        description:
          'I’m Rafael Varela, a web developer with 4+ years of experience building modern websites, systems and interfaces. I focus on WordPress/PHP, front-end, performance, accessibility and technical organization.',
        stats: [
          { value: '4+', label: 'Years Experience' },
          { value: '30+', label: 'Projects Completed' },
          { value: '20+', label: 'Happy Clients' },
          { value: '100+', label: 'Custom Features Delivered' },
          { value: '93', label: 'SEO Score Average' },
          { value: '91', label: 'Performance Score Average' },
        ],
      },
      skills: {
        title: 'Skills & Technologies',
        wordpressDescription: 'Building fast and flexible experiences.',
        defaultDescription: 'Technologies applied to real deliveries.',
      },
      projects: {
        title: 'Featured Projects',
        cta: 'View all projects',
        details: 'View details',
      },
      differentiators: {
        ...baseTranslations.home.differentiators,
        eyebrow: 'Technical differentiators',
        description: 'Performance, visibility and accessibility are not afterthoughts. They are built into the architecture from the start.',
        chips: ['Optimized performance', 'Search ready', 'Accessible by design', 'Clean standards'],
        cards: [
          { title: 'SEO', score: '93', text: 'Built for visibility and discoverability.', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Structured Data'] },
          { title: 'Performance', score: '91', text: 'Fast and optimized sites by default.', items: ['Core Web Vitals', 'Fast Load', 'Efficient Rendering', 'Optimized Assets'] },
          { title: 'Accessibility', score: '100', text: 'Usable by everyone, built with empathy.', items: ['Keyboard Navigation', 'Screen Reader Friendly', 'Color Contrast', 'Semantic HTML'] },
        ],
      },
      resume: {
        ...baseTranslations.home.resume,
        cta: 'View Full Resume',
        experienceTitle: 'Experience',
        sideTitle: 'Skills',
        timeline: [
          { role: 'Technology Manager', company: 'SEDUH-PE', period: 'Sep/2025 - Present', description: 'Coordination of the technology team, management of IT demands and support for data governance and innovation.' },
          { role: 'Data Analyst', company: 'SEDUH-PE', period: 'Apr/2025 - Oct/2025', description: 'Development of dashboards, reports and web applications; data collection and structuring for public management.' },
          { role: 'Frontend Developer', company: 'The Brooklyn Brothers', period: 'Jul/2023 - Jul/2024', description: 'Created and maintained websites and apps for Unillever.' },
          { role: 'Frontend Developer', company: 'Jazzz digital agency', period: 'Apr/2025 - Oct/2025', description: 'Development and maintenance of websites and applications, team management and hosting management and maintenance.' },
          { role: 'Frontend Developer', company: 'TDS Company', period: 'Jul/2021 - Aug/2022', description: 'Development of WordPress sites and web applications with React.' },
        ],
        items: [
          { title: 'WordPress/PHP', text: 'Custom themes, CMS, WooCommerce, ACF, plugins, integrations, performance and technical SEO for institutional and commercial websites.' },
          { title: 'Front-end', text: 'Responsive interfaces with React, Next.js, TypeScript, JavaScript, SCSS, componentization, accessibility and user experience focus.' },
          { title: 'Technical management', text: 'Planning, workflow organization, documentation, demand leadership, team support and quality-oriented delivery vision.' },
        ],
      },
      contact: {
        title: 'Let’s talk',
        description: 'I’m available for web, WordPress/PHP, front-end, web/full-stack and technical management projects.',
      },
    },
    contactActions: {
      copyEmail: 'Copy my email',
      copiedEmail: 'Email copied',
      linkedin: 'Visit my LinkedIn',
      github: 'Visit my GitHub',
    },
    contactModal: {
      ...baseTranslations.contactModal,
      description:
        'I’m available for web development, WordPress/PHP, front-end, web/full-stack and technical management opportunities. Let’s build something exceptional together.',
      available: 'Available for work',
      copyMain: 'Copy my email',
      copiedMain: 'Email copied',
      privacy: 'Your information is safe with me. I respect your privacy.',
      close: 'Close contact modal',
      reasons: [
        { title: 'Fast Response', text: 'Clear follow-up' },
        { title: 'Professional', text: 'Reliable delivery' },
        { title: 'Open to Ideas', text: 'Let’s discuss' },
      ],
    },
    footer: {
      copyright: '© {year} {name}. All rights reserved.',
      techStack: 'Portfolio built with Next.js, TypeScript and SCSS Modules.',
    },
  },
  'es-ES': {
    ...baseTranslations,
    selectLanguageLabel: 'Idioma',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre mí',
      resume: 'Currículum',
      contact: 'Contacto',
      contactCta: 'Contáctame',
    },
    heroDashboard: {
      ...baseTranslations.heroDashboard,
      kicker: 'Full-Stack Developer • Entusiasta tech • Solucionador de problemas',
      description:
        'Construyo experiencias web rápidas, accesibles y preparadas para SEO, con foco en WordPress, front-end, sistemas web y gestión técnica.',
      primaryCta: 'Trabajemos juntos',
      secondaryCta: 'Descargar currículum',
      projectsTitle: 'Proyectos',
      projectsCta: 'Ver todos',
      resumeTitle: 'Currículum',
      resumeCta: 'Ver currículum',
      contactTitle: 'Construyamos algo grande',
      contactDescription: '¿Tienes un proyecto en mente o quieres colaborar? Hablemos.',
      contactCta: 'Contactar',
      codeTitle: 'Construyendo experiencias digitales',
      profileStatus: 'Disponible para trabajar',
      qualities: [
        { label: 'Clean Code', value: 'Escalable' },
        { label: 'Performance', value: 'Optimizado' },
        { label: 'Accessibility', value: 'Inclusivo' },
      ],
      resumeBullets: ['4+ años de experiencia', 'Especialista Full-Stack', 'Problem solver y builder'],
      metrics: [
        { title: 'SEO', score: '93', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Robots.txt'] },
        { title: 'Performance', score: '91', items: ['Core Web Vitals', 'Carga rápida', 'Assets optimizados'] },
        { title: 'Accessibility', score: '100', items: ['Teclado', 'Lector de pantalla', 'HTML semántico'] },
      ],
    },
    home: {
      ...baseTranslations.home,
      about: {
        ...baseTranslations.home.about,
        description:
          'Soy Rafael Varela, desarrollador web con más de 4 años de experiencia creando sitios, sistemas e interfaces modernas. Me enfoco en WordPress/PHP, front-end, performance, accesibilidad y organización técnica.',
        stats: [
          { value: '4+', label: 'Años de experiencia' },
          { value: '30+', label: 'Proyectos completados' },
          { value: '20+', label: 'Clientes atendidos' },
          { value: '100+', label: 'Features entregadas' },
          { value: '93', label: 'Promedio SEO' },
          { value: '91', label: 'Promedio performance' },
        ],
      },
      skills: {
        title: 'Skills & Technologies',
        wordpressDescription: 'Construyendo experiencias rápidas y flexibles.',
        defaultDescription: 'Tecnologías aplicadas en entregas reales.',
      },
      projects: {
        title: 'Proyectos destacados',
        cta: 'Ver todos los proyectos',
        details: 'Ver detalles',
      },
      differentiators: {
        ...baseTranslations.home.differentiators,
        eyebrow: 'Diferenciales técnicos',
        description: 'Performance, visibilidad y accesibilidad no son detalles finales. Forman parte de la arquitectura desde el inicio.',
        chips: ['Performance optimizada', 'Listo para búsqueda', 'Accesible por diseño', 'Estándares limpios'],
        cards: [
          { title: 'SEO', score: '93', text: 'Construido para visibilidad y descubrimiento.', items: ['Meta Tags', 'Open Graph', 'Sitemap', 'Structured Data'] },
          { title: 'Performance', score: '91', text: 'Sitios rápidos y optimizados por defecto.', items: ['Core Web Vitals', 'Fast Load', 'Efficient Rendering', 'Optimized Assets'] },
          { title: 'Accessibility', score: '100', text: 'Usable por todos, con empatía y criterio.', items: ['Keyboard Navigation', 'Screen Reader Friendly', 'Color Contrast', 'Semantic HTML'] },
        ],
      },
      resume: {
        ...baseTranslations.home.resume,
        cta: 'Ver currículum completo',
        experienceTitle: 'Experiencia',
        sideTitle: 'Skills',
        timeline: [
          { role: 'Technology Manager', company: 'SEDUH-PE', period: 'Sep/2025 - Presente', description: 'Coordinación del equipo de tecnología, gestión de demandas de TI y soporte para gobernanza de datos e innovación.' },
          { role: 'Data Analyst', company: 'SEDUH-PE', period: 'Abr/2025 - Oct/2025', description: 'Desarrollo de dashboards, informes y aplicaciones web; recolección y estructuración de datos para gestión pública.' },
          { role: 'Frontend Developer', company: 'The Brooklyn Brothers', period: 'Jul/2023 - Jul/2024', description: 'Creación y mantenimiento de websites y aplicaciones para Unillever.' },
          { role: 'Frontend Developer', company: 'Jazzz digital agency', period: 'Abr/2025 - Oct/2025', description: 'Desarrollo y mantenimiento de websites y aplicaciones, gestión de equipo y gestión y mantenimiento de hosting.' },
          { role: 'Frontend Developer', company: 'TDS Company', period: 'Jul/2021 - Ago/2022', description: 'Desarrollo de sitios WordPress y aplicaciones web con React.' },
        ],
        items: [
          { title: 'WordPress/PHP', text: 'Temas personalizados, CMS, WooCommerce, ACF, plugins, integraciones, performance y SEO técnico para sitios institucionales y comerciales.' },
          { title: 'Front-end', text: 'Interfaces responsivas con React, Next.js, TypeScript, JavaScript, SCSS, componentización, accesibilidad y foco en experiencia de uso.' },
          { title: 'Gestión técnica', text: 'Planificación, organización de flujos, documentación, liderazgo de demandas, soporte a equipos y visión de entrega orientada a calidad.' },
        ],
      },
      contact: {
        title: 'Hablemos',
        description: 'Estoy disponible para proyectos web, WordPress/PHP, front-end, web/full-stack y gestión técnica.',
      },
    },
    contactActions: {
      copyEmail: 'Copiar mi e-mail',
      copiedEmail: 'E-mail copiado',
      linkedin: 'Visita mi LinkedIn',
      github: 'Visita mi GitHub',
    },
    contactModal: {
      ...baseTranslations.contactModal,
      description:
        'Estoy disponible para oportunidades en desarrollo web, WordPress/PHP, front-end, web/full-stack y gestión técnica. Construyamos algo excepcional juntos.',
      available: 'Disponible para trabajar',
      copyMain: 'Copiar mi e-mail',
      copiedMain: 'E-mail copiado',
      privacy: 'Tu información está segura conmigo. Respeto tu privacidad.',
      close: 'Cerrar modal de contacto',
      reasons: [
        { title: 'Respuesta rápida', text: 'Retorno objetivo' },
        { title: 'Profesional', text: 'Entrega clara' },
        { title: 'Abierto a ideas', text: 'Hablemos' },
      ],
    },
    footer: {
      copyright: '© {year} {name}. Todos los derechos reservados.',
      techStack: 'Portafolio desarrollado con Next.js, TypeScript y SCSS Modules.',
    },
  },
};
