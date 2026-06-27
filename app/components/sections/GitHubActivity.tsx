'use client'

import { motion } from 'framer-motion'
import { 
  Star, 
  GitFork, 
  Users, 
  Code2, 
  TrendingUp,
  Calendar,
  Sparkles
} from 'lucide-react'

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
  const maxContributions = Math.max(...githubStats.contributionDays.map(d => d.count))

  return (
    <section id="github" className="py-20 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-14">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">
              GitHub <span className="text-[#8B9A6B]">Activity</span>
            </h2>
            <div className="w-16 h-1 bg-[#8B9A6B] mx-auto mt-3 rounded-full" />
            <p className="text-[#4A4A4A] mt-3 max-w-2xl mx-auto text-sm">
              My open source contributions and coding activity
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
            {[
              { label: 'Repos', value: githubStats.totalRepos, icon: Code2 },
              { label: 'Stars', value: githubStats.totalStars, icon: Star },
              { label: 'Forks', value: githubStats.totalForks, icon: GitFork },
              { label: 'Followers', value: githubStats.followers, icon: Users },
              { label: 'Contributions', value: githubStats.contributions, icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-4 text-center border border-[#8B9A6B]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex p-2 rounded-lg bg-[#8B9A6B]/10 mb-2">
                  <stat.icon className="w-4 h-4 text-[#8B9A6B]" />
                </div>
                <div className="text-xl font-bold text-[#2C2C2C]">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wide text-[#4A4A4A]/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Top Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 border border-[#8B9A6B]/10 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-5 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#8B9A6B]" />
                  Top Languages
                </h3>
                <div className="space-y-3">
                  {githubStats.topLanguages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#2C2C2C]">{lang.name}</span>
                        <span className="text-[#4A4A4A]">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F5F5F0] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contribution Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-[#8B9A6B]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8B9A6B]" />
                  Weekly Activity
                </h3>
                <div className="flex items-end justify-between gap-2 h-28">
                  {githubStats.contributionDays.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-1.5">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(day.count / maxContributions) * 100}%` }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-8 bg-[#8B9A6B] rounded-md transition-all duration-300"
                        style={{ height: `${(day.count / maxContributions) * 100}%` }}
                      />
                      <span className="text-[10px] text-[#4A4A4A]">{day.day}</span>
                      <span className="text-[10px] font-medium text-[#8B9A6B]">{day.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top Repositories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-[#8B9A6B]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#8B9A6B]" />
                  Top Repositories
                </h3>
                <div className="space-y-2.5">
                  {githubStats.topRepos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#F8F8F5] border border-[#8B9A6B]/5 hover:border-[#8B9A6B]/20 transition-all duration-300"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#2C2C2C] truncate">{repo.name}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full flex-shrink-0">
                            {repo.language}
                          </span>
                        </div>
                        <p className="text-xs text-[#4A4A4A] truncate">{repo.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-yellow-500 flex-shrink-0 ml-2">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-lg transition-all duration-300 font-medium shadow-md shadow-[#8B9A6B]/20 hover:shadow-lg text-sm"
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