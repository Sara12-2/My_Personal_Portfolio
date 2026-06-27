'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Brain, 
  Layout, 
  Server, 
  Wrench,
} from 'lucide-react'

const skillCategories = [
  {
    name: 'AI/ML',
    icon: Brain,
    description: 'Building and shipping intelligent systems',
    skills: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'PyTorch', 'Hugging Face'],
    color: '#8B9A6B',
  },
  {
    name: 'Frontend',
    icon: Layout,
    description: 'Crafting fast, accessible interfaces',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    color: '#1E90FF',
  },
  {
    name: 'Backend',
    icon: Server,
    description: 'Scalable APIs and data layers',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],
    color: '#2ECC71',
  },
  {
    name: 'Tools',
    icon: Wrench,
    description: 'Infrastructure and developer tooling',
    skills: ['Docker', 'AWS', 'Git', 'Vercel', 'Redis', 'Nginx'],
    color: '#F1C40F',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
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
              WHAT I WORK WITH
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              My Skills & <span className="text-[#8B9A6B]">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
          </div>

          {/* Core Stack Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-semibold text-[#8B9A6B]">
              ⚡ CORE STACK
            </span>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-[#8B9A6B]/10 text-[#2C2C2C] text-sm font-medium shadow-sm hover:shadow-md hover:border-[#8B9A6B]/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${category.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#4A4A4A]">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#F5F5F0] text-[#2C2C2C] rounded-lg text-sm border border-[#8B9A6B]/5 hover:border-[#8B9A6B]/20 hover:bg-[#8B9A6B]/5 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}