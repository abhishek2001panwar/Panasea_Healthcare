"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const containerRef = useRef(null);
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisiblePoints((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 },
    );

    const elements = containerRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-0 md:py-0 lg:py-0"
    >
      {/* Animated Background with Blue Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-[#212C5F]/20 to-[#4A5B9F]/15 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#212C5F]/15 to-[#4A5B9F]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#4A5B9F]/20 to-[#212C5F]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* 2x2 Grid Section - Centered with Premium Borders */}
        <div className="flex justify-center mb-16 md:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl w-full">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              
                className="group relative"
              >
                {/* Glow Background - Appears on Hover */}
                
                {/* Premium Glass Effect Card with Blue Gradient Border */}
                <div className="relative overflow-hidden rounded-xl p-7 md:p-8 h-full bg-white/50 backdrop-blur-md border border-transparent bg-clip-padding shadow-lg cursor-pointer transition-all duration-300" style={{
                  backgroundImage: 'linear-gradient(white/50, white/50), linear-gradient(to right, #212C5F, #4A5B9F)',
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'padding-box, border-box',
                }}>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(135deg, #212C5F/20, #4A5B9F/20)',
                    pointerEvents: 'none',
                  }} />

                  {/* Animated Top Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] origin-left"
                  />

                  {/* Icon Container with Animated Floating */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10, y: -8 }}
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                    className="relative w-16 h-16 md:w-18 md:h-18 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#212C5F]/15 to-[#4A5B9F]/10 border-1.5 border-[#212C5F]/60 mb-5 shadow-lg"
                  >
                    <span className="text-4xl md:text-5xl drop-shadow-sm">{item.icon}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#212C5F] group-hover:to-[#4A5B9F] transition-all duration-300"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="text-xs md:text-sm text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300"
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Corner Accent - Blue Gradient */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-[#212C5F]/30 to-[#4A5B9F]/20 rounded-tl-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Why Healthcare Providers Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]">Panasea</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light">
              Trusted features that set us apart
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pt-8 p-5">
            {/* Center Line - Thin with Flapping Animation */}
            <motion.div 
              animate={{
                scaleY: [1, 0.95, 1.05, 1],
                opacity: [1, 0.8, 0.8, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#212C5F] via-[#4A5B9F] to-[#212C5F] origin-center"
            />

            {/* Story Points - Alternating Left/Right */}
            <div className="space-y-16 md:space-y-20" ref={containerRef}>
              {storyPoints.map((point, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    data-index={i}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={
                      visiblePoints.includes(i)
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isLeft ? -50 : 50 }
                    }
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} items-center`}
                  >
                    {/* Content Container - Positioned Left or Right */}
                    <div className={`w-full ${isLeft ? "md:w-[calc(50%-2rem)] md:pr-12" : "md:w-[calc(50%-2rem)] md:pl-12"}`}>
                      <motion.div
                        whileHover={{
                          translateY: -8,
                          boxShadow: "0 30px 60px rgba(33, 44, 95, 0.3)",
                        }}
                        className="relative group overflow-hidden rounded-2xl p-7 md:p-8 bg-white/50 backdrop-blur-md border-2 border-transparent shadow-lg transition-all duration-300" style={{
                          backgroundImage: 'linear-gradient(white/50, white/50), linear-gradient(to right, #212C5F, #4A5B9F)',
                          backgroundClip: 'padding-box, border-box',
                          backgroundOrigin: 'padding-box, border-box',
                        }}
                      >
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                          background: 'linear-gradient(135deg, #212C5F/20, #4A5B9F/20)',
                          pointerEvents: 'none',
                        }} />

                        {/* Animated Top Line */}
                        <motion.div
                          animate={
                            visiblePoints.includes(i)
                              ? { scaleX: 1, opacity: 1 }
                              : { scaleX: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] origin-left"
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Timeline Connector */}
                          <motion.div
                            animate={
                              visiblePoints.includes(i)
                                ? { scaleX: 1, opacity: 1 }
                                : { scaleX: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`absolute top-8 h-0.5 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] ${isLeft ? "right-full mr-4" : "left-full ml-4"}`}
                            style={{ width: "3rem" }}
                          />

                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={
                              visiblePoints.includes(i)
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                            }
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] bg-clip-text text-transparent mb-3 group-hover:from-[#212C5F] group-hover:to-[#4A5B9F] transition-all duration-300"
                          >
                            {point.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, height: 0, y: 10 }}
                            animate={
                              visiblePoints.includes(i)
                                ? { opacity: 1, height: "auto", y: 0 }
                                : { opacity: 0, height: 0, y: 10 }
                            }
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="text-sm md:text-base text-gray-700 font-light leading-relaxed overflow-hidden group-hover:text-gray-900 transition-colors duration-300"
                          >
                            {point.desc}
                          </motion.p>
                        </div>

                        {/* Corner Accent - Blue Gradient */}
                        <motion.div
                          animate={
                            visiblePoints.includes(i)
                              ? { scale: 1, opacity: 1 }
                              : { scale: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-tl from-[#212C5F]/30 to-[#4A5B9F]/20 rounded-tl-2xl"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;