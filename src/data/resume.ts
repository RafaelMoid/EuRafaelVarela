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

const resumeFocusTranslations: Record<string, ResumeFocus[]> = {
  'en-US': [
    {
      slug: 'wordpress-php',
      title: 'WordPress/PHP',
      intro: 'Focus on professional WordPress solutions, PHP development, custom themes, technical SEO and performance.',
      overview:
        'I work with WordPress as a base for real projects, focusing on custom themes, content structure, performance, technical SEO and maintainable solutions for clients and businesses.',
      stackSummary:
        'My WordPress/PHP work combines theme development, custom fields and content, plugin integrations, search optimization and project organization for professional delivery.',
      idealRoles: ['Mid-level WordPress/PHP Developer', 'Senior WordPress Developer'],
      summary:
        'Profile focused on CMS projects, custom themes, content architecture, maintenance and technical best practices for real environments.',
      highlights: ['Custom themes', 'ACF, CPT and Elementor', 'Performance and technical SEO', 'Maintainable structures'],
      stack: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'WooCommerce', 'Technical SEO', 'Performance'],
      experience: [
        'Work on institutional and professional websites with content logic and maintenance.',
        'Development of solutions focused on organization, scalability and technical quality.',
        'Front-end and back-end work inside the WordPress ecosystem.'
      ],
      projectSlugs: ['commercepress', 'institucional-pro-cms', 'headless-wp-showcase']
    },
    {
      slug: 'react-front-end',
      title: 'React/Front-end',
      intro: 'Focus on responsive interfaces, accessibility, componentization and user experience with a solid front-end base.',
      overview:
        'On the front-end, I prioritize clear, responsive and accessible interfaces, translating requirements into functional experiences that are organized and ready to evolve with the product.',
      stackSummary:
        'My React/Front-end work involves semantic HTML, CSS/SCSS, JavaScript, React, responsiveness and accessibility, always with attention to structure and code maintainability.',
      idealRoles: ['Mid-level Front-end Developer', 'React/Web Developer'],
      summary:
        'Profile oriented toward delivering clear, responsive and accessible interfaces, with good component organization and problem-solving focus.',
      highlights: ['Responsive interfaces', 'Accessibility', 'SCSS and componentization', 'Good user experience'],
      stack: ['Semantic HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Responsiveness', 'Accessibility', 'Next.js'],
      experience: [
        'Work on interfaces for digital projects and environments with strong visual requirements.',
        'Good ability to translate layouts into high-value solutions for users.',
        'Experience maintaining, evolving and organizing front-end work across varied projects.'
      ],
      projectSlugs: ['casa-clara', 'servicedesk-angular', 'rafael-varela-portfolio-hub']
    },
    {
      slug: 'web-fullstack-gestao-tecnica',
      title: 'Web/Fullstack/Technical Management',
      intro: 'Focus on complete digital solutions, technical organization, integrations, processes and business vision applied to technology.',
      overview:
        'In this area, I connect technical execution, demand organization and product vision to create web solutions that work in practice, focused on clarity, operation and real impact.',
      stackSummary:
        'My work in web/fullstack and technical management combines web systems, dashboards, APIs, workflow organization, documentation and communication with technical and non-technical areas.',
      idealRoles: ['Web/Fullstack Developer', 'Technology professional with technical execution and business vision'],
      summary:
        'Profile for teams looking for someone who combines technical execution, demand organization and the ability to collaborate with business areas.',
      highlights: ['Web systems', 'Dashboards and processes', 'Technical demand management', 'Practical impact-oriented vision'],
      stack: ['Web systems', 'REST APIs', 'Dashboards', 'Technical management', 'Workflow organization', 'Git/GitHub', 'Technical documentation'],
      experience: [
        'Work on internal solutions, data organization and support for operational decisions.',
        'Experience with light technical leadership, stakeholder communication and demand organization.',
        'Practical vision to transform real problems into useful and well-structured digital solutions.'
      ],
      projectSlugs: ['contrataflow-dashboard', 'rafael-varela-portfolio-hub', 'casa-clara']
    }
  ],
  'es-ES': [
    {
      slug: 'wordpress-php',
      title: 'WordPress/PHP',
      intro: 'Foco en soluciones profesionales en WordPress, desarrollo con PHP, temas personalizados, SEO técnico y performance.',
      overview:
        'Trabajo con WordPress como base de proyectos reales, con foco en temas personalizados, estructura de contenido, performance, SEO técnico y soluciones fáciles de mantener para clientes y negocios.',
      stackSummary:
        'Mi trabajo en WordPress/PHP combina desarrollo de temas, personalización de campos y contenidos, integración con plugins, optimización para buscadores y organización de proyectos para entrega profesional.',
      idealRoles: ['Desarrollador WordPress/PHP Semi Senior', 'Desarrollador WordPress Senior'],
      summary:
        'Perfil orientado a proyectos con CMS, temas personalizados, arquitectura de contenido, mantenimiento y buenas prácticas técnicas para entornos reales.',
      highlights: ['Temas personalizados', 'ACF, CPT y Elementor', 'Performance y SEO técnico', 'Estructuras fáciles de mantener'],
      stack: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'WooCommerce', 'SEO técnico', 'Performance'],
      experience: [
        'Actuación en sitios institucionales y profesionales con lógica de contenido y mantenimiento.',
        'Desarrollo de soluciones con foco en organización, escalabilidad y calidad técnica.',
        'Trabajo con front-end y back-end dentro del ecosistema WordPress.'
      ],
      projectSlugs: ['commercepress', 'institucional-pro-cms', 'headless-wp-showcase']
    },
    {
      slug: 'react-front-end',
      title: 'React/Front-end',
      intro: 'Foco en interfaces responsivas, accesibilidad, componentización y experiencia de uso con buena base front-end.',
      overview:
        'En front-end, priorizo interfaces claras, responsivas y accesibles, traduciendo requisitos en experiencias funcionales, bien organizadas y preparadas para evolucionar con el producto.',
      stackSummary:
        'Mi trabajo en React/Front-end involucra HTML semántico, CSS/SCSS, JavaScript, React, responsividad y accesibilidad, siempre con atención a la estructura y mantenimiento del código.',
      idealRoles: ['Desarrollador Front-end Semi Senior', 'Desarrollador React/Web'],
      summary:
        'Perfil orientado a entregar interfaces claras, responsivas y accesibles, con buena organización de componentes y foco en solución de problemas.',
      highlights: ['Interfaces responsivas', 'Accesibilidad', 'SCSS y componentización', 'Buena experiencia de uso'],
      stack: ['HTML semántico', 'CSS', 'SCSS', 'JavaScript', 'React', 'Responsividad', 'Accesibilidad', 'Next.js'],
      experience: [
        'Actuación en interfaces para proyectos digitales y entornos con alta exigencia visual.',
        'Buena capacidad para traducir layouts en soluciones de alto valor para el usuario.',
        'Experiencia con mantenimiento, evolución y organización de front-end en proyectos variados.'
      ],
      projectSlugs: ['casa-clara', 'servicedesk-angular', 'rafael-varela-portfolio-hub']
    },
    {
      slug: 'web-fullstack-gestao-tecnica',
      title: 'Web/Fullstack/Gestión Técnica',
      intro: 'Foco en soluciones digitales completas, organización técnica, integración, procesos y visión de negocio aplicada a tecnología.',
      overview:
        'En esta vertiente, conecto ejecución técnica, organización de demandas y visión de producto para crear soluciones web que funcionan en la práctica, con foco en claridad, operación e impacto real.',
      stackSummary:
        'Mi trabajo en web/fullstack y gestión técnica une sistemas web, dashboards, APIs, organización de flujos, documentación y comunicación con áreas técnicas y no técnicas.',
      idealRoles: ['Desarrollador Web/Fullstack', 'Profesional de tecnología con ejecución técnica y visión de negocio'],
      summary:
        'Perfil para equipos que buscan un profesional que une ejecución técnica, organización de demandas y capacidad de colaborar con áreas de negocio.',
      highlights: ['Sistemas web', 'Dashboards y procesos', 'Gestión técnica de demandas', 'Visión práctica orientada a impacto'],
      stack: ['Sistemas web', 'APIs REST', 'Dashboards', 'Gestión técnica', 'Organización de flujos', 'Git/GitHub', 'Documentación técnica'],
      experience: [
        'Actuación en soluciones internas, organización de datos y soporte a decisiones operacionales.',
        'Experiencia con liderazgo técnico ligero, comunicación con stakeholders y organización de demandas.',
        'Visión práctica para transformar problemas reales en soluciones digitales útiles y bien estructuradas.'
      ],
      projectSlugs: ['contrataflow-dashboard', 'rafael-varela-portfolio-hub', 'casa-clara']
    }
  ]
};

export function getResumeFocusesByLanguage(language: string) {
  return resumeFocusTranslations[language] ?? resumeFocuses;
}

export function getResumeFocusBySlugAndLanguage(slug: string, language: string) {
  return getResumeFocusesByLanguage(language).find((focus) => focus.slug === slug);
}
