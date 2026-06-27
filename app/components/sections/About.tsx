'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Briefcase, Code2, Award, GraduationCap, MapPin, Calendar, Star } from 'lucide-react'

const stats = [
  { 
    label: 'Experience', 
    value: '3+', 
    suffix: ' Years',
    icon: Briefcase,
  },
  { 
    label: 'Projects', 
    value: '30+', 
    suffix: '',
    icon: Code2,
  },
  { 
    label: 'Certificates', 
    value: '30+', 
    suffix: '',
    icon: Award,
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
    <span ref={ref} className="text-xl font-bold text-[#2C2C2C]">
      {inView ? count : 0}{target.includes('+') ? '+' : ''}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F0] relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
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

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-[#8B9A6B]/10 rounded-2xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#8B9A6B] shadow-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Sara Manzoor"
                    className="w-full h-auto object-cover"
                  />
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
                Full Stack Developer & AI Engineer with 3+ years of experience. 
                Currently <span className="text-[#8B9A6B] font-semibold">COO at DevHatch Labs</span>.
              </p>
              
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                I build scalable web apps with <span className="text-[#8B9A6B] font-medium">React, Next.js, Python</span> 
                and create AI solutions using <span className="text-[#8B9A6B] font-medium">ML, NLP & Computer Vision</span>.
              </p>

              {/* Education Details - Compact */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                  <GraduationCap className="w-4 h-4 text-[#8B9A6B]" />
                  <span><span className="font-medium">BS CS</span> · UoL</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                  <MapPin className="w-4 h-4 text-[#8B9A6B]" />
                  <span>Layyah, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                  <Calendar className="w-4 h-4 text-[#8B9A6B]" />
                  <span>2024 – 2028</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                  <Star className="w-4 h-4 text-[#8B9A6B]" />
                  <span>Grade: A</span>
                </div>
              </div>

              {/* ✅ Stylish Stats Cards - Small with Hover Effect */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -6,
                        scale: 1.04,
                        boxShadow: '0 12px 30px rgba(139, 154, 107, 0.2)'
                      }}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-2.5 text-center border border-[#8B9A6B]/10 shadow-sm hover:border-[#8B9A6B]/40 transition-all duration-300 cursor-default overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon with Rotate on Hover */}
                      <div className="inline-flex p-1.5 rounded-lg mb-0.5 bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                      </div>
                      
                      <div>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      
                      <p className="text-[8px] uppercase tracking-wider text-[#4A4A4A]/50 mt-0.5 font-medium group-hover:text-[#8B9A6B] transition-colors duration-300">
                        {stat.label}
                      </p>
                      
                      {/* Bottom Border Animation */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8B9A6B] group-hover:w-1/2 transition-all duration-500" />
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
                className="pt-2 flex flex-wrap gap-3"
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
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  View Work
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}