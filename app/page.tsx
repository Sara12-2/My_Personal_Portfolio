'use client'

import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'      // ← Import
import Skills from './components/sections/Skill'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import GitHubActivity from './components/sections/GitHubActivity'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import ContactForm from './components/sections/ContactForm'
import Footer from './components/sections/Footer'
import Chatbot from './components/sections/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <Hero />
      <About />
      <Services />           {/* ← Render */}
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <GitHubActivity />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
      <Chatbot />
    </main>
  )
}