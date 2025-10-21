import React, { useState, useEffect, useRef, useCallback } from 'react'

function StaticStars() {
  const [timeOffset, setTimeOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)

  // Generate cosmic star positions - gentle and mystical
  const generateStars = useCallback(() => {
    const stars = []
    
    // Optimal number of stars for cosmic effect
    for (let i = 0; i < 25; i++) {
      stars.push({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.2 + 0.5,
        speed: Math.random() * 0.2 + 0.1, // Much slower movement
        opacity: Math.random() * 0.6 + 0.2,
        // Cosmic movement patterns
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        // Mystical movement patterns
        pattern: Math.random() > 0.5 ? 'nebula' : 'aurora',
        // Gentle scroll sensitivity
        scrollSensitivity: Math.random() * 0.1 + 0.05, // Much lower sensitivity
        // Cosmic colors - mostly white with some blue/purple
        color: Math.random() > 0.8 ? 'cosmic' : 'white',
        // Timeline energy
        energyLevel: Math.random() * 0.2 + 0.2 // Lower energy levels
      })
    }
    
    return stars
  }, [])

  const [stars] = useState(() => generateStars())

  // Enhanced scroll tracking with throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    setScrollY(window.scrollY)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Optimized animation loop - 60fps with throttling
  useEffect(() => {
    const animate = (currentTime) => {
      // Throttle to 60fps
      if (currentTime - lastTimeRef.current >= 16) {
        setTimeOffset(currentTime / 1000)
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
      {/* Render cosmic stars - mystical nebula and aurora effects */}
      {stars.map((star) => {
        // Gentle cosmic movement patterns
        const time = timeOffset * star.speed
        let moveX, moveY
        
        if (star.pattern === 'nebula') {
          // Gentle nebula-like swirling motion
          moveX = Math.sin(time + star.baseX * 0.02) * 1.5 + Math.cos(time * 0.2 + star.baseY * 0.02) * 1
          moveY = Math.cos(time * 0.5 + star.baseY * 0.02) * 1.2 + Math.sin(time * 0.3 + star.baseX * 0.02) * 0.8
        } else {
          // Gentle aurora-like flowing motion
          moveX = Math.sin(time * 0.8 + star.baseX * 0.03) * 1.2 + Math.cos(time * 0.4 + star.baseY * 0.03) * 1
          moveY = Math.cos(time * 0.6 + star.baseY * 0.03) * 1.5 + Math.sin(time * 0.5 + star.baseX * 0.03) * 0.8
        }
        
        // Gentle cosmic scroll parallax
        const parallaxY = scrollY * star.scrollSensitivity * 0.3
        const parallaxX = scrollY * star.scrollSensitivity * 0.2
        
        // Gentle mystical timeline energy effects
        const timelinePhase = scrollY * 0.001
        const energyFlowX = Math.sin(timelinePhase + star.baseX * 0.01) * 5 * star.energyLevel
        const energyFlowY = Math.cos(timelinePhase + star.baseY * 0.01) * 4 * star.energyLevel
        
        // Calculate final position
        const finalX = (star.x + moveX + parallaxX + energyFlowX) % 100
        const finalY = (star.y + moveY + parallaxY + energyFlowY) % 100
        
        // Cosmic colors - proper nebula colors
        const cosmicColors = {
          white: '#FFFFFF',
          cosmic: star.color === 'cosmic' ? 
            `hsl(${200 + Math.sin(timeOffset * 0.5 + star.baseX * 0.01) * 30}, 60%, 85%)` : '#FFFFFF'
        }
        
        return (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: cosmicColors.cosmic,
              opacity: Math.max(0.1, star.opacity + Math.sin(timeOffset * 1.5 + star.x) * 0.2),
              transform: `scale(${1 + Math.sin(timeOffset * 2 + star.y) * 0.15}) rotate(${timeOffset * 8 + star.baseX * 0.5}deg)`,
              willChange: 'transform, opacity, background',
              transition: 'none',
              boxShadow: star.color === 'cosmic' ? 
                `0 0 ${star.size * 2}px ${cosmicColors.cosmic}, 0 0 ${star.size * 4}px ${cosmicColors.cosmic}40` : 
                `0 0 ${star.size}px rgba(255,255,255,0.5)`,
              filter: star.color === 'cosmic' ? 'blur(0.5px)' : 'none'
            }}
          />
        )
      })}
    </div>
  )
}

export default StaticStars
