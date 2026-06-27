'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Sparkles, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in React, Next.js, TypeScript, Node.js, Python, and AI/ML technologies including OpenAI, LangChain, and TensorFlow.',
  },
  {
    id: 2,
    question: 'How much experience do you have?',
    answer: 'I have 3+ years of professional experience as a Full Stack Developer & AI Engineer.',
  },
  {
    id: 3,
    question: 'Do you take freelance projects?',
    answer: 'Yes! I am available for freelance projects. Feel free to reach out through the contact form.',
  },
  {
    id: 4,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on complexity. A simple website can take 2-4 weeks, while a complex AI-powered application might take 2-3 months.',
  },
  {
    id: 5,
    question: 'How do you handle project communication?',
    answer: 'I maintain regular communication through email, Zoom, or Slack. I provide weekly progress updates.',
  },
  {
    id: 6,
    question: 'Can you help with AI integration in existing projects?',
    answer: 'Absolutely! I specialize in integrating AI capabilities into existing applications.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
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
              <HelpCircle className="w-4 h-4" />
              FAQ
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Frequently Asked <span className="text-[#8B9A6B]">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              Find answers to common questions about my work, process, and services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? 'border-[#8B9A6B] shadow-2xl shadow-[#8B9A6B]/15'
                      : 'border-[#8B9A6B]/10 shadow-lg hover:shadow-xl hover:border-[#8B9A6B]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-[#8B9A6B] text-white'
                          : 'bg-[#8B9A6B]/10 text-[#8B9A6B] group-hover:bg-[#8B9A6B]/20'
                      }`}>
                        <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                        openIndex === index ? 'text-[#8B9A6B]' : 'text-[#2C2C2C] group-hover:text-[#8B9A6B]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-[#8B9A6B] text-white'
                          : 'bg-[#8B9A6B]/10 text-[#8B9A6B] group-hover:bg-[#8B9A6B]/20'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 pt-1">
                          <div className="h-0.5 w-12 bg-[#8B9A6B]/30 rounded-full mb-4" />
                          <div className="flex items-start gap-3">
                            <MessageCircle className="w-4 h-4 text-[#8B9A6B] mt-1 flex-shrink-0" />
                            <p className="text-[#4A4A4A] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#4A4A4A] text-sm">
              Still have questions? <span className="text-[#8B9A6B] font-medium">I'm here to help!</span>
            </p>
            <a
  href="#contact"
  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
  style={{ color: '#FFFFFF' }}
>
  <MessageCircle className="w-4 h-4" style={{ color: '#FFFFFF' }} />
  <span style={{ color: '#FFFFFF' }}>Ask Me Anything</span>
</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}