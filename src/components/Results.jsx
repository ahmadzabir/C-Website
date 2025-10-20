import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCounterAnimation, useStaggeredAnimation } from '../hooks/useCursorEffects'

function Results() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const stats = [
    { value: 3.2, suffix: "x", label: "Average ROAS improvement", color: "from-emerald-500 to-emerald-400" },
    { value: 67, suffix: "%", label: "Faster sales cycles", color: "from-teal-500 to-teal-400" },
    { value: 89, suffix: "%", label: "Client retention rate", color: "from-emerald-500 to-teal-400" },
    { value: 50, suffix: "+", label: "Brands served", color: "from-teal-400 to-emerald-400" }
  ]

  const testimonials = [
    {
      quote: "Contwre didn't just run our marketing - they built our entire revenue system. From cold outbound to sales enablement, they own the full funnel.",
      author: "Ahmad Hassan",
      role: "Founder, 6 Pack Macros",
      result: "3.5x pipeline growth in 90 days",
      metric: "3.5x"
    },
    {
      quote: "Finally, an agency that cares about actual revenue, not vanity metrics. Our LTV improved 2.8x and payback period dropped to 4 months.",
      author: "Sarah Johnson", 
      role: "CEO, Classic Programmers",
      result: "2.8x LTV improvement",
      metric: "2.8x"
    },
    {
      quote: "We went from struggling to find qualified leads to having a consistent pipeline. Contwre's outbound system delivers 20+ qualified meetings every month.",
      author: "Michael Chen",
      role: "Founder, TechFlow Solutions",
      result: "20+ qualified meetings/month",
      metric: "20+"
    },
    {
      quote: "The ROI speaks for itself. In just 6 months, our customer acquisition cost dropped by 60% while our conversion rate tripled.",
      author: "Emily Rodriguez",
      role: "VP Marketing, GrowthCo",
      result: "60% CAC reduction",
      metric: "60%"
    },
    {
      quote: "Contwre transformed our entire go-to-market strategy. We're not just getting more leads - we're getting the RIGHT leads that actually convert.",
      author: "David Park",
      role: "CEO, InnovateLabs",
      result: "4.2x conversion rate",
      metric: "4.2x"
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
                    {count.toFixed(1)}{stat.suffix}
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

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-slateLight text-sm font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured client success stories
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">6P</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">6 Pack Macros</h4>
                  <p className="text-slateLight text-sm">Fitness & Nutrition</p>
                </div>
              </div>
              <p className="text-slateLight text-sm leading-relaxed">
                "Contwre built our entire revenue system. From cold outbound to sales enablement, they own the full funnel."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">CP</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Classic Programmers</h4>
                  <p className="text-slateLight text-sm">Software Development</p>
                </div>
              </div>
              <p className="text-slateLight text-sm leading-relaxed">
                "Finally, an agency that cares about actual revenue, not vanity metrics. Our LTV improved 2.8x."
              </p>
            </motion.div>
          </div>
        </motion.div>

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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400/30 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-lg">
                          {testimonials[currentTestimonial].author.split(' ').map(name => name[0]).join('')}
                        </span>
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
                    
                    {/* Animated Metric */}
                    <motion.div
                      className="text-3xl font-bold font-mono gradient-text-emerald"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {testimonials[currentTestimonial].metric}
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 text-emerald-400 text-sm rounded-full border border-emerald-400/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {testimonials[currentTestimonial].result}
                  </motion.div>
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