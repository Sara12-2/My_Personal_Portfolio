'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI Chatbot Assistant',
    description: 'Full stack chatbot with OpenAI, Next.js, and MySQL',
    category: 'ai',
    tech: ['OpenAI', 'Next.js', 'TypeScript'],
    live: '#',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'Complete healthcare platform with MERN stack and AI diagnosis',
    category: 'fullstack',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: '#',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'Real-time AI image generation with DALL-E integration',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'DALL-E'],
    live: '#',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Full e-commerce with Next.js, Stripe, and MySQL',
    category: 'fullstack',
    tech: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: '#',
  },
  {
    id: 5,
    title: 'Sentiment Analyzer',
    description: 'Real-time sentiment analysis with NLP and visualization',
    category: 'ai',
    tech: ['Python', 'NLTK', 'React'],
    live: '#',
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with React, Firebase, and Charts',
    category: 'fullstack',
    tech: ['React', 'Firebase', 'Chart.js'],
    live: '#',
  },
]

const categories = ['All', 'AI Projects', 'Full Stack Projects']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => 
        filter === 'AI Projects' ? p.category === 'ai' : p.category === 'fullstack'
      )

  return (
    <section id="projects" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured <span className="text-[#00A86B]">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Some of my best work showcasing AI and Full Stack development
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#00A86B] text-white shadow-lg shadow-[#00A86B]/20'
                    : 'bg-[#0A0A0A]/50 text-gray-300 hover:bg-[#00A86B]/20 border border-[#00A86B]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#0A0A0A]/50 rounded-xl overflow-hidden border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00A86B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#00A86B]/10 text-[#00A86B] text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.live}
                      className="flex items-center gap-1 text-sm text-[#00A86B] hover:text-[#007A4D] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}