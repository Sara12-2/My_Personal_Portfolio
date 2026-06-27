'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Brain, 
  Layout, 
  Server, 
  Wrench,
  ArrowUpRight
} from 'lucide-react'

const skillCategories = [
  {
    name: 'AI / ML',
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
      {/* Animated Background */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            WHAT I WORK WITH
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#2C2C2C] tracking-tight"
          >
            My Skills & <span className="text-[#8B9A6B]">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" 
          />
        </div>

        {/* Core Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-white border border-[#8B9A6B]/20 rounded-full text-xs font-bold text-[#8B9A6B] shadow-sm tracking-wider">
            CORE STACK
          </span>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white rounded-xl border border-[#8B9A6B]/10 text-[#2C2C2C] text-sm font-semibold shadow-sm cursor-default transition-all duration-200 hover:border-[#8B9A6B]"
              >
                {skill}
              </motion.span>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -6,
                  borderColor: `${category.color}40`,
                  boxShadow: `0 20px 40px -15px ${category.color}15`
                }}
                className="group bg-white p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-[#2C2C2C]" />
                </div>

                <div>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="p-3 rounded-xl transition-transform duration-500 group-hover:rotate-[12deg]"
                      style={{ background: `${category.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C2C2C] transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#707070] mt-0.5">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#F8F8F5] text-[#4A4A4A] font-medium rounded-lg text-xs border border-transparent transition-all duration-200 hover:border-[#8B9A6B]/20 hover:bg-[#8B9A6B]/5 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}