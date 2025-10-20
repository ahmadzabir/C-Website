import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofTrustBar from './components/ProofTrustBar'
import About from './components/About'
import IntegrationFlow from './components/IntegrationFlow'
import GTMEngine from './components/GTMEngine'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import FounderSection from './components/FounderSection'
import Footer from './components/Footer'
import BackgroundClouds from './components/BackgroundClouds'
import DynamicStars from './components/StaticStars'

function App() {
  return (
    <div className="App min-h-screen bg-bg text-white">
      {/* Dynamic Stars with movement and cursor interaction */}
      <DynamicStars />
      
      {/* 3D Background Clouds - Full Homepage */}
      <BackgroundClouds />
      
      {/* Website Content */}
      <div className="relative z-20">
        <Header />
        <main>
          <Hero />
          <div className="section-bg-1 relative z-10">
            <ProofTrustBar />
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <About />
          </div>
          <div className="section-divider-thick" />
          <div className="section-bg-2 relative z-10">
            <IntegrationFlow />
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <GTMEngine />
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Services />
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Process />
          </div>
          <div className="section-divider-thick" />
          <div className="section-bg-2 relative z-10">
            <Results />
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Comparison />
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <FAQ />
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <FounderSection />
          </div>
          <div className="footer-separator" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
