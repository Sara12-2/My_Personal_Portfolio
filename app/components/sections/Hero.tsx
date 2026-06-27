'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // ✅ Generate random positions only on client
  const floatingParticles = isClient
    ? [...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        scale: Math.random() * 2 + 1,
        duration: Math.random() * 15 + 15,
        xMove: Math.random() * 20 - 10,
      }))
    : []

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5F5F0] to-[#F8F6F0]" />
      
      {/* Decorative Blobs - Light */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#8B9A6B]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#8B9A6B]/8 rounded-full blur-3xl" />

      {/* ✅ Floating Particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-[#8B9A6B]/20 rounded-full"
              initial={{ 
                x: particle.x, 
                y: particle.y,
                scale: particle.scale
              }}
              animate={{
                y: ['0%', '-100%', '0%'],
                x: [`${particle.xMove}%`, `${-particle.xMove}%`]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge - Light */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full mb-6"
            >
              <span className="w-2.5 h-2.5 bg-[#8B9A6B] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#8B9A6B] tracking-wide">✨ Open to Work</span>
            </motion.div>

            {/* Name - Sara Manzoor */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-[#2C2C2C]"
            >
              Sara <span className="text-[#8B9A6B]">Manzoor</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <span className="text-xl md:text-2xl font-bold text-[#8B9A6B]">
                <span className="inline-flex items-center gap-2">
                  Building the future with code & AI
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-6 bg-[#8B9A6B] rounded-full inline-block"
                  />
                </span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#4A4A4A] max-w-md lg:mx-0 mx-auto mb-8 leading-relaxed text-base"
            >
              COO @ DevHatch Labs | Full Stack Developer & AI Engineer passionate about 
              creating intelligent, scalable, and beautiful applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 154, 107, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white px-9 py-3.5 rounded-xl transition-all duration-300 text-lg font-semibold shadow-xl shadow-[#8B9A6B]/20"
              >
                Hire Me
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B]/10 px-9 py-3.5 rounded-xl transition-all duration-300 text-lg font-semibold"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6B7A5B] hover:bg-[#5A6A4B] text-white px-9 py-3.5 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg shadow-[#8B9A6B]/20"
              >
                About Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-8 justify-center lg:justify-start"
            >
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/' },
                { name: 'GitHub', href: 'https://github.com/Sara12-2' },
                { name: 'Twitter', href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15,
                    color: '#8B9A6B',
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#4A4A4A] hover:text-[#8B9A6B] transition-all duration-300 font-semibold relative text-sm tracking-wide"
                >
                  {social.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B9A6B]"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            ref={cardRef}
            style={{
              transform: `perspective(800px) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * 8}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
            className="relative order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              
              {/* Rotating Ring - Light */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <motion.span
                  className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-sm font-bold text-[#8B9A6B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#8B9A6B]/20 whitespace-nowrap"
                >
                  ✦ Full Stack Developer
                </motion.span>
                <motion.span
                  className="absolute right-[-25px] top-1/2 -translate-y-1/2 text-sm font-bold text-[#8B9A6B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#8B9A6B]/20 whitespace-nowrap"
                >
                  ✦ AI Engineer
                </motion.span>
                <motion.span
                  className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 text-sm font-bold text-[#8B9A6B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#8B9A6B]/20 whitespace-nowrap"
                >
                  ✦ React Developer
                </motion.span>
                <motion.span
                  className="absolute left-[-25px] top-1/2 -translate-y-1/2 text-sm font-bold text-[#8B9A6B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#8B9A6B]/20 whitespace-nowrap"
                >
                  ✦ Next.js Expert
                </motion.span>
              </motion.div>

              {/* Second Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <motion.span
                  className="absolute top-[12%] right-[12%] text-sm font-bold text-[#6B7A5B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#6B7A5B]/20 whitespace-nowrap"
                >
                  ✦ Python Developer
                </motion.span>
                <motion.span
                  className="absolute bottom-[12%] left-[12%] text-sm font-bold text-[#6B7A5B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#6B7A5B]/20 whitespace-nowrap"
                >
                  ✦ ML Enthusiast
                </motion.span>
                <motion.span
                  className="absolute top-[12%] left-[12%] text-sm font-bold text-[#6B7A5B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#6B7A5B]/20 whitespace-nowrap"
                >
                  ✦ Tech Consultant
                </motion.span>
                <motion.span
                  className="absolute bottom-[12%] right-[12%] text-sm font-bold text-[#6B7A5B] bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#6B7A5B]/20 whitespace-nowrap"
                >
                  ✦ OpenAI Specialist
                </motion.span>
              </motion.div>

              {/* Glowing Ring - Light */}
              <motion.div
                animate={{ 
                  scale: [1, 1.06, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-20px] rounded-full bg-[#8B9A6B]/8 blur-2xl"
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#8B9A6B] shadow-xl shadow-[#8B9A6B]/20"
              >
                <img
                  src="/images/profile.png"
                  alt="Sara Manzoor - Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glowing Dots - Light */}
              <motion.div
                animate={{ 
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="absolute -top-3 -right-3 w-4 h-4 bg-[#8B9A6B] rounded-full shadow-lg shadow-[#8B9A6B]/30"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#8B9A6B]/60 rounded-full shadow-lg shadow-[#8B9A6B]/20"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Light */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-[#8B9A6B]/60 font-semibold">Explore</span>
          <ChevronDown className="w-6 h-6 text-[#8B9A6B]" />
        </motion.div>
      </motion.div>
    </section>
  )
}