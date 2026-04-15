"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🤝",
    title: "A Partner, Not Just a Vendor",
    description: "We invest in long-term relationships with every client. From your first order to your thousandth, you'll have a dedicated point of contact who knows your business.",
    color: "from-blue-50 to-blue-100",
  },
  {
    icon: "✅",
    title: "Uncompromising Quality Standards",
    description: "Every batch we distribute is verified for authenticity, expiry, and storage compliance. Our quality checks happen before products leave the warehouse-not after a complaint.",
    color: "from-green-50 to-green-100",
  },
  {
    icon: "⚡",
    title: "Technology-Enabled Speed",
    description: "Our digital order management system ensures fast turnarounds, real-time tracking, and automated reorder alerts-so your shelves are never empty when patients need you.",
    color: "from-amber-50 to-amber-100",
  },
  {
    icon: "🌍",
    title: "Pan-India Reach with Global Capability",
    description: "We distribute across India and handle international trade with full regulatory expertise, making us a single source for both domestic needs and import/export requirements.",
    color: "from-purple-50 to-purple-100",
  },
];

export function EditorialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: index * 0.12,
      },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden py-2 bg-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-linear-to-br from-[#212C5F]/15 to-[#4A5B9F]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-linear-to-tl from-[#212C5F]/10 to-[#4A5B9F]/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
        

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl capitalize font-bold text-gray-900 mb-6 leading-tight"
          >
            why healthcare providers <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#212C5F] to-[#4A5B9F]">
              trust panasea
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
          >
            more than just a distributor - a partner in your healthcare mission
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-linear-to-r from-[#212C5F] to-[#4A5B9F] rounded-full origin-center mx-auto mt-8"
          />
        </motion.div>

        {/* Specs Section - Premium Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 md:mt-20 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "active partners", value: "500+" },
              { label: "on-time rate", value: "98%" },
              { label: "products listed", value: "5,000+" },
              { label: "support available", value: "24/7" },
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                custom={idx}
                className="group"
              >
                <div className="relative p-8 md:p-10 bg-white rounded-2xl border border-gray-200/50 hover:border-[#212C5F]/40 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#212C5F] to-[#4A5B9F]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                  />

                  {/* Content */}
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold mb-3 group-hover:text-[#212C5F] transition-colors duration-300">
                    {spec.label}
                  </p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#212C5F] group-hover:to-[#4A5B9F] transition-all duration-500">
                    {spec.value}
                  </p>

                  {/* Bottom Glow */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-[#212C5F]/20 via-[#4A5B9F]/20 to-transparent group-hover:from-[#212C5F] group-hover:via-[#4A5B9F] transition-colors duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 bg-linear-to-r from-[#212C5F]/10 via-[#4A5B9F]/10 to-[#212C5F]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-12 md:p-16 lg:p-20 rounded-3xl border border-gray-200/50 bg-white hover:border-[#212C5F]/30 transition-all duration-500 group">
            {/* Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-8 left-8 text-6xl md:text-8xl font-serif text-[#212C5F]"
            >
              "
            </motion.div>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed relative z-10 text-center">
              Access to quality medicines and medical supplies is not a luxury - {" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#212C5F] to-[#4A5B9F] font-semibold">
                it's a fundamental pillar of healthcare delivery.
              </span>
            </p>

            {/* Accent Dots */}
            <motion.div
              className="flex gap-2 justify-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-1.5 bg-linear-to-r from-[#212C5F] to-[#4A5B9F] rounded-full" />
              <div className="w-1.5 h-1.5 bg-linear-to-r from-[#212C5F] to-[#4A5B9F] rounded-full" />
              <div className="w-1.5 h-1.5 bg-linear-to-r from-[#212C5F] to-[#4A5B9F] rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
