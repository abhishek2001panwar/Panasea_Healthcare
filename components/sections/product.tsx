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

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {/* Icon / Image area */}
      <div className="relative w-full rounded-3xl h-32 sm:h-40 md:h-52 flex items-center justify-center bg-gradient-to-br from-[#212C5F]/10 to-[#4A5B9F]/10 overflow-hidden">
        {feature.slug === "surgical-instruments-ot-equipment" ? (
          // Surgery: Smaller image centered with background visible
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 + 0.2 }}
            viewport={{ once: true }}
            className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 z-10"
          >
            <FadeImage
              src={feature.image}
              alt={feature.title}
              fill
              className="object-contain rounded-2xl"
            />
          </motion.div>
        ) : feature.image && feature.image.startsWith("http") ? (
          <>
            <FadeImage
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover w-full h-full"
            />
            {/* SVG icon overlay on image card */}
            <div
              className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-sm"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.7)",
                transition: `opacity 0.5s ease ${index * 80 + 300}ms, transform 0.5s ease ${index * 80 + 300}ms`,
              }}
            >
              <Icon />
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 + 0.2 }}
            viewport={{ once: true }}
            className="text-center z-10"
          >
            {/* Display emoji icon in center */}
            <div className="text-5xl sm:text-7xl md:text-8xl drop-shadow-lg">
              {feature.image || "📦"}
            </div>
          </motion.div>
        )}

        {/* Subtle shimmer line on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
      </div>

      {/* Content */}
      <div className="py-4 sm:py-6">
        <div className="flex items-center justify-between gap-2 sm:gap-3 group/title">
          <h3
            className="text-foreground text-base sm:text-lg md:text-xl font-semibold flex-1"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-12px)",
              transition: `opacity 0.5s ease ${index * 80 + 250}ms, transform 0.5s ease ${index * 80 + 250}ms`,
            }}
          >
            {feature.title}
          </h3>
          <Link
            href={`/products/${feature.slug}`}
            className="flex items-center justify-center text-foreground transition-all duration-300 flex-shrink-0 group-hover:translate-x-1"
            aria-label={`View ${feature.title}`}
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 80 + 350}ms`,
            }}
          >
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Title word-by-word animation
function AnimatedTitle() {
  const { ref, inView } = useInView(0.2);
  const line1 = ["A", "Complete", "Portfolio"];
  const line2 = ["of", "Medical", "Supplies"];

  return (
    <div ref={ref}>
      {/* <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl capitalize">
        <span className="block">
          {line1.map((word, i) => (
            <span
              key={word}
              className="inline-block mr-2"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
        <span className="block">
          {line2.map((word, i) => (
            <span
              key={word}
              className="inline-block mr-2"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${(i + line1.length) * 80 + 60}ms, transform 0.5s ease ${(i + line1.length) * 80 + 60}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </h2> */}

       <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl leading-tight mb-8 text-gray-900">
                    {["A", "Complete", "Portfolio"].map((word, idx) => {
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
                    {["of", "Medical", "Supplies"].map((word, idx) => {
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
    </div>
  );
}

function AnimatedSubtext() {
  const { ref, inView } = useInView(0.2);
  return (
    <p
      ref={ref}
      className="mt-6 sm:mt-8 px-4 sm:px-6 md:px-10 leading-relaxed text-muted-foreground text-sm sm:text-base md:text-lg text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease 400ms, transform 0.6s ease 400ms",
      }}
    >
      From daily-use consumables to specialized surgical and diagnostic equipment , <br /> we carry
      everything a modern healthcare facility needs.
    </p>
  );
}

function AnimatedLabel() {
  const { ref, inView } = useInView(0.2);
  return (
       <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#212C5F] font-bold mb-4 sm:mb-6"
            >
                Our Products
            </motion.p>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-[#FAF9F7]">
      {/* Section Title */}
      <div className="px-4 sm:px-6 md:py-10 md:px-12 lg:px-20 py-6 sm:py-8">
        <div className="text-center">
          <AnimatedLabel />
          <AnimatedTitle />
          <AnimatedSubtext />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 px-4 sm:px-6 md:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <ProductCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-4 sm:px-6 pb-16 sm:pb-20 md:pb-28 md:px-12 lg:px-20"></div>
    </section>
  );
}