import React from 'react'
import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      title: "Cold Outbound Engine",
      subtitle: "ICP research, copywriting, multichannel sequences",
      icon: "📧",
      color: "from-blue to-blueLight"
    },
    {
      title: "Performance Marketing", 
      subtitle: "Meta, Google, TikTok, CRO, attribution",
      icon: "📊",
      color: "from-mint to-mintLight"
    },
    {
      title: "Sales Enablement",
      subtitle: "CRM setup, team training, objection handling", 
      icon: "🎯",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Retention & LTV",
      subtitle: "Email, SMS, loyalty, pricing strategy",
      icon: "🔄",
      color: "from-teal-400 to-emerald-500"
    },
    {
      title: "Growth Marketing",
      subtitle: "Full-funnel optimization, scaling strategies",
      icon: "📈",
      color: "from-blueLight to-mint"
    },
    {
      title: "Inbound Marketing",
      subtitle: "SEO, content systems, lead generation",
      icon: "🎣",
      color: "from-teal-400 to-emerald-500"
    },
    {
      title: "Influencer Marketing",
      subtitle: "Partnership development, campaign management",
      icon: "🌟",
      color: "from-blue to-blueLight"
    },
    {
      title: "Personal Branding",
      subtitle: "Thought leadership, content positioning",
      icon: "👤",
      color: "from-mintLight to-mint"
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
          <p className="text-emerald-400 font-bold text-sm tracking-[0.12em] uppercase mb-4">
            What We Do
          </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-[-0.02em]">
                  <span className="gradient-text-white">One-stop GTM… </span>
                  <span className="gradient-text-emerald">anything that brings revenue through the door.</span>
                </h2>
          <p className="text-xl text-slateLight max-w-3xl mx-auto mb-8">
            Every Growth Channel, <span className="gradient-text-emerald">One Agency</span>
          </p>
        </motion.div>

        {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glass p-10 group-hover:scale-105 transition-all duration-500 group-hover:shadow-glass-lg relative overflow-hidden h-full flex flex-col">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slateLight text-lg leading-relaxed flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {service.subtitle}
                </motion.p>
                
                {/* Progress Bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
