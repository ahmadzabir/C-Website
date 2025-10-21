import React from 'react'
import { motion } from 'framer-motion'

function FounderSection() {
  return (
    <section className="section-spacing">
      <div className="w-full max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-emerald-400 font-bold text-sm tracking-[0.12em] uppercase mb-4">
            Founder-Led Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-[-0.02em]">
            <span className="gradient-text-purple">Built by founders, </span>
            <span className="gradient-text-emerald">for founders.</span>
          </h2>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto mb-8">
            8+ years building and scaling sales systems across industries. Fractional GTM consultant and co-founder of Contwre.
          </p>
        </motion.div>

        {/* Founder Photo Together */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-12"
        >
          <motion.div
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 group-hover:border-mint/50 transition-colors duration-150 mx-auto">
                <img 
                  loading="lazy"
                  src="/assets/founder-together.jpg" 
                  alt="Ahmad Zabir & Zahra Batool"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-150"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold gradient-text-gold mb-2">Ahmad Zabir & Zahra Batool</h3>
            <p className="text-body-secondary text-lg">Co-founders of Contwre</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection
