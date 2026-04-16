"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const features = [
  {
    title: "Authentic, Certified Products",
    desc: "Every product in our catalog is sourced directly from licensed, GMP-certified manufacturers - zero compromises on authenticity.",
    icon: "🧾",
  },
  {
    title: "Cold-Chain Integrity",
    desc: "Our temperature-controlled logistics infrastructure safeguards sensitive pharmaceuticals from storage through last-mile delivery.",
    icon: "❄️",
  },
  {
    title: "Reliable, On-Time Delivery",
    desc: "Our distribution network is built around speed, accuracy, and dependability - because healthcare cannot wait.",
    icon: "🚚",
  },
  {
    title: "End-to-End Compliance",
    desc: "Full regulatory documentation, traceability, and quality assurance at every step of the supply chain.",
    icon: "🛡️",
  },
];

const storyPoints = [
  {
    title: "Authorized Distributor for Leading Brands",
    desc: "Official partnerships with India's top pharmaceutical manufacturers and global brands, ensuring only authentic, GMP-certified products reach your facility.",
  },
  {
    title: "ISO-Compliant Facilities",
    desc: "State-of-the-art temperature-controlled warehouses with ISO 9001:2015 certification, maintaining strictest storage standards for sensitive medicines and biologics.",
  },
  {
    title: "Dedicated Account Managers",
    desc: "Personalized support with assigned account managers who understand your facility's needs, inventory patterns, and provide proactive supply chain solutions.",
  },
  {
    title: "Transparent Pricing",
    desc: "Competitive, clearly itemized pricing with no surprise charges, volume discounts, and straightforward billing-building long-term trust with every transaction.",
  },
  {
    title: "Rapid Order Processing",
    desc: "Orders processed within hours with real-time tracking, inventory visibility, and predictable delivery windows-keeping your supply chain predictable and efficient.",
  },
];

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);
  const { scrollY } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisiblePoints((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = containerRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden py-0 md:py-0 lg:py-0 bg-[#F5F1EB]"
    >
      {/* ── Animated background orbs (original) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-[#212C5F]/25 to-[#4A5B9F]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-[#212C5F]/20 to-[#4A5B9F]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-[#4A5B9F]/20 to-[#212C5F]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Heading block — original animation, "Trust" gets shimmer ── */}
        <div className="px-6 py-2 md:px-10 lg:px-20 lg:py-10 lg:pb-10">
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
              About us
            </motion.p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl leading-tight mb-8 text-gray-900">
              {/* Line 1: original word-by-word pop animation */}
              {["We", "Don't", "Just", "Deliver"].map((word, idx) => (
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
              ))}
              <br />
              {/* Line 2: "Medicine We Deliver" — same pop, "Trust" gets shimmer */}
              {["Medicine", "We", "Deliver"].map((word, idx) => (
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
              ))}
              <motion.span
                className="inline-block mr-3 gradient-shimmer-text"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: (3 + 4.5) * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Trust
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8 leading-relaxed text-muted-foreground text-md text-center"
            >
              Panasea Healthcare is a premier pharmaceutical and medical
              supplies distributor, connecting certified manufacturers with
              healthcare providers who depend on reliable, uninterrupted supply
              chains.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch mb-16 md:mb-20 lg:mb-24">

          {/* Left: Feature cards (original styling + left accent bar on hover) */}
          <div className="flex-1 flex flex-col gap-4 md:gap-3">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex items-start gap-4 bg-gradient-to-br from-white to-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-7 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#212C5F]/30 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#212C5F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Left accent bar on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#4A5B9F] to-[#212C5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#212C5F]/20 to-[#4A5B9F]/15 border border-[#212C5F]/30 text-3xl md:text-4xl flex-shrink-0 relative z-10"
                  >
                    {item.icon}
                  </motion.div>

                  <div className="flex-1 relative z-10 pt-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 + 0.1 }}
                      viewport={{ once: true }}
                      className="text-base md:text-lg font-semibold text-[#212C5F] mb-2.5 leading-snug"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-sm text-neutral-700 leading-snug"
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Why choose us panel (original styling + shimmer heading + border sweep) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex items-center group"
          >
            <div className="w-full bg-gradient-to-br from-white via-white to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 p-8 md:p-12 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Corner orb */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#212C5F]/10 to-[#4A5B9F]/5 rounded-full blur-3xl -mr-20 -mt-20" />
              {/* Animated border sweep on hover */}
              <div className="animated-border-sweep absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-4 leading-tight gradient-shimmer-text"
                >
                  Why Healthcare
                  <br />
                  Providers Choose Us
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed"
                >
                  We've built lasting relationships with hospitals, diagnostic
                  chains, and independent pharmacies by consistently delivering
                  what matters most: the right product, on time, every time.
                </motion.p>

                <ul className="space-y-4 mt-6">
                  {storyPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.35 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group/item"
                    >
                      <motion.span
                        whileInView={{ scale: [1, 1.3, 1], rotate: [0, 360, 360] }}
                        transition={{ duration: 0.6, delay: 0.35 + idx * 0.08 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#212C5F] to-[#4A5B9F] text-white font-bold text-sm flex-shrink-0 mt-0.5 shadow-lg"
                      >
                        ✓
                      </motion.span>
                      <span className="text-base md:text-lg text-neutral-700">
                        {point.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Shimmer + border sweep keyframes ── */}
      <style jsx>{`
        .gradient-shimmer-text {
          background: linear-gradient(
            100deg,
            #212c5f 0%,
            #4a5b9f 40%,
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
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .animated-border-sweep {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(74, 91, 159, 0.25) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: border-sweep 2.5s linear infinite;
        }

        @keyframes border-sweep {
          0%   { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
