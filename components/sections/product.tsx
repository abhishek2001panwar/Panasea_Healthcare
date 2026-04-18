"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Minimalist SVG icons for each product
const PharmaIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="12" y="8" width="40" height="48" rx="4" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    <line x1="22" y1="28" x2="42" y2="28" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="32" y1="18" x2="32" y2="38" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="20" y="42" width="24" height="3" rx="1.5" fill="#212C5F" opacity="0.3"/>
    <rect x="20" y="48" width="16" height="3" rx="1.5" fill="#212C5F" opacity="0.2"/>
  </svg>
);

const DisposablesIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M20 44 L32 20 L44 44" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M24 36 L40 36" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="32" cy="16" r="4" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    <path d="M16 52 L48 52" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const DiagnosticIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <circle cx="28" cy="28" r="14" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    <line x1="38" y1="38" x2="52" y2="52" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="28" x2="34" y2="28" stroke="#212C5F" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="28" y1="22" x2="28" y2="34" stroke="#212C5F" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const SurgicalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    {/* OT Light top dome */}
    <ellipse cx="32" cy="22" rx="16" ry="8" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    {/* Inner ring */}
    <ellipse cx="32" cy="22" rx="9" ry="4.5" stroke="#212C5F" strokeWidth="1" fill="none" opacity="0.5"/>
    {/* Center light */}
    <circle cx="32" cy="22" r="3" fill="#212C5F" opacity="0.25"/>
    {/* Arm / stem */}
    <line x1="32" y1="30" x2="32" y2="42" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Ceiling mount bar */}
    <line x1="20" y1="14" x2="44" y2="14" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Mount dot */}
    <circle cx="32" cy="14" r="2.5" fill="#212C5F" opacity="0.4"/>
    {/* Light rays */}
    <line x1="32" y1="30" x2="24" y2="50" stroke="#212C5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
    <line x1="32" y1="30" x2="32" y2="52" stroke="#212C5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
    <line x1="32" y1="30" x2="40" y2="50" stroke="#212C5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const LabIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M24 12 L24 36 L14 52 L50 52 L40 36 L40 12" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="20" y1="12" x2="44" y2="12" stroke="#212C5F" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="22" cy="44" r="2" fill="#212C5F" opacity="0.4"/>
    <circle cx="32" cy="46" r="1.5" fill="#212C5F" opacity="0.3"/>
    <circle cx="40" cy="43" r="1" fill="#212C5F" opacity="0.2"/>
  </svg>
);

const HVACIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="10" y="18" width="44" height="28" rx="3" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    <line x1="10" y1="28" x2="54" y2="28" stroke="#212C5F" strokeWidth="1" opacity="0.4"/>
    <circle cx="32" cy="38" r="6" stroke="#212C5F" strokeWidth="1.5" fill="none"/>
    <line x1="32" y1="32" x2="32" y2="44" stroke="#212C5F" strokeWidth="1" opacity="0.5"/>
    <line x1="26" y1="38" x2="38" y2="38" stroke="#212C5F" strokeWidth="1" opacity="0.5"/>
    <circle cx="18" cy="23" r="2" fill="#212C5F" opacity="0.3"/>
    <circle cx="46" cy="23" r="2" fill="#212C5F" opacity="0.3"/>
  </svg>
);

const ICONS = [PharmaIcon, DisposablesIcon, DiagnosticIcon, SurgicalIcon, LabIcon, HVACIcon];

const features = [
  {
    title: "Pharmaceuticals",
    description:
      "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements - fully compliant with drug regulatory standards.",
    image: "💊",
    slug: "pharmaceuticals",
  },
  {
    title: "Medical Disposables",
    description:
      "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
    image: "🩺",
    slug: "medical-disposables",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
    image: "🔭",
    slug: "diagnostic-equipment",
  },
  {
    title: "Surgical Instruments & OT Equipment",
    description:
      "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
    image: "/surgery.png",
    slug: "surgical-instruments-ot-equipment",
  },
  {
    title: "Lab Reagents & Test Kits",
    description:
      "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
    image: "🧪",
    slug: "lab-reagents-test-kits",
  },
  {
    title: "HVAC & Clean Room Solutions",
    description:
      "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
    image: "🌡️",
    slug: "hvac-clean-room-solutions",
  },
];

// Hook for intersection observer
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
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ProductCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const Icon = ICONS[index];
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-white/98 via-white/95 to-white/90 border border-[#212C5F]/12 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#4A5B9F]/40 hover:shadow-2xl hover:shadow-[#4A5B9F]/10 cursor-default backdrop-blur-xl"
    >
      {/* Premium animated gradient background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
        style={{
          background:
            "radial-gradient(800px at 0% 0%, rgba(74,91,159,0.12) 0%, transparent 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Number */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-regular text-gray-400 tracking-widest mb-4 block"
        >
          ({numStr})
        </motion.span>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.1,
          }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-regular text-[#212C5F] leading-snug mb-5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#212C5F] group-hover:to-[#4A5B9F] group-hover:bg-clip-text transition-all duration-500"
        >
          {feature.title}
        </motion.h3>

        {/* Separator Line */}
        <motion.div
          className="w-12 h-px bg-gray-300 mb-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.15,
          }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />

        {/* Description - Flex grow to push button to bottom */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
          }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300 mb-6 flex-grow"
        >
          {feature.description}
        </motion.p>

        {/* Learn More Button - Always at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.25,
          }}
          viewport={{ once: true }}
        >
          <Link
            href={`/products/${feature.slug}`}
            className="inline-flex items-center gap-2 text-sm md:text-[15px] font-semibold text-[#212C5F] px-5 py-2.5 transition-all duration-300 hover:text-[#4A5B9F] hover:bg-gradient-to-r hover:from-[#4A5B9F]/5 "
          >
            Learn More
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Title word-by-word animation
function AnimatedTitle() {
  const { ref, inView } = useInView(0.2);

  return (
    <div ref={ref}>
      <motion.h2
        className="text-3xl md:text-5xl lg:text-5xl capitalize font-regular tracking-tighter leading-tight text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.span className="block">A Complete Portfolio  of Medical   Supplies</motion.span>
        {/* <span className="block">
          of Medical
          <motion.span
            className="gradient-shimmer-text inline-block ml-2"
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Supplies
          </motion.span>
        </span> */}
      </motion.h2>
        <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ originX: "center" }}
                  className="w-12 h-1 bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] mx-auto mb-6 rounded-full"
                />
    </div>
  );
}

function AnimatedSubtext() {
  const { ref, inView } = useInView(0.2);
  return (
    <motion.p
      ref={ref}
      className="mt-6 sm:mt-8 leading-relaxed text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      viewport={{ once: true }}
    >
      From daily-use consumables to specialized surgical and diagnostic equipment, we carry everything a modern healthcare facility needs.
    </motion.p>
  );
}

function AnimatedLabel() {
  const { ref, inView } = useInView(0.2);
  return (
    <motion.div
      ref={ref}
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
        Our Products
      </motion.span>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-gradient-to-br from-[#FAFAF8] via-[#F4F1EC] to-[#F0EDEA] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-24 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(33,44,95,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-16 -right-20 w-[440px] h-[440px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(74,91,159,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(123,142,200,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Section Title */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedLabel />
          <AnimatedTitle />
          <AnimatedSubtext />
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-5 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto md:px-12 lg:px-16 pb-16 sm:pb-20 md:pb-28">
        {features.map((feature, index) => (
          <ProductCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      <style jsx>{`
        .gradient-shimmer-text {
          background: linear-gradient(
            100deg,
            #212c5f 0%,
            #4a5b9f 35%,
            #7b8ec8 60%,
            #4a5b9f 85%,
            #212c5f 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-text 5s linear infinite;
        }

        @keyframes shimmer-text {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 300% center;
          }
        }
      `}</style>
    </section>
  );
}