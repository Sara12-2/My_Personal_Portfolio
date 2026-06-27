'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaKaggle,
  FaAward,
  FaBuilding,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const roles = [
    'Full Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'AI/ML Engineer',
    'Python Developer',
    'TypeScript Developer',
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typing Effect - Smooth
  useEffect(() => {
    if (!isClient) return

    const currentRole = roles[textIndex % roles.length]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseBeforeDelete = 2500
    const pauseBeforeType = 500

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => prev + 1)
          setTimeout(() => {}, pauseBeforeType)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, roles, isClient])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setHoveredIcon(null)
  }

  const floatingParticles = isClient
    ? [...Array(18)].map((_, i) => ({
        id: i,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        size: Math.random() * 5 + 2,
        duration: Math.random() * 15 + 15,
      }))
    : []

  const socialIcons = [
    {
      icon: FaGithub,
      href: 'https://github.com/Sara12-2',
      label: 'GitHub',
      color: '#2C2C2C',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/',
      label: 'LinkedIn',
      color: '#0A66C2',
    },
    {
      icon: Mail,
      href: 'mailto:saramanzoorofficial@gmail.com',
      label: 'Email',
      color: '#8B9A6B',
    },
    {
      icon: SiLeetcode,
      href: 'https://leetcode.com/',
      label: 'LeetCode',
      color: '#FFA116',
    },
    {
      icon: FaHackerrank,
      href: 'https://www.hackerrank.com/',
      label: 'HackerRank',
      color: '#2EC866',
    },
    {
      icon: FaKaggle,
      href: 'https://www.kaggle.com/',
      label: 'Kaggle',
      color: '#20BEFF',
    },
    {
      icon: FaAward,
      href: 'https://gssoc.girlscript.tech/',
      label: 'GSSoC',
      color: '#8B5CF6',
    },
    {
      icon: FaBuilding,
      href: 'https://devhatch.vercel.app/',
      label: 'DevHatch',
      color: '#8B9A6B',
    },
  ]

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5F5F0] to-[#F8F6F0]" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#8B9A6B]/5 blur-[160px]" />

      {/* Floating particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-[#8B9A6B]/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.x,
                top: particle.y,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8B9A6B] animate-pulse" />
              <span className="text-[#8B9A6B] font-semibold text-sm tracking-wide">
                Open To Work
              </span>
            </div>

            {/* Name - One Line */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2C2C2C] leading-tight tracking-tight">
              Sara <span className="text-[#8B9A6B] font-extrabold">Manzoor</span>
            </h1>

            {/* Typing Effect - Clean & Smooth */}
            <div className="h-12 mt-4 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-semibold text-[#4A4A4A]">
                {displayText}
                <span className="inline-block w-0.5 h-7 ml-0.5 bg-[#8B9A6B] animate-pulse" />
              </span>
            </div>

            {/* About - 2 Lines */}
            <div className="mt-6 space-y-2">
              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                COO at DevHatch Labs • Building intelligent, scalable digital products
              </p>
              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                Passionate Full Stack Developer & AI Engineer solving real-world problems
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white font-semibold shadow-xl shadow-[#8B9A6B]/30 transition-all duration-300"
              >
                Hire Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3.5 rounded-xl border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B]/10 font-semibold transition-all duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="px-8 py-3.5 rounded-xl bg-[#6B7A5B] hover:bg-[#5A6A4B] text-white font-semibold shadow-lg shadow-[#8B9A6B]/20 transition-all duration-300"
              >
                About Me
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Image with Orbit Icons */}
          <motion.div
            ref={cardRef}
            style={{
              transform: `perspective(1200px)
              rotateX(${mousePosition.y * 10}deg)
              rotateY(${mousePosition.x * 10}deg)`,
              transition: '0.25s',
            }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
              {/* Outer Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-[#8B9A6B]/10 blur-3xl"
              />

              {/* Decorative Rings */}
              <div className="absolute inset-8 rounded-full border border-[#8B9A6B]/15" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-3 rounded-full border border-dashed border-[#8B9A6B]/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-[-25px] rounded-full border border-[#8B9A6B]/10"
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                }}
                className="absolute inset-14 rounded-full overflow-hidden border-[5px] border-[#8B9A6B] bg-white shadow-[0_25px_80px_rgba(139,154,107,.25)]"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Sara Manzoor"
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.target.src =
                      'https://ui-avatars.com/api/?name=Sara+Manzoor&background=8B9A6B&color=fff&size=600'
                  }}
                />
              </motion.div>

              {/* Orbit Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              >
                {socialIcons.map((social, index) => {
                  const Icon = social.icon
                  const angle = (360 / socialIcons.length) * index
                  const radius = 220

                  return (
                    <div
                      key={social.label}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `
                          rotate(${angle}deg)
                          translate(${radius}px)
                          rotate(-${angle}deg)
                        `,
                        transformOrigin: 'center',
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 24,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -6 }}
                          onHoverStart={() => setHoveredIcon(social.label)}
                          onHoverEnd={() => setHoveredIcon(null)}
                          className="group relative flex items-center justify-center"
                        >
                          <div
                            className="
                              w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-xl bg-white/85
                              border border-white shadow-xl flex items-center justify-center
                              transition-all duration-300
                            "
                            style={{
                              boxShadow: `0 12px 35px ${social.color}25`,
                            }}
                          >
                            <Icon size={22} style={{ color: social.color }} />
                          </div>

                          {/* Glow Effect */}
                          <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-300"
                            style={{ background: social.color }}
                          />

                          {/* Olive Theme Tooltip */}
                          <span
                            className={`
                              absolute top-14 md:top-16 whitespace-nowrap rounded-full
                              px-3 py-1 text-xs font-medium
                              transition-all duration-300
                              ${hoveredIcon === social.label
                                ? 'opacity-100 scale-100 bg-[#8B9A6B] text-white shadow-lg shadow-[#8B9A6B]/30'
                                : 'opacity-0 scale-90 bg-[#2C2C2C] text-white'
                              }
                            `}
                          >
                            {social.label}
                          </span>
                        </motion.a>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>

              {/* Floating Dots */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-16 w-4 h-4 rounded-full bg-[#8B9A6B] shadow-lg shadow-[#8B9A6B]/40"
              />

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 left-10 w-3 h-3 rounded-full bg-[#8B9A6B]/70"
              />

              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-[#8B9A6B]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-[#8B9A6B]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group"
      >
        <motion.span
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-xs tracking-[0.35em] uppercase text-[#8B9A6B] mb-2"
        >
          Explore
        </motion.span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            w-12 h-12 rounded-full bg-white/80 backdrop-blur-lg
            border border-[#8B9A6B]/20 shadow-xl flex items-center justify-center
            group-hover:bg-[#8B9A6B] transition-all duration-300
          "
        >
          <ChevronDown className="w-6 h-6 text-[#8B9A6B] group-hover:text-white transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}