import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Background3D() {
  const [time, setTime] = useState(0)
  const animationRef = useRef()
  const containerRef = useRef()
  const { scrollY } = useScroll()

  // Scroll-based transforms (opposite direction)
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, -100])
  const y4 = useTransform(scrollY, [0, 1000], [0, -250])
  const y5 = useTransform(scrollY, [0, 1000], [0, -180])

  // Rotation based on scroll
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360])
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -360])
  const rotate3 = useTransform(scrollY, [0, 1000], [0, 180])

  useEffect(() => {
    const animate = (currentTime) => {
      setTime(currentTime / 1000)
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
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ perspective: '1000px' }}
    >
      {/* Floating Geometric Shapes */}
      
      {/* Large floating cube */}
      <motion.div
        className="absolute w-32 h-32 opacity-5"
        style={{
          left: '10%',
          top: '20%',
          background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
          borderRadius: '20px',
          transform: 'rotateX(60deg) rotateY(45deg)',
          transformStyle: 'preserve-3d',
          y: y1,
          rotateX: rotate1,
          rotateY: rotate2,
        }}
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating pyramid */}
      <motion.div
        className="absolute w-24 h-24 opacity-8"
        style={{
          right: '15%',
          top: '30%',
          background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.4), rgba(99, 102, 241, 0.4))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotateX(45deg) rotateY(30deg)',
          y: y2,
          rotateX: rotate2,
          rotateY: rotate1,
        }}
        animate={{
          rotateZ: [0, -360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating sphere */}
      <motion.div
        className="absolute w-20 h-20 opacity-6"
        style={{
          left: '70%',
          top: '60%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(16, 185, 129, 0.3))',
          borderRadius: '50%',
          transform: 'rotateX(30deg) rotateY(60deg)',
          y: y3,
          rotateX: rotate3,
          rotateY: rotate2,
        }}
        animate={{
          rotateZ: [0, 180],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating diamond */}
      <motion.div
        className="absolute w-16 h-16 opacity-7"
        style={{
          left: '20%',
          top: '70%',
          background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.4), rgba(16, 185, 129, 0.4))',
          transform: 'rotateX(45deg) rotateY(45deg) rotateZ(45deg)',
          y: y4,
          rotateX: rotate1,
          rotateY: rotate3,
        }}
        animate={{
          rotateZ: [0, 360],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating hexagon */}
      <motion.div
        className="absolute w-28 h-28 opacity-4"
        style={{
          right: '25%',
          top: '70%',
          background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3))',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          transform: 'rotateX(60deg) rotateY(30deg)',
          y: y5,
          rotateX: rotate2,
          rotateY: rotate1,
        }}
        animate={{
          rotateZ: [0, -180],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, 
              rgba(${99 + Math.sin(time + i) * 50}, ${102 + Math.cos(time + i) * 30}, ${241 + Math.sin(time + i) * 20}, 0.6),
              rgba(${16 + Math.cos(time + i) * 40}, ${185 + Math.sin(time + i) * 20}, ${129 + Math.cos(time + i) * 30}, 0.4)
            )`,
            borderRadius: '50%',
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, Math.sin(time * 0.5 + i) * 30, 0],
            x: [0, Math.cos(time * 0.3 + i) * 20, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Floating Lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent, 
              rgba(${99 + Math.sin(time + i) * 30}, ${102 + Math.cos(time + i) * 20}, ${241 + Math.sin(time + i) * 15}, 0.6),
              transparent
            )`,
            transform: `rotate(${Math.random() * 360}deg) translateZ(0)`,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.05, 0.2, 0.05],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        />
      ))}

      {/* Depth Layers */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at ${50 + Math.sin(time * 0.1) * 20}% ${50 + Math.cos(time * 0.1) * 15}%, 
            rgba(99, 102, 241, 0.1) 0%, 
            transparent 50%
          )`,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          background: `radial-gradient(ellipse at ${30 + Math.cos(time * 0.15) * 25}% ${70 + Math.sin(time * 0.12) * 20}%, 
            rgba(16, 185, 129, 0.08) 0%, 
            transparent 60%
          )`,
        }}
      />
    </div>
  )
}

export default Background3D
