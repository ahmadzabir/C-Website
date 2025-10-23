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

function StaticStars() {
  const [timeOffset, setTimeOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef()
  const lastTimeRef = useRef(0)

  // Generate minimal stars for maximum performance
  const generateStars = useCallback(() => {
    const stars = []
    
    // Ultra-performance: Only 3 stars
    for (let i = 0; i < 3; i++) {
      stars.push({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.3 + 0.2,
        opacity: Math.random() * 0.2 + 0.1,
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        scrollSensitivity: Math.random() * 0.01 + 0.005
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
    const throttledScroll = throttle(handleScroll, 32) // 30fps throttling for background stars
    window.addEventListener('scroll', throttledScroll, { passive: true })
    setScrollY(window.scrollY)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Optimized animation loop - 60fps with throttling
  useEffect(() => {
    const animate = (currentTime) => {
      // Ultra-performance: 20fps throttling
      if (currentTime - lastTimeRef.current >= 50) {
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
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Render minimal stars for performance */}
      {stars.map((star) => {
        // Simple movement
        const moveX = Math.sin(timeOffset * 0.1 + star.baseX * 0.01) * 0.2
        const moveY = Math.cos(timeOffset * 0.1 + star.baseY * 0.01) * 0.2
        
        // Simple scroll parallax
        const parallaxY = scrollY * star.scrollSensitivity * 0.05
        const parallaxX = scrollY * star.scrollSensitivity * 0.03
        
        // Calculate final position
        const finalX = (star.x + moveX + parallaxX) % 100
        const finalY = (star.y + moveY + parallaxY) % 100
        
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${finalX}%`,
              top: `${finalY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              willChange: 'transform',
            }}
          />
        )
      })}
    </div>
  )
}

export default memo(StaticStars)