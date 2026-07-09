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
