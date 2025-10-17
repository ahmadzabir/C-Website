import React from 'react'
import Scene3D from './components/Scene3D'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GTMEngine from './components/GTMEngine'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App min-h-screen bg-bg text-white">
      {/* Three.js Scene as Background */}
      <Scene3D />
      
      {/* Website Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <GTMEngine />
          <Services />
          <Process />
          <Results />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
