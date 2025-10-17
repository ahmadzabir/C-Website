import React from 'react'
import { motion } from 'framer-motion'

function Results() {
  const stats = [
    { value: "3.2x", label: "Average ROAS improvement" },
    { value: "67%", label: "Faster sales cycles" },
    { value: "89%", label: "Client retention rate" },
    { value: "50+", label: "Brands served" }
  ]

  const testimonials = [
    {
      quote: "Contwre didn't just run our marketing—they built our entire revenue system. From cold outbound to sales enablement, they own the full funnel.",
      author: "Sarah Chen",
      role: "Founder, TechFlow",
      result: "3.5x pipeline growth in 90 days"
    },
    {
      quote: "Finally, an agency that cares about actual revenue, not vanity metrics. Our LTV improved 2.8x and payback period dropped to 4 months.",
      author: "Marcus Rodriguez", 
      role: "CEO, GrowthCo",
      result: "2.8x LTV improvement"
    }
  ]

  return (
    <section id="results" className="py-18 px-5">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-mint font-bold text-xs tracking-[0.12em] uppercase mb-3">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
            Real results from real brands.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white/4 border border-white/8 p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-mint transition-colors">
                {stat.value}
              </div>
              <div className="text-slate text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-glass p-6 group hover:scale-105 transition-transform duration-300"
            >
              <blockquote className="text-white text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-white/8 pt-4">
                <div className="font-bold text-white">
                  {testimonial.author}
                </div>
                <div className="text-slate text-sm mb-2">
                  {testimonial.role}
                </div>
                <div className="inline-block px-3 py-1 bg-mint/20 text-mint text-xs rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
