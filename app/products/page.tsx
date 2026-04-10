"use client";

import { FadeImage } from "@/components/fade-image";
import Link from "next/link";
import features from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function productPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".product-card");
      const viewportHeight = window.innerHeight;

      cards.forEach((cardEl, index) => {
        const card = cardEl as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        
        // Different trigger points for mobile vs desktop
        const triggerPoint = isMobile 
          ? viewportHeight * 0.75  // Mobile: trigger earlier
          : viewportHeight * 0.8;  // Desktop: trigger at 80%
        
        const distance = isMobile 
          ? viewportHeight * 0.4   // Mobile: shorter distance
          : viewportHeight * 0.5;  // Desktop: longer distance

        const cardProgress = Math.max(
          0,
          Math.min(1, (triggerPoint - cardRect.top) / distance)
        );

        // Mobile: smaller slide distance, Desktop: larger slide distance
        const slideDistance = isMobile ? 50 : 80;
        const translateY = (1 - cardProgress) * slideDistance;
        const opacity = cardProgress;

        card.style.transform = `translateY(${translateY}px)`;
        card.style.opacity = `${opacity}`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <section
      id="projects"
      className="relative bg-white py-10"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Mobile Layout - Full Width Stack */}
        <div className="lg:hidden space-y-12 sm:space-y-16">
          {/* Mobile Header */}
          <div className="space-y-4 sm:space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                  Our Products
                </p>
              </div>
            </div>

            {/* Heading & Description */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                A Complete Portfolio of Medical Supplies
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                Precision-engineered solutions crafted for healthcare professionals who demand excellence and reliability
              </p>
            </div>
          </div>

          {/* Mobile Products */}
          <div ref={cardsRef} className="space-y-10 sm:space-y-12 md:space-y-14">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={`/products/${feature.slug}`}
                className="product-card group flex flex-col cursor-pointer will-change-transform"
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.5s',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-white mb-3 sm:mb-4">
                  <FadeImage
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-md group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title and Arrow */}
                <div className="flex items-start justify-start gap-2 sm:gap-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900/40 uppercase tracking-widest leading-snug flex-1">
                    {feature.title}
                  </h3>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Two Column */}
        <div className="hidden lg:grid grid-cols-2 gap-12 xl:gap-16">
          
          {/* LEFT SIDE - Sticky Content */}
          <div className="sticky top-24 h-fit">
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                    Our Products
                  </p>
                </div>
              </div>

              {/* Heading & Description */}
              <div className="space-y-4">
                <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  A Complete Portfolio of Medical Supplies
                </h2>
                <p className="text-base xl:text-lg text-gray-600 font-light leading-relaxed">
                  Precision-engineered solutions crafted for healthcare professionals who demand excellence and reliability
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Products Stack with Scroll Animation */}
          <div ref={cardsRef} className="space-y-16 xl:space-y-20">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={`/products/${feature.slug}`}
                className="product-card group flex flex-col cursor-pointer will-change-transform"
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '0.6s',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/4] rounded-lg overflow-hidden bg-white mb-4">
                  <FadeImage
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title and Arrow */}
                <div className="flex items-start justify-start gap-3">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-widest leading-snug flex-1">
                    {feature.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}