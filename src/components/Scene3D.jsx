import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Floating particles with better distribution
function FloatingParticles({ count = 120 }) {
  const mesh = useRef()
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Better distribution in a sphere
      const radius = Math.random() * 15 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Color variation between blue and mint
      const colorChoice = Math.random()
      if (colorChoice < 0.6) {
        colors[i * 3] = 0.31     // Blue R
        colors[i * 3 + 1] = 0.6  // Blue G
        colors[i * 3 + 2] = 1.0  // Blue B
      } else {
        colors[i * 3] = 0.18     // Mint R
        colors[i * 3 + 1] = 0.83 // Mint G
        colors[i * 3 + 2] = 0.75 // Mint B
      }
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.015, 6, 6]} />
      <meshBasicMaterial 
        color="#4F9AFF" 
        transparent 
        opacity={0.4}
        vertexColors
      />
      <instancedBufferAttribute attach="geometry-attributes-position" args={[particles.positions, 3]} />
      <instancedBufferAttribute attach="geometry-attributes-color" args={[particles.colors, 3]} />
    </instancedMesh>
  )
}

// Gradient orbs for ambient lighting
function GradientOrbs() {
  const orb1 = useRef()
  const orb2 = useRef()
  
  useFrame((state) => {
    if (orb1.current) {
      orb1.current.rotation.x = state.clock.elapsedTime * 0.01
      orb1.current.rotation.y = state.clock.elapsedTime * 0.02
    }
    if (orb2.current) {
      orb2.current.rotation.x = -state.clock.elapsedTime * 0.015
      orb2.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <>
      {/* Blue orb */}
      <mesh ref={orb1} position={[8, 3, -10]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial 
          color="#4F9AFF" 
          transparent 
          opacity={0.08}
        />
      </mesh>
      
      {/* Mint orb */}
      <mesh ref={orb2} position={[-6, -2, -8]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial 
          color="#2DD4BF" 
          transparent 
          opacity={0.06}
        />
      </mesh>
    </>
  )
}

// Subtle wireframe structure
function WireframeGrid() {
  const mesh = useRef()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.elapsedTime * 0.005
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -15]}>
      <planeGeometry args={[30, 30, 20, 20]} />
      <meshBasicMaterial 
        color="#94A3B8" 
        transparent 
        opacity={0.05}
        wireframe
      />
    </mesh>
  )
}

// Main Three.js scene
function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.4} />
          <pointLight position={[0, 0, 5]} intensity={0.2} color="#4F9AFF" />
          
          {/* Floating particles */}
          <FloatingParticles count={100} />
          
          {/* Gradient orbs */}
          <GradientOrbs />
          
          {/* Wireframe grid */}
          <WireframeGrid />
          
          {/* Subtle stars background */}
          <Stars 
            radius={500} 
            depth={80} 
            count={1500} 
            factor={6} 
            saturation={0} 
            fade 
            speed={0.3} 
          />
          
          {/* Environment for subtle lighting */}
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D
