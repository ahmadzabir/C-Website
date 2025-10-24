import React, { useState, useEffect, useRef, useCallback, memo } from 'react'

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

  // Generate slow-moving hero stars with more variety
  const generateHeroStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 20; i++) { // Increased number of stars
      stars.push({
        id: `hero-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.2 + 0.3, // Slightly larger stars
        speed: Math.random() * 0.03 + 0.01, // Even slower movement
        opacity: Math.random() * 0.6 + 0.3, // More visible stars
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        scrollUpSpeed: Math.random() * 0.2 + 0.1, // Slower upward movement
        fadeOutPoint: Math.random() * 150 + 50, // Earlier fade out
        driftSpeed: Math.random() * 0.01 + 0.005, // Very slow drift
        twinkleSpeed: Math.random() * 0.02 + 0.01, // Twinkling effect
        color: Math.random() > 0.7 ? '#00FFFF' : '#FFFFFF', // Some cyan stars
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
    const throttledScroll = throttle(handleScroll, 16) // 60fps throttling for smoother performance
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
      if (currentTime - lastTimeRef.current >= 33) { // 30fps for smooth animation
        setTimeOffset(currentTime / 5000) // Much slower time progression
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
        
        // Very slow, gentle movement with more organic patterns
        const moveX = Math.sin(time + star.baseX * 0.003) * 0.5
        const moveY = Math.cos(time + star.baseY * 0.003) * 0.5
        
        // Slow drift effect with different patterns
        const driftX = Math.sin(time * star.driftSpeed + star.baseX * 0.008) * 0.3
        const driftY = Math.cos(time * star.driftSpeed + star.baseY * 0.008) * 0.3

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.baseX) * 0.2 + 0.8

        // Scroll-based upward movement and fade out
        const scrollUpOffset = scrollY * star.scrollUpSpeed
        const scrollFadeOut = Math.max(0, 1 - scrollY / 200) // Fade out over 200px scroll
        
        // Calculate final position
        const finalX = (star.x + moveX + driftX) % 100
        const finalY = (star.y + moveY + driftY - scrollUpOffset) % 100

        // Enhanced opacity with twinkling and scroll fade
        const finalOpacity = star.opacity * scrollFadeOut * twinkle

        return (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: finalOpacity,
              willChange: 'transform, opacity',
              transition: 'opacity 0.5s ease-out', // Smoother fade out
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`, // Glow effect
            }}
          />
        )
      })}
    </div>
  )
}

export default memo(HeroStars)