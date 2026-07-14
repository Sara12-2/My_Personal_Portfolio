'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useAnimationFrame, useReducedMotion, useInView } from 'framer-motion'
import { Quote, Star, CheckCircle2, Sparkles } from 'lucide-react'
import Image from 'next/image'

// ============================================
// TESTIMONIAL DATA — All verified/real testimonials with company logos
// ============================================

const testimonials = [
  {
    id: 1,
    name: 'Saim Iftikhar',
    title: 'Founder & CEO',
    company: 'DevHatch Labs',
    logo: '/images/companies/devhatch.png',
    quote: 'Sara has been an incredible asset to DevHatch Labs. As our COO, she has transformed our operations, streamlined workflows, and built a culture of excellence. Her leadership and technical expertise are truly remarkable.',
    rating: 5,
    initials: 'SI',
    relationship: 'CEO & Co-founder',
  },
  {
    id: 2,
    name: 'Afynix Digital Team',
    title: 'Web Development Team',
    company: 'Afynix Digital',
    logo: '/images/companies/afynix.png',
    quote: 'Sara was an exceptional intern who delivered high-quality React applications including TechNest e-commerce, Nimbus Weather dashboard, and ARCWATCH landing page. Her attention to detail and ability to implement complex features was impressive.',
    rating: 5,
    initials: 'AD',
    relationship: 'Internship Supervisor',
  },
  {
    id: 3,
    name: 'SAM AI Team',
    title: 'AI/ML Team Lead',
    company: 'SAM AI Technologies',
    logo: '/images/companies/sam-ai.png',
    quote: 'During her ML internship at SAM AI Technologies, Sara built and evaluated production-ready models for fraud detection, sentiment analysis, and spam classification. She applied SMOTE, XGBoost, and NLP preprocessing techniques with precision.',
    rating: 5,
    initials: 'SA',
    relationship: 'ML Team Lead',
  },
]

// Duplicated for a seamless scrolling loop
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials]

// ============================================
// TESTIMONIAL CARD
// ============================================

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[number] }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 250 }}
      className="relative flex-shrink-0 w-[320px] sm:w-[360px] mx-3"
    >
      <div
        className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 h-full flex flex-col overflow-hidden ${
          isHovered ? 'border-[#8B9A6B] shadow-2xl shadow-[#8B9A6B]/20' : 'border-[#8B9A6B]/15 shadow-lg'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B9A6B] to-transparent" />

        <div className="relative z-10 flex flex-col flex-1">
          {/* Company Logo */}
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-xl bg-white/80 border border-[#8B9A6B]/10 shadow-md flex items-center justify-center p-2 overflow-hidden">
              <Image src={testimonial.logo} alt={testimonial.company} width={44} height={44} className="w-11 h-11 object-contain" />
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-0.5 mb-3 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#8B9A6B] text-[#8B9A6B]" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-[#1E1E1E] leading-relaxed text-center flex-1 line-clamp-4">
            "{testimonial.quote}"
          </p>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#8B9A6B]/25 to-transparent" />

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#8B9A6B]/20 flex-shrink-0">
              {testimonial.initials}
            </div>
            <div className="text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-[#1E1E1E] truncate">{testimonial.name}</h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B9A6B] flex-shrink-0" />
              </div>
              <p className="text-xs text-[#4A4A4A]/60 truncate">{testimonial.title}, {testimonial.company}</p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#8B9A6B]/10 text-center">
            <span className="text-[9px] text-[#4A4A4A]/40 inline-flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#8B9A6B]" />
              {testimonial.relationship}
            </span>
          </div>
        </div>

        <Quote className="absolute -top-1 -right-1 w-8 h-8 text-[#8B9A6B]/10" />
      </div>
    </motion.div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [width, setWidth] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const prefersReducedMotion = useReducedMotion()
  // FIX (from the original marquee): only run the animation loop while the
  // section is actually visible on screen. Previously the marquee ran
  // forever via useAnimationFrame regardless of scroll position, which was
  // a real contributor to scroll jank. `isInView` gates it so the frame
  // loop does nothing (and costs nothing) once the user scrolls away.
  const isInView = useInView(sectionRef, { amount: 0.1 })

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3)
    }
  }, [])

  useAnimationFrame((_, delta) => {
    if (isHovering || prefersReducedMotion || !isInView || width === 0) return

    const speed = 30
    const currentX = x.get()
    const newX = currentX - speed * (delta / 1000)

    if (newX <= -width) {
      x.set(newX + width)
    } else {
      x.set(newX)
    }
  })

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 sm:py-24 md:py-28 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-xs sm:text-sm font-medium text-[#8B9A6B] mb-3 sm:mb-4"
          >
            <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Testimonials
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            What People <span className="text-[#8B9A6B]">Say</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4A4A4A] mt-3 max-w-md mx-auto">
            Feedback from colleagues and mentors I've worked with
          </p>

          <div className="w-14 sm:w-16 h-1 bg-[#8B9A6B] mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Marquee */}
        {prefersReducedMotion ? (
          // Reduced-motion fallback: static grid, no auto-scroll
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        ) : (
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div ref={containerRef} className="flex" style={{ x }}>
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            {/* Edge fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none z-20" />
          </div>
        )}

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <p className="text-[10px] sm:text-xs text-[#4A4A4A]/30 flex items-center justify-center gap-1.5 sm:gap-2">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B]" />
            Trusted by colleagues, mentors, and team leads
          </p>
        </motion.div>
      </div>
    </section>
  )
}