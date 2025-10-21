import React, { useState, useEffect, useRef, useCallback } from 'react'

function HeroStars() {
  const [scrollY, setScrollY] = useState(0)
  const [timeOffset, setTimeOffset] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)
  const rafRef = useRef()

  // Generate hero stars - more stars for hero section
  const generateHeroStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 40; i++) { // Increased from 30 to 40
      stars.push({
        id: `hero-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.8, // Larger stars
        speed: Math.random() * 0.3 + 0.1, // Faster movement
        opacity: Math.random() * 0.8 + 0.4, // More visible
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        pattern: Math.random() > 0.5 ? 'nebula' : 'aurora',
        scrollSensitivity: Math.random() * 0.2 + 0.1, // Higher sensitivity
        color: Math.random() > 0.6 ? 'cosmic' : 'white', // More cosmic stars
        energyLevel: Math.random() * 0.4 + 0.2, // Higher energy
        // Hero-specific properties
        initialY: Math.random() * 100,
        scrollUpSpeed: Math.random() * 0.8 + 0.3, // Much faster upward movement
        fadeOutPoint: Math.random() * 100 + 50, // Earlier fade out
        driftSpeed: Math.random() * 0.5 + 0.2, // Additional drift
        pulseSpeed: Math.random() * 0.3 + 0.1 // Pulsing animation
      })
    }
    return stars
  }, [])

  const [stars] = useState(() => generateHeroStars())

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY)
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    setScrollY(window.scrollY)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  useEffect(() => {
    const animate = (currentTime) => {
      if (currentTime - lastTimeRef.current >= 16) { // 60fps
        setTimeOffset(currentTime / 1000) // Faster time progression
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
        zIndex: 2, // Above background but below content
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      {stars.map((star) => {
        const time = timeOffset * star.speed
        let moveX, moveY

        if (star.pattern === 'nebula') {
          // More dynamic nebula movement
          moveX = Math.sin(time + star.baseX * 0.02) * 2.0 + Math.cos(time * 0.3 + star.baseY * 0.02) * 1.5 + Math.sin(time * 0.1) * star.driftSpeed
          moveY = Math.cos(time * 0.4 + star.baseY * 0.02) * 1.8 + Math.sin(time * 0.25 + star.baseX * 0.02) * 1.2 + Math.cos(time * 0.15) * star.driftSpeed
        } else {
          // More dynamic aurora movement
          moveX = Math.sin(time * 0.6 + star.baseX * 0.03) * 1.8 + Math.cos(time * 0.3 + star.baseY * 0.03) * 1.4 + Math.sin(time * 0.2) * star.driftSpeed
          moveY = Math.cos(time * 0.5 + star.baseY * 0.03) * 2.2 + Math.sin(time * 0.35 + star.baseX * 0.03) * 1.6 + Math.cos(time * 0.25) * star.driftSpeed
        }

        // Enhanced scroll animation - much more dramatic upward movement
        const scrollUpOffset = scrollY * star.scrollUpSpeed * 2 // Doubled the effect
        const scrollFadeOut = Math.max(0, 1 - (scrollY - star.fadeOutPoint) / 100) // Faster fade out
        
        // Additional scroll-based drift
        const scrollDriftX = Math.sin(scrollY * 0.01 + star.baseX * 0.01) * star.scrollSensitivity * 10
        const scrollDriftY = Math.cos(scrollY * 0.01 + star.baseY * 0.01) * star.scrollSensitivity * 8
        
        // Calculate final position with enhanced movement
        const finalX = (star.x + moveX + scrollDriftX) % 100
        const finalY = (star.initialY + moveY - scrollUpOffset + scrollDriftY) % 100

        // Enhanced cosmic colors with more dynamic changes
        const cosmicColors = {
          white: '#FFFFFF',
          cosmic: star.color === 'cosmic' ? 
            `hsl(${200 + Math.sin(timeOffset * 0.5 + star.baseX * 0.01) * 40}, 70%, ${70 + Math.sin(timeOffset * 0.3) * 20}%)` : '#FFFFFF'
        }

        // Enhanced pulsing animation
        const pulse = 1 + Math.sin(timeOffset * star.pulseSpeed + star.baseX * 0.01) * 0.3

        return (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${star.size * pulse}px`,
              height: `${star.size * pulse}px`,
              background: cosmicColors.cosmic,
              opacity: Math.max(0, star.opacity * scrollFadeOut + Math.sin(timeOffset * 1.2 + star.x) * 0.2),
              transform: `scale(${1 + Math.sin(timeOffset * 1.5 + star.y) * 0.15}) rotate(${timeOffset * 8 + star.baseX * 0.3}deg)`,
              willChange: 'transform, opacity, background',
              transition: 'none',
              boxShadow: star.color === 'cosmic' ? 
                `0 0 ${star.size * 3}px ${cosmicColors.cosmic}60` : 
                `0 0 ${star.size * 1.5}px rgba(255,255,255,0.5)`
            }}
          />
        )
      })}
    </div>
  )
}

export default HeroStars
