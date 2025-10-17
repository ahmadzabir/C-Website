import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass border-b border-white/8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-[80px]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div 
              className="w-7 h-7 rounded-lg bg-gradient-to-r from-blue via-mint to-blue shadow-blue"
              aria-hidden="true"
            />
            <a href="#top" className="text-white font-bold text-lg">
              Contwre
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-[18px] items-center">
            <button 
              onClick={() => scrollToSection('engine')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              GTM Engine
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <motion.a 
            href="#book"
            className="btn-primary px-5 py-3 rounded-full font-bold text-sm tracking-wide text-ink flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a GTM Audit
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden pb-4 border-t border-white/8 mt-4 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('engine')}
                className="text-white/90 hover:text-white transition-colors text-left py-2 text-sm"
              >
                GTM Engine
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white transition-colors text-left py-2 text-sm"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-white/90 hover:text-white transition-colors text-left py-2 text-sm"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/90 hover:text-white transition-colors text-left py-2 text-sm"
              >
                FAQ
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Header
