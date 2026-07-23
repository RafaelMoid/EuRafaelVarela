export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status: string;
  type: string;
  problem: string;
  features: string[];
  decisions: string[];
  futureImprovements: string[];
  image: string;
  deployUrl: string;
  githubUrl: string;
  planned?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'pomodoro-focus',
    title: 'Foco — Timer Pomodoro',
    description:
      'Ferramenta de produtividade sem login para organizar tarefas e alternar entre ciclos personalizáveis de foco e descanso.',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS Modules', 'LocalStorage', 'Acessibilidade'],
    status: 'Publicado',
    type: 'Ferramenta de produtividade',
    problem: 'Ajudar pessoas a transformar tarefas em períodos de foco sustentáveis, sem cadastro, anúncios ou distrações.',
    features: ['Timer preciso em segundo plano', 'Lista de tarefas e estimativas', 'Ciclos personalizáveis', 'Persistência local sem login'],
    decisions: ['Experiência local-first e sem conta', 'Interface própria integrada ao portfólio', 'Web Audio sem arquivos externos'],
    futureImprovements: ['Relatório semanal local', 'Atalhos de teclado', 'Notificações opcionais do navegador'],
    image: '/assets/projects/pomodoro-focus.svg',
    deployUrl: '/pomodoro',
    githubUrl: '#'
  },
  {
    slug: 'rafael-varela-portfolio-hub',
    title: 'Rafael Varela Portfolio Hub',
    description:
      'Site centralizador de portfólio profissional, criado em Next.js para reunir projetos, experiências, cases anonimizados, currículo e links de contato.',
    stack: ['Next.js', 'TypeScript', 'SCSS Modules', 'SEO', 'Acessibilidade', 'Performance'],
    status: 'MVP em evolução',
    type: 'Portfólio profissional',
    problem: 'Centralizar a presença profissional de forma objetiva, comercial e acessível para recrutadores, gestores e empresas.',
    features: ['Apresentação profissional', 'Projetos em destaque', 'Currículo e contato', 'SEO técnico e acessibilidade'],
    decisions: ['Arquitetura simples com App Router', 'Dados separados em arquivos TypeScript', 'Design responsivo e foco em performance'],
    futureImprovements: ['Adicionar mais projetos', 'Incrementar casos detalhados', 'Expandir conteúdos de carreira'],
    image: '/assets/projects/portfolio-hub.webp',
    deployUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'casa-clara',
    title: 'Casa Clara — Controle financeiro de casal',
    description:
      'Aplicação para controle financeiro de casal com lançamentos, categorias, metas, visão mensal e dashboard de gastos.',
    stack: ['React', 'Supabase', 'Styled Components', 'Dashboard', 'Responsividade'],
    status: 'Em desenvolvimento',
    type: 'Aplicação web',
    problem: 'Organizar finanças compartilhadas com visibilidade clara e interface simples.',
    features: ['Lançamentos', 'Categorias', 'Metas mensais', 'Dashboard de gastos'],
    decisions: ['Estrutura modular para evolução rápida', 'Interface pensada para uso diário', 'Dados fictícios em fase de protótipo'],
    futureImprovements: ['Autenticação', 'Sincronização com dados reais', 'Relatórios avançados'],
    image: '/assets/projects/casa-clara.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  },
  {
    slug: 'commercepress',
    title: 'CommercePress',
    description:
      'E-commerce WordPress fictício para demonstrar tema customizado, WooCommerce, ACF, layout comercial, SEO técnico e performance.',
    stack: ['WordPress', 'PHP', 'WooCommerce', 'ACF', 'SCSS', 'SEO'],
    status: 'Planejado',
    type: 'E-commerce',
    problem: 'Demonstrar uma base sólida para lojas WordPress com foco em desempenho e conversão.',
    features: ['Catálogo', 'Carrinho', 'Checkout', 'SEO técnico'],
    decisions: ['Tema customizado', 'Estratégia de performance', 'Conteúdo estruturado'],
    futureImprovements: ['Integrar pagamentos', 'Aumentar velocidade', 'Personalizar templates'],
    image: '/assets/projects/commercepress.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  },
  {
    slug: 'institucional-pro-cms',
    title: 'Institucional Pro CMS',
    description:
      'Site institucional com CMS flexível em WordPress, CPTs, ACF, templates customizados e estrutura preparada para SEO.',
    stack: ['WordPress', 'PHP', 'ACF', 'CPT', 'SEO técnico', 'Performance'],
    status: 'Planejado',
    type: 'Site institucional',
    problem: 'Criar um site institucional com conteúdo flexível e arquitetura preparada para crescimento.',
    features: ['CMS flexível', 'Templates customizados', 'SEO', 'Conteúdo organizado'],
    decisions: ['Uso de CPTs para estrutura', 'Componentização no tema', 'Foco em manutenção'],
    futureImprovements: ['Expandir blocos', 'Criar painel editorial', 'Melhorar performance'],
    image: '/assets/projects/institucional-pro-cms.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  },
  {
    slug: 'contrataflow-dashboard',
    title: 'ContrataFlow Dashboard',
    description:
      'Dashboard para acompanhamento de processos internos, status, responsáveis, prazos e indicadores operacionais com dados fictícios.',
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Dashboard', 'Gestão técnica'],
    status: 'Planejado',
    type: 'Sistema interno',
    problem: 'Dar visibilidade operacional para equipes com acompanhamento claro de processos.',
    features: ['Status visual', 'Indicadores', 'Responsáveis', 'Prazos'],
    decisions: ['Layout orientado à gestão', 'Dados mockados para demonstração', 'Componentes reutilizáveis'],
    futureImprovements: ['Filtros avançados', 'Autenticação', 'Integração com dados'],
    image: '/assets/projects/contrataflow.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  },
  {
    slug: 'servicedesk-angular',
    title: 'ServiceDesk Angular',
    description:
      'Sistema de chamados técnicos em Angular para demonstrar adaptação a TypeScript, formulários, rotas e arquitetura por componentes.',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Reactive Forms', 'Dashboard'],
    status: 'Planejado',
    type: 'Aplicação front-end',
    problem: 'Organizar fluxos de suporte com interface simples e boa experiência para o usuário.',
    features: ['Cadastro de chamados', 'Fluxos', 'Detalhes', 'Dashboard'],
    decisions: ['Estrutura por componentes', 'Formulários reativos', 'Interface limpa'],
    futureImprovements: ['Integração com backend', 'Filtros', 'Notificações'],
    image: '/assets/projects/servicedesk-angular.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  },
  {
    slug: 'headless-wp-showcase',
    title: 'Headless WP Showcase',
    description:
      'Projeto demonstrando WordPress como CMS headless e front-end moderno consumindo conteúdo via API REST.',
    stack: ['WordPress', 'REST API', 'Next.js', 'React', 'SEO'],
    status: 'Planejado',
    type: 'Headless CMS',
    problem: 'Exemplificar uma arquitetura moderna entre CMS e front-end com foco em escalabilidade.',
    features: ['Conteúdo headless', 'API REST', 'Front-end moderno', 'SEO'],
    decisions: ['Separação entre conteúdo e apresentação', 'Arquitetura escalável', 'Consumo estruturado'],
    futureImprovements: ['Adicionar preview', 'Melhorar caching', 'Expandir modelos de conteúdo'],
    image: '/assets/projects/headless-wp-showcase.webp',
    deployUrl: '#',
    githubUrl: '#',
    planned: true
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

type ProjectTranslation = Partial<Omit<Project, 'slug' | 'image' | 'deployUrl' | 'githubUrl' | 'planned'>>;

const projectTranslations: Record<string, Record<string, ProjectTranslation>> = {
  'en-US': {
    'rafael-varela-portfolio-hub': {
      description: 'Professional portfolio hub built with Next.js to organize projects, experience, resume and contact links.',
      status: 'MVP evolving',
      type: 'Professional portfolio',
      problem: 'Centralize professional presence in an objective, commercial and accessible way for recruiters, technical managers and companies.',
      features: ['Professional presentation', 'Featured projects', 'Resume and contact', 'Technical SEO and accessibility'],
      decisions: ['Simple App Router architecture', 'Data separated in TypeScript files', 'Responsive design focused on performance'],
      futureImprovements: ['Add more projects', 'Improve detailed cases', 'Expand career content'],
    },
    'casa-clara': {
      title: 'Casa Clara - Couple finance dashboard',
      description: 'Application for couple finance control with entries, categories, goals, monthly view and spending dashboard.',
      status: 'In development',
      type: 'Web application',
      problem: 'Organize shared finances with clear visibility and a simple interface.',
      features: ['Entries', 'Categories', 'Monthly goals', 'Spending dashboard'],
      decisions: ['Modular structure for fast evolution', 'Interface designed for daily use', 'Mock data during prototype phase'],
      futureImprovements: ['Authentication', 'Sync with real data', 'Advanced reports'],
    },
    commercepress: {
      description: 'Fictional WordPress e-commerce project to demonstrate custom theme, WooCommerce, ACF, commercial layout, technical SEO and performance.',
      status: 'Planned',
      type: 'E-commerce',
      problem: 'Demonstrate a solid base for WordPress stores focused on performance and conversion.',
      features: ['Catalog', 'Cart', 'Checkout', 'Technical SEO'],
      decisions: ['Custom theme', 'Performance strategy', 'Structured content'],
      futureImprovements: ['Integrate payments', 'Improve speed', 'Customize templates'],
    },
    'institucional-pro-cms': {
      title: 'Institutional Pro CMS',
      description: 'Institutional website with a flexible WordPress CMS, CPTs, ACF, custom templates and SEO-ready structure.',
      status: 'Planned',
      type: 'Institutional website',
      problem: 'Create an institutional website with flexible content and architecture prepared for growth.',
      features: ['Flexible CMS', 'Custom templates', 'SEO', 'Organized content'],
      decisions: ['CPTs for structure', 'Theme componentization', 'Maintenance focus'],
      futureImprovements: ['Expand blocks', 'Create editorial panel', 'Improve performance'],
    },
    'contrataflow-dashboard': {
      description: 'Dashboard to track internal processes, statuses, owners, deadlines and operational indicators with fictional data.',
      status: 'Planned',
      type: 'Internal system',
      problem: 'Give teams operational visibility with clear process tracking.',
      features: ['Visual status', 'Indicators', 'Owners', 'Deadlines'],
      decisions: ['Management-oriented layout', 'Mock data for demonstration', 'Reusable components'],
      futureImprovements: ['Advanced filters', 'Authentication', 'Data integration'],
    },
    'servicedesk-angular': {
      description: 'Technical ticket system in Angular to demonstrate TypeScript adaptation, forms, routes and component architecture.',
      status: 'Planned',
      type: 'Front-end application',
      problem: 'Organize support flows with a simple interface and good user experience.',
      features: ['Ticket creation', 'Flows', 'Details', 'Dashboard'],
      decisions: ['Component-based structure', 'Reactive forms', 'Clean interface'],
      futureImprovements: ['Backend integration', 'Filters', 'Notifications'],
    },
    'headless-wp-showcase': {
      description: 'Project demonstrating WordPress as a headless CMS and a modern front-end consuming content through REST API.',
      status: 'Planned',
      type: 'Headless CMS',
      problem: 'Show a modern architecture between CMS and front-end focused on scalability.',
      features: ['Headless content', 'REST API', 'Modern front-end', 'SEO'],
      decisions: ['Separation between content and presentation', 'Scalable architecture', 'Structured consumption'],
      futureImprovements: ['Add preview', 'Improve caching', 'Expand content models'],
    },
  },
  'es-ES': {
    'rafael-varela-portfolio-hub': {
      description: 'Hub de portafolio profesional creado con Next.js para reunir proyectos, experiencia, currículum y enlaces de contacto.',
      status: 'MVP en evolución',
      type: 'Portafolio profesional',
      problem: 'Centralizar la presencia profesional de forma objetiva, comercial y accesible para reclutadores, gestores técnicos y empresas.',
      features: ['Presentación profesional', 'Proyectos destacados', 'Currículum y contacto', 'SEO técnico y accesibilidad'],
      decisions: ['Arquitectura simple con App Router', 'Datos separados en archivos TypeScript', 'Diseño responsivo enfocado en performance'],
      futureImprovements: ['Agregar más proyectos', 'Mejorar casos detallados', 'Expandir contenidos de carrera'],
    },
    'casa-clara': {
      title: 'Casa Clara - Finanzas de pareja',
      description: 'Aplicación para control financiero de pareja con registros, categorías, metas, vista mensual y dashboard de gastos.',
      status: 'En desarrollo',
      type: 'Aplicación web',
      problem: 'Organizar finanzas compartidas con visibilidad clara e interfaz simple.',
      features: ['Registros', 'Categorías', 'Metas mensuales', 'Dashboard de gastos'],
      decisions: ['Estructura modular para evolución rápida', 'Interfaz pensada para uso diario', 'Datos ficticios en fase de prototipo'],
      futureImprovements: ['Autenticación', 'Sincronización con datos reales', 'Reportes avanzados'],
    },
    commercepress: {
      description: 'E-commerce ficticio en WordPress para demostrar tema personalizado, WooCommerce, ACF, layout comercial, SEO técnico y performance.',
      status: 'Planeado',
      type: 'E-commerce',
      problem: 'Demostrar una base sólida para tiendas WordPress con foco en rendimiento y conversión.',
      features: ['Catálogo', 'Carrito', 'Checkout', 'SEO técnico'],
      decisions: ['Tema personalizado', 'Estrategia de performance', 'Contenido estructurado'],
      futureImprovements: ['Integrar pagos', 'Mejorar velocidad', 'Personalizar templates'],
    },
    'institucional-pro-cms': {
      title: 'Institucional Pro CMS',
      description: 'Sitio institucional con CMS flexible en WordPress, CPTs, ACF, templates personalizados y estructura preparada para SEO.',
      status: 'Planeado',
      type: 'Sitio institucional',
      problem: 'Crear un sitio institucional con contenido flexible y arquitectura preparada para crecer.',
      features: ['CMS flexible', 'Templates personalizados', 'SEO', 'Contenido organizado'],
      decisions: ['Uso de CPTs para estructura', 'Componentización en el tema', 'Foco en mantenimiento'],
      futureImprovements: ['Expandir bloques', 'Crear panel editorial', 'Mejorar performance'],
    },
    'contrataflow-dashboard': {
      description: 'Dashboard para seguimiento de procesos internos, estados, responsables, plazos e indicadores operacionales con datos ficticios.',
      status: 'Planeado',
      type: 'Sistema interno',
      problem: 'Dar visibilidad operacional a equipos con seguimiento claro de procesos.',
      features: ['Estado visual', 'Indicadores', 'Responsables', 'Plazos'],
      decisions: ['Layout orientado a gestión', 'Datos simulados para demostración', 'Componentes reutilizables'],
      futureImprovements: ['Filtros avanzados', 'Autenticación', 'Integración con datos'],
    },
    'servicedesk-angular': {
      description: 'Sistema de tickets técnicos en Angular para demostrar adaptación a TypeScript, formularios, rutas y arquitectura por componentes.',
      status: 'Planeado',
      type: 'Aplicación front-end',
      problem: 'Organizar flujos de soporte con interfaz simple y buena experiencia de usuario.',
      features: ['Registro de tickets', 'Flujos', 'Detalles', 'Dashboard'],
      decisions: ['Estructura por componentes', 'Formularios reactivos', 'Interfaz limpia'],
      futureImprovements: ['Integración con backend', 'Filtros', 'Notificaciones'],
    },
    'headless-wp-showcase': {
      description: 'Proyecto que demuestra WordPress como CMS headless y front-end moderno consumiendo contenido vía REST API.',
      status: 'Planeado',
      type: 'Headless CMS',
      problem: 'Ejemplificar una arquitectura moderna entre CMS y front-end con foco en escalabilidad.',
      features: ['Contenido headless', 'REST API', 'Front-end moderno', 'SEO'],
      decisions: ['Separación entre contenido y presentación', 'Arquitectura escalable', 'Consumo estructurado'],
      futureImprovements: ['Agregar preview', 'Mejorar caching', 'Expandir modelos de contenido'],
    },
  },
};

export function getProjectsByLanguage(language: string) {
  const localized = projectTranslations[language] ?? {};
  return projects.map((project) => ({ ...project, ...(localized[project.slug] ?? {}) }));
}

export function getProjectBySlugAndLanguage(slug: string, language: string) {
  return getProjectsByLanguage(language).find((project) => project.slug === slug);
}
