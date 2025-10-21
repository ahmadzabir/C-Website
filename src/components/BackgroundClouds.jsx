import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function BackgroundClouds() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Cosmic Nebula Base - Deep Space Colors */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(2000px 1000px at 20% 15%, rgba(75,0,130,0.15), transparent 60%),
            radial-gradient(1500px 800px at 80% 25%, rgba(25,25,112,0.12), transparent 65%),
            radial-gradient(1200px 600px at 50% 40%, rgba(72,61,139,0.08), transparent 70%),
            radial-gradient(1800px 900px at 70% 60%, rgba(106,90,205,0.06), transparent 55%),
            radial-gradient(1600px 800px at 30% 80%, rgba(123,104,238,0.05), transparent 60%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a0a2e 50%, #16213e 75%, #000000 100%)
          `
        }}
      />

      {/* Aurora Borealis Effect - Cosmic Colors */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            `linear-gradient(45deg, 
              rgba(75,0,130,0.1) 0%, 
              rgba(25,25,112,0.08) 25%, 
              rgba(72,61,139,0.06) 50%, 
              rgba(106,90,205,0.08) 75%, 
              rgba(75,0,130,0.1) 100%)`,
            `linear-gradient(135deg, 
              rgba(25,25,112,0.1) 0%, 
              rgba(72,61,139,0.08) 25%, 
              rgba(106,90,205,0.06) 50%, 
              rgba(123,104,238,0.08) 75%, 
              rgba(25,25,112,0.1) 100%)`,
            `linear-gradient(225deg, 
              rgba(72,61,139,0.1) 0%, 
              rgba(106,90,205,0.08) 25%, 
              rgba(123,104,238,0.06) 50%, 
              rgba(75,0,130,0.08) 75%, 
              rgba(72,61,139,0.1) 100%)`,
            `linear-gradient(315deg, 
              rgba(106,90,205,0.1) 0%, 
              rgba(123,104,238,0.08) 25%, 
              rgba(75,0,130,0.06) 50%, 
              rgba(25,25,112,0.08) 75%, 
              rgba(106,90,205,0.1) 100%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cosmic Energy Flows */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(from ${time * 10}deg at 20% 30%, 
              rgba(75,0,130,0.08) 0deg, 
              transparent 60deg, 
              rgba(25,25,112,0.06) 120deg, 
              transparent 180deg, 
              rgba(72,61,139,0.08) 240deg, 
              transparent 300deg, 
              rgba(75,0,130,0.08) 360deg),
            conic-gradient(from ${time * -15}deg at 80% 70%, 
              rgba(106,90,205,0.06) 0deg, 
              transparent 90deg, 
              rgba(123,104,238,0.08) 180deg, 
              transparent 270deg, 
              rgba(106,90,205,0.06) 360deg)
          `
        }}
      />

      {/* Mystical Timeline Energy */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(${time * 5}deg, 
              transparent 0%, 
              rgba(75,0,130,0.03) 20%, 
              rgba(25,25,112,0.04) 40%, 
              rgba(72,61,139,0.03) 60%, 
              rgba(106,90,205,0.04) 80%, 
              transparent 100%)
          `
        }}
      />

      {/* Cosmic Dust Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Cosmic Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\n            <svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 400 400\\'>\n              <filter id=\\'cosmic\\'>\n                <feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/>\n                <feColorMatrix type=\\'saturate\\' values=\\'0\\'/>\n                <feComponentTransfer>\n                  <feFuncA type=\\'discrete\\' tableValues=\\'0 .5 0 1 0 .5 0 1 0 .5 0 1 0 .5 0 1\\'/>\n                </feComponentTransfer>\n              </filter>\n              <rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23cosmic)\\' opacity=\\'0.3\\'/>\n            </svg>')",
          backgroundSize: '400px 400px'
        }}
      />

      {/* Deep Space Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(2000px 1200px at 50% 20%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)'
        }}
      />

      {/* Cosmic Glow Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px 400px at 25% 20%, rgba(75,0,130,0.1), transparent 70%),
            radial-gradient(600px 300px at 75% 30%, rgba(25,25,112,0.08), transparent 60%),
            radial-gradient(500px 250px at 50% 70%, rgba(72,61,139,0.06), transparent 65%)
          `
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default BackgroundClouds