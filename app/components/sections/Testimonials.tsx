'use client'

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Quote, Star, CheckCircle2, Sparkles } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Saim Iftikhar',
    title: 'Founder & CEO',
    company: 'DevHatch Labs',
    quote: 'Working with Sara has been a great experience. She consistently delivers high-quality work and communicates exceptionally well.',
    rating: 5,
    initials: 'SI',
    verified: true,
  },
  {
    id: 2,
    name: 'Ahmed Raza',
    title: 'Senior Developer',
    company: 'Tech Innovations',
    quote: 'Sara is an exceptional developer with a strong grasp of modern technologies. Her problem-solving skills are truly impressive.',
    rating: 5,
    initials: 'AR',
    verified: true,
  },
  {
    id: 3,
    name: 'Fatima Noor',
    title: 'Product Manager',
    company: 'Digital Solutions',
    quote: 'It was a pleasure working with Sara. She understood our requirements perfectly and delivered beyond expectations.',
    rating: 5,
    initials: 'FN',
    verified: true,
  },
  {
    id: 4,
    name: 'Usman Khan',
    title: 'Tech Lead',
    company: 'CloudPeak',
    quote: 'Sara\'s full-stack expertise and AI knowledge are outstanding. She\'s a valuable asset to any team.',
    rating: 5,
    initials: 'UK',
    verified: true,
  },
  {
    id: 5,
    name: 'Zara Ahmed',
    title: 'CEO',
    company: 'AI Futures',
    quote: 'Sara built our entire AI-powered platform from scratch. Her attention to detail and clean code is remarkable.',
    rating: 5,
    initials: 'ZA',
    verified: true,
  },
]

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        scale: 1.04,
        y: -8,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[340px] md:w-[380px] lg:w-[400px] mx-3 cursor-default"
    >
      <div
        className={`
          relative bg-white rounded-2xl p-6 md:p-7 border transition-all duration-500
          ${isHovered 
            ? 'border-[#8B9A6B] shadow-2xl shadow-[#8B9A6B]/20' 
            : 'border-[#8B9A6B]/10 shadow-lg hover:shadow-xl'
          }
        `}
      >
        {/* Glow */}
        <div
          className={`
            absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#8B9A6B]/10 via-[#8B9A6B]/5 to-transparent
            opacity-0 transition-opacity duration-500 pointer-events-none
            ${isHovered ? 'opacity-100' : ''}
          `}
        />

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#F1C40F] text-[#F1C40F]"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-[#1E1E1E] leading-relaxed line-clamp-4">
            "{testimonial.quote}"
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-[#8B9A6B]/20 via-[#8B9A6B]/10 to-transparent" />

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#8B9A6B]/20 flex-shrink-0">
              {testimonial.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-[#1E1E1E] truncate">
                  {testimonial.name}
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] flex-shrink-0" />
              </div>
              <p className="text-xs text-[#4A4A4A]/60 truncate">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </div>

          {/* Verified */}
          <div className="mt-3 pt-3 border-t border-[#8B9A6B]/5">
            <span className="text-[10px] text-[#4A4A4A]/40 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#8B9A6B]" />
              Verified Client
            </span>
          </div>
        </div>

        {/* Decorative Quote */}
        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-[#8B9A6B]/10" />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (isHovering) return

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
    <section id="testimonials" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
          >
            <Quote className="w-4 h-4" />
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
            What Clients <span className="text-[#8B9A6B]">Say</span>
          </h2>
          <p className="text-[#4A4A4A] mt-3 max-w-md mx-auto">
            Trusted by founders, startups, and businesses.
          </p>
          <div className="w-16 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Marquee */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex"
            style={{ x }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none z-20" />
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-xs text-[#4A4A4A]/30 flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 text-[#8B9A6B]" />
            Join 20+ satisfied clients
          </p>
        </motion.div>
      </div>
    </section>
  )
}