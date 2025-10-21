import React, { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Simplified scroll effects
  const headerOpacity = useTransform(scrollY, [0, 50], [0.9, 0.95])
  const headerBlur = useTransform(scrollY, [0, 50], [8, 12])
  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 1])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-bg/90 border-b border-white/10' 
          : 'backdrop-blur-sm bg-bg/70'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Clean Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/assets/contwre-logo-white.png"
              alt="Contwre"
              className="h-7 w-auto"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </motion.div>

          {/* Minimal Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'services', label: 'Services' },
              { id: 'results', label: 'Results' },
              { id: 'faq', label: 'FAQ' }
            ].map((item) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -1 }}
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-200" />
              </motion.button>
            ))}
          </div>

          {/* Clean CTA Button */}
          <motion.button 
            onClick={() => scrollToSection('main-cta')}
            className="px-5 py-2.5 bg-white text-bg font-semibold rounded-full text-sm transition-all duration-200 hover:bg-white/90 hover:scale-105"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>

          {/* Minimal Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Clean Mobile Menu */}
        <motion.div 
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="pb-4 pt-2 space-y-1">
            {[
              { id: 'services', label: 'Services' },
              { id: 'results', label: 'Results' },
              { id: 'faq', label: 'FAQ' }
            ].map((item) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white text-left py-3 text-sm block w-full transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Subtle scroll progress indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 h-px bg-white/20 w-full"
          style={{ 
            scaleX: scrollProgress,
            transformOrigin: "left"
          }}
        />
      </div>
    </motion.nav>
  )
}

export default Header
