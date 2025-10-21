import { useState, useEffect, useCallback, useRef } from 'react'

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

export function useScrollParallax(intensity = 0.5) {
  const [scrollY, setScrollY] = useState(0)
  const [elementRef, setElementRef] = useState(null)
  const rafRef = useRef()

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY)
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 16) // 60fps
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  const getParallaxStyle = useCallback((element) => {
    if (!element) return {}
    
    const rect = element.getBoundingClientRect()
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = window.innerHeight / 2
    
    // Calculate distance from viewport center
    const distanceFromCenter = elementCenter - viewportCenter
    
    // Simplified parallax calculation for better performance
    const parallaxX = Math.sin(scrollY * 0.0005 + distanceFromCenter * 0.0005) * intensity * 5
    const parallaxY = Math.cos(scrollY * 0.0003 + distanceFromCenter * 0.0003) * intensity * 3
    
    return {
      transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
      willChange: 'transform'
    }
  }, [scrollY, intensity])

  return {
    ref: setElementRef,
    style: elementRef ? getParallaxStyle(elementRef) : {},
    scrollY
  }
}

export function useGradientTextParallax(intensity = 0.1) {
  const [scrollY, setScrollY] = useState(0)
  const [elementRef, setElementRef] = useState(null)
  const rafRef = useRef()

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY)
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 16) // 60fps
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  const getGradientParallaxStyle = useCallback((element) => {
    if (!element) return {}
    
    const rect = element.getBoundingClientRect()
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = window.innerHeight / 2
    
    // Calculate distance from viewport center
    const distanceFromCenter = elementCenter - viewportCenter
    
    // Ultra-reduced calculations for maximum performance
    const floatX = Math.sin(scrollY * 0.0005 + distanceFromCenter * 0.0002) * intensity * 2
    const floatY = Math.cos(scrollY * 0.0004 + distanceFromCenter * 0.0002) * intensity * 1
    
    // Minimal rotation for performance
    const rotation = Math.sin(scrollY * 0.0002 + distanceFromCenter * 0.0001) * intensity * 0.5
    
    return {
      transform: `translate3d(${floatX}px, ${floatY}px, 0) rotate(${rotation}deg)`,
      willChange: 'transform'
    }
  }, [scrollY, intensity])

  return {
    ref: setElementRef,
    style: elementRef ? getGradientParallaxStyle(elementRef) : {},
    scrollY
  }
}
