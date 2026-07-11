export type LanguageCode = 'pt-BR' | 'en-US' | 'es-ES';

export const languageOptions = [
  { code: 'pt-BR', label: 'Português' },
  { code: 'en-US', label: 'English' },
  { code: 'es-ES', label: 'Español' },
] as const;

export const translations: Record<LanguageCode, {
  languageLabel: string;
  selectLanguageLabel: string;
  nav: {
    home: string;
    projects: string;
    experience: string;
    about: string;
    resume: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaProjects: string;
    ctaCv: string;
    ctaContact: string;
  };
  home: {
    about: {
      eyebrow: string;
      title: string;
      description1: string;
      description2: string;
    };
    skills: {
      eyebrow: string;
      title: string;
    };
    projects: {
      eyebrow: string;
      title: string;
    };
    experience: {
      eyebrow: string;
      title: string;
    };
    resume: {
      eyebrow: string;
      title: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    description: string;
    downloadText: string;
    downloadNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
}> = {
  'pt-BR': {
    languageLabel: 'Português',
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
      eyebrow: 'Portfólio profissional',
      title: 'Sou Rafael Varela, desenvolvedor web focado em WordPress, Front-end e soluções digitais reais.',
      description:
        'Sou Rafael Varela, profissional de tecnologia com experiência em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Crio soluções seguras, performáticas, acessíveis e fáceis de manter, conectando necessidades de negócio a produtos digitais funcionais.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Baixar currículo em inglês',
      ctaContact: 'Falar comigo',
    },
    home: {
      about: {
        eyebrow: 'Apresentação',
        title: 'Desenvolvedor web com visão técnica e orientado a impacto',
        description1:
          'Sou Rafael Varela, profissional de tecnologia com atuação em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Minha trajetória combina experiência prática em desenvolvimento de interfaces, criação de sites profissionais, integração com APIs, performance, acessibilidade, SEO técnico e organização de soluções digitais para ambientes reais de negócio.',
        description2:
          'Ao longo da minha carreira, atuei em projetos para agências, empresas privadas e setor público, desenvolvendo soluções com WordPress, PHP, ACF, Elementor, React, Next.js, JavaScript, TypeScript, SCSS e consumo de APIs. Também tive experiência em projetos internacionais, trabalhando remotamente com demandas digitais para marcas globais, o que ampliou minha visão sobre qualidade técnica, colaboração, prazos e entrega profissional.',
      },
      skills: {
        eyebrow: 'Stacks principais',
        title: 'Competências que sustentam soluções reais',
      },
      projects: {
        eyebrow: 'Projetos',
        title: 'Portfólio técnico com foco em aplicações reais',
      },
      experience: {
        eyebrow: 'Experiência',
        title: 'Trajetória prática e posicionamento de valor',
      },
      resume: {
        eyebrow: 'Currículos por foco',
        title: 'Escolha o perfil mais alinhado à oportunidade',
      },
      contact: {
        eyebrow: 'Contato',
        title: 'Pronto para conversar sobre a próxima oportunidade',
        description:
          'Estou disponível para recrutadores, gestores técnicos e empresas que buscam um profissional com forte base em WordPress, front-end e soluções digitais reais.',
      },
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Perfil profissional objetivo e orientado a resultados',
      paragraphs: [
        'Sou Rafael Varela, profissional de tecnologia de Recife/PE, com experiência em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Minha atuação combina execução técnica, visão de negócio e capacidade de organizar soluções digitais para problemas reais.',
        'Tenho forte domínio em WordPress customizado, PHP, CSS/SCSS, Git, SEO técnico, performance e criação de interfaces profissionais. Também atuo com JavaScript, React, Next.js, consumo de APIs, dashboards e organização de sistemas internos.',
        'Minha forma de trabalho é prática, objetiva e orientada à entrega. Busco entender o problema antes de propor a solução, mantendo atenção à experiência do usuário, acessibilidade, segurança, manutenibilidade e clareza na comunicação com equipes técnicas e não técnicas.',
      ],
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Trajetória profissional com foco em entrega, organização e impacto',
      description:
        'A experiência abaixo reúne atuação em projetos reais, ambientes com prazos, demandas técnicas e necessidade de comunicação clara com times e stakeholders.',
    },
    resume: {
      eyebrow: 'Currículo',
      title: 'Resumo profissional e foco de carreira',
      description:
        'Minha trajetória reúne desenvolvimento web, WordPress/PHP, front-end responsivo, sistemas internos e gestão técnica de demandas digitais. Atuo com foco em criar soluções performáticas, acessíveis, seguras e alinhadas a necessidades reais de negócio.',
      downloadText: 'Baixar currículo em inglês',
      downloadNote: 'O currículo disponível nesta página está em inglês.',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Disponível para oportunidades técnicas e estratégicas',
      description:
        'Estou disponível para conversas sobre oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/fullstack e gestão técnica de tecnologia.',
    },
  },
  'en-US': {
    languageLabel: 'English',
    selectLanguageLabel: 'Select language',
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Professional portfolio',
      title: 'I am Rafael Varela, a web developer focused on WordPress, Front-end and real digital solutions.',
      description:
        'I am a technology professional with experience in front-end development, WordPress/PHP, web systems and technical project management. I build secure, high-performance, accessible and maintainable digital products that solve real business needs.',
      ctaProjects: 'View projects',
      ctaCv: 'Download resume in English',
      ctaContact: 'Talk to me',
    },
    home: {
      about: {
        eyebrow: 'About',
        title: 'Web developer with technical vision and impact focus',
        description1:
          'I am Rafael Varela, a technology professional working in front-end development, WordPress/PHP, web systems and technical project management. My background combines hands-on interface development, professional website creation, API integration, performance, accessibility, technical SEO and digital solutions designed for real business environments.',
        description2:
          'Throughout my career, I have worked on projects for agencies, private companies and the public sector, delivering solutions with WordPress, PHP, ACF, Elementor, React, Next.js, JavaScript, TypeScript, SCSS and API consumption. I also gained international experience working remotely on global digital demands, which expanded my perspective on technical quality, collaboration, deadlines and professional delivery.',
      },
      skills: {
        eyebrow: 'Core stacks',
        title: 'Skills that support real solutions',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Technical portfolio focused on real applications',
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Practical career path and value positioning',
      },
      resume: {
        eyebrow: 'Resume focuses',
        title: 'Choose the profile most aligned with the opportunity',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Ready to talk about the next opportunity',
        description:
          'I am available for recruiters, technical managers and companies looking for a professional with a strong background in WordPress, front-end and real digital solutions.',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Clear and results-oriented professional profile',
      paragraphs: [
        'I am Rafael Varela, a technology professional from Recife/PE with experience in front-end development, WordPress/PHP, web systems and technical project management. My work combines technical execution, business understanding and the ability to organize digital solutions for real problems.',
        'I have strong expertise in custom WordPress, PHP, CSS/SCSS, Git, technical SEO, performance and professional interface design. I also work with JavaScript, React, Next.js, API consumption, dashboards and internal system organization.',
        'My work style is practical, objective and delivery-focused. I strive to understand the problem before proposing a solution, keeping attention to user experience, accessibility, security, maintainability and clear communication with technical and non-technical teams.',
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional track record focused on delivery, organization and impact',
      description:
        'The experience below brings together work in real projects, deadline-driven environments, technical demands and the need for clear communication with teams and stakeholders.',
    },
    resume: {
      eyebrow: 'Resume',
      title: 'Professional summary and career focus',
      description:
        'My background includes web development, WordPress/PHP, responsive front-end, internal systems and technical management of digital demands. I focus on building high-performance, accessible, secure solutions aligned with real business needs.',
      downloadText: 'Download resume in English',
      downloadNote: 'The resume available on this page is provided in English.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Available for technical and strategic opportunities',
      description:
        'I am available for conversations about opportunities in web development, WordPress/PHP, front-end, web/fullstack and technical technology management.',
    },
  },
  'es-ES': {
    languageLabel: 'Español',
    selectLanguageLabel: 'Seleccionar idioma',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre',
      resume: 'Currículum',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Portafolio profesional',
      title: 'Soy Rafael Varela, desarrollador web enfocado en WordPress, Front-end y soluciones digitales reales.',
      description:
        'Soy profesional de tecnología con experiencia en desarrollo front-end, WordPress/PHP, sistemas web y gestión técnica de proyectos. Construyo productos digitales seguros, de alto rendimiento, accesibles y fáciles de mantener que resuelven necesidades reales de negocio.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar currículum en inglés',
      ctaContact: 'Hablar conmigo',
    },
    home: {
      about: {
        eyebrow: 'Presentación',
        title: 'Desarrollador web con visión técnica y enfoque en impacto',
        description1:
          'Soy Rafael Varela, profesional de tecnología con experiencia en desarrollo front-end, WordPress/PHP, sistemas web y gestión técnica de proyectos. Mi trayectoria combina desarrollo de interfaces, creación de sitios profesionales, integración con APIs, rendimiento, accesibilidad, SEO técnico y soluciones digitales para negocios reales.',
        description2:
          'A lo largo de mi carrera, trabajé en proyectos para agencias, empresas privadas y el sector público, entregando soluciones con WordPress, PHP, ACF, Elementor, React, Next.js, JavaScript, TypeScript, SCSS y consumo de APIs. También tuve experiencia internacional trabajando de forma remota con demandas digitales globales, lo que amplió mi visión sobre calidad técnica, colaboración, plazos y entrega profesional.',
      },
      skills: {
        eyebrow: 'Stacks principales',
        title: 'Habilidades que respaldan soluciones reales',
      },
      projects: {
        eyebrow: 'Proyectos',
        title: 'Portfolio técnico enfocado en aplicaciones reales',
      },
      experience: {
        eyebrow: 'Experiencia',
        title: 'Trayectoria práctica y posicionamiento de valor',
      },
      resume: {
        eyebrow: 'Currículums por enfoque',
        title: 'Elige el perfil más alineado con la oportunidad',
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Listo para conversar sobre la próxima oportunidad',
        description:
          'Estoy disponible para reclutadores, líderes técnicos y empresas que buscan un profesional con una fuerte base en WordPress, front-end y soluciones digitales reales.',
      },
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Perfil profesional claro y orientado a resultados',
      paragraphs: [
        'Soy Rafael Varela, profesional de tecnología de Recife/PE con experiencia en desarrollo front-end, WordPress/PHP, sistemas web y gestión técnica de proyectos. Mi trabajo combina ejecución técnica, visión de negocio y capacidad para organizar soluciones digitales para problemas reales.',
        'Tengo sólido dominio en WordPress personalizado, PHP, CSS/SCSS, Git, SEO técnico, rendimiento y diseño de interfaces profesionales. También trabajo con JavaScript, React, Next.js, consumo de APIs, dashboards y organización de sistemas internos.',
        'Mi forma de trabajo es práctica, objetiva y enfocada en la entrega. Me esfuerzo por entender el problema antes de proponer una solución, prestando atención a la experiencia de usuario, accesibilidad, seguridad, mantenibilidad y comunicación clara con equipos técnicos y no técnicos.',
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Trayectoria profesional centrada en entrega, organización e impacto',
      description:
        'La experiencia a continuación reúne trabajo en proyectos reales, entornos con plazos, demandas técnicas y la necesidad de comunicación clara con equipos y stakeholders.',
    },
    resume: {
      eyebrow: 'Currículum',
      title: 'Resumen profesional y enfoque de carrera',
      description:
        'Mi trayectoria incluye desarrollo web, WordPress/PHP, front-end responsivo, sistemas internos y gestión técnica de demandas digitales. Me enfoco en construir soluciones de alto rendimiento, accesibles, seguras y alineadas a necesidades reales de negocio.',
      downloadText: 'Descargar currículum en inglés',
      downloadNote: 'El currículum disponible en esta página está en inglés.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Disponible para oportunidades técnicas y estratégicas',
      description:
        'Estoy disponible para conversaciones sobre oportunidades en desarrollo web, WordPress/PHP, front-end, web/fullstack y gestión técnica de tecnología.',
    },
  },
};

export const defaultLanguage: LanguageCode = 'pt-BR';
