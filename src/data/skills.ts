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

const skillGroupTranslations: Record<string, SkillGroup[]> = {
  'en-US': [
    {
      title: 'WordPress/PHP',
      items: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'Custom themes', 'WooCommerce', 'Technical SEO', 'Performance', 'Hooks', 'Templates']
    },
    {
      title: 'Front-end',
      items: ['Semantic HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Next.js', 'Responsiveness', 'Accessibility', 'Styled Components']
    },
    {
      title: 'Web systems and integrations',
      items: ['REST APIs', 'Dashboards', 'Internal applications', 'Data consumption', 'Forms', 'Automations', 'Workflow organization']
    },
    {
      title: 'Tools and delivery',
      items: ['Git', 'GitHub', 'Figma', 'cPanel', 'Vercel', 'Supabase', 'Technical documentation', 'Task management', 'Technical communication']
    }
  ],
  'es-ES': [
    {
      title: 'WordPress/PHP',
      items: ['WordPress', 'PHP', 'ACF', 'Elementor', 'CPT', 'Temas personalizados', 'WooCommerce', 'SEO técnico', 'Performance', 'Hooks', 'Templates']
    },
    {
      title: 'Front-end',
      items: ['HTML semántico', 'CSS', 'SCSS', 'JavaScript', 'React', 'Next.js', 'Responsividad', 'Accesibilidad', 'Styled Components']
    },
    {
      title: 'Sistemas web e integraciones',
      items: ['APIs REST', 'Dashboards', 'Aplicaciones internas', 'Consumo de datos', 'Formularios', 'Automatizaciones', 'Organización de flujos']
    },
    {
      title: 'Herramientas y entrega',
      items: ['Git', 'GitHub', 'Figma', 'cPanel', 'Vercel', 'Supabase', 'Documentación técnica', 'Gestión de tareas', 'Comunicación técnica']
    }
  ]
};

export function getSkillGroupsByLanguage(language: string) {
  return skillGroupTranslations[language] ?? skillGroups;
}
