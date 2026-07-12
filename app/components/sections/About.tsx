'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'  // ← Variants import
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Briefcase, 
  Code2, 
  Award, 
  MapPin, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react'
import profileImage from '@/public/images/profile.jpg'

// ============================================
// CONSTANTS
// ============================================

const STATS = [
  { 
    label: 'Experience', 
    value: '1+', 
    suffix: ' Year',
    icon: Briefcase,
  },
  { 
    label: 'Projects', 
    value: '15+', 
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

// ============================================
// COMPONENT: Animated Counter
// ============================================

function AnimatedCounter({ target, suffix }: { target: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
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
    <span ref={ref} className="text-xl sm:text-2xl font-bold text-[#2C2C2C] tabular-nums">
      {inView ? count : 0}{target.includes('+') ? '+' : ''}{suffix}
    </span>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 25,
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 25,
        duration: 0.7,
      },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#FAF8F5] via-[#F5F5F0] to-[#F8F6F0] overflow-hidden"
      aria-label="About Sara Manzoor"
    >
      {/* ===== DECORATIVE BACKGROUND ===== */}
      
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          y: [0, -15, 0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[5%] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#8B9A6B]/20"
        aria-hidden="true"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[20%] right-[6%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8B9A6B]/20"
        aria-hidden="true"
      />

      {/* ===== MAIN CONTENT ===== */}

      <motion.div
        ref={ref}
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* ===== SECTION HEADER ===== */}

          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full mb-3"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-medium text-[#8B9A6B] tracking-widest uppercase">
                About Me
              </span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C]">
              Know Me{' '}
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="bg-gradient-to-r from-[#8B9A6B] via-[#6B7A5B] to-[#8B9A6B] bg-[length:200%] text-transparent bg-clip-text"
              >
                Better
              </motion.span>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '3.5rem' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-0.5 bg-[#8B9A6B] mx-auto mt-3 rounded-full"
            />
          </motion.div>

          {/* ===== GRID ===== */}

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* ===== LEFT - IMAGE ===== */}

            <motion.div
              variants={imageVariants}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                
                {/* Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-3 bg-[#8B9A6B]/10 rounded-2xl blur-2xl"
                />

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative rounded-2xl overflow-hidden border-[3px] sm:border-4 border-[#8B9A6B] shadow-xl shadow-[#8B9A6B]/15"
                >
                  <Image
                    src={profileImage}
                    alt="Sara Manzoor"
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 640px) 260px, 300px"
                    onError={(e: any) => {
                      e.target.src =
                        'https://ui-avatars.com/api/?name=Sara+Manzoor&background=8B9A6B&color=fff&size=400'
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#8B9A6B]/30 to-transparent flex items-end justify-center pb-4"
                  >
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-white text-xs font-medium bg-[#2C2C2C]/70 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    >
                      ✦ Sara Manzoor
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-[#8B9A6B]/15 px-2.5 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-semibold text-[#2C2C2C] whitespace-nowrap">
                    Open to Work
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* ===== RIGHT - CONTENT ===== */}

            <motion.div variants={containerVariants} className="space-y-4 text-center lg:text-left">
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2C]">
                  I'm{' '}
                  <span className="text-[#8B9A6B]">Sara Manzoor</span>
                </h3>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed"
              >
                I'm a <span className="text-[#8B9A6B] font-semibold">Full Stack Developer</span> and{' '}
                <span className="text-[#8B9A6B] font-semibold">AI/ML Engineer</span> passionate about
                building intelligent, scalable, and user-centric digital solutions. Currently serving as{' '}
                <span className="text-[#8B9A6B] font-semibold">COO at DevHatch Labs</span>, where I
                develop innovative software and explore how AI can solve real-world challenges.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed"
              >
                My expertise spans full-stack development —{' '}
                <span className="text-[#8B9A6B] font-medium">React, Next.js, TypeScript, Flask, MySQL</span>
                {' '}— alongside{' '}
                <span className="text-[#8B9A6B] font-medium">Machine Learning, NLP &amp; Computer Vision</span>,
                with a growing focus on <span className="text-[#8B9A6B] font-medium">RAG and LLMs</span>.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed"
              >
                I enjoy turning ideas into practical products — from business systems to AI-powered
                applications — writing clean code, crafting meaningful experiences, and constantly
                learning. Let's build something innovative together.
              </motion.p>

              {/* ===== LOCATION ===== */}

        

              {/* ===== STATS ===== */}

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-2 max-w-[300px] sm:max-w-sm mx-auto lg:mx-0"
              >
                {STATS.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.9 }}
                      transition={{ delay: 0.2 + index * 0.08, type: 'spring', stiffness: 150 }}
                      whileHover={{
                        y: -4,
                        scale: 1.04,
                        boxShadow: '0 12px 30px rgba(139, 154, 107, 0.12)',
                      }}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 text-center border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 transition-all duration-300 cursor-default overflow-hidden"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex p-1 rounded-lg mb-0.5 bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-all duration-300"
                      >
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                      </motion.div>
                      
                      <div>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      
                      <p className="text-[6px] xs:text-[7px] uppercase tracking-widest text-[#4A4A4A]/50 mt-0.5 font-medium group-hover:text-[#8B9A6B] transition-colors duration-300">
                        {stat.label}
                      </p>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.5 + index * 0.08, duration: 0.8 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B9A6B] origin-left"
                      />
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* ===== CTA ===== */}

              <motion.div
                variants={itemVariants}
                className="pt-1 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-medium shadow-md shadow-[#8B9A6B]/20 text-sm"
                >
                  Let's Talk
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B] hover:text-white rounded-xl transition-all duration-300 font-medium text-sm"
                >
                  View Work
                </motion.a>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== BOTTOM DECORATION ===== */}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#8B9A6B]/15 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}