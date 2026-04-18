"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Authentic, Certified Products",
    desc: "Every product in our catalog is sourced directly from licensed, GMP-certified manufacturers - zero compromises on authenticity.",
    tag: "GMP Certified",
  },
  {
    num: "02",
    title: "Cold-Chain Integrity",
    desc: "Our temperature-controlled logistics infrastructure safeguards sensitive pharmaceuticals from storage through last-mile delivery.",
    tag: "ISO CERTIFIED",
  },
  {
    num: "03",
    title: "Reliable, On-Time Delivery",
    desc: "We understand that healthcare cannot wait. Our distribution network is built around speed, accuracy, and dependability.",
    tag: "Same-Day Processing",
  },
  {
    num: "04",
    title: "End-to-End Compliance",
    desc: "Full regulatory documentation, traceability, and quality assurance at every step - for domestic distribution and international trade alike.",
    tag: "Full Traceability",
  },
];

const storyPoints = [
  {
    title: "Authorized distributor for leading pharmaceutical brands",
    desc: "Official partnerships ensuring only authentic, GMP-certified products reach your facility.",
  },
  {
    title: "ISO-compliant warehousing and logistics facilities",
    desc: "Temperature-controlled warehouses with ISO 9001:2015 certification.",
  },
  {
    title: "Dedicated account managers for every partner",
    desc: "Personalized support with proactive supply chain solutions for your facility.",
  },
  {
    title: "Transparent pricing with no hidden costs",
    desc: "No surprise charges - volume discounts and straightforward billing every time.",
  },
  {
    title: "Rapid order processing and real-time tracking",
    desc: "Orders processed within hours with real-time tracking and predictable delivery windows.",
  },
];

const pills = ["Hospitals", "Diagnostic Chains", "Pharmacies", "Clinics"];

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden py-16 bg-gradient-to-br from-[#FAFAF8] via-[#F4F1EC] to-[#F0EDEA]"
    >
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading block with enhanced animations */}
        <div className="text-center mb-10 md:mb-10 lg:mb-10">
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
              About us
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl capitalize font-regular tracking-tighter leading-tight text-gray-900 mb-6"
          >
            We don't just deliver  medicine <br />
            <motion.span
              className="inline-block"
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              we deliver <span className="text-[#212C5F] font-regular">trust</span>
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: "center" }}
            className="w-12 h-1 bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Panasea Healthcare connects certified manufacturers with healthcare
            providers who depend on reliable, uninterrupted pharmaceutical
            supply chains.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start">
          {/* Left: Feature cards */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5">
            {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group ab-card relative bg-gradient-to-br from-white/98 via-white/95 to-white/90 border border-[#212C5F]/12 rounded-3xl p-6 md:p-7 overflow-hidden transition-all duration-500 hover:border-[#4A5B9F]/40 hover:shadow-2xl hover:shadow-[#4A5B9F]/10 cursor-default backdrop-blur-xl"
                >
                  {/* Premium animated gradient background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                    style={{
                      background:
                        "radial-gradient(800px at 0% 0%, rgba(74,91,159,0.12) 0%, transparent 80%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-between gap-3 mb-3">
                      <h3 className="text-sm md:text-base font-regular text-[#212C5F] leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#212C5F] group-hover:to-[#4A5B9F] group-hover:bg-clip-text transition-all duration-500 flex-1">
                        {item.title}
                      </h3>
                      <span className="text-lg md:text-xl font-bold bg-gradient-to-br from-[#212C5F] to-[#4A5B9F] bg-clip-text text-transparent group-hover:from-[#4A5B9F] group-hover:to-[#7b8ec8] transition-all duration-500 flex-shrink-0">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-3 group-hover:text-neutral-700 transition-colors duration-300">
                      {item.desc}
                    </p>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] shadow-md"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="inline-block text-[8px] font-bold tracking-[0.15em] uppercase text-[#4A5B9F] group-hover:text-[#212C5F] transition-colors duration-300">
                        {item.tag}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Right: Why choose us */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex items-stretch"
            style={{ perspective: "1000px" }}
          >
            <div className="w-full bg-gradient-to-br from-white/98 via-white/95 to-[#F4F1EC]/60 border border-[#212C5F]/12 rounded-3xl p-8 md:p-9 shadow-2xl shadow-[#4A5B9F]/5 relative overflow-hidden backdrop-blur-xl hover:shadow-3xl hover:shadow-[#4A5B9F]/15 transition-all duration-500">
              {/* Animated corner orb with pulse */}
              <motion.div
                className="absolute top-0 right-0 w-80 h-80 rounded-full -mr-40 -mt-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(74,91,159,0.2) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Premium gradient line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A5B9F]/40 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Subtle grid background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-3xl"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #212C5F 1px, transparent 1px), linear-gradient(to bottom, #212C5F 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-regular text-gray-900 mb-3 leading-snug"
                >
                  Why Healthcare Providers <br />
                  <span className="gradient-shimmer-text block mt-1">
                    Choose us
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm text-neutral-600 leading-relaxed mb-6 font-light"
                >
                  We've built lasting relationships with hospitals, diagnostic
                  chains, and independent pharmacies by consistently delivering
                  what matters most: the right product, on time, every time.
                </motion.p>

                <motion.div
                  className="border-t border-[#212C5F]/12 mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />

                <ul className="flex flex-col divide-y divide-[#212C5F]/8 space-y-0">
                  {storyPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + idx * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8, paddingLeft: 8 }}
                      className="flex items-start gap-3.5 py-4 group/item relative z-20 cursor-default"
                    >
                      {/* Animated background on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-lg -mx-8 -my-0 bg-gradient-to-r from-[#4A5B9F]/8 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10"
                        whileHover={{ x: 8 }}
                      />

                      <motion.div
                        className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center bg-gradient-to-br from-[#212C5F] to-[#4A5B9F] shadow-lg group-hover/item:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <motion.p
                          className="text-[13px] font-semibold text-[#212C5F] group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-[#212C5F] group-hover/item:to-[#4A5B9F] group-hover/item:bg-clip-text transition-all duration-300"
                          whileHover={{ letterSpacing: "0.05em" }}
                        >
                          {point.title}
                        </motion.p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
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

        @keyframes float-up {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(74, 91, 159, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(74, 91, 159, 0.5);
          }
        }

        .ab-card:nth-child(1) {
          animation: float-up 4s ease-in-out infinite;
        }

        .ab-card:nth-child(2) {
          animation: float-up 4s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .ab-card:nth-child(3) {
          animation: float-up 4s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .ab-card:nth-child(4) {
          animation: float-up 4s ease-in-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
