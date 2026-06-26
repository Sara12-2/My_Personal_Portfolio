'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'  // Sirf Star rakha

const githubData = {
  username: 'your-username',
  repos: 25,
  stars: 120,
  forks: 45,
  followers: 30,
  contributions: 856,
  topRepos: [
    { name: 'ai-chatbot', stars: 45, language: 'TypeScript' },
    { name: 'portfolio-website', stars: 32, language: 'Next.js' },
    { name: 'ml-models', stars: 28, language: 'Python' },
  ],
}

export default function GitHubActivity() {
  return (
    <section id="github" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* GitHub Icon ki jagah text */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">📊</span>
            <h2 className="text-4xl font-bold">
              <span className="text-[#00A86B]">GitHub</span> Activity
            </h2>
          </div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My open source contributions and coding activity
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 text-center">
              <div className="text-2xl font-bold text-[#00A86B]">{githubData.repos}</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 text-center">
              <div className="text-2xl font-bold text-[#00A86B]">{githubData.stars}</div>
              <div className="text-sm text-gray-400">Stars Received</div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 text-center">
              <div className="text-2xl font-bold text-[#00A86B]">{githubData.forks}</div>
              <div className="text-sm text-gray-400">Forks</div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 text-center">
              <div className="text-2xl font-bold text-[#00A86B]">{githubData.followers}</div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 text-center">
              <div className="text-2xl font-bold text-[#00A86B]">{githubData.contributions}</div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Top Repositories</h3>
            <div className="space-y-4">
              {githubData.topRepos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#141414] p-4 rounded-xl border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{repo.name}</h4>
                      <span className="text-sm text-gray-400">{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-yellow-400">
                        <Star className="w-4 h-4" /> {repo.stars}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}