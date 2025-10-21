import React from 'react'
import { motion } from 'framer-motion'
import { useCursorParallax, useMagnetEffect } from '../hooks/useCursorEffects'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { ref: heroRef, mousePosition } = useCursorParallax(0.1)
  const { ref: ctaRef, magnetPosition: ctaMagnet } = useMagnetEffect(0.2)
  const { ref: cta2Ref, magnetPosition: cta2Magnet } = useMagnetEffect(0.2)

  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex items-center pt-32">
      <div
        ref={heroRef}
        className="relative z-10 w-full max-w-7xl mx-auto container-padding"
        style={{ transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
                {/* Two Separate Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center justify-center gap-3 mb-16"
                >
                  <motion.div
                    className="inline-flex items-center justify-center px-4 py-2 bg-black/50 rounded-full border border-white/20 text-sm font-medium text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Founder-led
                  </motion.div>
                  <motion.div
                    className="inline-flex items-center justify-center px-4 py-2 bg-black/50 rounded-full border border-white/20 text-sm font-medium text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Full-service GTM
                  </motion.div>
                </motion.div>

                {/* Main Headline - 10% smaller */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-[-0.02em] mb-12 md:mb-16"
                >
                  <span className="gradient-text-blue">The only GTM agency that cares about one thing…</span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                      <span className="gradient-text-emerald">
                      getting you to money.
                    </span>
                  </motion.span>
                </motion.h1>

          {/* Subheadline - 10% smaller */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-body-secondary max-w-4xl mx-auto content-spacing-lg leading-relaxed"
          >
            We design and run end-to-end acquisition systems: outbound, performance marketing, and sales enablement.
          </motion.p>

          {/* Main CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-2xl mx-auto content-spacing-lg"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 shadow-2xl">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email here and..."
                  className="flex-1 px-6 py-4 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-lg rounded-xl border-0"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Press Send
                </motion.button>
              </form>
            </div>
            
            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="gradient-text-white text-lg leading-relaxed text-center mt-6"
            >
              A fully custom strategy for revenue boost, built for your business, no meeting required.
            </motion.p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero