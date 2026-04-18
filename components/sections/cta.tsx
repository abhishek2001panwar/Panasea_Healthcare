"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function CTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(250,249,247,1) 0%, rgba(245,241,235,0.9) 50%, rgba(240,237,234,1) 100%)",
        }}
      />

      {/* Subtle ambient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,91,159,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,142,200,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 md:px-12 text-center">

       

        {/* Heading — single line */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-gray-900 mb-5 whitespace-nowrap"
        >
          Ready to Strengthen{" "}
          <span className="cta-shimmer-text font-medium">Your Supply Chain?</span>
        </motion.h2>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          style={{ originX: "center" }}
          className="w-10 h-[2px] bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] mx-auto mb-6 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light mb-10"
        >
          Join hundreds of hospitals, pharmacies, and distributors who rely on
          Panasea Healthcare for consistent, quality-assured medical supply.
          Let's build a more reliable healthcare ecosystem - together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          {/* Primary — filled */}
          <motion.div
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #212C5F 0%, #4A5B9F 100%)",
                boxShadow: "0 4px 20px rgba(33,44,95,0.25)",
              }}
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg"
                style={{
                  background: "linear-gradient(135deg, #4A5B9F 0%, #7b8ec8 100%)",
                }}
                transition={{ opacity: { duration: 0.3 } }}
              />
              
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer-sweep 1.6s linear infinite",
                }}
              />
              <span className="relative z-10">Get a Quote</span>
              <motion.svg
                className="relative z-10 w-3.5 h-3.5"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Secondary — outline */}
          <motion.div
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#products"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#212C5F] border border-[#212C5F]/25 hover:border-[#212C5F]/50 hover:bg-[#212C5F]/04 transition-all duration-300 overflow-hidden"
            >
              {/* Animated hover background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at center, rgba(74,91,159,0.08) 0%, transparent 70%)",
                }}
                transition={{ opacity: { duration: 0.3 } }}
              />
              <span className="relative z-10">View Products</span>
              <motion.svg
                className="relative z-10 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

      
      </div>

      <style jsx>{`
        .cta-shimmer-text {
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
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes shimmer-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}

export default CTA;