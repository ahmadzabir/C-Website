import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const teamPhotos = [
    { name: "Model 1", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 2", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 3", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 4", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 5", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 6", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 7", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    { name: "Model 8", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-bgSecondary via-bg to-bgSecondary border-t border-white/20">
      {/* Enhanced Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue to-mint to-transparent opacity-60" />
      
      <div className="py-16 px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Left Column - Brand, CTA, Certifications, Clients */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Brand Identity - 10% smaller */}
              <div className="flex items-center">
                <motion.img 
                  loading="lazy"
                  src="/assets/contwre-logo-white.png"
                  alt="Contwre Logo"
                  className="h-12 w-auto"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>


              {/* Team Photos */}
              <div>
                <p className="text-body-secondary text-sm mb-4 font-medium">Meet our team</p>
                <div className="relative">
                  {/* Stacked Team Photos */}
                  <div className="flex items-center">
                    {teamPhotos.slice(0, 6).map((member, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        style={{ marginLeft: index > 0 ? '-12px' : '0' }}
                      >
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 group cursor-pointer relative z-10 ring-2 ring-yellow-400/30 ring-offset-1 ring-offset-bg">
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Live Indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-bg flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                  
                  {/* Live Text */}
                  <motion.div
                    className="absolute -bottom-6 left-0 text-xs text-green-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Live now
                  </motion.div>
                </div>
              </div>

              {/* Founder Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400/30">
                    <img 
                      src="/assets/founder-together.jpg" 
                      alt="Ahmad & Zahra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Founder-led by Ahmad & Zahra</h3>
                    <p className="text-body-secondary text-sm">8+ years building and scaling sales systems across industries.</p>
                    <p className="text-body-secondary text-sm">Fractional GTM consultant and co-founder of Contwre.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description, Lead Gen, Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Company Description */}
              <div>
                <p className="text-lg text-body-secondary leading-relaxed mb-8">
                  Pakistan's first founder-led, full-service GTM enablement agency. 
                  We design and run end-to-end acquisition systems: outbound, performance marketing, 
                  and sales enablement - anything that gets you to money.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-400/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20">
                <h3 className="text-white font-semibold text-lg mb-3">Ready to scale your revenue?</h3>
                <p className="text-body-secondary text-sm mb-4">Get your custom GTM audit and revenue optimization plan.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-full text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <span>Claim Your Free GTM Audit</span>
                  <span className="text-lg">→</span>
                </motion.button>
                <p className="text-white/60 text-xs mt-2 text-center">
                  Fully custom with no meeting required
                </p>
              </div>


            </motion.div>
          </div>
          
          {/* Bottom Copyright */}
          <motion.div 
            className="border-t border-white/10 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-body-secondary">
              © {new Date().getFullYear()} Contwre. Pakistan's first founder-led GTM enablement agency.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
