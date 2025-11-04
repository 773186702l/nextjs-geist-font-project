export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: number; // 1-100
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 88 },
  { name: 'Vue.js', category: 'frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'frontend', level: 92 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 90 },
  { name: 'Python', category: 'backend', level: 88 },
  { name: 'Django', category: 'backend', level: 85 },
  { name: 'Express.js', category: 'backend', level: 87 },
  { name: 'FastAPI', category: 'backend', level: 82 },
  
  // Database
  { name: 'MongoDB', category: 'database', level: 88 },
  { name: 'PostgreSQL', category: 'database', level: 85 },
  { name: 'MySQL', category: 'database', level: 83 },
  { name: 'Redis', category: 'database', level: 80 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 92 },
  { name: 'Docker', category: 'tools', level: 85 },
  { name: 'AWS', category: 'tools', level: 78 },
  { name: 'Linux', category: 'tools', level: 88 },
];

export const skillCategories = {
  frontend: 'تطوير الواجهات',
  backend: 'تطوير الخوادم',
  database: 'قواعد البيانات',
  tools: 'الأدوات والتقنيات',
};
