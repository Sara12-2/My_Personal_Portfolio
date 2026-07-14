'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, Mail, Download } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaKaggle,
  FaAward,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

type SocialIcon =
  | {
      type: 'icon'
      icon: React.ElementType
      href: string
      label: string
      color: string
    }
  | {
      type: 'image'
      src: string
      href: string
      label: string
      color: string
    }

const ROLES = [
  'AI-Powered Full Stack Developer',
  'Machine Learning Engineer',
  'Building Intelligent Web Applications',
  'Computer Vision Engineer',
  'Exploring LLMs & RAG',
]

const TECH_HIGHLIGHTS = ['React', 'Next.js', 'Python', 'TensorFlow', 'Flask']

const useTypingEffect = (roles: string[]) => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[textIndex % roles.length]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseBeforeDelete = 2500

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
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, roles])

  return { displayText }
}

const useOrbitRadius = () => {
  const [radius, setRadius] = useState(180)

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth
      if (width < 480) setRadius(110)
      else if (width < 640) setRadius(140)
      else if (width < 768) setRadius(165)
      else if (width < 1024) setRadius(190)
      else setRadius(220)
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  return radius
}

const useParticles = (reduceMotion: boolean) => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: string; y: string; size: number; duration: number }>
  >([])

  useEffect(() => {
    if (reduceMotion) {
      setParticles([])
      return
    }
    const count = window.innerWidth < 480 ? 4 : window.innerWidth < 768 ? 8 : 14
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      size: Math.random() * 5 + 2,
      duration: Math.random() * 15 + 15,
    }))
    setParticles(newParticles)
  }, [reduceMotion])

  return particles
}

const SOCIAL_ICONS: SocialIcon[] = [
  { type: 'icon', icon: FaGithub, href: 'https://github.com/Sara12-2', label: 'GitHub', color: '#2C2C2C' },
  { type: 'icon', icon: FaLinkedin, href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/', label: 'LinkedIn', color: '#0A66C2' },
  { type: 'icon', icon: SiLeetcode, href: 'https://leetcode.com/u/Sara_34/', label: 'LeetCode', color: '#FFA116' },
  { type: 'icon', icon: FaHackerrank, href: 'https://www.hackerrank.com/profile/saramanzoor342', label: 'HackerRank', color: '#2EC866' },
  { type: 'icon', icon: FaKaggle, href: 'https://www.kaggle.com/sara765', label: 'Kaggle', color: '#20BEFF' },
  { type: 'icon', icon: Mail, href: 'mailto:saramanzoor76@gmail.com', label: 'Email', color: '#8B9A6B' },
  { type: 'icon', icon: FaAward, href: 'https://gssoc.girlscript.tech/', label: 'GSSoC', color: '#8B5CF6' },
  { type: 'image', src: '/images/companies/devhatch.png', href: 'https://devhatchlabs.com', label: 'DevHatch', color: '#8B9A6B' },
]

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [imgError, setImgError] = useState(false)

  const prefersReducedMotion = useReducedMotion()
  const { displayText } = useTypingEffect(ROLES)
  const orbitRadius = useOrbitRadius()
  const particles = useParticles(!!prefersReducedMotion)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || prefersReducedMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }, [prefersReducedMotion])

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 })
    setHoveredIcon(null)
  }, [])

  const scrollToAbout = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const orbitDuration = prefersReducedMotion ? 0 : 24
  const ringDurationSlow = prefersReducedMotion ? 0 : 45
  const ringDurationSlower = prefersReducedMotion ? 0 : 60

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5F5F0] to-[#F8F6F0]" aria-hidden="true" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B9A6B]/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#8B9A6B]/5 blur-[160px]" aria-hidden="true" />

      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-[#8B9A6B]/20"
              style={{ width: particle.size, height: particle.size, left: particle.x, top: particle.y }}
              animate={{ y: [-30, 30, -30], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8B9A6B] animate-pulse" />
              <span className="text-[#8B9A6B] font-semibold text-xs sm:text-sm tracking-wide">
                Open To Work
              </span>
            </div>

            <h1 className="flex flex-wrap justify-center lg:justify-start gap-1 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2C2C2C] leading-tight tracking-tight">
              <span>Sara</span>
              <span className="text-[#8B9A6B] font-extrabold">Manzoor</span>
            </h1>

            <div className="min-h-[48px] sm:min-h-[56px] mt-3 sm:mt-4 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#4A4A4A]">
                {displayText || 'Full Stack Developer'}
                <span className="inline-block w-0.5 h-5 sm:h-6 ml-0.5 bg-[#8B9A6B] animate-pulse" />
              </span>
            </div>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#4A4A4A] leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build modern <span className="text-[#8B9A6B] font-semibold">full-stack web applications</span> and 
              <span className="text-[#8B9A6B] font-semibold"> AI-powered systems</span> using cutting-edge technologies.
              Turning <span className="text-[#8B9A6B] font-semibold">innovative ideas into impactful digital products</span>.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5 justify-center lg:justify-start">
              {TECH_HIGHLIGHTS.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full backdrop-blur-md bg-white/50 border border-[#8B9A6B]/25 text-[#4A4A4A] font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Sara_Manzoor_Resume.png"
                className="flex-1 min-w-[120px] sm:min-w-[140px] max-w-[180px] sm:max-w-[200px] px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white font-semibold text-sm sm:text-base shadow-xl shadow-[#8B9A6B]/30 transition-all duration-300 text-center whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex-1 min-w-[120px] sm:min-w-[140px] max-w-[180px] sm:max-w-[200px] px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B]/10 font-semibold text-sm sm:text-base transition-all duration-300 text-center whitespace-nowrap"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            ref={cardRef}
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `perspective(1200px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
              transition: '0.25s',
            }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px]">
              <motion.div
                animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-[#8B9A6B]/10 blur-3xl"
              />

              <div className="absolute inset-6 sm:inset-8 rounded-full border border-[#8B9A6B]/15" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: ringDurationSlow || 1, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'linear' }}
                className="absolute inset-3 sm:inset-4 rounded-full border border-dashed border-[#8B9A6B]/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: ringDurationSlower || 1, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'linear' }}
                className="absolute inset-[-15px] sm:inset-[-25px] rounded-full border border-[#8B9A6B]/10"
              />

              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="absolute inset-10 sm:inset-14 rounded-full overflow-hidden border-[4px] sm:border-[5px] border-[#8B9A6B] bg-white shadow-[0_25px_80px_rgba(139,154,107,.25)]"
              >
                {imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="https://ui-avatars.com/api/?name=Sara+Manzoor&background=8B9A6B&color=fff&size=600"
                    alt="Sara Manzoor - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src="/images/profile.jpg"
                    alt="Sara Manzoor - Full Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 480px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 480px"
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: orbitDuration || 1, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {SOCIAL_ICONS.map((social, index) => {
                  const angle = (360 / SOCIAL_ICONS.length) * index

                  return (
                    <div
                      key={social.label}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`,
                        transformOrigin: 'center',
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: orbitDuration || 1, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'linear' }}
                      >
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -6 }}
                          onHoverStart={() => setHoveredIcon(social.label)}
                          onHoverEnd={() => setHoveredIcon(null)}
                          className="group relative flex items-center justify-center"
                          aria-label={social.label}
                        >
                          <div
                            className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full backdrop-blur-xl bg-white/85 border border-white shadow-xl flex items-center justify-center transition-all duration-300"
                            style={{ boxShadow: `0 8px 30px ${social.color}25` }}
                          >
                            {social.type === 'image' ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={social.src}
                                alt={social.label}
                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=DevHatch&background=8B9A6B&color=fff&size=100'
                                }}
                              />
                            ) : (
                              <social.icon
                                size={18}
                                className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
                                style={{ color: social.color }}
                              />
                            )}
                          </div>

                          <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-300 pointer-events-none"
                            style={{ background: social.color }}
                          />

                          <AnimatePresence>
                            {hoveredIcon === social.label && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.9, y: 0 }}
                                animate={{ opacity: 1, scale: 1, y: -4 }}
                                exit={{ opacity: 0, scale: 0.9, y: 0 }}
                                className="absolute top-12 xs:top-13 sm:top-14 md:top-16 whitespace-nowrap rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-[#8B9A6B] text-white shadow-lg shadow-[#8B9A6B]/30 pointer-events-none"
                              >
                                {social.label}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.a>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>

              {!prefersReducedMotion && (
                <>
                  <motion.div
                    animate={{ y: [0, -12, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-8 sm:top-10 right-12 sm:right-16 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#8B9A6B] shadow-lg shadow-[#8B9A6B]/40"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                    className="absolute bottom-12 sm:bottom-16 left-8 sm:left-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#8B9A6B]/70"
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#8B9A6B] mb-1.5 sm:mb-2">
          Explore
        </span>

        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-lg border border-[#8B9A6B]/20 shadow-xl flex items-center justify-center group-hover:bg-[#8B9A6B] transition-all duration-300"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B9A6B] group-hover:text-white transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}