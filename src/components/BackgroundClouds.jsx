import React from 'react'

function BackgroundClouds() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base gradient with warmer, natural tones */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1400px 700px at 15% 10%, rgba(139,92,246,0.08), transparent 65%),
            radial-gradient(1000px 500px at 85% 5%, rgba(236,72,153,0.06), transparent 60%),
            radial-gradient(800px 400px at 50% 20%, rgba(251,146,60,0.05), transparent 70%),
            linear-gradient(180deg, rgba(255,255,255,0.03), transparent 30%),
            linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 25%, #0F0F0F 50%, #2A2A2A 75%, #0F0F0F 100%)
          `
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\n            <svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\'>\n              <filter id=\\'n\\'>\n                <feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/>\n                <feColorMatrix type=\\'saturate\\' values=\\'0\\'/>\n              </filter>\n              <rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/>\n            </svg>')",
          backgroundSize: '200px 200px'
        }}
      />

      {/* Enhanced vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1400px 800px at 50% 15%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  )
}

export default BackgroundClouds