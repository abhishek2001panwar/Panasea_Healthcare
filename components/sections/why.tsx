"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    name: "A partner, not just a vendor",
    description:
      "We invest in long-term relationships with every client. From your first order to your thousandth, you'll have a dedicated contact who knows your business.",
  },
  {
    id: "02",
    name: "Uncompromising quality standards",
    description:
      "Every batch is verified for authenticity, expiry, and storage compliance. Our quality checks happen before products leave the warehouse - not after a complaint.",
  },
  {
    id: "03",
    name: "Technology-enabled speed",
    description:
      "Digital order management ensures fast turnarounds, real-time tracking, and automated reorder alerts - so your shelves are never empty when patients need you.",
  },
  {
    id: "04",
    name: "Pan-India reach, global capability",
    description:
      "We distribute across India and handle international trade with full regulatory expertise - a single source for domestic needs and import/export requirements.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#1E2B5F]"
    
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full"
        style={{ background: "rgba(100,130,255,0.06)" }} />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-52 h-52 rounded-full"
        style={{ background: "rgba(80,200,180,0.05)" }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[9px] sm:text-[11px] font-medium uppercase tracking-[3px] border rounded-full px-3 sm:px-4 py-1 mb-4 sm:mb-5"
            style={{ color: "#96C5FF", borderColor: "rgba(150,197,255,0.35)" }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 leading-tight capitalize"
          >
            The standard for healthcare <br />
            distribution in India
          </motion.h2>
       
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] mx-auto mt-5 rounded-full"
            style={{ background: "#96C5FF" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start">
          {/* Left: reasons list */}
          <div className="flex flex-col">
            {reasons.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex gap-3 sm:gap-5 items-start py-4 sm:py-6 border-b last:border-b-0"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="text-[10px] sm:text-[11px] font-semibold tracking-[1.5px] min-w-[24px] pt-0.5"
                  style={{ color: "rgba(150,197,255,0.55)" }}
                >
                  {r.id}
                </motion.span>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.15 }}
                    className="text-sm sm:text-base md:text-[17px] font-medium text-white mb-2"
                  >
                    {r.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.18 }}
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: "rgba(200,215,255,0.65)" }}
                  >
                    {r.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.45 }}
          >
            <div className="rounded-2xl overflow-hidden border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.2)" }}>

              {/* Quote block */}
              <div className="p-5 sm:p-6 md:p-7 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {/* <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#96C5FF" }} />
                  <span className="text-[11px] font-medium tracking-[2px] uppercase"
                    style={{ color: "rgba(150,197,255,0.8)" }}>
                    Live network
                  </span>
                </div> */}
                <p className="text-sm sm:text-[15px] leading-relaxed italic"
                  style={{ color: "rgba(220,230,255,0.8)" }}>
                  "Access to quality medicines is not a luxury - it's a fundamental pillar of
                  healthcare delivery. We exist to make that access seamless."
                </p>
              </div>

              {/* Stats */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3">
                {/* Active Partners - wide row */}
                <motion.div
                  className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-xl border"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.06)" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <motion.p
                      className="text-[11px] sm:text-[12px] mb-1"
                      style={{ color: "rgba(180,200,255,0.55)" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.55 }}
                    >
                      Active partners
                    </motion.p>
                    <motion.p 
                      className="text-3xl font-semibold text-white leading-none"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.65 }}
                      >
                        500
                      </motion.span>
                      <span style={{ color: "#7ec8e3" }}>+</span>
                    </motion.p>
                  </div>
                  <motion.div
                    className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl flex items-center justify-center border relative"
                    style={{ background: "rgba(150,197,255,0.1)", borderColor: "rgba(150,197,255,0.2)" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                  >
                    {/* Floating animation for icon */}
                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* user-group icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="#96C5FF" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </motion.div>
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border"
                      style={{ borderColor: "rgba(150,197,255,0.4)" }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* On-time + Support - 2 cols */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl border relative"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.06)" }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.p
                      className="text-[11px] sm:text-[12px] mb-1"
                      style={{ color: "rgba(180,200,255,0.55)" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.65 }}
                    >
                      On-time rate
                    </motion.p>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div>
                        <p className="text-xl sm:text-2xl font-semibold text-white leading-none">
                          98<span className="text-base" style={{ color: "#96C5FF" }}>%</span>
                        </p>
                      </div>
                      {/* Rotating circle progress */}
                      <div className="relative w-10 h-10">
                        <svg className="absolute inset-0" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(150,197,255,0.2)" strokeWidth="2" />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke="#96C5FF"
                            strokeWidth="2"
                            strokeDasharray={`${98 * 0.99} 100`}
                            initial={{ strokeDashoffset: 100, rotate: 0 }}
                            whileInView={{ strokeDashoffset: 0, rotate: 360 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.75, ease: "easeOut" }}
                            style={{ transformOrigin: "50% 50%" }}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl border"
                    style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.06)" }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                  >
                    <motion.p
                      className="text-[11px] sm:text-[12px] mb-1"
                      style={{ color: "rgba(180,200,255,0.55)" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      Support
                    </motion.p>
                    <motion.p 
                      className="text-xl sm:text-2xl font-semibold text-white leading-none mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.75 }}
                    >
                      24<span className="text-base" style={{ color: "#96C5FF" }}>/7</span>
                    </motion.p>
                    {/* Rotating bars animation */}
                    <motion.div
                      className="flex gap-1 h-5 sm:h-6 items-end"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.75 }}
                    >
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{ background: "#96C5FF" }}
                          animate={{
                            height: ["20%", "100%", "20%"],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Products Listed - accent row */}
                <motion.div
                  className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-xl border relative overflow-hidden"
                  style={{ background: "rgba(150,197,255,0.08)", borderColor: "rgba(150,197,255,0.18)" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{ background: "linear-gradient(90deg, rgba(150,197,255,0.2), transparent)" }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10">
                    <motion.p
                      className="text-[11px] sm:text-[12px] mb-1"
                      style={{ color: "rgba(150,197,255,0.7)" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.75 }}
                    >
                      Products listed
                    </motion.p>
                    <motion.p 
                      className="text-3xl font-semibold text-white leading-none"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      5,000<span style={{ color: "#96C5FF" }}>+</span>
                    </motion.p>
                  </div>
                  {/* Animated bars with rotation and scale */}
                  <motion.div
                    className="flex items-end gap-1 relative z-10"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {[18, 26, 20, 34].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 sm:w-1.5 rounded"
                        style={{ background: `rgba(150,197,255,${0.3 + i * 0.15})` }}
                        animate={{
                          height: [h * 0.3, h, h * 0.5],
                          opacity: [0.6, 1, 0.7],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.12,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}