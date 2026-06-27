// app/components/sections/Skill.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaAws,
  FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGithub
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiFramer,
  SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiGraphql,
  SiTensorflow, SiPytorch, SiPandas, SiOpenai,
  SiLinux, SiVercel, SiFigma, SiJavascript,
} from 'react-icons/si'
import { 
  Brain, Monitor, Server, Wrench, Sparkles, 
  Cpu, Layout, Database, Terminal, Grid3x3,
  Cloud, Code2, Layers, Zap
} from 'lucide-react'

// ============================================
// DATA - Based on Your Projects & Experience
// ============================================

const allSkills = [
  // ============ FRONTEND (From Web Projects) ============
  { id: 1, name: 'React', icon: FaReact, category: 'frontend', color: '#61DAFB' },
  { id: 2, name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { id: 3, name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { id: 4, name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  { id: 5, name: 'Redux', icon: SiRedux, category: 'frontend', color: '#764ABC' },
  { id: 6, name: 'Framer Motion', icon: SiFramer, category: 'frontend', color: '#0055FF' },
  { id: 7, name: 'JavaScript', icon: SiJavascript, category: 'frontend', color: '#F7DF1E' },
  { id: 8, name: 'HTML5', icon: FaHtml5, category: 'frontend', color: '#E34F26' },
  { id: 9, name: 'CSS3', icon: FaCss3Alt, category: 'frontend', color: '#1572B6' },
  { id: 10, name: 'Bootstrap', icon: FaCss3Alt, category: 'frontend', color: '#7952B3' },

  // ============ BACKEND (From Full Stack Projects) ============
  { id: 11, name: 'Node.js', icon: FaNodeJs, category: 'backend', color: '#339933' },
  { id: 12, name: 'Express.js', icon: SiExpress, category: 'backend', color: '#000000' },
  { id: 13, name: 'Flask', icon: FaPython, category: 'backend', color: '#000000' },
  { id: 14, name: 'Python', icon: FaPython, category: 'backend', color: '#3776AB' },
  { id: 15, name: 'MySQL', icon: FaDatabase, category: 'backend', color: '#4479A1' },
  { id: 16, name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', color: '#4169E1' },
  { id: 17, name: 'MongoDB', icon: SiMongodb, category: 'backend', color: '#47A248' },
  { id: 18, name: 'Prisma', icon: SiPrisma, category: 'backend', color: '#2D3748' },
  { id: 19, name: 'SQLite', icon: FaDatabase, category: 'backend', color: '#003B57' },

  // ============ AI / ML (From AI/ML Projects) ============
  { id: 20, name: 'Python', icon: FaPython, category: 'ai', color: '#3776AB' },
  { id: 21, name: 'TensorFlow', icon: SiTensorflow, category: 'ai', color: '#FF6F00' },
  { id: 22, name: 'PyTorch', icon: SiPytorch, category: 'ai', color: '#EE4C2C' },
  { id: 23, name: 'Scikit-learn', icon: SiTensorflow, category: 'ai', color: '#F7931E' },
  { id: 24, name: 'Pandas', icon: SiPandas, category: 'ai', color: '#150458' },
  { id: 25, name: 'NumPy', icon: SiPandas, category: 'ai', color: '#013243' },
  { id: 26, name: 'XGBoost', icon: SiTensorflow, category: 'ai', color: '#FF6F00' },
  { id: 27, name: 'LightGBM', icon: SiTensorflow, category: 'ai', color: '#2ECC71' },
  { id: 28, name: 'OpenAI', icon: SiOpenai, category: 'ai', color: '#412991' },
  { id: 29, name: 'LangChain', icon: SiOpenai, category: 'ai', color: '#1C3C3C' },
  { id: 30, name: 'NLP', icon: Brain, category: 'ai', color: '#8B9A6B' },
  { id: 31, name: 'Computer Vision', icon: Cpu, category: 'ai', color: '#8B9A6B' },
  { id: 32, name: 'Deep Learning', icon: Brain, category: 'ai', color: '#8B5CF6' },
  { id: 33, name: 'OpenCV', icon: Cpu, category: 'ai', color: '#5C3EE8' },
  { id: 34, name: 'YOLOv8', icon: Cpu, category: 'ai', color: '#00BFFF' },
  { id: 35, name: 'SMOTE', icon: Brain, category: 'ai', color: '#8B9A6B' },
  { id: 36, name: 'EDA', icon: Brain, category: 'ai', color: '#8B9A6B' },

  // ============ TOOLS & DEVOPS (From Projects) ============
  { id: 37, name: 'Git', icon: FaGit, category: 'tools', color: '#F05032' },
  { id: 38, name: 'GitHub', icon: FaGithub, category: 'tools', color: '#181717' },
  { id: 39, name: 'Docker', icon: FaDocker, category: 'tools', color: '#2496ED' },
  { id: 40, name: 'AWS', icon: FaAws, category: 'tools', color: '#FF9900' },
  { id: 41, name: 'Vercel', icon: SiVercel, category: 'tools', color: '#000000' },
  { id: 42, name: 'Linux', icon: SiLinux, category: 'tools', color: '#FCC624' },
  { id: 43, name: 'Figma', icon: SiFigma, category: 'tools', color: '#F24E1E' },
  { id: 44, name: 'Chart.js', icon: Database, category: 'tools', color: '#FF6384' },
  { id: 45, name: 'Streamlit', icon: Cloud, category: 'tools', color: '#FF4B4B' },
  { id: 46, name: 'Tkinter', icon: Layout, category: 'tools', color: '#2C2C2C' },
  { id: 47, name: 'Cisco Packet Tracer', icon: Server, category: 'tools', color: '#1E90FF' },
]

// ============================================
// CATEGORIES
// ============================================

const categories = [
  { id: 'all', label: 'All Skills', icon: Grid3x3, color: '#8B9A6B', count: allSkills.length },
  { id: 'frontend', label: 'Frontend', icon: Layout, color: '#61DAFB', count: allSkills.filter(s => s.category === 'frontend').length },
  { id: 'backend', label: 'Backend', icon: Database, color: '#339933', count: allSkills.filter(s => s.category === 'backend').length },
  { id: 'ai', label: 'AI / ML', icon: Brain, color: '#8B9A6B', count: allSkills.filter(s => s.category === 'ai').length },
  { id: 'tools', label: 'Tools', icon: Terminal, color: '#2496ED', count: allSkills.filter(s => s.category === 'tools').length },
]

// ============================================
// SKILL CARD COMPONENT
// ============================================

const SkillCard = ({ skill, index, isInView }: any) => {
  const Icon = skill.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.06,
        y: -8,
        transition: { duration: 0.25, type: 'spring', stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-default"
    >
      <div 
        className={`
          relative bg-white/80 backdrop-blur-md rounded-2xl p-4 
          border transition-all duration-500
          ${isHovered 
            ? 'border-[#8B9A6B]/40 shadow-2xl shadow-[#8B9A6B]/20' 
            : 'border-[#8B9A6B]/10 shadow-sm hover:shadow-xl'
          }
        `}
      >
        {/* Gradient Glow */}
        <div 
          className={`
            absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#8B9A6B]/20 via-[#8B9A6B]/5 to-transparent 
            opacity-0 transition-opacity duration-500 pointer-events-none
            ${isHovered ? 'opacity-100' : 'group-hover:opacity-60'}
          `}
        />

        <div className="relative flex items-center gap-3">
          <motion.div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-500 flex-shrink-0"
            style={{ 
              background: `${skill.color}15`,
              color: skill.color,
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Icon />
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#8B9A6B]">
              {skill.name}
            </p>
            <span className="text-[10px] text-[#4A4A4A]/40 uppercase tracking-wider">
              {skill.category}
            </span>
          </div>

          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? 1 : 0.2,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Animated Bottom Border */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B9A6B] via-[#A8B89A] to-[#8B9A6B] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function SkillsFilter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory)

  return (
    <section ref={ref} id="skills" className="py-32 bg-[#FAF8F5] overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B9A6B]/3 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-[#8B9A6B] text-sm font-medium tracking-[0.35em] uppercase">
            What I Work With
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1E1E1E]">
            Skills & <span className="text-[#8B9A6B]">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#4A4A4A]/60 max-w-2xl mx-auto">
            {allSkills.length}+ technologies across Frontend, Backend, AI/ML, and DevOps
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id

            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300 border
                  ${isActive 
                    ? 'bg-[#8B9A6B] text-white border-[#8B9A6B] shadow-lg shadow-[#8B9A6B]/30' 
                    : 'bg-white/80 text-[#4A4A4A] border-[#8B9A6B]/15 hover:border-[#8B9A6B]/40 hover:bg-white'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8B9A6B]'}`} />
                <span>{cat.label}</span>
                <span className={`
                  text-[10px] px-2 py-0.5 rounded-full
                  ${isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-[#8B9A6B]/10 text-[#8B9A6B]'
                  }
                `}>
                  {cat.count}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <span className="inline-flex items-center gap-2 text-sm text-[#4A4A4A]/40">
            <Sparkles className="w-4 h-4 text-[#8B9A6B]" />
            Always learning. Always building.
          </span>
        </motion.div>
      </div>
    </section>
  )
}