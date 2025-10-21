import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function BackgroundClouds() {
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
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Clean Modern Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1200px 800px at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%),
            radial-gradient(1000px 600px at 80% 70%, rgba(139, 92, 246, 0.12), transparent 50%),
            radial-gradient(800px 500px at 50% 50%, rgba(16, 185, 129, 0.08), transparent 60%),
            linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
          `
        }}
      />

      {/* Subtle Floating Elements */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(1000px 600px at ${20 + Math.sin(time * 0.1) * 10}% ${30 + Math.cos(time * 0.1) * 5}%, rgba(59, 130, 246, 0.1), transparent 50%)`,
            `radial-gradient(1000px 600px at ${20 + Math.sin(time * 0.1 + 1) * 10}% ${30 + Math.cos(time * 0.1 + 1) * 5}%, rgba(59, 130, 246, 0.1), transparent 50%)`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Elegant Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%),
            linear-gradient(-45deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)
          `
        }}
      />
    </div>
  )
}

export default BackgroundClouds