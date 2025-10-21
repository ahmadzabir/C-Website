import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

// Throttle function for performance
const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

function CosmicBackground() {
  const [timeOffset, setTimeOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)

  // Generate cosmic elements for each section
  const generateCosmicElements = useCallback(() => {
    const elements = []
    
    // Section 1: Nebula
    elements.push({
      id: 'nebula-1',
      type: 'nebula',
      x: 20,
      y: 30,
      size: 400,
      colors: ['rgba(139, 92, 246, 0.1)', 'rgba(59, 130, 246, 0.08)', 'rgba(16, 185, 129, 0.06)'],
      speed: 0.02,
      section: 1
    })
    
    // Section 2: Galaxy
    elements.push({
      id: 'galaxy-1',
      type: 'galaxy',
      x: 70,
      y: 20,
      size: 300,
      colors: ['rgba(16, 185, 129, 0.12)', 'rgba(139, 92, 246, 0.08)', 'rgba(59, 130, 246, 0.06)'],
      speed: 0.015,
      section: 2
    })
    
    // Section 3: Blackhole
    elements.push({
      id: 'blackhole-1',
      type: 'blackhole',
      x: 50,
      y: 60,
      size: 250,
      colors: ['rgba(0, 0, 0, 0.3)', 'rgba(75, 0, 130, 0.2)', 'rgba(139, 92, 246, 0.1)'],
      speed: 0.01,
      section: 3
    })
    
    // Additional cosmic elements
    elements.push({
      id: 'nebula-2',
      type: 'nebula',
      x: 80,
      y: 70,
      size: 200,
      colors: ['rgba(59, 130, 246, 0.08)', 'rgba(16, 185, 129, 0.06)', 'rgba(139, 92, 246, 0.04)'],
      speed: 0.025,
      section: 4
    })
    
    elements.push({
      id: 'galaxy-2',
      type: 'galaxy',
      x: 30,
      y: 80,
      size: 180,
      colors: ['rgba(139, 92, 246, 0.1)', 'rgba(59, 130, 246, 0.08)', 'rgba(16, 185, 129, 0.06)'],
      speed: 0.018,
      section: 5
    })
    
    return elements
  }, [])

  const [cosmicElements] = useState(() => generateCosmicElements())

  // Enhanced scroll tracking with throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 32)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    setScrollY(window.scrollY)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Optimized animation loop
  useEffect(() => {
    const animate = (currentTime) => {
      if (currentTime - lastTimeRef.current >= 50) { // 20fps throttling
        setTimeOffset(currentTime / 2000)
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

  // Calculate which section is currently in view
  const getCurrentSection = useCallback(() => {
    const sectionHeight = window.innerHeight
    return Math.floor(scrollY / sectionHeight) + 1
  }, [scrollY])

  const currentSection = getCurrentSection()

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Render cosmic elements */}
      {cosmicElements.map((element) => {
        const time = timeOffset * element.speed
        
        // Dynamic movement based on element type
        let moveX, moveY, scale, opacity
        
        if (element.type === 'nebula') {
          moveX = Math.sin(time + element.x * 0.01) * 20 + Math.cos(time * 0.5 + element.y * 0.01) * 15
          moveY = Math.cos(time * 0.3 + element.y * 0.01) * 25 + Math.sin(time * 0.7 + element.x * 0.01) * 10
          scale = 1 + Math.sin(time * 0.4 + element.x * 0.005) * 0.3
          opacity = 0.6 + Math.sin(time * 0.6 + element.y * 0.005) * 0.2
        } else if (element.type === 'galaxy') {
          moveX = Math.sin(time * 0.8 + element.x * 0.015) * 30 + Math.cos(time * 0.2 + element.y * 0.015) * 20
          moveY = Math.cos(time * 0.6 + element.y * 0.015) * 35 + Math.sin(time * 0.4 + element.x * 0.015) * 15
          scale = 1 + Math.sin(time * 0.5 + element.x * 0.008) * 0.4
          opacity = 0.7 + Math.sin(time * 0.8 + element.y * 0.008) * 0.3
        } else if (element.type === 'blackhole') {
          moveX = Math.sin(time * 0.3 + element.x * 0.02) * 15 + Math.cos(time * 0.9 + element.y * 0.02) * 10
          moveY = Math.cos(time * 0.2 + element.y * 0.02) * 20 + Math.sin(time * 0.6 + element.x * 0.02) * 8
          scale = 1 + Math.sin(time * 0.2 + element.x * 0.01) * 0.2
          opacity = 0.8 + Math.sin(time * 0.3 + element.y * 0.01) * 0.2
        }
        
        // Scroll-based parallax
        const parallaxY = scrollY * 0.1
        const parallaxX = scrollY * 0.05
        
        // Calculate final position
        const finalX = (element.x + moveX + parallaxX) % 100
        const finalY = (element.y + moveY + parallaxY) % 100
        
        // Enhanced visibility for current section
        const sectionOpacity = element.section === currentSection ? 1 : 0.3
        
        return (
          <motion.div
            key={element.id}
            className="absolute rounded-full"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${element.size * scale}px`,
              height: `${element.size * scale}px`,
              background: `radial-gradient(circle, ${element.colors.join(', ')})`,
              opacity: opacity * sectionOpacity,
              willChange: 'transform, opacity',
              filter: 'blur(1px)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + element.speed * 1000,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )
      })}
      
      {/* Additional cosmic dust particles */}
      {Array.from({ length: 15 }).map((_, i) => {
        const particle = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.01 + 0.005,
          opacity: Math.random() * 0.3 + 0.1
        }
        
        const time = timeOffset * particle.speed
        const moveX = Math.sin(time + particle.x * 0.01) * 10
        const moveY = Math.cos(time + particle.y * 0.01) * 8
        
        const finalX = (particle.x + moveX) % 100
        const finalY = (particle.y + moveY) % 100
        
        return (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              willChange: 'transform',
            }}
          />
        )
      })}
    </div>
  )
}

export default CosmicBackground
