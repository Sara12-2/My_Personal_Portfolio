'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  GitFork, 
  Users, 
  Code2, 
  TrendingUp,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react'

// Real GitHub Stats - Replace with your actual data
const githubStats = {
  username: 'Sara12-2',
  totalRepos: 25,
  totalStars: 120,
  totalForks: 45,
  followers: 30,
  contributions: 856,
  topLanguages: [
    { name: 'TypeScript', percentage: 40, color: '#3178C6' },
    { name: 'Python', percentage: 30, color: '#3776AB' },
    { name: 'JavaScript', percentage: 20, color: '#F7DF1E' },
    { name: 'HTML/CSS', percentage: 10, color: '#E34F26' },
  ],
  contributionDays: [
    { day: 'Mon', count: 8 },
    { day: 'Tue', count: 12 },
    { day: 'Wed', count: 7 },
    { day: 'Thu', count: 15 },
    { day: 'Fri', count: 10 },
    { day: 'Sat', count: 4 },
    { day: 'Sun', count: 3 },
  ],
  topRepos: [
    { name: 'ai-chatbot', stars: 45, language: 'TypeScript', description: 'AI-powered chatbot with OpenAI' },
    { name: 'portfolio-website', stars: 32, language: 'Next.js', description: 'Modern portfolio website' },
    { name: 'ml-models', stars: 28, language: 'Python', description: 'Machine learning models collection' },
  ],
}

export default function GitHubActivity() {
  const [isVisible, setIsVisible] = useState(false)
  const maxContributions = Math.max(...githubStats.contributionDays.map(d => d.count))

  return (
    <section id="github" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

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
              <Code2 className="w-4 h-4" />
              Open Source
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              GitHub <span className="text-[#8B9A6B]">Activity</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My open source contributions and coding activity on GitHub
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              { label: 'Repositories', value: githubStats.totalRepos, icon: Code2, color: '#8B9A6B' },
              { label: 'Stars', value: githubStats.totalStars, icon: Star, color: '#F1C40F' },
              { label: 'Forks', value: githubStats.totalForks, icon: GitFork, color: '#1E90FF' },
              { label: 'Followers', value: githubStats.followers, icon: Users, color: '#2ECC71' },
              { label: 'Contributions', value: githubStats.contributions, icon: TrendingUp, color: '#8B9A6B' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-300 text-center group"
              >
                <div className="inline-flex p-3 rounded-xl bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-all duration-300 mb-3">
                  <stat.icon className="w-5 h-5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                </div>
                <div className="text-2xl font-bold text-[#2C2C2C]">{stat.value}</div>
                <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Top Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#8B9A6B]" />
                  Top Languages
                </h3>
                <div className="space-y-4">
                  {githubStats.topLanguages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#2C2C2C] font-medium">{lang.name}</span>
                        <span className="text-[#4A4A4A]">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#F5F5F0] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full transition-all duration-500"
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contribution Chart & Repos */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contribution Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#8B9A6B]" />
                  Weekly Contributions
                </h3>
                <div className="flex items-end justify-between gap-2 h-32">
                  {githubStats.contributionDays.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(day.count / maxContributions) * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-10 bg-gradient-to-t from-[#8B9A6B]/30 to-[#8B9A6B] rounded-lg transition-all duration-500"
                        style={{ height: `${(day.count / maxContributions) * 100}%` }}
                      />
                      <span className="text-xs text-[#4A4A4A]">{day.day}</span>
                      <span className="text-xs font-medium text-[#8B9A6B]">{day.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top Repositories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#8B9A6B]" />
                  Top Repositories
                </h3>
                <div className="space-y-3">
                  {githubStats.topRepos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-[#F5F5F0] border border-[#8B9A6B]/5 hover:border-[#8B9A6B]/20 transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#2C2C2C] font-medium">{repo.name}</span>
                          <span className="text-xs px-2 py-0.5 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full">
                            {repo.language}
                          </span>
                        </div>
                        <p className="text-sm text-[#4A4A4A]">{repo.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span>{repo.stars}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
            >
              <Code2 className="w-4 h-4" />
              View All on GitHub
              <span className="text-xs opacity-70">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}