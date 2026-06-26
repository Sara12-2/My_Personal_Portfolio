'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#141414] border-t border-[#00A86B]/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              <span className="text-[#00A86B]">S</span>ara
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Full Stack Developer & AI Engineer
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#00A86B] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#00A86B] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#00A86B] transition-colors"
            >
              Twitter
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sara. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 p-2 bg-[#00A86B]/10 hover:bg-[#00A86B]/20 rounded-full transition-colors inline-flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#00A86B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}