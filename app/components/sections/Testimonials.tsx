'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, User } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CTO',
    company: 'TechCorp',
    quote: 'Sara is an exceptional developer who delivered our project ahead of schedule. Her attention to detail and problem-solving skills are outstanding.',
    rating: 5,
    initials: 'JD',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Product Manager',
    company: 'WebSolutions',
    quote: 'Working with Sara was a pleasure. She created a beautiful, responsive application that our users absolutely love.',
    rating: 5,
    initials: 'JS',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Founder',
    company: 'StartupHub',
    quote: "Sara's full stack skills are impressive. She built our entire MVP in record time with exceptional quality.",
    rating: 5,
    initials: 'MJ',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase()
  }

  return (
    <section id="testimonials" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              What People <span className="text-[#8B9A6B]">Say</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              Real feedback from people I've worked with
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-[#8B9A6B]/10 shadow-xl relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#8B9A6B]/10" />

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#8B9A6B] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#8B9A6B]/20">
                    {testimonials[current].initials || getInitials(testimonials[current].name)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2C2C2C]">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-[#4A4A4A] text-sm">
                      {testimonials[current].title}, {testimonials[current].company}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.08, type: 'spring', stiffness: 400 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < testimonials[current].rating
                            ? 'fill-[#F1C40F] text-[#F1C40F]'
                            : 'text-[#4A4A4A]/20'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#2C2C2C] text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Decorative Number */}
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#8B9A6B]/5 select-none pointer-events-none">
                  {String(current + 1).padStart(2, '0')}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#8B9A6B]/20 hover:border-[#8B9A6B] hover:bg-[#8B9A6B] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-[#4A4A4A] hover:text-white transition-colors duration-300" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1)
                      setCurrent(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-[#8B9A6B] w-8'
                        : 'bg-[#8B9A6B]/20 hover:bg-[#8B9A6B]/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#8B9A6B]/20 hover:border-[#8B9A6B] hover:bg-[#8B9A6B] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-[#4A4A4A] hover:text-white transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}