import React, { useState, useEffect, useRef } from 'react'

function DynamicStars() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [timeOffset, setTimeOffset] = useState(0)
  const animationRef = useRef()

  // Generate initial star positions with diverse movement patterns
  const generateFlowingStars = () => {
    const stars = []
    const movementTypes = ['downward', 'upward', 'circular', 'diagonal', 'spiral', 'zigzag']
    
    // Generate stars across multiple "layers" to create seamless flow
    for (let layer = 0; layer < 3; layer++) {
      // Large stars
      for (let i = 0; i < 8; i++) {
        const movementType = movementTypes[i % movementTypes.length]
        stars.push({
          id: `large-${layer}-${i}`,
          type: 'large',
          baseX: Math.random() * 100,
          baseY: (Math.random() * 120) - 20,
          speed: 0.3 + Math.random() * 0.2,
          layer: layer,
          initialOffset: Math.random() * 100,
          movementType: movementType,
          // Circular movement properties
          circleRadius: movementType === 'circular' ? 20 + Math.random() * 30 : 0,
          circleSpeed: movementType === 'circular' ? 0.02 + Math.random() * 0.03 : 0,
          circleCenterX: movementType === 'circular' ? Math.random() * 100 : 0,
          circleCenterY: movementType === 'circular' ? Math.random() * 100 : 0,
          // Spiral movement properties
          spiralRadius: movementType === 'spiral' ? 10 + Math.random() * 20 : 0,
          spiralSpeed: movementType === 'spiral' ? 0.01 + Math.random() * 0.02 : 0,
          spiralCenterX: movementType === 'spiral' ? Math.random() * 100 : 0,
          spiralCenterY: movementType === 'spiral' ? Math.random() * 100 : 0,
          // Direction for linear movements
          direction: movementType === 'upward' ? -1 : 1,
          // Diagonal movement angle
          diagonalAngle: movementType === 'diagonal' ? Math.random() * Math.PI * 2 : 0,
          // Zigzag properties
          zigzagAmplitude: movementType === 'zigzag' ? 15 + Math.random() * 25 : 0,
          zigzagFrequency: movementType === 'zigzag' ? 0.05 + Math.random() * 0.1 : 0
        })
      }
      
      // Medium stars
      for (let i = 0; i < 15; i++) {
        const movementType = movementTypes[i % movementTypes.length]
        stars.push({
          id: `medium-${layer}-${i}`,
          type: 'medium',
          baseX: Math.random() * 100,
          baseY: (Math.random() * 120) - 20,
          speed: 0.2 + Math.random() * 0.3,
          layer: layer,
          initialOffset: Math.random() * 100,
          movementType: movementType,
          circleRadius: movementType === 'circular' ? 15 + Math.random() * 25 : 0,
          circleSpeed: movementType === 'circular' ? 0.03 + Math.random() * 0.04 : 0,
          circleCenterX: movementType === 'circular' ? Math.random() * 100 : 0,
          circleCenterY: movementType === 'circular' ? Math.random() * 100 : 0,
          spiralRadius: movementType === 'spiral' ? 8 + Math.random() * 15 : 0,
          spiralSpeed: movementType === 'spiral' ? 0.015 + Math.random() * 0.025 : 0,
          spiralCenterX: movementType === 'spiral' ? Math.random() * 100 : 0,
          spiralCenterY: movementType === 'spiral' ? Math.random() * 100 : 0,
          direction: movementType === 'upward' ? -1 : 1,
          diagonalAngle: movementType === 'diagonal' ? Math.random() * Math.PI * 2 : 0,
          zigzagAmplitude: movementType === 'zigzag' ? 10 + Math.random() * 20 : 0,
          zigzagFrequency: movementType === 'zigzag' ? 0.06 + Math.random() * 0.12 : 0
        })
      }
      
      // Small stars
      for (let i = 0; i < 25; i++) {
        const movementType = movementTypes[i % movementTypes.length]
        stars.push({
          id: `small-${layer}-${i}`,
          type: 'small',
          baseX: Math.random() * 100,
          baseY: (Math.random() * 120) - 20,
          speed: 0.1 + Math.random() * 0.4,
          layer: layer,
          initialOffset: Math.random() * 100,
          movementType: movementType,
          circleRadius: movementType === 'circular' ? 10 + Math.random() * 20 : 0,
          circleSpeed: movementType === 'circular' ? 0.04 + Math.random() * 0.05 : 0,
          circleCenterX: movementType === 'circular' ? Math.random() * 100 : 0,
          circleCenterY: movementType === 'circular' ? Math.random() * 100 : 0,
          spiralRadius: movementType === 'spiral' ? 5 + Math.random() * 12 : 0,
          spiralSpeed: movementType === 'spiral' ? 0.02 + Math.random() * 0.03 : 0,
          spiralCenterX: movementType === 'spiral' ? Math.random() * 100 : 0,
          spiralCenterY: movementType === 'spiral' ? Math.random() * 100 : 0,
          direction: movementType === 'upward' ? -1 : 1,
          diagonalAngle: movementType === 'diagonal' ? Math.random() * Math.PI * 2 : 0,
          zigzagAmplitude: movementType === 'zigzag' ? 8 + Math.random() * 15 : 0,
          zigzagFrequency: movementType === 'zigzag' ? 0.08 + Math.random() * 0.15 : 0
        })
      }
    }
    
    return stars
  }

  const [stars] = useState(() => generateFlowingStars())

  // Scroll-based flow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Time-based animation for automatic movement
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

  // Cursor tracking for interactive movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 0.2,
        y: (clientY / innerHeight - 0.5) * 0.2,
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Calculate smooth flowing positions for each star based on movement type
  const getStarPosition = (star) => {
    let x = star.baseX
    let y = star.baseY
    
    // Apply movement pattern based on star's movement type
    switch (star.movementType) {
      case 'downward':
        // Linear downward movement
        const downwardFlow = (scrollPosition * 0.1) * star.speed + (timeOffset * star.speed * 0.5)
        y += downwardFlow
        break
        
      case 'upward':
        // Linear upward movement
        const upwardFlow = (scrollPosition * 0.1) * star.speed * star.direction + (timeOffset * star.speed * 0.5 * star.direction)
        y += upwardFlow
        break
        
      case 'circular':
        // Circular movement around a center point
        const circleAngle = timeOffset * star.circleSpeed + star.initialOffset
        const circleX = star.circleCenterX + Math.cos(circleAngle) * star.circleRadius
        const circleY = star.circleCenterY + Math.sin(circleAngle) * star.circleRadius
        x = circleX + Math.sin(timeOffset * 0.02 + star.initialOffset) * 1
        y = circleY + Math.cos(timeOffset * 0.015 + star.initialOffset) * 1
        break
        
      case 'diagonal':
        // Diagonal movement at various angles
        const diagonalFlow = (timeOffset * star.speed * 0.5) + (scrollPosition * 0.05 * star.speed)
        x += Math.cos(star.diagonalAngle) * diagonalFlow
        y += Math.sin(star.diagonalAngle) * diagonalFlow
        break
        
      case 'spiral':
        // Spiral movement - circular motion with expanding radius
        const spiralAngle = timeOffset * star.spiralSpeed + star.initialOffset
        const currentSpiralRadius = star.spiralRadius + (timeOffset * 0.1)
        const spiralX = star.spiralCenterX + Math.cos(spiralAngle) * currentSpiralRadius
        const spiralY = star.spiralCenterY + Math.sin(spiralAngle) * currentSpiralRadius
        x = spiralX
        y = spiralY
        break
        
      case 'zigzag':
        // Zigzag movement - vertical movement with horizontal oscillation
        const zigzagVertical = (timeOffset * star.speed * 0.5) + (scrollPosition * 0.1 * star.speed)
        const zigzagHorizontal = Math.sin(timeOffset * star.zigzagFrequency + star.initialOffset) * star.zigzagAmplitude
        x += zigzagHorizontal
        y += zigzagVertical
        break
        
      default:
        // Default downward movement
        const defaultFlow = (scrollPosition * 0.1) * star.speed + (timeOffset * star.speed * 0.5)
        y += defaultFlow
    }
    
    // Add subtle drift for all stars
    x += Math.sin(timeOffset * 0.02 + star.initialOffset) * 1
    y += Math.cos(timeOffset * 0.015 + star.initialOffset) * 1
    
    // Create seamless looping for linear movements
    if (['downward', 'upward', 'diagonal', 'zigzag'].includes(star.movementType)) {
      if (y > 120) {
        y = y - 140 // Seamlessly loop back to top
      } else if (y < -20) {
        y = y + 140 // Seamlessly loop back to bottom
      }
      
      if (x > 110) {
        x = x - 120 // Seamlessly loop horizontally
      } else if (x < -10) {
        x = x + 120
      }
    }
    
    return { x, y }
  }

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
      {/* Render all flowing stars */}
      {stars.map((star) => {
        const position = getStarPosition(star)
        const size = star.type === 'large' ? 'w-1 h-1' : star.type === 'medium' ? 'w-0.5 h-0.5' : 'w-0.25 h-0.25'
        const color = star.type === 'large' ? 'bg-white' : star.type === 'medium' ? 'bg-teal-300' : 'bg-emerald-400'
        const baseOpacity = star.type === 'large' ? 0.7 : star.type === 'medium' ? 0.5 : 0.4
        
        return (
          <div
            key={star.id}
            className={`absolute ${size} ${color} rounded-full`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `
                translate(${mousePosition.x * (star.type === 'large' ? 15 : star.type === 'medium' ? 8 : 4)}px, 
                         ${mousePosition.y * (star.type === 'large' ? 15 : star.type === 'medium' ? 8 : 4)}px)
                scale(${1 + Math.sin(timeOffset * 0.2 + star.initialOffset) * 0.1})
              `,
              opacity: baseOpacity + Math.sin(timeOffset * 0.1 + star.initialOffset) * 0.2,
              animation: `gentle-twinkle-${star.initialOffset % 2} ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        )
      })}

      {/* CSS Animations - Gentler, less flickering */}
      <style jsx>{`
        @keyframes gentle-twinkle-0 {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(0.95); 
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.05); 
          }
        }
        
        @keyframes gentle-twinkle-1 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(0.9); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.1); 
          }
        }
        
        @keyframes gentle-float-0 {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-3px) scale(1.02); 
            opacity: 0.6; 
          }
        }
        
        @keyframes gentle-float-1 {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(-5px) scale(0.98); 
            opacity: 0.7; 
          }
        }
        
        @keyframes gentle-float-2 {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-4px) scale(1.03); 
            opacity: 0.6; 
          }
        }
        
        @keyframes gentle-sparkle-0 {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.8); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes gentle-sparkle-1 {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(0.9); 
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.1); 
          }
        }
      `}</style>
    </div>
  )
}

export default DynamicStars
