// "use client";

// import { useEffect, useRef, useState } from "react";

// const services = [
//   {
//     id: 1,
//     title: "Hospitals & Healthcare Institutions",
//     desc: "Comprehensive, high-volume supply solutions for multi-specialty hospitals, nursing homes, and day-care centers - with dedicated account management and scheduled replenishment.",
//     image: "/service/service1.png",
//     icon: "🏥",
//   },
//   {
//     id: 2,
//     title: "Pharmacies & Retail Chains",
//     desc: "Fast, reliable medicine supply for standalone pharmacies and retail chains, with competitive margins and consistent stock availability of fast-moving products.",
//     image: "/service/service2.png",
//     icon: "💊",
//   },
//   {
//     id: 3,
//     title: "Diagnostic Centers & Labs",
//     desc: "Specialized supply of reagents, test kits, and consumables for pathology labs and diagnostic imaging centers, with assured cold-chain handling.",
//     image: "/service/service3.png",
//     icon: "🧪",
//   },
//   {
//     id: 4,
//     title: "Import & Export Services",
//     desc: "End-to-end facilitation of international pharmaceutical trade - from regulatory clearances and documentation to customs compliance and global logistics coordination.",
//     image: "/service/service4.png",
//     icon: "✈️",
//   },
//   {
//     id: 5,
//     title: "Warehousing & Logistics",
//     desc: "Temperature-controlled, secure warehousing with real-time inventory management, ensuring full product integrity from inbound receipt to outbound delivery.",
//     image: "/service/service5.png",
//     icon: "📦",
//   },
// ];

// function useFadeInOnView(delay = 0, yFrom = 60) {
//   const [show, setShow] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setShow(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => ref.current && observer.unobserve(ref.current);
//   }, []);
//   const style = {
//     opacity: show ? 1 : 0,
//     transform: show ? "translateY(0)" : `translateY(${yFrom}px)`,
//     transition: `opacity 0.6s ${delay}ms ease-out, transform 0.6s ${delay}ms ease-out`,
//   };
//   return [ref, style] as const;
// }

// export function ServicesSection() {
//   const [sectionRef, sectionAnim] = useFadeInOnView(0, 0);
//   const [headingRef, headingAnim] = useFadeInOnView(100, 40);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 400;
//       scrollContainerRef.current.scrollBy({
//         left: direction === "right" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };
  
//   return (
//     <section 
//       id="services" 
//       className="py-4 bg-gradient-to-b from-white via-[#212C5F]/5 to-white" 
//       ref={sectionRef} 
//       style={sectionAnim}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         {/* Header */}
//         <div className="mb-16 md:mb-24">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
//             <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
//               Our Services
//             </p>
//           </div>
          
//           <h2 
//             ref={headingRef}
//             style={headingAnim}
//             className="text-5xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
//           >
//             Serving Every Segment of Healthcare
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed">
//             Whether you run a multi-specialty hospital or a standalone pharmacy, our distribution services are designed to fit your exact needs with precision and reliability.
//           </p>
          
//         </div>

//         {/* Scrolling Services Container */}
//         <div 
//           ref={scrollContainerRef}
//           className="overflow-x-auto scrollbar-hide"
//         >
//           <div className="flex gap-6 pb-4">
//             {services.map((service, idx) => (
//               <div
//                 key={service.id}
//                 className="flex-shrink-0 w-full sm:w-96"
//               >
//                 <div className="group h-full bg-white border border-gray-200/60 rounded-3xl overflow-hidden hover:border-teal-300/60 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 backdrop-blur-sm">
                  
//                   {/* Image Container */}
//                   <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#E8EAFD] to-[#F0F4FF]">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 md:p-7">
                    
//                     {/* Number Badge */}
//                     <div 
//                       className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#212C5F] to-[#1A2250] text-white font-bold text-sm mb-4 shadow-lg"
//                     >
//                       {String(idx + 1).padStart(2, "0")}
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#212C5F] transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
//                       {service.desc}
//                     </p>

//                     {/* CTA */}
//                     {/* <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
//                       <span>Learn More</span>
//                       <span className="text-lg">→</span>
//                     </div> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-3 mt-3">
//           <button
//             onClick={() => scroll("left")}
//             className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 hover:border-[#212C5F] bg-white hover:bg-[#E8EAFD] flex items-center justify-center transition-all duration-300 group"
//           >
//             <span className="text-gray-600 group-hover:text-[#212C5F] text-xl transition-colors">←</span>
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 hover:border-[#212C5F] bg-white hover:bg-[#E8EAFD] flex items-center justify-center transition-all duration-300 group"
//           >
//             <span className="text-gray-600 group-hover:text-[#212C5F] text-xl transition-colors">→</span>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }

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
      <div className="h-full bg-white rounded-xl overflow-hidden shadow-xs border-px border-gray-100/50 relative">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Number Badge */}
          {/* <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#212C5F] to-[#1A2250] text-white font-bold text-sm mb-4 shadow-md">
            {String(service.id).padStart(2, "0")}
          </div> */}

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed font-light">
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
      className="py-5 relative overflow-hidden"
      ref={sectionRef} 
      style={sectionAnim}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
              Our Services
            </p>
          </div>
          
          <h2 
            ref={headingRef}
            style={headingAnim}
            className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 leading-tight tracking-tight max-w-4xl"
          >
            Serving Every Segment of Healthcare
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed">
            Whether you run a multi-specialty hospital or a standalone pharmacy, our distribution services are designed to fit your exact needs with precision and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6">
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