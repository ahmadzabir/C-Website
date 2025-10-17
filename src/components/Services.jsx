import React from 'react'
import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      title: "Cold Outbound Engine",
      subtitle: "Booked meetings and pipeline, on repeat.",
      features: [
        "ICP research and list building",
        "Cold email, LinkedIn, and call sequences", 
        "Deliverability, domains, and inbox health",
        "Copy that converts, with testing sprints",
        "CRM integration and pipeline hygiene"
      ]
    },
    {
      title: "Performance Marketing",
      subtitle: "Scalable paid traffic that pays for itself.",
      features: [
        "Meta, Google, TikTok ads and creative systems",
        "Offer tests, landing pages, CRO",
        "Attribution, analytics, and payback windows", 
        "Budget allocation and ROAS optimization"
      ]
    },
    {
      title: "Sales Enablement",
      subtitle: "Turn leads into revenue with consistency.",
      features: [
        "Sales process and CRM setup (HubSpot, Pipedrive)",
        "Scripts, objection handling, and follow-up",
        "SDR and closer hiring, training, management",
        "Dashboards, reviews, and accountability cadences"
      ]
    },
    {
      title: "Retention & LTV",
      subtitle: "Make customers worth more… over time.",
      features: [
        "Email and SMS automation",
        "Post-purchase funnels and win-back",
        "Loyalty, referrals, and community",
        "Pricing and expansion strategies"
      ]
    }
  ]

  return (
    <section id="services" className="section-spacing">
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
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-[-0.02em]">
            One-stop GTM… anything that brings revenue through the door.
          </h2>
          <p className="text-xl text-slateLight max-w-3xl mx-auto">
            Choose a pillar or ask us to run the entire engine. We plug into your team or act as it.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-8 group hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-mint transition-colors">
                {service.title}
              </h3>
              <p className="text-slateLight text-lg mb-6">
                {service.subtitle}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-slateLight flex items-start gap-3">
                    <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
