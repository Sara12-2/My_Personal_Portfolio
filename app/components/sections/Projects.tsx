'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, Layers, Brain, BarChart, Globe, Network, Code2 } from 'lucide-react'

const projects = [
  // Web Projects
  {
    id: 1,
    title: 'AI Chatbot Assistant',
    description: 'Full stack chatbot with OpenAI, Next.js, and MySQL for real-time conversations',
    category: 'web',
    tech: ['OpenAI', 'Next.js', 'TypeScript', 'MySQL'],
    live: '#',
    icon: Brain,
    color: '#8B9A6B',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full e-commerce with Next.js, Stripe, and MySQL with admin dashboard',
    category: 'web',
    tech: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: '#',
    icon: Layers,
    color: '#1E90FF',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with React, Firebase, and Chart.js for social insights',
    category: 'web',
    tech: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
    live: '#',
    icon: BarChart,
    color: '#2ECC71',
  },
  {
    id: 4,
    title: 'Portfolio Landing Page',
    description: 'Modern, responsive portfolio with animations, dark/light mode, and AI chatbot',
    category: 'web',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    live: '#',
    icon: Globe,
    color: '#F1C40F',
  },

  // ML/NLP/CV Projects
  {
    id: 5,
    title: 'Sentiment Analyzer',
    description: 'Real-time sentiment analysis with NLP and beautiful visualization dashboard',
    category: 'ml',
    tech: ['Python', 'NLTK', 'React', 'Flask'],
    live: '#',
    icon: Brain,
    color: '#8B9A6B',
  },
  {
    id: 6,
    title: 'Image Classification System',
    description: 'Computer Vision model for image classification with ResNet and PyTorch',
    category: 'ml',
    tech: ['Python', 'PyTorch', 'ResNet', 'FastAPI'],
    live: '#',
    icon: Brain,
    color: '#1E90FF',
  },
  {
    id: 7,
    title: 'Object Detection App',
    description: 'Real-time object detection using YOLOv8 with web interface',
    category: 'ml',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    live: '#',
    icon: Brain,
    color: '#2ECC71',
  },
  {
    id: 8,
    title: 'Text Summarization Tool',
    description: 'NLP-based text summarization using transformers and BERT',
    category: 'ml',
    tech: ['Python', 'Transformers', 'BERT', 'Hugging Face'],
    live: '#',
    icon: Brain,
    color: '#F1C40F',
  },

  // Generative AI Projects
  {
    id: 9,
    title: 'AI Image Generator',
    description: 'Real-time AI image generation with DALL-E and Stable Diffusion integration',
    category: 'genai',
    tech: ['Python', 'FastAPI', 'DALL-E', 'Stable Diffusion'],
    live: '#',
    icon: Sparkles,
    color: '#8B9A6B',
  },
  {
    id: 10,
    title: 'Text-to-Video Generator',
    description: 'Generate videos from text prompts using AI models',
    category: 'genai',
    tech: ['Python', 'OpenAI', 'FFmpeg', 'FastAPI'],
    live: '#',
    icon: Sparkles,
    color: '#1E90FF',
  },
  {
    id: 11,
    title: 'AI Music Composer',
    description: 'Generate original music using AI models and MIDI',
    category: 'genai',
    tech: ['Python', 'MusicGen', 'MIDI', 'Streamlit'],
    live: '#',
    icon: Sparkles,
    color: '#2ECC71',
  },

  // DSA Projects
  {
    id: 12,
    title: 'Algorithm Visualizer',
    description: 'Interactive visualization of sorting, searching, and graph algorithms',
    category: 'dsa',
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas'],
    live: '#',
    icon: Code2,
    color: '#8B9A6B',
  },
  {
    id: 13,
    title: 'Pathfinding Visualizer',
    description: 'Visualize Dijkstra, A*, BFS, and DFS algorithms on grid',
    category: 'dsa',
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas'],
    live: '#',
    icon: Code2,
    color: '#1E90FF',
  },

  // Computer Networks
  {
    id: 14,
    title: 'Network Traffic Analyzer',
    description: 'Real-time network traffic monitoring and analysis tool',
    category: 'networks',
    tech: ['Python', 'Scapy', 'React', 'WebSocket'],
    live: '#',
    icon: Network,
    color: '#8B9A6B',
  },
  {
    id: 15,
    title: 'Chat Application',
    description: 'Real-time chat app with WebSocket, encryption, and file sharing',
    category: 'networks',
    tech: ['Node.js', 'WebSocket', 'React', 'Redis'],
    live: '#',
    icon: Network,
    color: '#2ECC71',
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'ml', label: 'ML/NLP/CV', icon: Brain },
  { id: 'genai', label: 'Generative AI', icon: Sparkles },
  { id: 'dsa', label: 'DSA', icon: Code2 },
  { id: 'networks', label: 'Networks', icon: Network },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              My Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Featured <span className="text-[#8B9A6B]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              A showcase of my work across Web Development, AI/ML, and Computer Science
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = filter === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#8B9A6B] text-white shadow-lg shadow-[#8B9A6B]/30'
                      : 'bg-white/50 text-[#4A4A4A] hover:bg-[#8B9A6B]/10 border border-[#8B9A6B]/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8B9A6B]'}`} />
                  <span className="text-sm font-medium">{cat.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500"
                >
                  <div className="p-6 space-y-4">
                    {/* Icon & Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-all duration-300`}>
                        <Icon className={`w-5 h-5 text-[#8B9A6B] group-hover:text-white transition-all duration-300`} />
                      </div>
                      <span className="text-xs px-3 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full border border-[#8B9A6B]/20">
                        {categories.find(c => c.id === project.category)?.label || project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#8B9A6B]/5 text-[#8B9A6B] text-xs rounded-full border border-[#8B9A6B]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.live}
                        className="flex items-center gap-1 text-sm text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors font-medium group/link"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Projects', value: projects.length },
              { label: 'AI/ML Projects', value: projects.filter(p => p.category === 'ml' || p.category === 'genai').length },
              { label: 'Web Apps', value: projects.filter(p => p.category === 'web').length },
              { label: 'Other', value: projects.filter(p => p.category === 'dsa' || p.category === 'networks').length },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center">
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}