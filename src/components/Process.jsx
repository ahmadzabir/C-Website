import React from 'react'
import { motion } from 'framer-motion'

function Process() {
  const steps = [
    {
      title: "Weeks 1–2 • Audit & Plan",
      description: "Offer, ICP, funnel diagnostics, and KPI tree. Clear hypotheses and a ruthless backlog."
    },
    {
      title: "Weeks 3–6 • Build & Launch", 
      description: "Outbound infrastructure, paid campaigns, CRM, and automations live. Creative and copy system ready."
    },
    {
      title: "Weeks 7–12 • Scale & Optimize",
      description: "Weekly sprints, A/B tests, and performance reviews. Double down on what works, iterate on what doesn't."
    }
  ]

  return (
    <section className="py-18 px-5">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-mint font-bold text-xs tracking-[0.12em] uppercase mb-3">
            How we work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
            Your 90-day plan… clarity to cash.
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-glass p-6 group hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mint transition-colors">
                {step.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
