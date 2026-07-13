'use client'

import { motion } from 'framer-motion'
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B9A6B]/3 rounded-full blur-3xl pointer-events-none" />

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
            What People{' '}
            <span className="text-[#8B9A6B]">Say</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#4A4A4A] mt-3 max-w-md mx-auto">
            Feedback from colleagues and mentors I've worked with
          </p>
          
          <div className="w-14 sm:w-16 h-1 bg-[#8B9A6B] mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Testimonials - Left to Right Flow Animation */}
        <div className="flex justify-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, type: 'spring', stiffness: 300 }
                }}
                className="h-full"
              >
                <motion.div 
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-[#8B9A6B]/15 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/20 transition-all duration-500 h-full flex flex-col overflow-hidden group"
                  whileHover={{ borderColor: '#8B9A6B' }}
                >
                  {/* Animated Gradient Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/5 via-transparent to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Top Accent Line - Animated */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B9A6B] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-[#8B9A6B]/5 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#8B9A6B]/5 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Company Logo */}
                    <motion.div 
                      className="flex justify-center mb-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.2,
                        type: 'spring',
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-white/80 backdrop-blur-sm border border-[#8B9A6B]/10 shadow-md flex items-center justify-center p-2 overflow-hidden">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.company}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </motion.div>

                    {/* Stars with Bounce Animation */}
                    <motion.div 
                      className="flex gap-0.5 mb-3 justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.3,
                        type: 'spring',
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + 0.4 + i * 0.05,
                            type: 'spring',
                            stiffness: 300
                          }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-4 h-4 fill-[#8B9A6B] text-[#8B9A6B]" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Quote with Hover Animation */}
                    <motion.p 
                      className="text-sm text-[#1E1E1E] leading-relaxed text-center flex-1"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    {/* Divider */}
                    <motion.div 
                      className="my-4 h-px bg-gradient-to-r from-transparent via-[#8B9A6B]/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    />

                    {/* Author */}
                    <motion.div 
                      className="flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#8B9A6B]/20 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {testimonial.initials}
                      </motion.div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-[#1E1E1E] group-hover:text-[#8B9A6B] transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: index * 0.2
                            }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8B9A6B]" />
                          </motion.div>
                        </div>
                        <p className="text-xs text-[#4A4A4A]/60">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </motion.div>

                    {/* Relationship Badge */}
                    <motion.div 
                      className="mt-3 pt-3 border-t border-[#8B9A6B]/10 text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-[9px] text-[#4A4A4A]/40 inline-flex items-center gap-1">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#8B9A6B]" />
                        </motion.div>
                        {testimonial.relationship}
                      </span>
                    </motion.div>
                  </div>

                  {/* Animated Quote Icon */}
                  <motion.div
                    className="absolute -top-1 -right-1 text-[#8B9A6B]/10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <motion.p 
            className="text-[10px] sm:text-xs text-[#4A4A4A]/30 flex items-center justify-center gap-1.5 sm:gap-2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B]" />
            Trusted by colleagues, mentors, and team leads
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B]" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}