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
    for (let i = 0; i < 30; i++) { // More stars for hero section
      stars.push({
        id: `hero-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.2 + 0.6, // Slightly larger for hero
        speed: Math.random() * 0.1 + 0.05,
        opacity: Math.random() * 0.6 + 0.3,
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        pattern: Math.random() > 0.5 ? 'nebula' : 'aurora',
        scrollSensitivity: Math.random() * 0.1 + 0.05,
        color: Math.random() > 0.7 ? 'cosmic' : 'white',
        energyLevel: Math.random() * 0.2 + 0.1,
        // Hero-specific properties
        initialY: Math.random() * 100,
        scrollUpSpeed: Math.random() * 0.3 + 0.1, // Speed of upward movement
        fadeOutPoint: Math.random() * 200 + 100 // When to start fading out
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
      if (currentTime - lastTimeRef.current >= 32) { // 30fps
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
          moveX = Math.sin(time + star.baseX * 0.01) * 0.8 + Math.cos(time * 0.1 + star.baseY * 0.01) * 0.5
          moveY = Math.cos(time * 0.3 + star.baseY * 0.01) * 0.6 + Math.sin(time * 0.2 + star.baseX * 0.01) * 0.4
        } else {
          moveX = Math.sin(time * 0.5 + star.baseX * 0.02) * 0.6 + Math.cos(time * 0.2 + star.baseY * 0.02) * 0.5
          moveY = Math.cos(time * 0.4 + star.baseY * 0.02) * 0.8 + Math.sin(time * 0.3 + star.baseX * 0.02) * 0.4
        }

        // Hero-specific scroll animation - stars move up as you scroll
        const scrollUpOffset = scrollY * star.scrollUpSpeed
        const scrollFadeOut = Math.max(0, 1 - (scrollY - star.fadeOutPoint) / 200)
        
        // Calculate final position with upward scroll movement
        const finalX = (star.x + moveX) % 100
        const finalY = (star.initialY + moveY - scrollUpOffset) % 100

        // Cosmic colors
        const cosmicColors = {
          white: '#FFFFFF',
          cosmic: star.color === 'cosmic' ? 
            `hsl(${200 + Math.sin(timeOffset * 0.3 + star.baseX * 0.005) * 20}, 50%, 80%)` : '#FFFFFF'
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
              opacity: Math.max(0, star.opacity * scrollFadeOut + Math.sin(timeOffset * 0.8 + star.x) * 0.1),
              transform: `scale(${1 + Math.sin(timeOffset * 1 + star.y) * 0.08}) rotate(${timeOffset * 4 + star.baseX * 0.2}deg)`,
              willChange: 'transform, opacity, background',
              transition: 'none',
              boxShadow: star.color === 'cosmic' ? 
                `0 0 ${star.size * 2}px ${cosmicColors.cosmic}40` : 
                `0 0 ${star.size}px rgba(255,255,255,0.3)`
            }}
          />
        )
      })}
    </div>
  )
}

export default HeroStars
