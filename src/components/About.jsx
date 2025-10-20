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
            {/* Minimal luminous splines */}
            <div className="card-glass relative overflow-hidden p-0 aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5]">
              {/* subdued background wash */}
              <div className="absolute inset-0" style={{
                background:
                  "radial-gradient(60% 60% at 80% 20%, rgba(16,185,129,0.10), transparent 60%),"+
                  "radial-gradient(70% 70% at 20% 80%, rgba(20,184,166,0.08), transparent 60%)"
              }} />

              {/* SVG splines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.0"/>
                    <stop offset="50%" stopColor="#34D399" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.0"/>
                    <stop offset="50%" stopColor="#5B9CFF" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#35E0B9" stopOpacity="0.0"/>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Path 1 */}
                <motion.path
                  d="M-50,150 C200,120 300,220 520,200 C700,185 820,260 900,230"
                  stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: [0, -1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Path 2 */}
                <motion.path
                  d="M-60,420 C180,380 340,520 560,500 C720,490 840,560 920,540"
                  stroke="url(#g2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: [0, -1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 0.4 }}
                />
                {/* Path 3 */}
                <motion.path
                  d="M-40,720 C160,680 320,780 520,760 C720,740 860,820 940,800"
                  stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" filter="url(#glow)"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: [0, -1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 0.8 }}
                />
              </svg>

              {/* gentle float particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute block w-1.5 h-1.5 rounded-full bg-white/40"
                    style={{ left: `${10 + (i * 8) % 80}%`, top: `${70 + (i * 3) % 30}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About