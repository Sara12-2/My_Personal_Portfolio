'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Sparkles, GitFork, Loader2 } from 'lucide-react';

// ✅ Dynamic import with SSR disabled
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="w-8 h-8 text-[#8B9A6B] animate-spin" />
      </div>
    ),
  }
);

export default function GitHubActivity() {
  const username = 'Sara12-2';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const oliveTheme = {
    light: ['#ebedf0', '#C5D4B5', '#A8B89A', '#8B9A6B', '#6B8A4A'],
    dark: ['#2d333b', '#4A6B2A', '#5A7B3A', '#8B9A6B', '#6B8A4A'],
  };

  // ✅ Hydration fix - Only render after mount
  if (!mounted) {
    return (
      <section id="github" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-[#8B9A6B] animate-spin mx-auto mb-4" />
              <p className="text-[#4A4A4A]">Loading GitHub data...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

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
              GitHub <span className="text-[#8B9A6B]">Activity</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My open source contributions and coding activity on GitHub
            </p>
          </div>

          {/* GitHub Card - Theme Matched */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              
              {/* ✅ REAL Contribution Graph (Calendar) */}
              <div className="flex justify-center overflow-x-auto">
                <GitHubCalendar
                  username={username}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  theme={oliveTheme}
                />
              </div>

              {/* ✅ REAL Contribution Streak Image */}
              <div className="mt-6 pt-4 border-t border-[#8B9A6B]/10">
                <h4 className="text-sm font-semibold text-[#2C2C2C] flex items-center justify-center gap-2 mb-4">
                  <GitFork className="w-4 h-4 text-[#8B9A6B]" />
                  Contribution Streak
                </h4>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0d1a12&stroke=8B9A6B&ring=8B9A6B&fire=8B9A6B&currStreakLabel=8B9A6B&sideLabels=8B9A6B&currStreakNum=ffffff&sideNums=ffffff&dates=6b9b6b`}
                  alt="GitHub Streak"
                  className="max-w-full rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>

          {/* View Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8B9A6B] hover:text-[#6B7A5B] font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              View Profile →
            </a>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#4A4A4A] text-sm flex items-center justify-center gap-2">
             
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}