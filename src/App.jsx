import React, { Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofTrustBar from './components/ProofTrustBar'
import About from './components/About'
import Footer from './components/Footer'

const BackgroundClouds = React.lazy(() => import('./components/BackgroundClouds'))
const DynamicStars = React.lazy(() => import('./components/StaticStars'))
const IntegrationFlow = React.lazy(() => import('./components/IntegrationFlow'))
const GTMEngine = React.lazy(() => import('./components/GTMEngine'))
const Services = React.lazy(() => import('./components/Services'))
const Process = React.lazy(() => import('./components/Process'))
const Results = React.lazy(() => import('./components/Results'))
const Comparison = React.lazy(() => import('./components/Comparison'))
const FAQ = React.lazy(() => import('./components/FAQ'))
const FounderSection = React.lazy(() => import('./components/FounderSection'))

function App() {
  return (
    <div className="App min-h-screen bg-bg text-white">
      {/* Dynamic Stars with movement and cursor interaction */}
      <Suspense fallback={null}>
        <DynamicStars />
      </Suspense>
      
      {/* 3D Background Clouds - Full Homepage */}
      <Suspense fallback={null}>
        <BackgroundClouds />
      </Suspense>
      
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
            <Suspense fallback={null}>
              <IntegrationFlow />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={null}>
              <GTMEngine />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={null}>
              <Process />
            </Suspense>
          </div>
          <div className="section-divider-thick" />
          <div className="section-bg-2 relative z-10">
            <Suspense fallback={null}>
              <Results />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Suspense fallback={null}>
              <Comparison />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={null}>
              <FAQ />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={null}>
              <FounderSection />
            </Suspense>
          </div>
          <div className="footer-separator" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
