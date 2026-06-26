'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    <section id="faq" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked <span className="text-[#00A86B]">Questions</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about my work, process, and services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0A] rounded-xl border border-[#00A86B]/10 overflow-hidden hover:border-[#00A86B]/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}