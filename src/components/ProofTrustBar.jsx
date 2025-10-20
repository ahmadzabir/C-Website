import React from 'react'
import { motion } from 'framer-motion'

function ProofTrustBar() {
  const clients = [
    { name: "6 Pack Macros", logo: "/assets/client-logos/6_Pack_Macros.png" },
    { name: "Classic Programmers", logo: "/assets/client-logos/Classic_Programmers.png" },
    { name: "Coupon Upto", logo: "/assets/client-logos/Coupon_Upto.png" },
    { name: "Daud Abbas", logo: "/assets/client-logos/Daud_Abbas.png" },
    { name: "EvoNews", logo: "/assets/client-logos/EvoNews.png" },
    { name: "Fit Fetish", logo: "/assets/client-logos/Fit_Fetish.png" },
    { name: "Genius", logo: "/assets/client-logos/Genius.png" },
    { name: "Mandujour", logo: "/assets/client-logos/Mandujour.png" },
    { name: "Stuart Andrews", logo: "/assets/client-logos/Stuart_Andrews.png" },
    { name: "TheHexaTown", logo: "/assets/client-logos/TheHexaTown.png" },
    { name: "Vigor Wolf", logo: "/assets/client-logos/Vigor_Wolf.png" }
  ]

  return (
    <section className="relative py-12 overflow-hidden w-full">
      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text-white mb-1">
            Trusted by founders who scale
          </h2>
          <p className="text-sm text-white/70 max-w-lg mx-auto">
            From SaaS startups to established e-commerce brands, we've helped 50+ businesses build revenue systems that compound.
          </p>
        </motion.div>
      </div>

      {/* Full Width Infinite Scrolling Logo Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden py-6 carousel-container pointer-events-none select-none"
      >
          <div className="carousel-track">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${client.name}-${index}`}
                className="carousel-item"
              >
                <div className="w-full h-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain brightness-110 contrast-110 filter max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${client.name}-${index}`}
                className="carousel-item"
              >
                <div className="w-full h-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain brightness-110 contrast-110 filter max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

		{/* Trust Indicators removed as requested */}

        {/* CSS for the carousel */}
        <style jsx>{`
          .carousel-container {
            mask: linear-gradient(to right, 
              transparent 0%, 
              black 40%, 
              black 60%, 
              transparent 100%
            );
            -webkit-mask: linear-gradient(to right, 
              transparent 0%, 
              black 40%, 
              black 60%, 
              transparent 100%
            );
          }
          
          .carousel-track {
            display: flex;
            width: calc(200% + 12rem);
            animation: infiniteScroll 45s linear infinite;
            gap: 2rem;
          }
          
          .carousel-item {
            flex: 0 0 auto;
            width: 10rem;
            height: 4rem;
          }
          
          @keyframes infiniteScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

    </section>
  )
}

export default ProofTrustBar