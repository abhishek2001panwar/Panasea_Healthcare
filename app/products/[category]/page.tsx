"use client";

import { useParams } from "next/navigation";
import features from "@/lib/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const category = features.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Category not found</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#F9F7F3] via-white to-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-[#212C5F]/20 to-[#4A5B9F]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-[#212C5F]/15 to-[#4A5B9F]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* Header Section with Request Catalog Button */}
        <div
          className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8"
          >
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium">Products</span>
            <span className="text-gray-300">/</span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#212C5F] uppercase tracking-widest">{category.title}</span>
          </motion.div>

          {/* Title and Button Container */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {category.title}
              </h1>
            </motion.div>

            {/* Request Catalog Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent border-2 border-[#212C5F] text-[#212C5F] font-semibold text-xs sm:text-sm rounded-lg overflow-hidden relative group hover:bg-[#212C5F]/5 transition-all duration-300 hover:scale-105 hover:border-[#4A5B9F] hover:text-[#4A5B9F]"
              >
                {/* Hover background glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#212C5F]/0 via-[#212C5F]/5 to-[#212C5F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Text and Icon */}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="tracking-wide">Request Catalog</span>
                  <motion.span 
                    className="text-base"
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl font-light leading-relaxed"
          >
            {category.description}
          </motion.p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {category.items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden hover:border-[#212C5F]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#212C5F]/5 to-[#4A5B9F]/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                  {/* Product Name */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#212C5F] transition-colors duration-300"
                  >
                    {item.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-light"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
