import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

// Clean starfield background with scroll-based movement
function ClassicBackground() {
  const groupRef = useRef()
  const starsRef = useRef()
  const scroll = useScroll()
  
  // Create star system
  const stars = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      // Position - spread across a large area
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50
      
      // Color - subtle white/blue tint
      const color = new THREE.Color()
      const hue = 0.6 + Math.random() * 0.1 // Blue range
      const saturation = 0.2 + Math.random() * 0.3 // Low saturation
      const lightness = 0.7 + Math.random() * 0.3 // Bright
      color.setHSL(hue, saturation, lightness)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      // Size - varied sizes for depth
      sizes[i] = Math.random() * 1.5 + 0.5
    }
    
    return { positions, colors, sizes }
  }, [])
  
  useFrame((state) => {
    if (starsRef.current) {
      // Slow rotation for gentle movement
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
      starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.05
      
      // Scroll-based movement for flow effect
      if (scroll.offset > 0) {
        const scrollOffset = scroll.offset * 20
        starsRef.current.position.y = scrollOffset * 0.5
        starsRef.current.position.x = Math.sin(scrollOffset * 0.01) * 5
      }
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Starfield */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={stars.positions.length / 3}
            array={stars.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={stars.colors.length / 3}
            array={stars.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={stars.sizes.length}
            array={stars.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export default ClassicBackground
