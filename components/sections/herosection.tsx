"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }: { end: number | string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Extract numeric value
    const numericEnd = parseInt(String(end).replace(/[+%]/g, ""));
    const endValue = String(end).includes("+") ? numericEnd + "+" : String(end);
    
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(numericEnd * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  const suffix = String(end).includes("+") ? "+" : String(end).includes("%") ? "%" : "";

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export function HeroSections() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-10 sm:pb-16 md:pb-20">
      {/* Subtle modern background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#212C5F]/15 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#212C5F]/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      {/* No background gradients - clean white */}
      <div className="relative z-10 w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 w-7xl mx-auto">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-6 sm:space-y-7 md:space-y-8 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Badge/Label */}
              <div className="inline-flex items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E8EAFD] border border-[#212C5F]/30">
                  <div className="w-2 h-2 bg-[#212C5F] rounded-full animate-pulse" />
                  <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-widest text-[#212C5F]">
                    India's Trusted Healthcare Distributor
                  </p>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  Healthcare{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]">Supply</span>
                  <br />
                  You Can Count On
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                From pharmaceuticals and surgical equipment to diagnostics and medical disposables we deliver quality-assured medical products to hospitals, clinics, and pharmacies across India and beyond.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#212C5F] to-[#1A2250] hover:from-[#1A2250] hover:to-[#15182F] text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  Explore Our Products
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 hover:border-[#212C5F] hover:bg-[#E8EAFD] text-gray-900 hover:text-[#212C5F] font-bold text-sm sm:text-base rounded-xl sm:rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right Stats Card */}
            <div
              className={`transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl shadow-2xl hover:shadow-2xl transition-all duration-500">
                {/* Certified Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#212C5F]/15 to-[#4A5B9F]/10 border border-[#212C5F]/40 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-[#212C5F] uppercase tracking-widest">
                      Certified
                    </span>
                  </div>
                </div>

                {/* Stats Grid - Responsive 2x2 */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 mt-10 sm:mt-12 md:mt-14">
                  {[
                    {
                      value: "500+",
                      label: "Healthcare Partners",
                      delay: "0ms",
                      icon: "💼",
                    },
                    {
                      value: "5,000+",
                      label: "Products in Catalog",
                      delay: "100ms",
                      icon: "📦",
                    },
                    {
                      value: "98%",
                      label: "On-Time Delivery",
                      delay: "200ms",
                      icon: "⚡",
                    },
                    {
                      value: "24/7",
                      label: "Customer Support",
                      delay: "300ms",
                      icon: "🎯",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className={`group p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl border border-white/30 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.02] backdrop-blur-lg hover:from-white/[0.18] hover:to-white/[0.08] hover:border-teal-300/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                      style={{
                        transitionDelay: isVisible ? stat.delay : "0ms",
                        animation: isVisible ? `slideUp 0.6s ease-out ${stat.delay}` : "none",
                      }}
                    >
                      <div className="flex items-baseline gap-2 mb-2">
                       
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] via-[#4A5B9F] to-[#5A75B9]">
                          {isVisible ? <AnimatedCounter end={stat.value} /> : "0"}
                        </div>
                      </div>
                      <p className="text-[0.65rem] sm:text-xs md:text-sm text-gray-700 font-bold uppercase tracking-widest leading-tight line-clamp-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}