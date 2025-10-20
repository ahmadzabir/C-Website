import React from 'react'
import { motion } from 'framer-motion'

function Process() {

  return (
    <section className="section-spacing">
      <div className="w-full max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-[-0.02em]">
            <span className="gradient-text-white">The Contwre Process - </span>
            <span className="gradient-text-emerald">From Dependency to Enablement</span>
          </h2>
        </motion.div>

        {/* Process Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p 
            className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We don't rent you results, we build your GTM independence.
          </motion.p>
          
          <motion.p 
            className="text-lg text-slateLight leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contwre embeds inside your business, engineers a revenue system around your ICP and offer, then trains and enables your team to run it.
          </motion.p>
          
          <motion.p 
            className="text-lg text-slateLight leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We align your sales and marketing, fix broken systems, hire or replace where needed, and hand back a GTM engine that compounds without us.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-accent to-mint text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent/25 border-2 border-transparent hover:border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default Process