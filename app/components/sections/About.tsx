'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Award, Code2, Users, Brain } from 'lucide-react'

const stats = [
  { 
    label: 'Experience', 
    value: '3+', 
    suffix: ' Years',
    icon: Award,
    color: '#8B9A6B'
  },
  { 
    label: 'Projects', 
    value: '15+', 
    suffix: '',
    icon: Code2,
    color: '#1E90FF'
  },
  { 
    label: 'Clients', 
    value: '20+', 
    suffix: '',
    icon: Users,
    color: '#2ECC71'
  },
  { 
    label: 'AI Models', 
    value: '5+', 
    suffix: '',
    icon: Brain,
    color: '#F1C40F'
  },
]

// Counter animation component
function AnimatedCounter({ target, suffix }: { target: string, suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const numericValue = parseInt(target.replace('+', ''))

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 1800
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
    <span ref={ref} className="text-3xl font-bold text-[#2C2C2C]">
      {inView ? count : 0}{target.includes('+') ? '+' : ''}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              ✦ About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">
              Know Me <span className="text-[#8B9A6B]">Better</span>
            </h2>
            <div className="w-16 h-1 bg-[#8B9A6B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Glow */}
                <div className="absolute -inset-4 bg-[#8B9A6B]/10 rounded-2xl blur-xl" />
                
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#8B9A6B] shadow-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Sara Manzoor"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B9A6B]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#2C2C2C]">
                I'm <span className="text-[#8B9A6B]">Sara Manzoor</span>
              </h3>
              
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                I'm a passionate <span className="text-[#8B9A6B] font-semibold">Full Stack Developer</span> & 
                <span className="text-[#8B9A6B] font-semibold"> AI Engineer</span> with 3+ years of experience
                building modern web applications and AI solutions.
              </p>
              
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                I specialize in <span className="text-[#8B9A6B] font-medium">React, Next.js, Node.js, Python</span>, 
                and <span className="text-[#8B9A6B] font-medium">AI/ML</span> technologies.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl p-4 text-center border border-[#8B9A6B]/10 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div 
                        className="inline-flex p-2 rounded-lg mb-2"
                        style={{ background: `${stat.color}15` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: stat.color }} />
                      </div>
                      <div>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-[10px] uppercase tracking-wide text-[#4A4A4A]/70 mt-0.5">
                        {stat.label}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-lg transition-all duration-300 font-medium shadow-md shadow-[#8B9A6B]/20 hover:shadow-lg text-sm"
                >
                  Let's Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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