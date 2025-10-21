import React, { useState, useEffect, useRef, useCallback } from 'react'

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

function HeroStars() {
  const [scrollY, setScrollY] = useState(0)
  const [timeOffset, setTimeOffset] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)
  const rafRef = useRef()

  // Generate minimal hero stars for performance
  const generateHeroStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 8; i++) { // Reduced from 35 to 8 for performance
      stars.push({
        id: `hero-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.0 + 0.5, // Smaller stars
        speed: Math.random() * 0.2 + 0.1, // Slower movement
        opacity: Math.random() * 0.6 + 0.3, // Lower opacity
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        scrollSensitivity: Math.random() * 0.1 + 0.05, // Lower sensitivity
        initialY: Math.random() * 100,
        scrollUpSpeed: Math.random() * 0.5 + 0.3, // Slower upward movement
        fadeOutPoint: Math.random() * 100 + 50, // Earlier fade out
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
    const throttledScroll = throttle(handleScroll, 16) // 60fps throttling
    window.addEventListener('scroll', throttledScroll, { passive: true })
    setScrollY(window.scrollY)
    return () => {
      window.removeEventListener('scroll', throttledScroll)
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
        
        // Simple movement
        const moveX = Math.sin(time + star.baseX * 0.01) * 0.5
        const moveY = Math.cos(time + star.baseY * 0.01) * 0.5

        // Simple scroll animation
        const scrollUpOffset = scrollY * star.scrollUpSpeed
        const scrollFadeOut = Math.max(0, 1 - (scrollY - star.fadeOutPoint) / 100)
        
        // Calculate final position
        const finalX = (star.x + moveX) % 100
        const finalY = (star.initialY + moveY - scrollUpOffset) % 100

        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * scrollFadeOut,
              willChange: 'transform, opacity',
            }}
          />
        )
      })}
    </div>
  )
}

export default HeroStars