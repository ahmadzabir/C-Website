import { useState, useEffect, useCallback } from 'react'

export function useScrollParallax(intensity = 0.5) {
  const [scrollY, setScrollY] = useState(0)
  const [elementRef, setElementRef] = useState(null)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const getParallaxStyle = useCallback((element) => {
    if (!element) return {}
    
    const rect = element.getBoundingClientRect()
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = window.innerHeight / 2
    
    // Calculate distance from viewport center
    const distanceFromCenter = elementCenter - viewportCenter
    
    // Create parallax effect based on scroll position and element position
    const parallaxX = Math.sin(scrollY * 0.001 + distanceFromCenter * 0.001) * intensity * 10
    const parallaxY = Math.cos(scrollY * 0.001 + distanceFromCenter * 0.001) * intensity * 5
    
    return {
      transform: `translate(${parallaxX}px, ${parallaxY}px) translateZ(0)`,
      willChange: 'transform'
    }
  }, [scrollY, intensity])

  return {
    ref: setElementRef,
    style: elementRef ? getParallaxStyle(elementRef) : {},
    scrollY
  }
}

export function useGradientTextParallax(intensity = 0.3) {
  const [scrollY, setScrollY] = useState(0)
  const [elementRef, setElementRef] = useState(null)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const getGradientParallaxStyle = useCallback((element) => {
    if (!element) return {}
    
    const rect = element.getBoundingClientRect()
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = window.innerHeight / 2
    
    // Calculate distance from viewport center
    const distanceFromCenter = elementCenter - viewportCenter
    
    // Create subtle floating effect for gradient text
    const floatX = Math.sin(scrollY * 0.002 + distanceFromCenter * 0.001) * intensity * 8
    const floatY = Math.cos(scrollY * 0.0015 + distanceFromCenter * 0.0008) * intensity * 4
    
    // Add slight rotation for dynamic effect
    const rotation = Math.sin(scrollY * 0.0008 + distanceFromCenter * 0.0005) * intensity * 2
    
    return {
      transform: `translate(${floatX}px, ${floatY}px) rotate(${rotation}deg) translateZ(0)`,
      willChange: 'transform',
      transition: 'transform 0.1s ease-out'
    }
  }, [scrollY, intensity])

  return {
    ref: setElementRef,
    style: elementRef ? getGradientParallaxStyle(elementRef) : {},
    scrollY
  }
}
