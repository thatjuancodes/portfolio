export interface Project {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

export interface ContactMethod {
  title: string
  description: string
  action: string
  href: string
  icon: string
}
