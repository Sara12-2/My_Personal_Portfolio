'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CTO',
    company: 'TechCorp',
    quote: 'Sara is an exceptional developer who delivered our project ahead of schedule.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Product Manager',
    company: 'WebSolutions',
    quote: 'Working with Sara was a pleasure. She created a beautiful, responsive application.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Founder',
    company: 'StartupHub',
    quote: "Sara's full stack skills are impressive. She built our entire MVP in record time.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            What People <span className="text-[#00A86B]">Say</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Testimonials from people I've worked with
          </p>
          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0A0A0A]/50 p-8 rounded-xl border border-[#00A86B]/10 text-center"
              >
                <div className="text-4xl text-[#00A86B] mb-4">&quot;</div>
                <p className="text-gray-300 text-lg mb-6">{testimonials[current].quote}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00A86B] text-[#00A86B]" />
                  ))}
                </div>
                <h4 className="text-white font-semibold">{testimonials[current].name}</h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[current].title}, {testimonials[current].company}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 bg-[#141414] rounded-full border border-[#00A86B]/20 hover:border-[#00A86B]/40 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-[#00A86B]" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 bg-[#141414] rounded-full border border-[#00A86B]/20 hover:border-[#00A86B]/40 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-[#00A86B]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}