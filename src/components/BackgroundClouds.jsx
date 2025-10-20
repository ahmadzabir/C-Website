import React from 'react'

function BackgroundClouds() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Static gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1000px 500px at 20% 0%, rgba(45, 212, 191, 0.15) 0%, transparent 75%),
            radial-gradient(ellipse 800px 400px at 80% 0%, rgba(16, 185, 129, 0.12) 0%, transparent 75%),
            radial-gradient(ellipse 900px 450px at 70% 0%, rgba(16, 185, 129, 0.13) 0%, transparent 75%),
            radial-gradient(ellipse 600px 300px at 30% 0%, rgba(45, 212, 191, 0.11) 0%, transparent 75%),
            radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(45, 212, 191, 0.12) 0%, transparent 85%),
            radial-gradient(ellipse 500px 250px at 20% 0%, rgba(16, 185, 129, 0.09) 0%, transparent 70%),
            linear-gradient(180deg, rgba(45, 212, 191, 0.05) 0%, rgba(16, 185, 129, 0.03) 30%, transparent 85%),
            linear-gradient(180deg, rgba(16, 185, 129, 0.06) 0%, rgba(45, 212, 191, 0.04) 50%, transparent 95%),
            radial-gradient(ellipse 2000px 1000px at 50% 0%, rgba(45, 212, 191, 0.03) 0%, transparent 90%),
            radial-gradient(ellipse 1500px 750px at 30% 0%, rgba(16, 185, 129, 0.025) 0%, transparent 85%),
            linear-gradient(135deg, #0F1419 0%, #1A1D29 25%, #0F1419 50%, #1A1D29 75%, #0F1419 100%)
          `
        }}
      />
    </div>
  )
}

export default BackgroundClouds