"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import  Link  from "next/link";

const NAV_LINKS = [
  { label: "PRODUCTS", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "GALLERY", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Tryhero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  const [productsCount, setProductsCount] = useState(0);
  const [deliveryRate, setDeliveryRate] = useState(0);

  useEffect(() => {
    // Products counter animation (0 to 5000)
    let productsInterval: NodeJS.Timeout;
    let currentProducts = 0;
    const productsTarget = 5000;
    const productsDuration = 1500;
    const productsStep = productsTarget / (productsDuration / 50);

    const animateProducts = () => {
      currentProducts += productsStep;
      if (currentProducts >= productsTarget) {
        setProductsCount(productsTarget);
      } else {
        setProductsCount(Math.floor(currentProducts));
        productsInterval = setTimeout(animateProducts, 50);
      }
    };

    // Delivery rate counter animation (0 to 98)
    let deliveryInterval: NodeJS.Timeout;
    let currentDelivery = 0;
    const deliveryTarget = 98;
    const deliveryDuration = 1500;
    const deliveryStep = deliveryTarget / (deliveryDuration / 50);

    const animateDelivery = () => {
      currentDelivery += deliveryStep;
      if (currentDelivery >= deliveryTarget) {
        setDeliveryRate(deliveryTarget);
      } else {
        setDeliveryRate(Math.floor(currentDelivery));
        deliveryInterval = setTimeout(animateDelivery, 50);
      }
    };

    // Start animations after a delay
    setTimeout(() => {
      animateProducts();
      animateDelivery();
    }, 1200);

    return () => {
      clearTimeout(productsInterval);
      clearTimeout(deliveryInterval);
    };
  }, []);

  const paragraph =
    "From pharmaceuticals and surgical equipment to diagnostics and medical disposables - we deliver quality-assured medical products to hospitals, clinics, and pharmacies across India and beyond.";
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
        src="/heroimage.PNG"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: backgroundY }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/60" />
      {/* Top-left corner overlay for logo visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 sm:from-black/60 md:from-black/80 lg:from-black/90 via-transparent to-transparent" />

      {/* Navbar */}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8">
        <motion.div
          className="mb-6 self-start inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-sm"
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
          <h2 className="text-lg sm:text-2xl md:text-4xl font-medium">
            Healthcare Supply, You Can Count On
          </h2>
          {/* <button className="border-b border-white text-sm hover:opacity-70">
            VIEW PROJECT →
          </button> */}
        </motion.div>

        <motion.div
          className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed font-light flex flex-wrap gap-x-1"
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

        {/* Stats Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-20">
          <motion.div
            className="inline-flex flex-col items-center gap-1 sm:gap-2 rounded-lg border border-white/20 bg-white/5 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold">500+</div>
            <p className="text-[10px] sm:text-xs opacity-70">Healthcare Partners</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-1 sm:gap-2 rounded-lg border border-white/20 bg-white/5 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold">
              {productsCount.toLocaleString()}+
            </div>
            <p className="text-[10px] sm:text-xs opacity-70">Products in Catalog</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-1 sm:gap-2 rounded-lg border border-white/20 bg-white/5 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold">{deliveryRate}%</div>
            <p className="text-[10px] sm:text-xs opacity-70">On-Time Delivery Rate</p>
          </motion.div>
          <motion.div
            className="inline-flex flex-col items-center gap-1 sm:gap-2 rounded-lg border border-white/20 bg-white/5 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-xs"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold">24/7</div>
            <p className="text-[10px] sm:text-xs opacity-70">Customer Support</p>
          </motion.div>
        </div>

        {/* Links Section */}
        <motion.div
          className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-8 mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {/* Explore our products link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="group relative inline-block"
          >
            <div className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-white/40 bg-white/5  hover:bg-white/10 transition-colors duration-300 hover:border-white/60">
              <Link
                href="/#products"
                className="relative text-white text-xs sm:text-sm md:text-base font-light inline-block"
              >
                Explore our products
              </Link>
            </div>
          </motion.div>

          {/* Partner with us link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="group relative inline-block"
          >
            <div className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-white/40 bg-white/5  hover:bg-white/10 transition-colors duration-300 hover:border-white/60">
              <Link
                href="/#contact"
                className="relative text-white text-xs sm:text-sm md:text-base font-light inline-block"
              >
                Partner with us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
