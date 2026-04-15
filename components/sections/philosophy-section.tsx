"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [alpineTranslateX, setAlpineTranslateX] = useState(-100);
  const [forestTranslateX, setForestTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    // Alpine comes from left (-100% to 0%)
    setAlpineTranslateX((1 - progress) * -100);

    // Forest comes from right (100% to 0%)
    setForestTranslateX((1 - progress) * 100);

    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);

    // Update scroll progress for indicator
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section className="bg-background">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "140vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#212C5F] mb-2 animate-pulse">
                ✓ Trusted by 170+ Healthcare Partners
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 text-center px-6">
                Where Healthcare Meets Reliability
              </h2>
              <p className="text-sm mt-2 text-gray-600 max-w-xl">
                Precision logistics. Certified products. Zero compromise.{" "}
              </p>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-3 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Alpine Image - comes from left */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="https://media.istockphoto.com/id/647243650/photo/hand-holding-a-syringe.jpg?s=612x612&w=0&k=20&c=mhx4B3iA5rzvfBwIQlseKmbLleJ4DTN8xSUQqKr9i9Q="
                  alt="Pharmaceutical and Medical Supplies"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Forest Image - comes from right */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="https://media.istockphoto.com/id/2228061638/photo/beautiful-private-hospital.jpg?s=612x612&w=0&k=20&c=ztLqbKx9bofKx-l35t4ShUo_JXxuQ-0S2776W_Yx3Ho="
                  alt="Modern Healthcare Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Scroll Progress Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
              <div 
                className="h-full bg-[#212C5F]" 
                style={{ width: `${scrollProgress * 100}%`, transition: "width 0.1s ease-out" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 lg:pb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
            About us
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A Complete Portfolio
            <br />
            of Medical Supplies
          </h2>
          {/* <p className="mt-8 leading-relaxed text-muted-foreground  text-xl text-center">
            Panasea Healthcare is a premier pharmaceutical and medical supplies
            distributor, connecting certified manufacturers with healthcare
            providers who depend on reliable, uninterrupted supply chains.
          </p> */}
        </div>
      </div>
    </section>
  );
}
