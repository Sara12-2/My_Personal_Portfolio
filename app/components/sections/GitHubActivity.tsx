'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Sparkles, GitFork, Star, Users } from 'lucide-react';

// ✅ Dynamic import with SSR disabled
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center py-8">
        <div className="w-8 h-8 border-4 border-[#8B9A6B] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function GitHubActivity() {
  const username = 'Sara12-2';

  // ✅ Olive theme colors
  const oliveTheme = {
    light: ['#ebedf0', '#C5D4B5', '#A8B89A', '#8B9A6B', '#6B8A4A'],
    dark: ['#2d333b', '#4A6B2A', '#5A7B3A', '#8B9A6B', '#6B8A4A'],
  };

  return (
    <section id="github" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Decorations */}
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
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              GitHub Activity
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Code <span className="text-[#8B9A6B]">Contributions</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
          </div>

          {/* Calendar */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#2C2C2C]">
                  {username}
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  Contribution Graph · {new Date().getFullYear()}
                </p>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8B9A6B] hover:text-[#6B7A5B] font-medium inline-flex items-center gap-1.5"
              >
                View Profile →
              </a>
            </div>

            {/* GitHub Calendar - Only renders on client */}
            <div className="flex justify-center overflow-x-auto">
              <GitHubCalendar
                username={username}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                theme={oliveTheme}
                loading={false}
              />
            </div>

            {/* Quick Stats */}
            <div className="mt-6 pt-4 border-t border-[#8B9A6B]/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-[#8B9A6B]">30+</div>
                <div className="text-xs text-[#4A4A4A]">Public Repos</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#8B9A6B]">50+</div>
                <div className="text-xs text-[#4A4A4A]">Total Contributions</div>
              </div>
              <div>
                <a
                  href="https://github.com/Sara12-2?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8B9A6B] hover:text-[#6B7A5B] font-medium inline-flex items-center gap-1"
                >
                  Explore Repos →
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg">
              <div className="flex flex-wrap items-center gap-6">
                <img
                  src="/images/profile.jpg"
                  alt="Sara Manzoor"
                  className="w-20 h-20 rounded-full border-4 border-[#8B9A6B]/20 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">Sara Manzoor</h3>
                  <p className="text-sm text-[#4A4A4A]">COO @ DevHatch Labs | ML & Full Stack Developer</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-[#4A4A4A]">
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4 text-[#8B9A6B]" /> 10+ forks
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#8B9A6B]" /> 15+ stars
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#8B9A6B]" /> 10+ followers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}