import React, { useState, useEffect, useRef } from 'react'

function DynamicStars() {
  const [timeOffset, setTimeOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef()

  // Generate star positions - more stars for better visual effect
  const generateStars = () => {
    const stars = []
    
    // Increased number of stars for better visual effect
    for (let i = 0; i < 50; i++) {
      stars.push({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2
      })
    }
    
    return stars
  }

  const [stars] = useState(() => generateStars())

  // Scroll tracking for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Stable animation loop - ensures stars never disappear
  useEffect(() => {
    let startTime = Date.now()
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      setTimeOffset(elapsed)
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
      {/* Render stars - stable and always visible with scroll parallax */}
      {stars.map((star) => {
        const moveY = Math.sin(timeOffset * star.speed + star.x) * 2
        const moveX = Math.cos(timeOffset * star.speed * 0.5 + star.y) * 1
        
        // Scroll-based parallax movement
        const parallaxY = scrollY * 0.1 * (star.speed * 0.5) // Different stars move at different speeds
        const parallaxX = scrollY * 0.05 * (star.speed * 0.3)
        
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x + moveX + parallaxX}%`,
              top: `${star.y + moveY + parallaxY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.max(0.1, star.opacity + Math.sin(timeOffset * 2 + star.x) * 0.2),
              transform: `scale(${1 + Math.sin(timeOffset * 3 + star.y) * 0.1})`,
              willChange: 'transform, opacity',
            }}
          />
        )
      })}
    </div>
  )
}

export default DynamicStars
