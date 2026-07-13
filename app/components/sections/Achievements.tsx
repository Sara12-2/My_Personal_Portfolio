'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Trophy, Medal, Star, Calendar } from 'lucide-react'

const honors = [
  {
    id: 1,
    title: 'Finance Management Team – HELLO WORLD 2025',
    issuer: 'University of Layyah',
    date: 'Dec 2025',
    type: 'Participation',
    icon: Award,
    color: '#8B9A6B',
    logo: '/images/companies/uol.png',
  },
  {
    id: 2,
    title: '2nd Position in ICS – DG Khan Board',
    issuer: 'BISE DG Khan',
    date: '2023',
    type: 'Position Holder',
    icon: Trophy,
    color: '#8B9A6B',
    logo: '/images/honors/bise-dg-khan.png',
  },
  {
    id: 3,
    title: 'Chief Minister Merit Award – Laptop Scheme',
    issuer: 'Govt. of Punjab',
    date: '2023',
    type: 'Merit Award',
    icon: Star,
    color: '#8B9A6B',
    logo: '/images/honors/cm-punjab.png',
  },
  {
    id: 4,
    title: 'E-Scotte Award – Merit Scholarship',
    issuer: 'BISE Multan',
    date: '2023',
    type: 'Scholarship',
    icon: Medal,
    color: '#8B9A6B',
    logo: '/images/honors/bise-multan.png',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Honors & Awards
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Achievements & <span className="text-[#8B9A6B]">Recognitions</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
          </div>

          {/* Cards Grid - 4 in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {honors.map((honor, index) => {
              const Icon = honor.icon
              return (
                <motion.div
                  key={honor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  {/* Icon/Logo */}
                  <div className="relative w-16 h-16 rounded-2xl bg-white shadow-lg border-2 border-[#8B9A6B]/20 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {honor.logo ? (
                      <img 
                        src={honor.logo} 
                        alt={honor.issuer} 
                        className="w-10 h-10 object-contain relative z-10" 
                      />
                    ) : (
                      <Icon className="w-7 h-7 text-[#8B9A6B] relative z-10" />
                    )}
                    <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#8B9A6B]/20" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300 line-clamp-2 min-h-[40px]">
                    {honor.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-[#4A4A4A] mt-1">{honor.issuer}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-center gap-3 mt-2 text-xs text-[#4A4A4A]/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#8B9A6B]" />
                      {honor.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#4A4A4A]/30" />
                    <span className="px-2 py-0.5 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full text-[10px] font-medium border border-[#8B9A6B]/20">
                      {honor.type}
                    </span>
                  </div>

                  {/* Decorative Number */}
                  <div className="absolute bottom-2 right-3 text-4xl font-bold text-[#8B9A6B]/5 select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: 'Total Awards', value: honors.length, icon: Award },
              { label: 'Position Holder', value: honors.filter(h => h.type === 'Position Holder').length, icon: Trophy },
              { label: 'Scholarships', value: honors.filter(h => h.type === 'Scholarship').length, icon: Medal },
            ].map((stat) => {
              const StatIcon = stat.icon
              return (
                <div 
                  key={stat.label} 
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#8B9A6B]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-2 rounded-full bg-[#8B9A6B]/10">
                    <StatIcon className="w-4 h-4 text-[#8B9A6B]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#8B9A6B]">{stat.value}</div>
                    <div className="text-xs text-[#4A4A4A]">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}