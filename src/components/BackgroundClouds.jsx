import React from 'react'

function BackgroundClouds() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Clean Minimal Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
          `
        }}
      />

      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%),
            linear-gradient(-45deg, transparent 0%, rgba(255, 255, 255, 0.005) 50%, transparent 100%)
          `
        }}
      />
    </div>
  )
}

export default BackgroundClouds