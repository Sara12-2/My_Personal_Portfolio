export interface Project {
  id: number
  title: string
  description: string
  image?: string
  tech: string[]
  category: 'ai' | 'fullstack'
  liveUrl?: string
  githubUrl?: string
}

export interface Experience {
  id: number
  company: string
  role: string
  duration: string
  achievements: string[]
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