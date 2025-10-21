import React, { useState, useEffect, useRef } from 'react'

function DynamicStars() {
  const [timeOffset, setTimeOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef()

  // Generate cosmic star positions - mystical and otherworldly
  const generateStars = () => {
    const stars = []
    
    // Optimal number of stars for cosmic effect
    for (let i = 0; i < 35; i++) {
      stars.push({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        // Cosmic movement patterns
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        // Mystical movement patterns
        pattern: Math.random() > 0.5 ? 'nebula' : 'aurora',
        // Enhanced scroll sensitivity for cosmic effect
        scrollSensitivity: Math.random() * 0.4 + 0.2,
        // Cosmic colors - mostly white with some blue/purple
        color: Math.random() > 0.8 ? 'cosmic' : 'white',
        // Timeline energy
        energyLevel: Math.random() * 0.5 + 0.5
      })
    }
    
    return stars
  }

  const [stars] = useState(() => generateStars())

  // Enhanced scroll tracking with better responsiveness
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const newScrollY = window.scrollY
          setScrollY(newScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    // Add scroll listener with immediate execution
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Set initial scroll position
    setScrollY(window.scrollY)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Enhanced animation loop - more responsive and smooth
  useEffect(() => {
    let startTime = Date.now()
    let lastTime = 0
    
    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000
      
      // Only update if enough time has passed (60fps)
      if (currentTime - lastTime >= 16) {
        setTimeOffset(elapsed)
        lastTime = currentTime
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start animation immediately
    animationRef.current = requestAnimationFrame(animate)
    
    // Cleanup only on unmount
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
        // Cosmic movement patterns
        const time = timeOffset * star.speed
        let moveX, moveY
        
        if (star.pattern === 'nebula') {
          // Nebula-like swirling motion
          moveX = Math.sin(time + star.baseX * 0.05) * 4 + Math.cos(time * 0.3 + star.baseY * 0.05) * 2
          moveY = Math.cos(time * 0.8 + star.baseY * 0.05) * 3 + Math.sin(time * 0.4 + star.baseX * 0.05) * 2
        } else {
          // Aurora-like flowing motion
          moveX = Math.sin(time * 1.5 + star.baseX * 0.08) * 3 + Math.cos(time * 0.6 + star.baseY * 0.08) * 3
          moveY = Math.cos(time * 1.2 + star.baseY * 0.08) * 4 + Math.sin(time * 0.9 + star.baseX * 0.08) * 2
        }
        
        // Enhanced cosmic scroll parallax
        const parallaxY = scrollY * star.scrollSensitivity * 0.8
        const parallaxX = scrollY * star.scrollSensitivity * 0.6
        
        // Mystical timeline energy effects
        const timelinePhase = scrollY * 0.002
        const energyFlowX = Math.sin(timelinePhase + star.baseX * 0.02) * 15 * star.energyLevel
        const energyFlowY = Math.cos(timelinePhase + star.baseY * 0.02) * 12 * star.energyLevel
        
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
              opacity: Math.max(0.1, star.opacity + Math.sin(timeOffset * 2 + star.x) * 0.4),
              transform: `scale(${1 + Math.sin(timeOffset * 3 + star.y) * 0.3}) rotate(${timeOffset * 15 + star.baseX}deg)`,
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

export default DynamicStars
