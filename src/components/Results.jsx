import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCounterAnimation, useStaggeredAnimation } from '../hooks/useCursorEffects'

function Results() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const stats = [
    { value: 3.2, suffix: "x", label: "Average ROAS improvement", color: "from-emerald-500 to-emerald-400" },
    { value: 67, suffix: "%", label: "Faster sales cycles", color: "from-teal-500 to-teal-400" },
    { value: 14, suffix: " days", label: "Time to first qualified lead", color: "from-emerald-500 to-teal-400" },
    { value: 50, suffix: "+", label: "Brands served", color: "from-teal-400 to-emerald-400" }
  ]

  const testimonials = [
    {
      quote: "Working with Contwre completely changed how we handled outbound. They helped us build a system that actually worked instead of relying on expensive tools. Within weeks, our pipeline felt alive again and everything became organized.",
      author: "Haider Ali",
      role: "CTO, TheHexaTown",
      result: "70% reduction in outbound costs",
      businessType: "B2B Tech",
      profileImage: "/assets/profile-pictures/Haider_Ali1.jpg",
      whatWeDid: "Built a cold outbound enablement system, trained the team, and reduced outbound costs by over 70%."
    },
    {
      quote: "Contwre helped us finally get profitable with our Meta ads. The strategy, creative direction, and tracking setup made all the difference. They don't just run campaigns, they make sure every ad is moving toward the right goal.",
      author: "Zaryab Tanveer",
      role: "Founder, Celestella",
      result: "Consistent high-ROI performance",
      businessType: "DTC Brand",
      profileImage: "/assets/profile-pictures/Zaryab_Tanveer1.jpg",
      whatWeDid: "Scaled Meta ads for Celestella's e-commerce brand, achieving consistent high-ROI performance and stable repeat purchases."
    },
    {
      quote: "Contwre helped us build a real internal sales and marketing structure. We moved away from freelancers and random contractors to a proper in-house system that actually drives growth. They made sure the team was trained and confident before handing it over.",
      author: "Vladymir Girault",
      role: "Owner, Mandujour",
      result: "Full in-house GTM team",
      businessType: "Luxury Brand",
      profileImage: "/assets/profile-pictures/Vladymir1.avif",
      whatWeDid: "Developed a full in-house GTM team for Mandujour, built sales and marketing systems, and established predictable scaling processes."
    },
    {
      quote: "Contwre worked closely with us to organize our outbound and email marketing systems. They didn't just set things up, they helped our people understand how to run it. We saw results quickly and learned a lot through the process.",
      author: "Hannan Masood",
      role: "CEO, ClassicProgrammers",
      result: "Quick results & team training",
      businessType: "B2B Services",
      profileImage: "/assets/profile-pictures/Hannan_Masood1.jpg",
      whatWeDid: "Set up automated outbound and email marketing systems, trained internal team, and established lead tracking and follow-up processes."
    },
    {
      quote: "The Contwre team completely restructured how we approached SEO and content marketing. Everything became more strategic and easier to manage. The growth in visibility and performance was clear within weeks.",
      author: "Stacy Keibler",
      role: "Marketing Manager, CouponUpto",
      result: "Clear growth in visibility",
      businessType: "E-commerce",
      profileImage: "/assets/profile-pictures/Stacy_K1.webp",
      whatWeDid: "Redesigned CouponUpto's SEO and content systems, improving structure, rankings, and organic growth."
    },
    {
      quote: "Contwre helped us bring our law firm online properly. The ads, lead systems, and strategy were all aligned from day one. We started getting qualified leads consistently and built a real marketing process around them.",
      author: "Faisal Basit",
      role: "Managing Partner, FBS & Co.",
      result: "Qualified leads consistently",
      businessType: "Professional Services",
      profileImage: "/assets/profile-pictures/Faisal_Basit1.jpg",
      whatWeDid: "Built a full B2B lead generation engine for FBS & Co. through ads and automation, improving both lead quality and conversion consistency."
    }
  ]

  const { ref: headerRef, isVisible: headerVisible } = useStaggeredAnimation(0)

  // Auto-slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="results" className="section-spacing relative overflow-hidden">
      {/* Parallax Fog Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30" />
      
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-emerald-400 font-bold text-sm tracking-[0.12em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={headerVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Results
          </motion.p>
          
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold leading-tight tracking-[-0.02em] mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <span className="gradient-text-white">Real results from </span>
                  <span className="gradient-text-emerald">real brands.</span>
                </motion.h2>
        </motion.div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const count = useCounterAnimation(stat.value, headerVisible, 2000)
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="card-glass p-8 text-center group-hover:scale-105 transition-all duration-500 group-hover:shadow-glass-lg relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated Counter */}
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold text-white mb-3 font-mono group-hover:text-emerald-400 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={headerVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    {stat.label === 'Time to first qualified lead' ? (
                      <>
                        {Math.round(count)}
                        <span className="text-2xl align-top ml-1">{stat.suffix.trim()}</span>
                      </>
                    ) : (
                      <>
                        {count.toFixed(1)}{stat.suffix}
                      </>
                    )}
                  </motion.div>
                  
                  <div className="text-slateLight text-sm font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Progress Bar */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={headerVisible ? { width: "100%" } : { width: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>


        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="card-glass p-10 group-hover:scale-[1.02] transition-all duration-500 group-hover:shadow-glass-lg relative overflow-hidden"
              >
                {/* Testimonial Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.blockquote 
                  className="text-white text-xl leading-relaxed mb-8 relative z-10 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.blockquote>
                
                <div className="border-t border-white/10 pt-6 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/30">
                        <img 
                          src={testimonials[currentTestimonial].profileImage} 
                          alt={testimonials[currentTestimonial].author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-slateLight text-sm">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                    
                    {/* Business Type */}
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="text-lg font-semibold gradient-text-emerald mb-1">
                        {testimonials[currentTestimonial].businessType}
                      </div>
                      <div className="text-sm text-slateLight">
                        Business Type
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 text-emerald-400 text-sm rounded-full border border-emerald-400/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {testimonials[currentTestimonial].result}
                    </motion.div>
                    
                    {/* What We Did Section */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-400 text-xs font-bold">✓</span>
                        </div>
                        <div>
                          <p className="text-white/80 text-sm font-medium mb-1">What We Did:</p>
                          <p className="text-slateLight text-sm leading-relaxed">
                            {testimonials[currentTestimonial].whatWeDid}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-emerald-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Results