"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "PRODUCTS", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "GALLERY", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Tryhero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  const paragraph = "From pharmaceuticals and surgical equipment to diagnostics and medical disposables we deliver quality-assured medical products to hospitals, clinics, and pharmacies across India and beyond.";
  const words = paragraph.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.img
        src="https://media.istockphoto.com/id/2149711865/photo/artificial-intelligence-in-healthcare-ai-health-digital-healthcare-provider-telemedicine.jpg?s=612x612&w=0&k=20&c=W7TDnrCel13FvNFAMrKctUkh5upszN6UEXotOF75oik="
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: backgroundY }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

      {/* Navbar */}
    

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-16">
       <motion.div
  className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          India's Trusted Healthcare Distributor
        </motion.div>

        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h2 className="text-xl md:text-4xl font-medium">
            Healthcare Supply, You Can Count On
          </h2>
          {/* <button className="border-b border-white text-sm hover:opacity-70">
            VIEW PROJECT →
          </button> */}
        </motion.div>

        <motion.div 
          className="max-w-2xl text-md md:text-lg leading-relaxed font-light flex flex-wrap gap-x-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, idx) => (
            <motion.span key={idx} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-20">
          <motion.div
            className="inline-flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="text-lg">👥</div>
            <div className="text-xl md:text-2xl font-bold">500+</div>
            <p className="text-xs opacity-70">Healthcare Partners</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="text-lg">📦</div>
            <div className="text-xl md:text-2xl font-bold">5,000+</div>
            <p className="text-xs opacity-70">Products in Catalog</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="text-lg">⚡</div>
            <div className="text-xl md:text-2xl font-bold">98%</div>
            <p className="text-xs opacity-70">On-Time Delivery Rate</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur-xs"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <div className="text-lg">💬</div>
            <div className="text-xl md:text-2xl font-bold">24/7</div>
            <p className="text-xs opacity-70">Customer Support</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
