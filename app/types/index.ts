export interface Project {
  id: number
  title: string
  description: string
  image?: string
  tech: string[]
  category: 'ai' | 'fullstack' | 'web'
  liveUrl?: string
  githubUrl?: string
}

export interface ExperienceProject {
  name: string
  link: string
}

export interface Experience {
  id: number
  title: string
  company: string
  companyLink?: string
  location: string
  period: string
  type: string
  description: string[]
  skills: string[]
  color?: string
  logo?: string
  github?: string
  live?: string
  certificate?: string
  lor?: string
  projects?: ExperienceProject[]
}

export interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  rating: number
  image?: string
}

export interface Skill {
  id: number
  name: string
  category: 'ai' | 'frontend' | 'backend' | 'tools'
  icon?: string
  level?: number
}