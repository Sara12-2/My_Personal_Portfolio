'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  MessageCircle,
  FileCheck,
  Star,
  Zap,
  Target,
  Heart,
  Award,
  Shield,
  Rocket,
  Briefcase,
  Code2,
  Brain,
  Globe,
  Coffee
} from 'lucide-react'

// ============================================
// DATA
// ============================================

const workProcess = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your idea, goals, and requirements. I understand your vision and create a clear roadmap.',
    icon: MessageCircle,
    color: '#8B9A6B',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'I create a detailed plan with timelines, milestones, and technology stack recommendations.',
    icon: Target,
    color: '#8B5CF6',
  },
  {
    step: '03',
    title: 'Development',
    description: 'I build your project with clean code, regular updates, and continuous communication.',
    icon: Code2,
    color: '#22C55E',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Final testing, deployment, and handover with complete documentation and support.',
    icon: Rocket,
    color: '#1E90FF',
  },
]

const whyHireMe = [
  { 
    title: '3+ Years Experience',
    description: 'Full Stack & AI/ML development with real-world project delivery.',
    icon: Briefcase,
    color: '#8B9A6B',
  },
  { 
    title: '30+ Projects Delivered',
    description: 'Proven track record across web development, AI/ML, and full stack.',
    icon: Award,
    color: '#8B5CF6',
  },
  { 
    title: 'Remote Ready',
    description: 'Experienced in remote collaboration with global teams and clients.',
    icon: Globe,
    color: '#22C55E',
  },
  { 
    title: 'Quality & Speed',
    description: 'Clean code, fast delivery, and always on time.',
    icon: Zap,
    color: '#F97316',
  },
  { 
    title: 'Clear Communication',
    description: 'Regular updates, transparent process, and quick responses.',
    icon: MessageCircle,
    color: '#1E90FF',
  },
  { 
    title: 'Problem Solver',
    description: 'Complex challenges broken down into simple, elegant solutions.',
    icon: Brain,
    color: '#8B9A6B',
  },
]

export default function WorkWhyResume() {
  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* ============================================
              SECTION 1: WORK PROCESS
          ============================================ */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
              >
                <Sparkles className="w-4 h-4" />
                How I Work
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                My <span className="text-[#8B9A6B]">Process</span>
              </h2>
              <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workProcess.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#8B9A6B]/10 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                        style={{ background: `${item.color}15`, color: item.color }}
                      >
                        {item.step}
                      </div>
                      <div className="p-2 rounded-lg bg-[#8B9A6B]/10">
                        <Icon className="w-5 h-5 text-[#8B9A6B]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1E1E1E] group-hover:text-[#8B9A6B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A4A4A]/70 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ============================================
              SECTION 2: WHY HIRE ME
          ============================================ */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
              >
                <Star className="w-4 h-4" />
                Why Hire Me
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                Why <span className="text-[#8B9A6B]">Me</span>
              </h2>
              <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyHireMe.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: `${item.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E1E1E]">{item.title}</h4>
                      <p className="text-xs text-[#4A4A4A]/60 mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ============================================
              SECTION 3: RESUME CTA
          ============================================ */}
          <div>
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
              >
                <FileCheck className="w-4 h-4" />
                Resume
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                My <span className="text-[#8B9A6B]">Resume</span>
              </h2>
              <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
              <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto text-sm">
                Download my resume to see my complete professional journey, skills, and achievements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
              >
                <FileCheck className="w-5 h-5" />
                Download Resume (PDF)
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 hover:bg-white border-2 border-[#8B9A6B] text-[#8B9A6B] rounded-xl transition-all duration-300 font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Request Resume
              </motion.a>
            </div>

            {/* Quick Resume Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              {[
                { label: 'Experience', value: '3+ Years', icon: Briefcase },
                { label: 'Projects', value: '30+', icon: Code2 },
                { label: 'Certifications', value: '30+', icon: Award },
                { label: 'Internships', value: '3', icon: Users },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#8B9A6B]/10 shadow-sm">
                  <stat.icon className="w-4 h-4 text-[#8B9A6B]" />
                  <div>
                    <div className="text-lg font-bold text-[#1E1E1E]">{stat.value}</div>
                    <div className="text-[10px] text-[#4A4A4A]/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-xs text-[#4A4A4A]/40 flex items-center justify-center gap-2">
                <Coffee className="w-3 h-3" />
                Open to opportunities • Available for remote work
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}