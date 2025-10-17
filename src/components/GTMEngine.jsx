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
    <section id="engine" className="section-spacing">
      <div className="w-full max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-mint font-bold text-sm tracking-[0.12em] uppercase mb-4">
            Signature system
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-[-0.02em]">
            The Contwre GTM Engine™
          </h2>
          <p className="text-xl text-slateLight max-w-3xl mx-auto">
            A 90-day framework that connects your offer, channels, and sales process into one compounding system.
          </p>
        </motion.div>

        {/* Four Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-8 group hover:scale-105 transition-all duration-300"
            >
              <span className="text-sand text-sm font-semibold mb-3 block">
                {phase.number}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-mint transition-colors">
                {phase.title}
              </h3>
              <p className="text-slateLight leading-relaxed">
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
