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

  const category = features.find((item) => item.slug === categorySlug);

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F9F7F3]">
        <p className="text-sm text-neutral-400 tracking-widest uppercase">Category not found</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#F9F7F3] py-10 sm:py-14 md:py-32 overflow-hidden">
      {/* Ambient orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 -left-48 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(33,44,95,0.10) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 -right-48 w-[560px] h-[560px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,91,159,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-8xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">

        {/* ── Header ── */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#4A5B9F] mb-5"
          >
            Products
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light tracking-tight leading-tight text-gray-900 capitalize mb-4">
                {category.title}
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                style={{ originX: "left" }}
                className="w-10 h-[2px] bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #212C5F 0%, #4A5B9F 100%)",
                  boxShadow: "0 2px 14px rgba(33,44,95,0.20)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.14) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer-sweep 1.6s linear infinite",
                  }}
                />
                <span className="relative z-10">Request Catalog</span>
                <motion.span
                  className="relative z-10 text-base"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm md:text-base text-neutral-500 max-w-2xl font-light leading-relaxed"
          >
            {category.description}
          </motion.p>
        </div>

        {/* ── Items Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
          {category.items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image — no box, just border-bottom reveal on hover */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#212C5F]/08 group-hover:border-[#212C5F]/18 transition-colors duration-500 bg-gradient-to-br from-[#212C5F]/04 to-[#4A5B9F]/03">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Content — flat, no card box */}
              <div className="pt-5 flex-1 flex flex-col">
                {/* Index + line */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#212C5F]/30">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-[#212C5F]/08" />
                </div>

                <h3 className="text-[15px] md:text-base font-semibold tracking-tight text-gray-900 uppercase mb-2 group-hover:text-[#212C5F] transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light flex-1">
                  {item.description}
                </p>

                {/* Bottom accent line — animates in on hover */}
                <div className="mt-4 h-[1.5px] w-0 group-hover:w-10 bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}