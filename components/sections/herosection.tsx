"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }: { end: number | string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericEnd = parseInt(String(end).replace(/[+%]/g, ""));
    
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
    <section className="relative w-full bg-white overflow-hidden min-h-auto lg:min-h-auto">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#212C5F]/15 to-transparent rounded-full blur-3xl opacity-40 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-[#212C5F]/10 to-transparent rounded-full blur-3xl opacity-30 md:w-80 md:h-80 lg:w-96 lg:h-96" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-7xl mx-auto">
          {/* Responsive Padding - Top spacing for navbar, reduced bottom */}
          <div className="pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-14 md:pb-12 lg:pt-16 lg:pb-14 xl:pt-20 xl:pb-16">
            {/* Grid Layout - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
              
              {/* LEFT CONTENT SECTION */}
              <div
                className={`space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full bg-[#E8EAFD] border border-[#212C5F]/30">
                    <div className="w-2 h-2 bg-[#212C5F] rounded-full animate-pulse flex-shrink-0" />
                    <p className="text-[0.65rem] sm:text-[0.75rem] md:text-xs lg:text-sm font-bold uppercase tracking-widest text-[#212C5F] whitespace-nowrap sm:whitespace-normal">
                      India's Trusted Healthcare Distributor
                    </p>
                  </div>
                </div>

                {/* Main Heading - Fully Responsive */}
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight sm:leading-snug md:leading-snug lg:leading-tight tracking-tight">
                    Healthcare{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] to-[#4A5B9F]">
                      Supply
                    </span>
                    <br className="hidden xs:block" />
                    You Can Count On
                  </h2>
                </div>

                {/* Description - Responsive Text */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-light leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-md sm:max-w-lg lg:max-w-2xl">
                  From pharmaceuticals and surgical equipment to diagnostics and medical disposables we deliver quality-assured medical products to hospitals, clinics, and pharmacies across India and beyond.
                </p>

                {/* CTA Buttons - Fully Responsive */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
                  <Link
                    href="/#products"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-[#212C5F] to-[#1A2250] hover:from-[#1A2250] hover:to-[#15182F] text-white font-bold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Explore Products
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0"
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
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-2 border-gray-300 hover:border-[#212C5F] hover:bg-[#E8EAFD] text-gray-900 hover:text-[#212C5F] font-bold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>

              {/* RIGHT STATS CARD SECTION */}
              <div
                className={`transition-all duration-1000 ease-out delay-200 w-full ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div className="relative p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl shadow-2xl hover:shadow-2xl transition-all duration-500">
                  
                  {/* Certified Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#212C5F]/15 to-[#4A5B9F]/10 border border-[#212C5F]/40 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-[0.6rem] sm:text-[0.65rem] md:text-xs lg:text-xs font-semibold text-[#212C5F] uppercase tracking-widest">
                        Certified
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid - Fully Responsive 2x2 */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
                    {[
                      {
                        value: "500+",
                        label: "Healthcare Partners",
                        delay: "0ms",
                        icon: "💼",
                      },
                      {
                        value: "5000+",
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
                        className={`group p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl border border-white/30 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.02] backdrop-blur-lg hover:from-white/[0.18] hover:to-white/[0.08] hover:border-teal-300/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                        style={{
                          transitionDelay: isVisible ? stat.delay : "0ms",
                          animation: isVisible ? `slideUp 0.6s ease-out ${stat.delay}` : "none",
                        }}
                      >
                        {/* Stats Value */}
                        <div className="flex items-baseline gap-1 mb-1.5 sm:mb-2 md:mb-3">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#212C5F] via-[#4A5B9F] to-[#5A75B9]">
                            {isVisible ? <AnimatedCounter end={stat.value} /> : "0"}
                          </div>
                        </div>

                        {/* Stats Label */}
                        <p className="text-[0.55rem] sm:text-[0.65rem] md:text-xs lg:text-sm text-gray-700 font-bold uppercase tracking-widest leading-tight line-clamp-2 sm:line-clamp-3">
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
      </div>

    
    </section>
  );
}