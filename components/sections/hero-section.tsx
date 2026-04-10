"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Healthcare Partners" },
  { value: "5,000+", label: "Products Listed" },
  { value: "98%", label: "On-Time Rate" },
  { value: "24/7", label: "Support" },
];

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-112173f31c77?q=80&w=1000&fit=crop",
    alt: "Medical supplies",
    position: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?q=80&w=1000&fit=crop",
    alt: "Healthcare equipment",
    position: "left",
  },
  {
    src: "https://images.unsplash.com/photo-1579154204601-01d430e8be19?q=80&w=1000&fit=crop",
    alt: "Medical care",
    position: "right",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-112173f31c77?q=80&w=1000&fit=crop",
    alt: "Healthcare supplies",
    position: "right",
  },
];

const AnimatedCounter = ({ 
  end, 
  isVisible, 
  duration = 2000 
}: { 
  end: string; 
  isVisible: boolean;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const numericEnd = parseInt(end.replace(/[+%]/g, ""));
    
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
  }, [isVisible, end, duration]);

  const suffix = end.includes("+") ? "+" : end.includes("%") ? "%" : "";

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2.8;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
      
      // Show stats after 35% scroll
      if (progress > 0.35) {
        setShowStats(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text and heading opacities
  const headingScale = 1 + (scrollProgress * 0.15); // Grows slightly
  const contentOpacity = Math.max(0, 1 - (scrollProgress / 0.35));
  const statsOpacity = Math.max(0, (scrollProgress - 0.3) / 0.5);
  
  // Image transforms
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.15) / 0.65));
  
  const centerWidth = 100 - (imageProgress * 50); // 100% to 50%
  const centerHeight = 100 - (imageProgress * 28); // 100% to 72%
  const sideWidth = imageProgress * 21; // 0% to 21%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100);
  const sideTranslateRight = 100 - (imageProgress * 100);
  const borderRadius = imageProgress * 24;
  const gap = imageProgress * 14;

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="flex h-full w-full items-center justify-center relative">
          
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-112173f31c77?q=80&w=1400&fit=crop"
              alt="Healthcare background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/75" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-8 lg:px-12">
            
            {/* Large Hero Heading - Takes full page */}
            <div
              className="text-center space-y-6 transition-all duration-500"
              style={{ 
                opacity: contentOpacity,
                transform: `scale(${headingScale})`
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-teal-200/50">
                  <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                    Healthcare Distribution Excellence
                  </p>
                </div>
              </div>

              {/* Main Heading - Large and Centered */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-none tracking-tight">
                  Quality <span className="text-[#212C5F]">Medical</span>
                </h1>
                <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-none tracking-tight">
                  Supplies You <span className="text-[#212C5F]">Trust</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                Delivering excellence in pharmaceutical distribution across India and beyond with trusted healthcare partners.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#212C5F] hover:bg-[#1A2250] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Products
                  <svg
                    className="w-5 h-5"
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-400 hover:border-[#212C5F] text-gray-900 hover:text-[#212C5F] font-semibold rounded-lg transition-all duration-300 bg-white/30 backdrop-blur-sm"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Bento Grid Container - Appears on scroll */}
            <div 
              className="absolute inset-0 flex h-full w-full items-stretch justify-center"
              style={{ 
                gap: `${gap}px`, 
                padding: `${imageProgress * 16}px`,
                opacity: imageProgress * 0.7,
              }}
            >
              
              {/* Left Column */}
              <div 
                className="hidden lg:flex flex-col will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  gap: `${gap}px`,
                  transform: `translateX(${sideTranslateLeft}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages.filter(img => img.position === "left").map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative overflow-hidden will-change-transform flex-1"
                    style={{
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Center */}
              <div 
                className="relative overflow-hidden will-change-transform"
                style={{
                  width: `${centerWidth}%`,
                  height: `${centerHeight}%`,
                  flex: "0 0 auto",
                  borderRadius: `${borderRadius}px`,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?q=80&w=1200&fit=crop"
                  alt="Healthcare"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column */}
              <div 
                className="hidden lg:flex flex-col will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  gap: `${gap}px`,
                  transform: `translateX(${sideTranslateRight}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages.filter(img => img.position === "right").map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative overflow-hidden will-change-transform flex-1"
                    style={{
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll space */}
      <div className="h-[280vh]" />

      {/* Stats Section */}
      <div className="px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-40 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Trusted by Healthcare <span className="text-[#212C5F]">Professionals</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Our commitment to quality, reliability, and excellence in every interaction
            </p>
          </div>

          {/* Glass Effect Stats Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:scale-105"
                style={{
                  transitionDelay: showStats ? `${idx * 150}ms` : "0ms",
                }}
              >
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/50 rounded-3xl" />
                
                {/* Animated gradient background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(13, 148, 136, 0.05) 100%)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#212C5F]">
                    {showStats ? (
                      <AnimatedCounter end={stat.value} isVisible={showStats} duration={2000} />
                    ) : (
                      "0"
                    )}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-0 h-1 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] group-hover:w-12 transition-all duration-500 rounded-full" />
                </div>

                {/* Hover glow effect */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#212C5F]/5 group-hover:bg-[#212C5F]/10 rounded-full blur-3xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-gradient-to-br from-[#212C5F]/5 to-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Partner With Us?
          </h3>
          <p className="text-lg text-gray-600 font-light">
            Join hundreds of healthcare partners who trust us for reliable, quality medical supplies and exceptional service.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#212C5F] hover:bg-[#1A2250] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
}