import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="py-18 px-5">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Why we exist card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="card-glass p-6"
          >
            <p className="text-mint font-bold text-xs tracking-[0.12em] uppercase mb-3">
              Why we exist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 tracking-[-0.02em]">
              Most marketing is disconnected… we build systems that compound.
            </h2>
            <p className="text-lg text-white">
              Agencies sell campaigns. Consultants sell audits. Sales teams chase deals. None of it compounds unless the offer, channels, and sales process are aligned. That's our job. We connect brand, acquisition, and sales into one GTM machine… then we run it.
            </p>
          </motion.div>

          {/* What we optimize for card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass p-6"
          >
            <p className="text-mint font-bold text-xs tracking-[0.12em] uppercase mb-3">
              What we optimize for
            </p>
            <ul className="space-y-3">
              <li className="text-white flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0" />
                Pipeline created, not impressions
              </li>
              <li className="text-white flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0" />
                Acquisition cost, LTV, payback period
              </li>
              <li className="text-white flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0" />
                Conversion through the full funnel
              </li>
              <li className="text-white flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0" />
                Sales velocity and team performance
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
