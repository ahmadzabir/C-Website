import { useEffect, useRef, useState, useCallback } from 'react'

// Throttle function for performance
const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Cursor-based parallax effect
export const useCursorParallax = (intensity = 0.5) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * intensity,
      y: (clientY / innerHeight - 0.5) * intensity
    })
  }, [intensity])

  useEffect(() => {
    const throttledMouseMove = throttle(handleMouseMove, 16) // ~60fps
    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', throttledMouseMove)
  }, [handleMouseMove])

  return { ref, mousePosition }
}

// Magnet hover effect
export const useMagnetEffect = (strength = 0.3) => {
  const ref = useRef(null)
  const [magnetPosition, setMagnetPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setMagnetPosition({ x: deltaX, y: deltaY })
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    setMagnetPosition({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const throttledMouseMove = throttle(handleMouseMove, 16)
    
    element.addEventListener('mousemove', throttledMouseMove, { passive: true })
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', throttledMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return { ref, magnetPosition }
}

// Counter animation hook
export const useCounterAnimation = (end, isVisible = false, duration = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      let startTime = null
      const startValue = 0

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, end, duration])

  return count
}

// Staggered animation hook
export const useStaggeredAnimation = (delay = 100) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return { ref, isVisible }
}
