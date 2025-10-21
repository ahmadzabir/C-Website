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
    <section className="section-spacing relative overflow-hidden w-full">
      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10 mb-4">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text-white mb-1">
            Trusted by founders who scale
          </h2>
        </div>
      </div>

      {/* Optimized Infinite Scrolling Logo Carousel */}
      <div className="relative w-full overflow-hidden py-6 carousel-container pointer-events-none select-none">
        <div className="carousel-track">
          {/* Single set of logos with CSS duplication */}
          {clients.map((client, index) => (
            <div
              key={`logo-${index}`}
              className="carousel-item flex items-center justify-center"
            >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="object-contain brightness-100 contrast-100 filter max-w-full max-h-full opacity-80"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
            </div>
          ))}
        </div>
      </div>

      {/* Optimized CSS for faster carousel */}
      <style jsx>{`
        .carousel-container {
          mask: linear-gradient(to right, 
            transparent 0%, 
            black 30%, 
            black 70%, 
            transparent 100%
          );
          -webkit-mask: linear-gradient(to right, 
            transparent 0%, 
            black 30%, 
            black 70%, 
            transparent 100%
          );
        }
        
        .carousel-track {
          display: flex;
          width: 200%;
          animation: infiniteScroll 30s linear infinite;
          gap: 3rem;
          will-change: transform;
        }
        
        .carousel-item {
          flex: 0 0 auto;
          width: 12rem;
          height: 5rem;
        }
        
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Optimize for performance */
        .carousel-track {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}

export default ProofTrustBar