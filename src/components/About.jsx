import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="section-spacing">
      <div className="w-full max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Why we exist card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="card-glass p-8"
          >
            <p className="text-mint font-bold text-sm tracking-[0.12em] uppercase mb-4">
              Why we exist
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-[-0.02em]">
              Most marketing is disconnected… we build systems that compound.
            </h2>
            <p className="text-xl text-slateLight leading-relaxed">
              Agencies sell campaigns. Consultants sell audits. Sales teams chase deals. None of it compounds unless the offer, channels, and sales process are aligned. That's our job. We connect brand, acquisition, and sales into one GTM machine… then we run it.
            </p>
          </motion.div>

          {/* What we optimize for card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass p-8"
          >
            <p className="text-mint font-bold text-sm tracking-[0.12em] uppercase mb-4">
              What we optimize for
            </p>
            <ul className="space-y-4">
              <li className="text-white flex items-start gap-4">
                <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg">Pipeline created, not impressions</span>
              </li>
              <li className="text-white flex items-start gap-4">
                <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg">Acquisition cost, LTV, payback period</span>
              </li>
              <li className="text-white flex items-start gap-4">
                <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg">Conversion through the full funnel</span>
              </li>
              <li className="text-white flex items-start gap-4">
                <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0" />
                <span className="text-lg">Sales velocity and team performance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
