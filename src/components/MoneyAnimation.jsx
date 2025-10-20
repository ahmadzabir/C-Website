import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function MoneyAnimation() {
  const [currentFrame, setCurrentFrame] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload all SVG frames
    const preloadImages = async () => {
      const promises = []
      for (let i = 1; i <= 10; i++) {
        const img = new Image()
        img.src = `/assets/${i}.svg`
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
          })
        )
      }
      await Promise.all(promises)
      setIsLoaded(true)
    }

    preloadImages()
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    const interval = setInterval(() => {
      setCurrentFrame(prev => prev === 10 ? 1 : prev + 1)
    }, 2000) // 2 seconds per frame

    return () => clearInterval(interval)
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-white/50">Loading animation...</div>
      </div>
    )
  }

  return (
    <motion.div
      className="w-full h-auto flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ contain: 'layout style paint' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateX: [0, 1, 0, -1, 0],
              rotateY: [0, 0.5, 0, -0.5, 0],
              x: [0, 1, 0, -1, 0],
              y: [0, 0.5, 0, -0.5, 0]
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative"
          >
            <img
              src={`/assets/${currentFrame}.svg`}
              alt="Money Flow Animation"
              className="w-full h-auto money-animation energy-flow"
              style={{ 
                willChange: 'opacity, transform'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default MoneyAnimation
