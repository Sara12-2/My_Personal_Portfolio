'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Experience', value: '3+', suffix: ' Years' },
  { label: 'Projects', value: '15+', suffix: '' },
  { label: 'Clients', value: '20+', suffix: '' },
  { label: 'AI Models', value: '5+', suffix: '' },
]

// Counter animation component
function AnimatedCounter({ target, suffix }: { target: string, suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const numericValue = parseInt(target.replace('+', ''))

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = numericValue / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, numericValue])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#8B9A6B]">
      {inView ? count : 0}{target.includes('+') ? '+' : ''}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              ✦ About Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Know Me <span className="text-[#8B9A6B]">Better</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT - Profile Image with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Glow Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-30px] rounded-full bg-[#8B9A6B]/10 blur-2xl"
              />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#8B9A6B] shadow-2xl shadow-[#8B9A6B]/20 group"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Sara Manzoor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#8B9A6B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Decorative Dots */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="absolute -top-4 -right-4 w-5 h-5 bg-[#8B9A6B] rounded-full shadow-lg shadow-[#8B9A6B]/30"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#8B9A6B]/70 rounded-full shadow-lg shadow-[#8B9A6B]/20"
              />
            </motion.div>

            {/* RIGHT - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
                I'm <span className="text-[#8B9A6B]">Sara Manzoor</span>
              </h3>
              
              <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
                I'm a passionate <span className="text-[#8B9A6B] font-semibold">Full Stack Developer</span> & 
                <span className="text-[#8B9A6B] font-semibold"> AI Engineer</span> with 3+ years of experience
                building modern web applications and AI solutions that make a difference.
              </p>
              
              <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
                My expertise spans across <span className="text-[#8B9A6B] font-medium">React, Next.js, Node.js, Python</span>, 
                and <span className="text-[#8B9A6B] font-medium">AI/ML</span> technologies. I believe in writing clean,
                scalable code and creating user-centric applications.
              </p>

              {/* Stats with Counter Animation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B9A6B]/5 group"
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-[#4A4A4A] mt-1 group-hover:text-[#8B9A6B] transition-colors duration-300">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
                >
                  Let's Talk
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}