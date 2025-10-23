import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofTrustBar from './components/ProofTrustBar'
import About from './components/About'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { Suspense } from 'react'

const IntegrationFlow = React.lazy(() => import('./components/IntegrationFlow'))
const GTMEngine = React.lazy(() => import('./components/GTMEngine'))
const Services = React.lazy(() => import('./components/Services'))
const Process = React.lazy(() => import('./components/Process'))
const Results = React.lazy(() => import('./components/Results'))
const Comparison = React.lazy(() => import('./components/Comparison'))
const FAQ = React.lazy(() => import('./components/FAQ'))
const FounderSection = React.lazy(() => import('./components/FounderSection'))

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
        <div className="App min-h-screen bg-bg text-white">
        {/* Clean modern website without background animations */}
        
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
            <Suspense fallback={<LoadingSpinner />}>
              <IntegrationFlow />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <GTMEngine />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <Process />
            </Suspense>
          </div>
          <div className="section-divider-thick" />
          <div className="section-bg-2 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <Results />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-3 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <Comparison />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <FAQ />
            </Suspense>
          </div>
          <div className="section-divider" />
          <div className="section-bg-1 relative z-10">
            <Suspense fallback={<LoadingSpinner />}>
              <FounderSection />
            </Suspense>
          </div>
          <div className="footer-separator" />
        </main>
        <Footer />
      </div>
    </div>
    </ErrorBoundary>
  )
}

export default App
