import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How is Contwre different from other agencies?",
      answer: "Most agencies sell campaigns or audits. We build and run complete revenue systems. We don't just create ads—we optimize the entire funnel from awareness to close, then we manage it ongoing. Think of us as your outsourced GTM team, not just your marketing vendor."
    },
    {
      question: "What's your typical engagement model?",
      answer: "We work in 90-day sprints with clear deliverables and KPIs. Most clients start with a GTM audit ($5K), then move to our full engine retainer ($15K-50K/month depending on scope). We can also plug into existing teams or run specific channels (outbound, paid, sales enablement)."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes, but selectively. We work best with companies that have product-market fit and some revenue ($50K+ ARR). If you're still figuring out your offer or ICP, we'll refer you to our network of earlier-stage consultants."
    },
    {
      question: "What industries do you specialize in?",
      answer: "E-commerce and B2B SaaS primarily. We've worked with D2C brands, marketplaces, enterprise software, and everything in between. Our frameworks work across industries, but we're most effective in sectors where performance marketing and sales velocity matter."
    },
    {
      question: "How do you measure success?",
      answer: "Revenue metrics: pipeline created, CAC, LTV, payback period, sales velocity. We track everything from lead quality to close rates. Monthly business reviews with clear attribution. No vanity metrics—if it doesn't impact revenue, we don't optimize for it."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-18 px-5">
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
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
            Common questions, honest answers.
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-4 hover:text-mint transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-mint text-xl"
                >
                  +
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate leading-relaxed pb-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
