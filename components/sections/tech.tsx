"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Hospitals & Healthcare Institutions",
    description:
      "Comprehensive, high-volume supply solutions for multi-specialty hospitals, nursing homes, and day-care centers-with dedicated account management and scheduled replenishment.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <rect
          x="6"
          y="4"
          width="28"
          height="32"
          rx="2"
          stroke="#212C5F"
          strokeWidth="1.4"
          fill="none"
        />
        <line
          x1="14"
          y1="20"
          x2="26"
          y2="20"
          stroke="#212C5F"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="14"
          x2="20"
          y2="26"
          stroke="#212C5F"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect
          x="12"
          y="28"
          width="16"
          height="2"
          rx="1"
          fill="#212C5F"
          opacity="0.25"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pharmacies & Retail Chains",
    description:
      "Fast, reliable medicine supply for standalone pharmacies and retail chains, with competitive margins and consistent stock availability of fast-moving products.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <rect
          x="6"
          y="10"
          width="28"
          height="22"
          rx="2"
          stroke="#212C5F"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M13 10 V7 Q20 4 27 7 V10"
          stroke="#212C5F"
          strokeWidth="1.4"
          fill="none"
        />
        <line
          x1="12"
          y1="18"
          x2="28"
          y2="18"
          stroke="#212C5F"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <line
          x1="12"
          y1="23"
          x2="22"
          y2="23"
          stroke="#212C5F"
          strokeWidth="1.2"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Diagnostic Centers & Labs",
    description:
      "Specialized supply of reagents, test kits, and consumables for pathology labs and diagnostic imaging centers, with assured cold-chain handling.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <path
          d="M16 8 L16 22 L9 34 L31 34 L24 22 L24 8"
          stroke="#212C5F"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="12"
          y1="8"
          x2="28"
          y2="8"
          stroke="#212C5F"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="14" cy="28" r="1.5" fill="#212C5F" opacity="0.4" />
        <circle cx="21" cy="30" r="1" fill="#212C5F" opacity="0.3" />
        <circle cx="26" cy="27" r="1" fill="#212C5F" opacity="0.25" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Import & Export Services",
    description:
      "End-to-end facilitation of international pharmaceutical trade-from regulatory clearances and documentation to customs compliance and global logistics coordination.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke="#212C5F"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M20 7 Q26 13 26 20 Q26 27 20 33"
          stroke="#212C5F"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M20 7 Q14 13 14 20 Q14 27 20 33"
          stroke="#212C5F"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        <line
          x1="7"
          y1="20"
          x2="33"
          y2="20"
          stroke="#212C5F"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <line
          x1="9"
          y1="14"
          x2="31"
          y2="14"
          stroke="#212C5F"
          strokeWidth="1"
          opacity="0.25"
        />
        <line
          x1="9"
          y1="26"
          x2="31"
          y2="26"
          stroke="#212C5F"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Warehousing & Logistics",
    description:
      "Temperature-controlled, secure warehousing with real-time inventory management, ensuring full product integrity from inbound receipt to outbound delivery.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <path
          d="M4 18 L20 8 L36 18 L36 34 L4 34 Z"
          stroke="#212C5F"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="15"
          y="24"
          width="10"
          height="10"
          rx="1"
          stroke="#212C5F"
          strokeWidth="1.2"
          fill="none"
        />
        <line
          x1="4"
          y1="18"
          x2="36"
          y2="18"
          stroke="#212C5F"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    ),
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

function SplitHeading({
  text,
  inView,
  baseDelay = 0,
}: {
  text: string;
  inView: boolean;
  baseDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.55s ease ${baseDelay + i * 65}ms, transform 0.55s ease ${baseDelay + i * 65}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.12);

  return (
    <div
      ref={ref}
      className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-7 flex flex-col overflow-hidden cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(36px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
        border: "1px solid rgba(33,44,95,0.08)",
        boxShadow:
          "0 2px 20px 0 rgba(33,44,95,0.06), 0 1px 4px 0 rgba(33,44,95,0.04)",
      }}
    >
      {/* Top accent line that animates width on entry */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]/50 rounded-t-2xl"
        style={{
          width: inView ? "100%" : "0%",
          transition: `width 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 90 + 200}ms`,
        }}
      />

      {/* Number + Icon row */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="text-[11px] font-bold tracking-[0.2em] text-[#212C5F]/40 uppercase"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.5s ease ${index * 90 + 150}ms`,
          }}
        >
          {service.number}
        </span>
        {/* <div
          className="group-hover:scale-110 transition-transform duration-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView
              ? "rotate(0deg) scale(1)"
              : "rotate(-10deg) scale(0.6)",
            transition: `opacity 0.5s ease ${index * 90 + 220}ms, transform 0.5s ease ${index * 90 + 220}ms`,
          }}
        >
          {service.icon}
        </div> */}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold text-[#18181B] mb-3 leading-snug"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-10px)",
          transition: `opacity 0.55s ease ${index * 90 + 180}ms, transform 0.55s ease ${index * 90 + 180}ms`,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-neutral-500 leading-relaxed mt-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 0.55s ease ${index * 90 + 260}ms, transform 0.55s ease ${index * 90 + 260}ms`,
        }}
      >
        {service.description}
      </p>

      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(74,91,159,0.07) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}

function SectionHeader() {
  const { ref, inView } = useInView(0.2);

  return (
    // <div ref={ref} className="text-center mb-4">
    //   {/* Label with lines */}
    //   <div
    //     className="inline-flex items-center gap-3 mb-5"
    //     style={{
    //       opacity: inView ? 1 : 0,
    //       transform: inView ? "translateY(0)" : "translateY(12px)",
    //       transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
    //     }}
    //   >
    //     <span
    //       className="block h-px bg-[#212C5F]/35"
    //       style={{
    //         width: inView ? "28px" : "0px",
    //         transition: "width 0.6s ease 200ms",
    //       }}
    //     />
    //     <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#212C5F]/55">Our Services</p>
    //     <span
    //       className="block h-px bg-[#212C5F]/35"
    //       style={{
    //         width: inView ? "28px" : "0px",
    //         transition: "width 0.6s ease 200ms",
    //       }}
    //     />
    //   </div>

    //   {/* Heading word-by-word */}
    //   <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-5 leading-tight">
    //     <span className="block">
    //       <SplitHeading text="Serving Every Segment" inView={inView} baseDelay={80} />
    //     </span>
    //     <span className="block">
    //       <SplitHeading text="of Healthcare" inView={inView} baseDelay={320} />
    //     </span>
    //   </h2>

    //   {/* Subtext */}
    //   <p
    //     className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed"
    //     style={{
    //       opacity: inView ? 1 : 0,
    //       transform: inView ? "translateY(0)" : "translateY(14px)",
    //       transition: "opacity 0.6s ease 500ms, transform 0.6s ease 500ms",
    //     }}
    //   >
    //     From hospitals and pharmacies to diagnostic labs and global trade, Panasea delivers tailored solutions for every healthcare need.
    //   </p>

    //   {/* Animated underline divider */}
    //   <div className="flex justify-center mt-8">
    //     <div
    //       className="h-px bg-gradient-to-r from-transparent via-[#212C5F]/25 to-transparent"
    //       style={{
    //         width: inView ? "160px" : "0px",
    //         transition: "width 0.9s cubic-bezier(0.22,1,0.36,1) 420ms",
    //       }}
    //     />
    //   </div>
    // </div>
    <div className="px-6 py-12 md:px-10 lg:px-20 lg:py-20 lg:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[#212C5F] font-bold mb-6"
        >
          Our Services
        </motion.p>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl leading-tight mb-8 text-gray-900">
          {["Serving", "Every", "Segment"].map((word, idx) => {
            return (
              <motion.span
                key={idx}
                className="inline-block mr-3"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {word}
              </motion.span>
            );
          })}
          <br />
          {["of", "Healthcare"].map((word, idx) => {
            return (
              <motion.span
                key={`line2-${idx}`}
                className="inline-block mr-3"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: (idx + 4.5) * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 leading-relaxed text-muted-foreground text-md text-center"
        >
          Whether you run a multi-specialty hospital or a standalone pharmacy,
          our distribution services are designed to fit your exact needs.
        </motion.p>
      </motion.div>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section
      id="services"
      className="relative py-5"
      style={{
        background:
          "linear-gradient(135deg, #F5F1EB 0%, #f7f6f3 50%, #e9e6e1 100%)",
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
