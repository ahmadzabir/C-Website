import React, { useState } from 'react'
import { motion } from 'framer-motion'

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', company: '', revenue: '', message: '' })
  }

  return (
    <section id="book" className="py-18 px-5">
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-mint font-bold text-xs tracking-[0.12em] uppercase mb-3">
            Ready to scale?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3 tracking-[-0.02em]">
            Book your free GTM audit.
          </h2>
          <p className="text-slate">
            Get a complete diagnostic of your revenue system—where money's leaking, where it's hiding, and exactly how to fix it.
          </p>
        </motion.div>

        {/* CTA Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="revenue" className="block text-white font-medium mb-2">
                  Current ARR/MRR
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
                >
                  <option value="">Select range</option>
                  <option value="0-50k">$0 - $50K</option>
                  <option value="50k-250k">$50K - $250K</option>
                  <option value="250k-1m">$250K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m+">$5M+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                What's your biggest GTM challenge right now?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your current challenges..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full btn-primary px-8 py-4 rounded-full font-bold text-lg tracking-wide text-ink"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book My Free GTM Audit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
