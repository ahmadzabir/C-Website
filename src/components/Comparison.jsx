import React from 'react'
import { motion } from 'framer-motion'

function Comparison() {
  const features = [
    {
      feature: "Full GTM System Design (Offer → Retention)",
      contwre: true,
      salesAgencies: false,
      marketingAgencies: false
    },
    {
      feature: "Founder-Led Strategy & Execution",
      contwre: true,
      salesAgencies: false,
      marketingAgencies: false
    },
    {
      feature: "Outbound + Ads + Inbound, All in One System",
      contwre: true,
      salesAgencies: "partial",
      marketingAgencies: "partial"
    },
    {
      feature: "Sales Enablement + Marketing Alignment",
      contwre: true,
      salesAgencies: "partial",
      marketingAgencies: false
    },
    {
      feature: "Clay + Smartlead-Powered Personalization",
      contwre: true,
      salesAgencies: true,
      marketingAgencies: false
    },
    {
      feature: "Paid Growth (Meta, Google, TikTok, LinkedIn)",
      contwre: true,
      salesAgencies: false,
      marketingAgencies: true
    },
    {
      feature: "Creative, Copy, and Funnel Ownership",
      contwre: true,
      salesAgencies: "partial",
      marketingAgencies: true
    },
    {
      feature: "Real-Time Experimentation Loops",
      contwre: true,
      salesAgencies: "partial",
      marketingAgencies: "partial"
    },
    {
      feature: "Performance Analytics + Attribution Setup",
      contwre: true,
      salesAgencies: "partial",
      marketingAgencies: true
    },
    {
      feature: "In-House Team Enablement & Training",
      contwre: true,
      salesAgencies: false,
      marketingAgencies: false
    },
    {
      feature: "Long-Term Compounding Systems (Not Campaigns)",
      contwre: true,
      salesAgencies: false,
      marketingAgencies: false
    }
  ]

  return (
    <section className="section-spacing">
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-white mb-6">
            How Contwre Works Differently
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Most agencies pick a side.<br />
            Sales agencies chase meetings. Marketing agencies chase clicks.<br />
            Contwre builds the entire revenue engine that connects both.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-transparent p-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-2">Features</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
              </motion.div>
            </div>
            <motion.div 
              className="card-glass p-6 text-center relative overflow-hidden group hover:border-emerald-400/30 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <img 
                  src="/assets/contwre-logo-white.png" 
                  alt="Contwre Logo" 
                  className="h-12 w-auto mx-auto"
                />
              </div>
            </motion.div>
            <motion.div 
              className="card-glass p-5 text-center relative overflow-hidden group hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-8 h-8 bg-white/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs text-white/80 font-semibold">Sales Agencies</p>
              </div>
            </motion.div>
            <motion.div 
              className="card-glass p-5 text-center relative overflow-hidden group hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-8 h-8 bg-white/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 16l4-4 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-white/80 font-semibold">Marketing Agencies</p>
              </div>
            </motion.div>
          </div>

          {/* Feature Rows */}
          <div className="space-y-2">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-3 group"
              >
                {/* Feature Name */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-white font-medium text-xs leading-relaxed">
                      {item.feature}
                    </p>
                  </div>
                </motion.div>

                {/* Contwre */}
                <motion.div 
                  className={`card-glass p-3 flex items-center justify-center relative overflow-hidden ${
                    item.contwre 
                      ? 'bg-gradient-to-br from-blue/10 to-mint/10' 
                      : 'bg-white/5'
                  } group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.contwre ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                        <span className="text-red-400 font-bold text-xs">✗</span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Sales Agencies */}
                <motion.div 
                  className={`card-glass p-3 flex items-center justify-center relative overflow-hidden ${
                    item.salesAgencies === true 
                      ? 'bg-blue/10' 
                      : item.salesAgencies === 'partial'
                      ? 'bg-yellow-500/10'
                      : 'bg-white/5'
                  } group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.salesAgencies === true ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue/40 rounded-full flex items-center justify-center">
                        <span className="text-blue-200 font-bold text-xs">✓</span>
                      </div>
                    </div>
                  ) : item.salesAgencies === 'partial' ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-yellow-500/40 rounded-full flex items-center justify-center">
                        <span className="text-yellow-200 font-bold text-xs">⚪</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                        <span className="text-red-400 font-bold text-xs">✗</span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Marketing Agencies */}
                <motion.div 
                  className={`card-glass p-3 flex items-center justify-center relative overflow-hidden ${
                    item.marketingAgencies === true 
                      ? 'bg-green/10' 
                      : item.marketingAgencies === 'partial'
                      ? 'bg-yellow-500/10'
                      : 'bg-white/5'
                  } group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.marketingAgencies === true ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500/40 rounded-full flex items-center justify-center">
                        <span className="text-green-200 font-bold text-xs">✓</span>
                      </div>
                    </div>
                  ) : item.marketingAgencies === 'partial' ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-yellow-500/40 rounded-full flex items-center justify-center">
                        <span className="text-yellow-200 font-bold text-xs">⚪</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                        <span className="text-red-400 font-bold text-xs">✗</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-full text-sm tracking-wide flex items-center mx-auto gap-2 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 mb-3 relative overflow-hidden"
          >
            <span>Claim Your Free GTM Audit</span>
            <span className="text-lg">→</span>
          </motion.button>
          <p className="text-white/70 text-xs mb-1">
            Fully custom with no meeting required
          </p>
          <p className="text-white/50 text-xs">
            Includes: ICP analysis, funnel audit, revenue optimization plan and more
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
