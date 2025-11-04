export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'برامج' | 'أنظمة';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'نظام إدارة المخزون',
    description: 'نظام متكامل لإدارة المخزون والمبيعات مع واجهة سهلة الاستخدام وتقارير تفصيلية',
    category: 'أنظمة',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'تطبيق إدارة المهام',
    description: 'تطبيق ويب لإدارة المهام اليومية مع إمكانية التعاون الجماعي والإشعارات',
    category: 'برامج',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'نظام نقاط البيع',
    description: 'نظام نقاط بيع متطور مع دعم الفواتير الإلكترونية والربط مع الأجهزة',
    category: 'أنظمة',
    technologies: ['Python', 'Django', 'React', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'منصة التعليم الإلكتروني',
    description: 'منصة تعليمية شاملة مع نظام إدارة المحتوى والاختبارات والشهادات',
    category: 'أنظمة',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'أداة تحليل البيانات',
    description: 'أداة قوية لتحليل البيانات وإنشاء التقارير المرئية التفاعلية',
    category: 'برامج',
    technologies: ['Python', 'Pandas', 'Plotly', 'FastAPI'],
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'نظام إدارة المحتوى',
    description: 'نظام إدارة محتوى مرن وقابل للتخصيص مع دعم متعدد اللغات',
    category: 'أنظمة',
    technologies: ['Next.js', 'Strapi', 'GraphQL', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
