'use client'

import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WorkWhyResume from './components/sections/WorkWhyResume'
// import DevHatch from './components/sections/DevHatch'  // ← DELETE THIS LINE
import Skills from './components/sections/Skill'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Certifications from './components/sections/Certifications'
import Badges from './components/sections/Badges'
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
      <Services />
      <WorkWhyResume />
      {/* <DevHatch /> */}  {/* ← DELETE THIS LINE */}
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Badges />
      <GitHubActivity />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
      <Chatbot />
    </main>
  )
}