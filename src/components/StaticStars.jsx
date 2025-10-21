import React, { useState, useEffect, useRef } from 'react'

function DynamicStars() {
  const [timeOffset, setTimeOffset] = useState(0)
  const animationRef = useRef()

  // Generate simplified star positions
  const generateStars = () => {
    const stars = []
    
    // Reduced number of stars for better performance
    for (let i = 0; i < 20; i++) {
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

  // Simplified animation loop
  useEffect(() => {
    let startTime = Date.now()
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      setTimeOffset(elapsed)
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
      {/* Render simplified stars */}
      {stars.map((star) => {
        const moveY = Math.sin(timeOffset * star.speed + star.x) * 2
        const moveX = Math.cos(timeOffset * star.speed * 0.5 + star.y) * 1
        
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x + moveX}%`,
              top: `${star.y + moveY}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity + Math.sin(timeOffset * 2 + star.x) * 0.2,
              transform: `scale(${1 + Math.sin(timeOffset * 3 + star.y) * 0.1})`,
            }}
          />
        )
      })}
    </div>
  )
}

export default DynamicStars
