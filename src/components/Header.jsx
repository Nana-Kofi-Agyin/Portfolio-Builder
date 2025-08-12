import React, { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
]

const Header = () => {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.to)
        return el ? el.offsetTop : 0
      })
      const scrollY = window.scrollY + 80 // header height offset
      let current = 'home'
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i]) {
          current = navLinks[i].to
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, to) => {
    e.preventDefault()
    const el = document.getElementById(to)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64, // adjust for header height
        behavior: 'smooth',
      })
      setActive(to)
      setMenuOpen(false)
    }
  }

  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4 bg-transparent shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="font-bold text-2xl text-orange-400 animate-bounce">NAKOAG</div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {navLinks.map(link => (
          <a
            key={link.to}
            href={`#${link.to}`}
            onClick={e => handleNavClick(e, link.to)}
            className={`text-white hover:text-orange-400 transition font-semibold px-2 py-1 rounded-full ${
              active === link.to ? 'bg-orange-400 text-white' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-white focus:outline-none ml-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={e => handleNavClick(e, link.to)}
              className={`w-full text-center py-2 text-white hover:text-orange-400 transition font-semibold ${
                active === link.to ? 'bg-orange-400 text-white' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {/* Dark/Light toggle placeholder */}
    </nav>
  )
}

export default Header