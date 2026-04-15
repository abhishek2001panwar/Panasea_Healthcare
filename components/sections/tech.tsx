"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sideImages = [
  {
    src: "https://media.istockphoto.com/id/1214111697/photo/diverse-international-team-of-industrial-scientists-and-engineers-wearing-white-coats-working.jpg?s=612x612&w=0&k=20&c=dJVBLm_dkf9JXB7j3mLbsKy4z4RxSE5ZLVgzRMQpPFg=",
    alt: "Healthcare professional at work",
    position: "left",
  },
  {
    src: "https://media.istockphoto.com/id/1422967697/photo/ampoule-on-conveyor.jpg?s=612x612&w=0&k=20&c=hUXU17F3uGqB_2r2O8GpVKfqRQgKN7enopvWMO4mkfo=",
    alt: "Medical supplies and pharmaceuticals",
    position: "right",
  },
];

const textCycles = [
  "Healthcare Distribution Excellence.",
  "Global Pharmaceutical Reach.",
  "Premium Supply Solutions.",
];

const services = [
  {
    number: "01",
    title: "Hospitals & Healthcare Institutions",
    description:
      "Comprehensive, high-volume supply solutions for multi-specialty hospitals, nursing homes, and day-care centers-with dedicated account management and scheduled replenishment.",
  },
  {
    number: "02",
    title: "Pharmacies & Retail Chains",
    description:
      "Fast, reliable medicine supply for standalone pharmacies and retail chains, with competitive margins and consistent stock availability of fast-moving products.",
  },
  {
    number: "03",
    title: "Diagnostic Centers & Labs",
    description:
      "Specialized supply of reagents, test kits, and consumables for pathology labs and diagnostic imaging centers, with assured cold-chain handling.",
  },
  {
    number: "04",
    title: "Import & Export Services",
    description:
      "End-to-end facilitation of international pharmaceutical trade-from regulatory clearances and documentation to customs compliance and global logistics coordination.",
  },
  {
    number: "05",
    title: "Warehousing & Logistics",
    description:
      "Temperature-controlled, secure warehousing with real-time inventory management, ensuring full product integrity from inbound receipt to outbound delivery.",
  },
];

const CARD_H = 140;
const CARD_GAP = 10;
const TOP_PADDING = 10; // Distance from top of viewport - reduced for more card space

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesProgress, setServicesProgress] = useState(0);
  const [vh, setVh] = useState(0);

  const totalCards = services.length;

  useEffect(() => {
    setVh(window.innerHeight);

    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      // Hero
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollableHeight = window.innerHeight * 4;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
        setScrollProgress(progress);
      }
      // Services
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        const sectionScrollHeight = servicesRef.current.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / sectionScrollHeight));
        setServicesProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hero layout
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  const centerWidth = 100 - imageProgress * 58;
  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const gap = imageProgress * 16;

  // Header fades in first 15% of services scroll
  const headerOpacity = Math.max(0, 1 - servicesProgress / 0.15);

  // Card band = 1 scroll unit per card
  const cardBandSize = 1 / totalCards;

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section  ref={sectionRef} className="relative bg-foreground">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="relative flex h-full w-full items-stretch justify-center"
              style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
            >
              {/* Left */}
              <div
                className="relative overflow-hidden will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  height: "100%",
                  transform: `translateX(${sideTranslateLeft}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages
                  .filter((img) => img.position === "left")
                  .map((img, idx) => (
                    <Image key={idx} src={img.src} alt={img.alt} fill className="object-cover" />
                  ))}
              </div>

              {/* Center */}
              <div
                className="relative overflow-hidden will-change-transform"
                style={{ width: `${centerWidth}%`, height: "100%", flex: "0 0 auto" }}
              >
                <Image
                  src="https://media.istockphoto.com/id/1521289911/photo/container-trucks-parked-loading-package-boxes-pallets-at-warehouse-dock-supply-chain.jpg?s=612x612&w=0&k=20&c=cbaUTGirSEdGMgXoxdHBmOuVJ7LsJaJERY7lnLz5-fg="
                  alt="Pharmacy and pharmaceutical distribution"
                  fill
                  className="object-cover object-center"
                />
                <Image
                  src="https://images.unsplash.com/photo-1631217314830-4d5e9d1f9f3e?w=1000&h=1000&fit=crop"
                  alt="Medical supplies warehouse"
                  fill
                  className="absolute inset-0 object-cover"
                  style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.2)) }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=1000&fit=crop"
                  alt="Healthcare distribution center"
                  fill
                  className="absolute inset-0 object-cover"
                  style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2)) }}
                />
                {/* <Image
                  src="https://images.unsplash.com/photo-1576091160675-4daf3a556f51?w=1000&h=1000&fit=crop"
                  alt=""
                  fill
                  className="absolute inset-0 object-cover"
                  style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.2)) }}
                /> */}
                <div className="absolute inset-0 bg-foreground/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  {textCycles.map((text, cycleIndex) => {
                    const cycleStart = cycleIndex / textCycles.length;
                    const cycleEnd = (cycleIndex + 1) / textCycles.length;
                    const words = text.split(" ");
                    return (
                      <h2
                        key={cycleIndex}
                        className="absolute max-w-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-5xl"
                      >
                        {words.map((word, wordIndex) => {
                          let wordOpacity = 0;
                          let wordBlur = 40;
                          if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                            const lp = (scrollProgress - cycleStart) / (cycleEnd - cycleStart);
                            if (lp < 0.5) {
                              const ap = (lp / 0.5) * (words.length + 1);
                              const wp = Math.max(0, Math.min(1, ap - wordIndex));
                              wordOpacity = wp;
                              wordBlur = (1 - wp) * 40;
                            } else {
                              const dp = ((lp - 0.5) / 0.5) * (words.length + 1);
                              const wp = Math.max(0, Math.min(1, dp - wordIndex));
                              wordOpacity = 1 - wp;
                              wordBlur = wp * 40;
                            }
                          }
                          return (
                            <span
                              key={wordIndex}
                              className="inline-block"
                              style={{
                                opacity: wordOpacity,
                                filter: `blur(${wordBlur}px)`,
                                transition: "opacity 0.1s linear, filter 0.1s linear",
                                marginRight: "0.3em",
                              }}
                            >
                              {word}
                            </span>
                          );
                        })}
                      </h2>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div
                className="relative overflow-hidden will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  height: "100%",
                  transform: `translateX(${sideTranslateRight}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages
                  .filter((img) => img.position === "right")
                  .map((img, idx) => (
                    <Image key={idx} src={img.src} alt={img.alt} fill className="object-cover" />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400vh]" />
      </section>

      {/* ── SERVICES SECTION ──
          Cards start at the top of viewport and stack downward as you scroll.
          Each card gets its own animation band.
          Total scroll room = totalCards * 100vh + 1 extra for breathing.
      */}
      <section
      id="services"
        ref={servicesRef}
        className="relative bg-black"
        style={{ height: `${(totalCards + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-black">

          {/* Section header */}
          <div
            className="absolute top-10 md:top-14 left-0 right-0 text-center pointer-events-none z-50"
            style={{ opacity: headerOpacity, transition: "none" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              our  Services
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
Serving Every Segment of Healthcare            </h2>
          </div>

          {/* Cards-each stacked downward from the top */}
          <div className="absolute inset-0 flex items-start justify-center pt-0">
            <div className="relative w-full max-w-xl px-6 md:px-0 h-screen" style={{ paddingTop: `${TOP_PADDING}px` }}>
              {services.map((service, i) => {
                /*
                  LOGIC:
                  - Card i animates in during progress band [i/N, (i+1)/N]
                  - Cards are anchored to the TOP of the viewport
                  - Card 0 appears first at top, then card 1 below it, etc
                  - Each card slides down from above into its resting spot
                  - Resting top edge for card i = TOP_PADDING + i * (CARD_H + CARD_GAP)
                */
                const bandStart = i * cardBandSize;
                const bandEnd = (i + 1) * cardBandSize;

                // 0 → 1 within this card's band
                const rawT = Math.max(
                  0,
                  Math.min(1, (servicesProgress - bandStart) / (bandEnd - bandStart))
                );
                // easeOut curve
                const t = 1 - (1 - rawT) * (1 - rawT);

                const hasEntered = servicesProgress >= bandStart;

                // Calculate top position - card i stacks at: padding + i * (height + gap)
                const restingTopPx = TOP_PADDING + i * (CARD_H + CARD_GAP);

                // Slide in from above: start 120px above resting, end at resting
                const slideOffset = hasEntered ? -(1 - t) * 120 : -120;

                // Slight scale reduction for cards deeper in stack (purely aesthetic)
                const depthScale = 1 - i * 0.01;

                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      height: `${CARD_H}px`,
                      top: `${restingTopPx}px`,
                      transform: `translateY(${slideOffset}px) scale(${depthScale})`,
                      opacity: hasEntered ? t : 0,
                      zIndex: i + 1,
                      willChange: "transform, opacity",
                      transformOrigin: "top center",
                    }}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl px-7 py-5 flex flex-col justify-between"
                  >
                    {/* Top hairline accent */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px"
                      style={{
                        background: "linear-gradient(90deg, transparent, #2a2a2a, transparent)",
                      }}
                    />

                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-medium text-neutral-600 tracking-widest tabular-nums flex-shrink-0">
                        {service.number}
                      </span>
                      <span className="text-base font-semibold text-white leading-snug">
                        {service.title}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}