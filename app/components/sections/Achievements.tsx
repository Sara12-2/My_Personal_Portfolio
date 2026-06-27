'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal, Sparkles, ChevronRight } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Best AI Project Award',
    description: 'Won first place in National AI Hackathon 2024',
    icon: Trophy,
    date: '2024',
    color: '#F1C40F',
    bgColor: 'rgba(241, 196, 15, 0.15)',
  },
  {
    id: 2,
    title: 'Published Research Paper',
    description: 'Paper on "LLM Optimization" published in IEEE Conference',
    icon: Award,
    date: '2023',
    color: '#1E90FF',
    bgColor: 'rgba(30, 144, 255, 0.15)',
  },
  {
    id: 3,
    title: 'Top 10 Developer',
    description: 'Ranked in top 10 developers on Stack Overflow (Pakistan)',
    icon: Star,
    date: '2023',
    color: '#8B9A6B',
    bgColor: 'rgba(139, 154, 107, 0.2)',
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    description: 'Contributed to 15+ open source projects including Next.js',
    icon: Medal,
    date: '2022-2024',
    color: '#2ECC71',
    bgColor: 'rgba(46, 204, 113, 0.15)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjlBNkIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

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
              My Achievements
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Awards & <span className="text-[#8B9A6B]">Recognition</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              Milestones and recognition I've earned throughout my journey
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-8 border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: item.color }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative inline-flex p-4 rounded-2xl mb-6"
                    style={{ background: item.bgColor }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: `${item.color}30` }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2 group-hover:text-[#8B9A6B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Date Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        background: item.bgColor,
                        color: item.color
                      }}
                    >
                      {item.date}
                    </span>
                    
                    {/* Hover Arrow */}
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#8B9A6B]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </div>

                  {/* Decorative Number */}
                  <div className="absolute bottom-2 right-4 text-6xl font-bold text-[#8B9A6B]/5 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-[#4A4A4A] mb-4">
              And many more achievements along the way...
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
            >
              Let's Create More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}