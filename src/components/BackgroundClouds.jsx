import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function BackgroundClouds() {
  const [time, setTime] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const animate = (currentTime) => {
      // Throttle to 30fps for background animations
      if (currentTime - lastTimeRef.current >= 33) {
        setTime(currentTime / 1000)
        lastTimeRef.current = currentTime
      }
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
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Cosmic Nebula Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1400px 700px at 15% 10%, rgba(75,0,130,0.12), transparent 65%),
            radial-gradient(1000px 500px at 85% 5%, rgba(25,25,112,0.08), transparent 60%),
            radial-gradient(800px 400px at 50% 20%, rgba(72,61,139,0.06), transparent 70%),
            radial-gradient(1200px 600px at 70% 80%, rgba(106,90,205,0.05), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.8), rgba(25,25,112,0.3), rgba(75,0,130,0.2), rgba(0,0,0,0.9))
          `
        }}
      />

      {/* Aurora Borealis Effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `linear-gradient(45deg, rgba(75,0,130,0.1), rgba(25,25,112,0.15), rgba(72,61,139,0.1), transparent)`,
            `linear-gradient(135deg, rgba(25,25,112,0.15), rgba(72,61,139,0.1), rgba(106,90,205,0.12), transparent)`,
            `linear-gradient(225deg, rgba(72,61,139,0.1), rgba(106,90,205,0.12), rgba(75,0,130,0.1), transparent)`,
            `linear-gradient(315deg, rgba(106,90,205,0.12), rgba(75,0,130,0.1), rgba(25,25,112,0.15), transparent)`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cosmic Energy Flows */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `conic-gradient(from ${time * 50}deg at 20% 30%, 
            rgba(75,0,130,0.1), 
            rgba(25,25,112,0.15), 
            rgba(72,61,139,0.1), 
            rgba(106,90,205,0.12), 
            rgba(75,0,130,0.1))`
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Mystical Timeline Energy */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `linear-gradient(${45 + Math.sin(time) * 30}deg, 
            rgba(75,0,130,0.08), 
            rgba(25,25,112,0.12), 
            rgba(72,61,139,0.08), 
            rgba(106,90,205,0.1))`
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cosmic Dust Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Cosmic Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\n            <svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\'>\n              <filter id=\\'n\\'>\n                <feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/>\n                <feColorMatrix type=\\'saturate\\' values=\\'0\\'/>\n              </filter>\n              <rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/>\n            </svg>')",
          backgroundSize: '200px 200px'
        }}
      />

      {/* Deep Space Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(2000px 1200px at 50% 20%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Cosmic Glow Effects */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(800px 400px at 20% 20%, rgba(75,0,130,0.2), transparent 70%),
            radial-gradient(600px 300px at 80% 80%, rgba(25,25,112,0.15), transparent 60%),
            radial-gradient(400px 200px at 50% 50%, rgba(72,61,139,0.1), transparent 50%)
          `
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default BackgroundClouds