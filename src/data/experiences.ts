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
    note: 'Projetos internacionais com foco em entrega visual consistente, responsividade e manutenção front-end.'
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

const experienceTranslations: Record<string, Experience[]> = {
  'en-US': [
    {
      company: 'SEDUH',
      role: 'Web Developer / Technical Management / Internal Systems',
      period: 'Professional experience',
      summary:
        'Worked on digital solutions, data organization, internal applications, dashboards, administrative workflows, WordPress, automations and technical management of technology demands.',
      stack: ['WordPress', 'JavaScript', 'Data', 'Dashboards', 'Internal systems', 'Technical management'],
      note: 'Sensitive information, internal data and restricted systems are not displayed for security and confidentiality.'
    },
    {
      company: 'The Brooklyn Brothers',
      role: 'Front-end Developer',
      period: 'International projects',
      summary:
        'Worked on international digital projects focused on responsive interfaces, front-end maintenance, WordPress, AEM, React, SCSS and layout adaptation for global brands.',
      stack: ['AEM', 'WordPress', 'React', 'SCSS', 'JavaScript', 'Responsive front-end'],
      note: 'International projects focused on consistent visual delivery, responsiveness and front-end maintenance.'
    },
    {
      company: 'JAZZZ Digital Agency',
      role: 'Front-end Developer',
      period: 'Web development',
      summary:
        'Development and maintenance of WordPress websites, interface creation, PHP adjustments, Elementor, ACF, JavaScript and CSS/SCSS.',
      stack: ['WordPress', 'PHP', 'Elementor', 'ACF', 'JavaScript', 'CSS'],
      note: 'Projects focused on professional websites, maintenance and quality delivery.'
    },
    {
      company: 'TDS Company',
      role: 'Front-end Intern',
      period: 'Career start',
      summary:
        'Supported front-end development, web interfaces, integrations and technical growth in a professional environment.',
      stack: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Git'],
      note: 'Initial experience with practical learning and adaptation to a professional environment.'
    }
  ],
  'es-ES': [
    {
      company: 'SEDUH',
      role: 'Desarrollador Web / Gestión Técnica / Sistemas Internos',
      period: 'Experiencia profesional',
      summary:
        'Actuación en desarrollo de soluciones digitales, organización de datos, aplicaciones internas, dashboards, soporte a flujos administrativos, WordPress, automatizaciones y gestión técnica de demandas de tecnología.',
      stack: ['WordPress', 'JavaScript', 'Datos', 'Dashboards', 'Sistemas internos', 'Gestión técnica'],
      note: 'Información sensible, datos internos y sistemas restringidos no se muestran por seguridad y confidencialidad.'
    },
    {
      company: 'The Brooklyn Brothers',
      role: 'Front-end Developer',
      period: 'Proyectos internacionales',
      summary:
        'Actuación en proyectos digitales internacionales con foco en interfaces responsivas, mantenimiento front-end, WordPress, AEM, React, SCSS y adaptación de layouts para marcas globales.',
      stack: ['AEM', 'WordPress', 'React', 'SCSS', 'JavaScript', 'Front-end responsivo'],
      note: 'Proyectos internacionales con foco en entrega visual consistente, responsividad y mantenimiento front-end.'
    },
    {
      company: 'JAZZZ Agencia Digital',
      role: 'Front-end Developer',
      period: 'Desarrollo web',
      summary:
        'Desarrollo y mantenimiento de sitios WordPress, creación de interfaces, ajustes con PHP, Elementor, ACF, JavaScript y CSS/SCSS.',
      stack: ['WordPress', 'PHP', 'Elementor', 'ACF', 'JavaScript', 'CSS'],
      note: 'Proyectos con foco en sitios profesionales, mantenimiento y entrega con calidad.'
    },
    {
      company: 'TDS Company',
      role: 'Práctica Front-end',
      period: 'Inicio de carrera',
      summary:
        'Apoyo en desarrollo front-end, interfaces web, integraciones y evolución técnica en ambiente profesional.',
      stack: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Git'],
      note: 'Experiencia inicial con aprendizaje práctico y adaptación al ambiente profesional.'
    }
  ]
};

export function getExperiencesByLanguage(language: string) {
  return experienceTranslations[language] ?? experiences;
}
