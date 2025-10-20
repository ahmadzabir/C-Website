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
    <section className="relative py-20 overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-white mb-4">
            Trusted by founders who scale
          </h2>
          <p className="text-lg text-slateLight max-w-2xl mx-auto">
            From SaaS startups to established e-commerce brands, we've helped 50+ businesses build revenue systems that compound.
          </p>
        </motion.div>

        {/* Infinite Scrolling Logo Carousel with Opacity Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden py-12 carousel-container"
        >
          <div className="carousel-track">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${client.name}-${index}`}
                className="carousel-item group"
              >
                <div className="w-full h-full rounded-lg border flex items-center justify-center transition-all duration-200 bg-white/20 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 p-2">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain brightness-110 contrast-110 filter transition-all duration-200 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150 max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${client.name}-${index}`}
                className="carousel-item group"
              >
                <div className="w-full h-full rounded-lg border flex items-center justify-center transition-all duration-200 bg-white/20 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 p-2">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain brightness-110 contrast-110 filter transition-all duration-200 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150 max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-slateLight text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>50+ brands served</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>5 countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>89% retention rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>3.2x avg ROAS</span>
            </div>
          </div>
        </motion.div>

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
          
          /* Pause animation on hover */
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </section>
  )
}

export default ProofTrustBar