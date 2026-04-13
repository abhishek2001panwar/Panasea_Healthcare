"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Hospitals & Healthcare Institutions",
    desc: "Comprehensive, high-volume supply solutions for multi-specialty hospitals, nursing homes, and day-care centers - with dedicated account management and scheduled replenishment.",
    image: "/service/service1.png",
    icon: "🏥",
  },
  {
    id: 2,
    title: "Pharmacies & Retail Chains",
    desc: "Fast, reliable medicine supply for standalone pharmacies and retail chains, with competitive margins and consistent stock availability of fast-moving products.",
    image: "/service/service2.png",
    icon: "💊",
  },
  {
    id: 3,
    title: "Diagnostic Centers & Labs",
    desc: "Specialized supply of reagents, test kits, and consumables for pathology labs and diagnostic imaging centers, with assured cold-chain handling.",
    image: "/service/service3.png",
    icon: "🧪",
  },
  {
    id: 4,
    title: "Import & Export Services",
    desc: "End-to-end facilitation of international pharmaceutical trade - from regulatory clearances and documentation to customs compliance and global logistics coordination.",
    image: "/service/service4.png",
    icon: "✈️",
  },
  {
    id: 5,
    title: "Warehousing & Logistics",
    desc: "Temperature-controlled, secure warehousing with real-time inventory management, ensuring full product integrity from inbound receipt to outbound delivery.",
    image: "/service/service5.png",
    icon: "📦",
  },
];

function useFadeInOnView(delay = 0, yFrom = 60) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);
  
  const style = {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : `translateY(${yFrom}px)`,
    transition: `opacity 0.7s ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
  };
  
  return [ref, style] as const;
}

function ServiceCard({ service, index }) {
  const [cardRef, cardAnim] = useFadeInOnView(50 + index * 80, 60);

  return (
    <div
      ref={cardRef}
      style={cardAnim}
      className="h-full"
    >
      <div className="h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-gray-100/50 hover:shadow-lg hover:border-gray-200/80 transition-all duration-300 relative group">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gray-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6">
          {/* Number Badge */}
          <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#212C5F] to-[#1A2250] text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 shadow-md">
            {String(service.id).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-snug tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed font-light">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [sectionRef, sectionAnim] = useFadeInOnView(0, 0);
  const [headingRef, headingAnim] = useFadeInOnView(100, 40);

  return (
    <section 
      id="services" 
      className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 "
      ref={sectionRef} 
      style={sectionAnim}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
            <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-[#212C5F]">
              Our Services
            </p>
          </div>
          
          {/* Heading */}
          <h2 
            ref={headingRef}
            style={headingAnim}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-950 mb-3 sm:mb-4 md:mb-5 leading-tight tracking-tight max-w-4xl"
          >
            Serving Every Segment of Healthcare
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl font-light leading-relaxed">
            Whether you run a multi-specialty hospital or a standalone pharmacy, our distribution services are designed to fit your exact needs with precision and reliability.
          </p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}