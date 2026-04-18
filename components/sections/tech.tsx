"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Hospitals & Healthcare Institutions",
    description:
      "Comprehensive, high-volume supply solutions for multi-specialty hospitals, nursing homes, and day-care centers-with dedicated account management and scheduled replenishment.",
    tag: "High-Volume Supply",
  },
  {
    title: "Pharmacies & Retail Chains",
    description:
      "Fast, reliable medicine supply for standalone pharmacies and retail chains, with competitive margins and consistent stock availability of fast-moving products.",
    tag: "Retail Ready",
  },
  {
    title: "Diagnostic Centers & Labs",
    description:
      "Specialized supply of reagents, test kits, and consumables for pathology labs and diagnostic imaging centers, with assured cold-chain handling.",
    tag: "Cold-Chain",
  },
  {
    title: "Import & Export Services",
    description:
      "End-to-end facilitation of international pharmaceutical trade-from regulatory clearances and documentation to customs compliance and global logistics coordination.",
    tag: "Global Trade",
  },
  {
    title: "Warehousing & Logistics",
    description:
      "Temperature-controlled, secure warehousing with real-time inventory management, ensuring full product integrity from inbound receipt to outbound delivery.",
    tag: "Real-Time Tracking",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative h-full overflow-hidden rounded-2xl cursor-default"
      style={{
        background: "rgba(255,255,255,0.75)",
        border: "0.5px solid rgba(33,44,95,0.10)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#212C5F]/[0.03] to-[#4A5B9F]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Left accent line on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-[#4A5B9F] to-[#212C5F] opacity-0 group-hover:opacity-100 transition-all duration-400" />

      {/* Top-right corner orb */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#4A5B9F]/08 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {/* Number + separator row */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#212C5F]/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-[#4A5B9F]/30 via-[#4A5B9F]/15 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Title */}
        <h3 className="text-[15px] md:text-base font-regular text-[#212C5F] leading-snug mb-3 group-hover:text-[#1a2350] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-[13px] text-neutral-600 leading-relaxed mb-auto font-light group-hover:text-neutral-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Tag */}
        <div className="flex items-center gap-2.5 mt-6 pt-5 border-t border-[#212C5F]/06">
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#4A5B9F] to-[#7b8ec8] flex-shrink-0"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(74,91,159,0.6)",
                "0 0 0 5px rgba(74,91,159,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.3,
            }}
          />
          <span className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#212C5F]">
            {service.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-12 md:mb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
        className="inline-block mb-7 relative"
      >
        <motion.span
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#4A5B9F] block py-1 px-4"
          whileHover={{ letterSpacing: "0.5em" }}
          transition={{ duration: 0.3 }}
        >
          Our Services
        </motion.span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl  font-regular tracking-tighter leading-tight text-gray-900 mb-5"
      >
        Serving Every Segment{" "}
        
        <span className="service-shimmer-text inline-block"> of Healthcare</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ originX: "center" }}
        className="w-12 h-1 bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] mx-auto mb-4 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light"
      >
        Whether you run a multi-specialty hospital or a standalone pharmacy,
        our distribution services are designed to fit your exact needs.
      </motion.p>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F7F5F0 0%, #FAF9F7 50%, #F5F1EB 100%)",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Background orbs */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(33,44,95,0.08) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-20 -right-28 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,91,159,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        <SectionHeader />

        {/* Cards grid - 5 cards: 3 top row, 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={i + 3} service={service} index={i + 3} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-shimmer-text {
          background: linear-gradient(
            100deg,
            #212c5f 0%,
            #4a5b9f 45%,
            #7b8ec8 70%,
            #212c5f 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-text 4s linear infinite;
        }

        @keyframes shimmer-text {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}