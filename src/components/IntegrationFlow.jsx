import React from 'react'
import { motion } from 'framer-motion'

function IntegrationFlow() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-white mb-6 md:mb-8 leading-tight">
            Systems that compound, <br />
            <span className="gradient-text-emerald">not campaigns that collapse</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slateLight max-w-4xl mx-auto leading-relaxed mb-12">
            While others chase clicks and vanity metrics, we build revenue engines that work whether your tools are up or down.
          </p>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Core Equation */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
                <span className="gradient-text-emerald font-semibold">Strong Offer</span>
                <span className="mx-4 text-emerald-400">+</span>
                <span className="gradient-text-emerald font-semibold">Right People</span>
                <span className="mx-4 text-emerald-400">×</span>
                <span className="gradient-text-emerald font-semibold">Reliable Systems</span>
                <span className="mx-4 text-emerald-400">=</span>
                <span className="gradient-text-emerald font-bold text-xl md:text-2xl">Predictable Revenue</span>
              </div>

              {/* Key Message */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-white/10"
              >
                <p className="text-lg text-slateLight leading-relaxed">
                  When these three elements align, <span className="gradient-text-emerald font-semibold">growth isn't luck - it's math.</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* What This Means */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 text-xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Strong Offer</h3>
              <p className="text-slateLight text-sm leading-relaxed">
                Clear value proposition that solves a real problem
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 text-xl">👥</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Right People</h3>
              <p className="text-slateLight text-sm leading-relaxed">
                Precise targeting to your ideal customer profile
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 text-xl">⚙️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Reliable Systems</h3>
              <p className="text-slateLight text-sm leading-relaxed">
                Automated processes that work consistently
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default IntegrationFlow