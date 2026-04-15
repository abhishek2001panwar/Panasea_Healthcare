"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


const features = [
  {
    title: "Pharmaceuticals",
    description:
      "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements - fully compliant with drug regulatory standards.",
    image: "https://media.istockphoto.com/id/1174079947/photo/many-nutritional-health-supplements-and-vitamins-in-capsules-and-tablets-in-a-hand-before.jpg?s=612x612&w=0&k=20&c=_nzpRMQLIOJcth3_nkANZTYC7q7JfwaL0wBssu48KPU=",
    slug: "pharmaceuticals",
  },
  {
    title: "Medical Disposables",
    description:
      "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
    image: "https://media.istockphoto.com/id/1203224882/photo/medical-bandages-and-gloves-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=SD7n1UV-m3sYfyQAydTK--E2Z1p9SCgG3j1ybJKVaM0=",
    slug: "medical-disposables",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
    image: "https://media.istockphoto.com/id/592647720/photo/vigilantly-monitoring-his-patients-vitals.jpg?s=612x612&w=0&k=20&c=cKQ6XPw8X98Z-9XQDR0DqnpTdvFsiHiXzYptGbKdD40=",
    slug: "diagnostic-equipment",
  },
  {
    title: "Surgical Instruments & OT Equipment",
    description:
      "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
    image: "https://media.istockphoto.com/id/2217138396/photo/featuring-two-round-ot-lights-with-double-dome-led-technology-this-setup-offers-enhanced.jpg?s=612x612&w=0&k=20&c=SBwfbHGDAURTxcz5upDlEs-wHbNhoSFX5wdkBlpcXVI=",
    slug: "surgical-instruments",
  },
  {
    title: "Lab Reagents & Test Kits",
    description:
      "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
    image: "https://media.istockphoto.com/id/2256032231/photo/cute-arabian-girl-elementary-student-kid-wearing-lab-coat-standing-near-microscope-hold-glass.jpg?s=612x612&w=0&k=20&c=r_-8boEtI5HjTTXFdMQgNnD5iMIaWr20whkB_KRj4ek=",
    slug: "lab-reagents",
  },
  {
    title: "HVAC & Clean Room Solutions",
    description:
      "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
    image: "https://media.istockphoto.com/id/466333546/photo/solar-panel-manufacturing.jpg?s=612x612&w=0&k=20&c=OSmaIQu266M6p5U1ZUGjr8D-VKEYUS8kLtncExBz3xs=",
    slug: "hvac-solutions",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24 bg-white">
      {/* Premium Background Animations */}
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
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-[#212C5F]/15 to-[#4A5B9F]/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#212C5F]/10 to-[#4A5B9F]/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest  mb-4">
            Our Products
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Portfolio of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]"> Medical Supplies</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Premium healthcare solutions tailored to meet the diverse needs of medical facilities
          </p>
        </motion.div>

        {/* Minimalist Mixed Layout */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16 group`}
              >
                {/* Image Side - Animated with Modern Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/3 flex justify-center md:justify-start"
                >
                  <div className="relative w-full">
                    {/* Animated Background Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-[#212C5F]/40 to-[#4A5B9F]/30 rounded-2xl blur-3xl"
                    />

                    {/* Animated Border Glow */}
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        boxShadow: [
                          '0 0 20px rgba(33, 44, 95, 0.3)',
                          '0 0 40px rgba(74, 91, 159, 0.5)',
                          '0 0 20px rgba(33, 44, 95, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-xl"
                    />

                    {/* Product Image - Modern Card */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.08, 
                        rotate: idx % 2 === 0 ? 3 : -3,
                        y: -8,
                      }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group-hover:shadow-2xl transition-shadow duration-500 border border-white/20 backdrop-blur-sm"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-500"
                      />
                      
                      {/* Overlay Gradient on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#212C5F]/20 to-transparent"
                      />
                    </motion.div>

                    {/* Index Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Text Side - Modern Enhanced */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  viewport={{ once: true }}
                  className="w-full md:w-2/3"
                >
                  <Link href={`/products/${feature.slug}`}>
                    <div className="group/content cursor-pointer">
                      {/* Top Accent Line */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="h-1.5 w-16 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] rounded-full mb-6 origin-left group-hover/content:w-24 transition-all duration-500 shadow-lg"
                      />

                      {/* Title with Enhanced Animation */}
                      <motion.h3
                        initial={{ opacity: 0, x: 20, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: idx * 0.15 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 group-hover/content:bg-gradient-to-r group-hover/content:from-[#212C5F] group-hover/content:to-[#4A5B9F] group-hover/content:text-transparent group-hover/content:bg-clip-text transition-all duration-500"
                      >
                        {feature.title}
                      </motion.h3>

                      {/* Description with Enhanced Styling */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: idx * 0.18 }}
                        className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-md group-hover/content:text-gray-800 transition-colors duration-500 mb-8"
                      >
                        {feature.description}
                      </motion.p>

                      {/* CTA - Modern Style */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                        className="inline-flex items-center gap-3 group/cta px-5 py-3 rounded-lg border border-[#212C5F]/20 bg-gradient-to-r from-[#212C5F]/5 to-[#4A5B9F]/5 group-hover/content:border-[#212C5F]/50 group-hover/content:from-[#212C5F]/10 group-hover/content:to-[#4A5B9F]/10 transition-all duration-500 backdrop-blur-sm"
                      >
                        <span className="text-sm font-semibold text-[#212C5F] group-hover/cta:text-[#4A5B9F] transition-colors duration-300">
                          Explore this category
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]"
                        />
                      </motion.div>

                      {/* Bottom Border Animation */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.9, delay: idx * 0.18 }}
                        className="h-px bg-gradient-to-r from-[#212C5F]/30 via-[#4A5B9F]/50 to-transparent mt-10 origin-left group-hover/content:from-[#212C5F] group-hover/content:via-[#4A5B9F] transition-all duration-500"
                      />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}