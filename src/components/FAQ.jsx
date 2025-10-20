import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // Default open first FAQ

  const faqs = [
    {
      question: "How is Contwre different from other agencies?",
      answer: "We're founder-led operators who build systems, not just campaigns. While others sell you campaigns or audits, we connect your entire revenue system - offer, channels, and sales process - into one compounding machine. We don't just execute; we engineer your GTM system for sustainable growth."
    },
    {
      question: "What's your typical engagement model?",
      answer: "We work in 90-day cycles with clear phases: Diagnose (weeks 1-2), Design (weeks 3-4), Deploy (weeks 5-8), and Drive (weeks 9-12). You can engage us for specific pillars (outbound, paid, sales enablement) or let us run the entire engine. We integrate directly into your team or act as your GTM function."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes, but selectively. We work with companies that have product-market fit and are ready to scale systematically. If you're still figuring out your core offer or ICP, we'll refer you to our network of early-stage specialists. We're built for companies ready to compound their growth."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in E-commerce and SaaS companies with recurring revenue models. Our systems work best for businesses with clear ICPs, measurable LTV, and scalable acquisition channels. We've worked across B2B SaaS, DTC e-commerce, and marketplace businesses."
    },
    {
      question: "How do you measure success?",
      answer: "We optimize for revenue metrics that matter: pipeline created (not impressions), acquisition cost vs LTV ratios, payback periods, and sales velocity. Every system we build has clear KPIs and weekly reviews. Success means your revenue system compounds without constant intervention."
    }
  ]

  return (
    <section id="faq" className="section-spacing">
      <div className="w-full max-w-5xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-emerald-400 font-bold text-sm tracking-[0.12em] uppercase mb-4">
            Common Questions, Honest Answers
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-[-0.02em]">
            <span className="gradient-text-emerald">FAQ</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className={`card-glass p-8 cursor-pointer transition-all duration-500 group-hover:shadow-glass-lg relative overflow-hidden ${
                  openIndex === index ? 'bg-gradient-to-r from-mint/10 to-blue/10 border-mint/30' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {/* Mint Glow Highlight */}
                {openIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-mint/20 to-blue/20 opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      className={`text-xl font-bold transition-colors duration-300 ${
                        openIndex === index ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                      }`}
                    >
                      {faq.question}
                    </motion.h3>
                    
                    <motion.div
                      className={`text-2xl transition-all duration-300 ${
                        openIndex === index ? 'text-emerald-400 rotate-45' : 'text-slateLight group-hover:text-emerald-400'
                      }`}
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                    >
                      +
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p 
                          className="text-slateLight text-lg leading-relaxed mt-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ