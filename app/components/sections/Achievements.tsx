'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Best AI Project Award',
    description: 'Won first place in National AI Hackathon 2024',
    icon: Trophy,
    date: '2024',
  },
  {
    id: 2,
    title: 'Published Research Paper',
    description: 'Paper on "LLM Optimization" published in IEEE Conference',
    icon: Award,
    date: '2023',
  },
  {
    id: 3,
    title: 'Top 10 Developer',
    description: 'Ranked in top 10 developers on Stack Overflow (Pakistan)',
    icon: Star,
    date: '2023',
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    description: 'Contributed to 15+ open source projects including Next.js',
    icon: Medal,
    date: '2022-2024',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#00A86B]">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Recognition and milestones I've achieved
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0A0A0A]/50 p-6 rounded-xl border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300 text-center"
                >
                  <div className="inline-flex p-3 bg-[#00A86B]/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#00A86B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-xs rounded-full">
                    {item.date}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}