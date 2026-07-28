// app/components/sections/Skill.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  FaReact, FaPython, FaGit, FaGithub,
  FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaNpm
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiTensorflow, SiPandas, SiNumpy,
  SiScikitlearn, SiVercel, SiNetlify,
  SiJupyter, SiGooglecolab, SiFlask,
  SiBootstrap, SiSqlite, SiPytorch,
  SiLangchain, SiKeras, SiFigma,
  SiPostgresql, SiRedis, SiDocker, SiGithubactions,
  SiPytest, SiJsonwebtokens, SiSocketdotio, SiSpacy,
  SiVite, SiNginx
} from 'react-icons/si'
import { 
  Brain, Server, Sparkles, 
  Cpu, Layout, Database, Terminal, Grid3x3,
  Cloud, Layers, Zap, MessageSquare, BarChart3,
  Eye, Code, GitBranch, Award, ShieldCheck, Wrench, FileText
} from 'lucide-react'

// ============================================
// ✅ VERIFIED SKILLS - All Properly Numbered & Icons Assigned
// ============================================

const allSkills = [
  // ============ FRONTEND (11) ============
  { id: 1, name: 'React.js', icon: FaReact, category: 'frontend', color: '#61DAFB' },
  { id: 2, name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { id: 3, name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { id: 4, name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  { id: 5, name: 'JavaScript', icon: FaJs, category: 'frontend', color: '#F7DF1E' },
  { id: 6, name: 'HTML5', icon: FaHtml5, category: 'frontend', color: '#E34F26' },
  { id: 7, name: 'CSS3', icon: FaCss3Alt, category: 'frontend', color: '#1572B6' },
  { id: 8, name: 'Bootstrap', icon: SiBootstrap, category: 'frontend', color: '#7952B3' },
  { id: 9, name: 'Responsive Web', icon: Layout, category: 'frontend', color: '#06B6D4' },
  { id: 10, name: 'Framer Motion', icon: Sparkles, category: 'frontend', color: '#0055FF' },
  { id: 11, name: 'Vite', icon: SiVite, category: 'frontend', color: '#646CFF' },

  // ============ BACKEND (11) ============
  { id: 12, name: 'Python', icon: FaPython, category: 'backend', color: '#3776AB' },
  { id: 13, name: 'Flask', icon: SiFlask, category: 'backend', color: '#000000' },
  { id: 14, name: 'MySQL', icon: FaDatabase, category: 'backend', color: '#4479A1' },
  { id: 15, name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', color: '#4169E1' },
  { id: 16, name: 'SQLite', icon: SiSqlite, category: 'backend', color: '#003B57' },
  { id: 17, name: 'Redis', icon: SiRedis, category: 'backend', color: '#DC382D' },
  { id: 18, name: 'REST APIs', icon: Server, category: 'backend', color: '#8B9A6B' },
  { id: 19, name: 'JWT Authentication', icon: SiJsonwebtokens, category: 'backend', color: '#000000' },
  { id: 20, name: 'Socket.IO', icon: SiSocketdotio, category: 'backend', color: '#010101' },
  { id: 21, name: 'SQL', icon: Database, category: 'backend', color: '#4479A1' },
  { id: 22, name: 'Oracle', icon: Database, category: 'backend', color: '#F80000' },

  // ============ AI / ML (26) ============
  { id: 23, name: 'Scikit-learn', icon: SiScikitlearn, category: 'ai', color: '#F7931E' },
  { id: 24, name: 'Pandas', icon: SiPandas, category: 'ai', color: '#150458' },
  { id: 25, name: 'NumPy', icon: SiNumpy, category: 'ai', color: '#013243' },
  { id: 26, name: 'XGBoost', icon: Cpu, category: 'ai', color: '#EB5E28' },
  { id: 27, name: 'LightGBM', icon: Cpu, category: 'ai', color: '#4285F4' },
  { id: 28, name: 'SMOTE', icon: Brain, category: 'ai', color: '#8B9A6B' },
  { id: 29, name: 'NLP', icon: MessageSquare, category: 'ai', color: '#8B9A6B' },
  { id: 30, name: 'spaCy', icon: SiSpacy, category: 'ai', color: '#09A3D5' },
  { id: 31, name: 'NLTK', icon: MessageSquare, category: 'ai', color: '#8B9A6B' },
  { id: 32, name: 'Computer Vision', icon: Eye, category: 'ai', color: '#8B9A6B' },
  { id: 33, name: 'OpenCV', icon: Eye, category: 'ai', color: '#5C3EE8' },
  { id: 34, name: 'YOLOv8', icon: Eye, category: 'ai', color: '#00BFFF' },
  { id: 35, name: 'Deep Learning', icon: Brain, category: 'ai', color: '#8B5CF6' },
  { id: 36, name: 'LangChain', icon: SiLangchain, category: 'ai', color: '#1C3C3C' },
  { id: 37, name: 'TensorFlow', icon: SiTensorflow, category: 'ai', color: '#FF6F00' },
  { id: 38, name: 'Keras', icon: SiKeras, category: 'ai', color: '#D00000' },
  { id: 39, name: 'PyTorch', icon: SiPytorch, category: 'ai', color: '#EE4C2C' },
  { id: 40, name: 'Matplotlib', icon: BarChart3, category: 'ai', color: '#11557C' },
  { id: 41, name: 'Seaborn', icon: BarChart3, category: 'ai', color: '#4C72B0' },
  { id: 42, name: 'EDA', icon: BarChart3, category: 'ai', color: '#8B9A6B' },
  { id: 43, name: 'Groq AI', icon: Zap, category: 'ai', color: '#F55036' },
  { id: 44, name: 'ChromaDB', icon: Database, category: 'ai', color: '#8B9A6B' },
  { id: 45, name: 'RAG Systems', icon: MessageSquare, category: 'ai', color: '#8B9A6B' },
  { id: 46, name: 'Sentence Transformers', icon: Layers, category: 'ai', color: '#8B9A6B' },
  { id: 47, name: 'Generative AI', icon: Sparkles, category: 'ai', color: '#8B9A6B' },
  { id: 48, name: 'LLMs', icon: MessageSquare, category: 'ai', color: '#8B9A6B' },

  // ============ DEVOPS & TESTING (4) ============
  { id: 49, name: 'Docker', icon: SiDocker, category: 'devops', color: '#2496ED' },
  { id: 50, name: 'GitHub Actions (CI/CD)', icon: SiGithubactions, category: 'devops', color: '#2088FF' },
  { id: 51, name: 'Pytest', icon: SiPytest, category: 'devops', color: '#0A9EDC' },
  { id: 52, name: 'Nginx', icon: SiNginx, category: 'devops', color: '#009639' },

  // ============ TOOLS (12) ============
  { id: 53, name: 'Git', icon: FaGit, category: 'tools', color: '#F05032' },
  { id: 54, name: 'GitHub', icon: FaGithub, category: 'tools', color: '#181717' },
  { id: 55, name: 'Vercel', icon: SiVercel, category: 'tools', color: '#000000' },
  { id: 56, name: 'Netlify', icon: SiNetlify, category: 'tools', color: '#00C7B7' },
  { id: 57, name: 'Chart.js', icon: BarChart3, category: 'tools', color: '#FF6384' },
  { id: 58, name: 'Streamlit', icon: Cloud, category: 'tools', color: '#FF4B4B' },
  { id: 59, name: 'Jupyter', icon: SiJupyter, category: 'tools', color: '#F37626' },
  { id: 60, name: 'Google Colab', icon: SiGooglecolab, category: 'tools', color: '#F9AB00' },
  { id: 61, name: 'Kaggle', icon: Award, category: 'tools', color: '#20BEFF' },
  { id: 62, name: 'Figma', icon: SiFigma, category: 'tools', color: '#F24E1E' },
  { id: 63, name: 'npm', icon: FaNpm, category: 'tools', color: '#CB3837' },
  { id: 64, name: 'VS Code', icon: Code, category: 'tools', color: '#007ACC' },
]

// ============================================
// CATEGORIES
// ============================================

const categories = [
  { id: 'all', label: 'All Skills', icon: Grid3x3, color: '#8B9A6B', count: allSkills.length },
  { id: 'frontend', label: 'Frontend', icon: Layout, color: '#61DAFB', count: allSkills.filter(s => s.category === 'frontend').length },
  { id: 'backend', label: 'Backend', icon: Database, color: '#339933', count: allSkills.filter(s => s.category === 'backend').length },
  { id: 'ai', label: 'AI / ML', icon: Brain, color: '#8B9A6B', count: allSkills.filter(s => s.category === 'ai').length },
  { id: 'devops', label: 'DevOps & Testing', icon: Wrench, color: '#2496ED', count: allSkills.filter(s => s.category === 'devops').length },
  { id: 'tools', label: 'Tools', icon: Terminal, color: '#2496ED', count: allSkills.filter(s => s.category === 'tools').length },
]

// ============================================
// SKILL CARD COMPONENT
// ============================================

const SkillCard = ({ skill, index, isInView, canHover }: any) => {
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
      whileHover={canHover ? { scale: 1.06, y: -8, transition: { duration: 0.25, type: 'spring', stiffness: 300 } } : undefined}
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

  // FIX: on mobile/touch devices, browsers can simulate a "hover" state on
  // tap, which fights with Framer Motion's whileHover scale transform and
  // the CSS `transition-all duration-300` color change happening at the
  // same time — this is what caused the filter buttons (and skill cards)
  // to visibly "blink" on mobile. Only enable whileHover on devices that
  // actually support real pointer hover.
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches)
  }, [])

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
            {allSkills.length}+ verified technologies across Frontend, Backend, AI/ML, and DevOps
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
                whileHover={canHover ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
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
              canHover={canHover}
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