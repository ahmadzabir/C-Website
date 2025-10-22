import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useStaggeredAnimation } from '../hooks/useCursorEffects'

function About() {
  const { ref: leftRef, isVisible: leftVisible } = useStaggeredAnimation(0)
  const { ref: rightRef, isVisible: rightVisible } = useStaggeredAnimation(200)
  
  const [time, setTime] = useState(0)
  const animationRef = useRef()

  useEffect(() => {
    const animate = (currentTime) => {
      setTime(currentTime / 1000)
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Geometric Shapes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border-2 border-emerald-400/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Flowing Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-teal-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(time + i) * 100, 0],
              y: [0, Math.cos(time + i) * 80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Gradient Waves */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${50 + Math.sin(time * 0.3) * 20}% ${50 + Math.cos(time * 0.3) * 15}%, rgba(16, 185, 129, 0.08) 0%, transparent 70%)`
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
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
                <span className="gradient-text-emerald">
                  fall apart in four months.
                </span>
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

          {/* Right Column - Engine Gif */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Engine Gif */}
            <div className="relative overflow-hidden">
              <img 
                src="/assets/engine-gif.gif"
                alt="Contwre Engine System"
                className="w-full aspect-square object-contain rounded-xl"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About