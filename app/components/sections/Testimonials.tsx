'use client'

import { motion } from 'framer-motion'
import { Quote, Star, CheckCircle2, Sparkles } from 'lucide-react'

// ============================================
// TESTIMONIAL DATA — only verified/real testimonial kept.
// The previous version included 3 fabricated names (Ahmed Raza, Dr. Usman Malik,
// Fatima Noor) which have been removed — only Saim Iftikhar's testimonial is real.
// ============================================

const testimonial = {
  name: 'Saim Iftikhar',
  title: 'Founder & CEO',
  company: 'DevHatch Labs',
  quote: 'Sara has been an incredible asset to DevHatch Labs. As our COO, she has transformed our operations, streamlined workflows, and built a culture of excellence. Her leadership and technical expertise are truly remarkable.',
  rating: 5,
  initials: 'SI',
  relationship: 'CEO & Co-founder',
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />

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
            Testimonial
          </motion.span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E]">
            What People{' '}
            <span className="text-[#8B9A6B]">Say</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#4A4A4A] mt-3 max-w-md mx-auto">
            Feedback from a colleague I've worked closely with
          </p>
          
          <div className="w-14 sm:w-16 h-1 bg-[#8B9A6B] mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Static Featured Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl p-7 md:p-9 border border-[#8B9A6B]/10 shadow-xl hover:shadow-2xl hover:shadow-[#8B9A6B]/15 hover:border-[#8B9A6B]/30 transition-all duration-500">
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F1C40F] text-[#F1C40F]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-[#1E1E1E] leading-relaxed text-center">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#8B9A6B]/20 to-transparent" />

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center text-white font-bold text-base shadow-md shadow-[#8B9A6B]/20 flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-[#1E1E1E]">
                      {testimonial.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] flex-shrink-0" />
                  </div>
                  <p className="text-xs text-[#4A4A4A]/60">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Relationship Badge */}
              <div className="mt-4 pt-4 border-t border-[#8B9A6B]/5 text-center">
                <span className="text-[10px] text-[#4A4A4A]/40 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#8B9A6B]" />
                  {testimonial.relationship}
                </span>
              </div>
            </div>

            <Quote className="absolute -top-2 -right-2 w-8 h-8 text-[#8B9A6B]/10" />
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <p className="text-[10px] sm:text-xs text-[#4A4A4A]/30 flex items-center justify-center gap-1.5 sm:gap-2">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B]" />
            Trusted by colleagues and mentors
          </p>
        </motion.div>
      </div>
    </section>
  )
}