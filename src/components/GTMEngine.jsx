import React from 'react'
import { motion } from 'framer-motion'

function GTMEngine() {

  return (
    <section id="engine" className="section-spacing relative overflow-hidden isolate">
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text-white">Every business has a different route to revenue.</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slateLight max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            We specialise in enabling your team in finding it.
          </motion.p>

          <motion.div 
            className="text-lg text-slateLight max-w-4xl mx-auto leading-relaxed space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              <span className="gradient-text-emerald font-semibold">For SaaS:</span> full-funnel outbound, inbound, and PLG loops.
            </p>
            <p>
              <span className="gradient-text-emerald font-semibold">For eCommerce:</span> paid growth + retention flywheel.
            </p>
            <p>
              <span className="gradient-text-emerald font-semibold">For services:</span> inbound demand and outbound precision.
            </p>
          </motion.div>

        </motion.div>

              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="relative w-full max-w-4xl mx-auto">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  >
                    <source src={`/assets/Money (2).mp4?v=${Date.now()}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Closing Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-xl font-semibold text-white max-w-4xl mx-auto">
                  <span className="gradient-text-emerald">Tools don't make systems. Systems make revenue.</span>
                </p>
              </motion.div>

      </div>
    </section>
  )
}

export default GTMEngine