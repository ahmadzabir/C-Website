import React from 'react'
import { motion } from 'framer-motion'
import { useStaggeredAnimation } from '../hooks/useCursorEffects'

function About() {
  const { ref: leftRef, isVisible: leftVisible } = useStaggeredAnimation(0)
  const { ref: rightRef, isVisible: rightVisible } = useStaggeredAnimation(200)

  return (
    <section className="section-spacing relative overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Problem & Solution */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <span className="gradient-text-white">Most growth systems </span>
                <span className="gradient-text-emerald">fall apart in four months.</span>
              </motion.h2>
            </div>

            <motion.div 
              className="space-y-6 text-lg text-slateLight leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <p>
                Campaigns succeed, then stall. Slides fill with vanity metrics. Sales reps panic.
              </p>
              <p>
                You don't need more clicks, leads, campaigns, or emails sent.
              </p>
              <p>
                You need one system that aligns your offer, channels, and sales motion to compound.
              </p>
              <p className="gradient-text-white font-semibold">
                Contwre connects everything that drives revenue under one engine. Your engine.
              </p>
            </motion.div>

          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="card-glass p-12 group-hover:scale-[1.02] transition-all duration-500 group-hover:shadow-glass-lg relative overflow-hidden">
              {/* Abstract Wave Mesh Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-mint/5 to-blue/10 opacity-50" />
              
              {/* Visual Elements */}
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full opacity-60" />
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-40" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full opacity-60" />
                  <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full opacity-40 w-3/4" />
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full opacity-30 w-1/2" />
                </div>
                
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue/20 to-mint/20 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About