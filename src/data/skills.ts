export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'WordPress/PHP',
    items: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'Temas customizados', 'WooCommerce', 'SEO técnico', 'Performance', 'Hooks', 'Templates']
  },
  {
    title: 'Front-end',
    items: ['HTML semântico', 'CSS', 'SCSS', 'JavaScript', 'React', 'Next.js', 'Responsividade', 'Acessibilidade', 'Styled Components']
  },
  {
    title: 'Sistemas web e integrações',
    items: ['APIs REST', 'Dashboards', 'Aplicações internas', 'Consumo de dados', 'Formulários', 'Automações', 'Organização de fluxos']
  },
  {
    title: 'Ferramentas e entrega',
    items: ['Git', 'GitHub', 'Figma', 'cPanel', 'Vercel', 'Supabase', 'Documentação técnica', 'Gestão de tarefas', 'Comunicação técnica']
  }
];
