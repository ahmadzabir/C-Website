import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="top" className="relative overflow-hidden section-spacing">
      {/* Background Gradients */}
      <div className="absolute inset-[-20%] gradient-bg" aria-hidden="true" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-ink bg-gradient-to-r from-mint to-mintLight mb-8 shadow-mint"
          >
            Founder-led • Full-service GTM
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-[-0.02em]"
          >
            The only GTM agency that cares about one thing… 
            <span className="text-gradient">getting you to money.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl md:text-2xl text-slateLight max-w-4xl mb-10 leading-relaxed"
          >
            We design and run end-to-end acquisition systems: cold outbound, performance marketing, content, funnels, and sales enablement. If it drives revenue, we own it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('book')}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-base tracking-wide text-ink flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free GTM Audit
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('engine')}
              className="btn-ghost px-8 py-4 rounded-full font-semibold text-base tracking-wide text-white flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the GTM Engine
            </motion.button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-4 items-center opacity-90"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/8 border border-white/16 text-white font-medium">
              50+ brands served
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/8 border border-white/16 text-white font-medium">
              Founder-led
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/8 border border-white/16 text-white font-medium">
              E-commerce & SaaS
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/8 border border-white/16 text-white font-medium">
              Pakistan's first full-service enablement agency
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
