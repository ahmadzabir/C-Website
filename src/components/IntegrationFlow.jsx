import React from 'react'
import { motion } from 'framer-motion'

function IntegrationFlow() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto container-padding relative z-10">
        
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-white mb-8 leading-tight">
            If your stack disappeared tomorrow, would your <span className="gradient-text-emerald">system still make money?</span>
          </h2>
          
          <p className="text-xl text-body-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Real revenue systems don't collapse when the tools do. They're built on clarity, not dependency.
          </p>
        </motion.div>

        {/* Core Equation - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-8">
              <span className="gradient-text-blue font-semibold">Strong Offer</span>
              <span className="mx-6 text-emerald-400">+</span>
              <span className="gradient-text-purple font-semibold">Right People</span>
              <span className="mx-6 text-emerald-400">×</span>
              <span className="gradient-text-gold font-semibold">Reliable Systems</span>
              <span className="mx-6 text-emerald-400">=</span>
              <span className="gradient-text-emerald font-bold text-3xl md:text-4xl">Predictable Revenue</span>
            </div>
            
            <p className="text-lg text-body-secondary leading-relaxed">
              When these three elements align, <span className="gradient-text-emerald font-semibold">growth isn't luck - it's math.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default IntegrationFlow