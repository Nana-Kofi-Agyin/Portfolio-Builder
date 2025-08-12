import React from 'react'
import Header from '../../components/Header'
import LandingSection from '../../components/LandingSection'
import AboutSection from '../../components/AboutSection'
import ProjectsSection from '../../components/ProjectsSection'
import ResumeSection from '../../components/ResumeSection'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <main className="flex-1 bg-transparent">
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        {/* Add other sections here, e.g. <ProjectsSection />, etc. */}
      </main>
      <Footer />
    </div>
  )
}

export default Home