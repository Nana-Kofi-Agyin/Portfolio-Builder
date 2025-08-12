import React, { useEffect, useRef, useState } from 'react'

const LandingSection = () => {
  // Typing effect for name
  const fullName = "Nana Kofi"
  const [displayed, setDisplayed] = useState("")
  const idx = useRef(0)

  useEffect(() => {
    if (idx.current < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullName.slice(0, idx.current + 1))
        idx.current += 1
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [displayed, fullName])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 to-black pt-24">
      {/* Animated name reveal */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        <span>{displayed}</span>
        <span className="text-orange-400">|</span>
      </h1>
      {/* Tagline with personality */}
      <p className="text-2xl text-orange-300 mb-8">Turning coffee ☕ into clean code 💻</p>
      {/* Particle/wave background placeholder */}
      <div className="absolute inset-0 pointer-events-none z-0">{/* Add particles/waves here */}</div>
      {/* Scroll down animation */}
      <div className="absolute bottom-8 animate-bounce text-white opacity-70 text-2xl">↓ Scroll Down</div>
    </section>
  )
}

export default LandingSection