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

  // Generate slow-moving hero stars
  const generateHeroStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 12; i++) {
      stars.push({
        id: `hero-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.8 + 0.4, // Small stars
        speed: Math.random() * 0.05 + 0.02, // Very slow movement
        opacity: Math.random() * 0.4 + 0.2, // Subtle opacity
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        scrollUpSpeed: Math.random() * 0.3 + 0.2, // Slow upward movement
        fadeOutPoint: Math.random() * 200 + 100, // Later fade out
        driftSpeed: Math.random() * 0.02 + 0.01, // Very slow drift
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
    const throttledScroll = throttle(handleScroll, 32) // 30fps throttling for smoother performance
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
      if (currentTime - lastTimeRef.current >= 50) { // 20fps for very smooth, slow animation
        setTimeOffset(currentTime / 3000) // Much slower time progression
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
        zIndex: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      {stars.map((star) => {
        const time = timeOffset * star.speed
        
        // Very slow, gentle movement
        const moveX = Math.sin(time + star.baseX * 0.005) * 0.3
        const moveY = Math.cos(time + star.baseY * 0.005) * 0.3
        
        // Slow drift effect
        const driftX = Math.sin(time * star.driftSpeed + star.baseX * 0.01) * 0.2
        const driftY = Math.cos(time * star.driftSpeed + star.baseY * 0.01) * 0.2

        // Scroll-based upward movement and fade out
        const scrollUpOffset = scrollY * star.scrollUpSpeed
        const scrollFadeOut = Math.max(0, 1 - scrollY / 300) // Fade out over 300px scroll
        
        // Calculate final position
        const finalX = (star.x + moveX + driftX) % 100
        const finalY = (star.y + moveY + driftY - scrollUpOffset) % 100

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
              transition: 'opacity 0.3s ease-out', // Smooth fade out
            }}
          />
        )
      })}
    </div>
  )
}

export default HeroStars