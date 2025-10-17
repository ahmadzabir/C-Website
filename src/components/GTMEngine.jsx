import React from 'react'
import { motion } from 'framer-motion'

function GTMEngine() {
  const phases = [
    {
      number: "Phase 1",
      title: "Diagnose",
      description: "ICP clarity, offer audit, funnel mapping, and data baselines. We find where money is leaking… and where it's hiding."
    },
    {
      number: "Phase 2", 
      title: "Design",
      description: "Messaging, pricing, and channel strategy. Creative system and measurement plan. We blueprint the machine."
    },
    {
      number: "Phase 3",
      title: "Deploy", 
      description: "Cold outbound, paid performance, content, and sales enablement. CRM, automations, and dashboards live."
    },
    {
      number: "Phase 4",
      title: "Drive",
      description: "Weekly experiments, KPI reviews, and creative iteration. We scale what works, retire what doesn't."
    }
  ]

  return (
    <section id="engine" className="py-18 px-5">
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
            Signature system
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3 tracking-[-0.02em]">
            The Contwre GTM Engine™
          </h2>
          <p className="text-slate">
            A 90-day framework that connects your offer, channels, and sales process into one compounding system.
          </p>
        </motion.div>

        {/* Four Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-6 group hover:scale-105 transition-transform duration-300"
            >
              <span className="text-sand text-xs font-medium mb-2 block">
                {phase.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mint transition-colors">
                {phase.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GTMEngine
