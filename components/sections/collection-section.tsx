"use client";

import { FadeImage } from "@/components/fade-image";
import { useEffect, useState } from "react";

const accessories = [
  {
    id: 1,
    name: "A Partner, Not Just a Vendor",
    description:
      "We invest in long-term relationships with every client. From your first order to your thousandth, you'll have a dedicated point of contact who knows your business.",
    icon: "01",
    image: "/why1.png",
  },
  {
    id: 2,
    name: "Uncompromising Quality Standards",
    description:
      "Every batch we distribute is verified for authenticity, expiry, and storage compliance. Our quality checks happen before products leave the warehouse - not after a complaint.",
    icon: "02",
    image: "/why2.png",
  },
  {
    id: 3,
    name: "Technology-Enabled Speed",
    description:
      "Our digital order management system ensures fast turnarounds, real-time tracking, and automated reorder alerts - so your shelves are never empty when patients need you.",
    icon: "03",
    image: "/why3.png",
  },
  {
    id: 4,
    name: "Pan-India Reach with Global Capability",
    description:
      "We distribute across India and handle international trade with full regulatory expertise, making us a single source for both domestic needs and import/export requirements.",
    icon: "04",
    image: "/why4.png",
  },
];

export function CollectionSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          setVisibleCards((prev) => new Set(prev).add(cardIndex));
        }
      });
    }, observerOptions);

    const cardElements = document.querySelectorAll("[data-scroll-card]");
    cardElements.forEach((card) => observer.observe(card));

    return () => {
      cardElements.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="why-choose-us"
      className="relative bg-gradient-to-b from-white via-[#212C5F]/5 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#212C5F]/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-[#212C5F]/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Premium Section Header */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-7xl mx-auto ">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E8EAFD] border border-[#212C5F]/30">
                <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                <p className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                  Why Choose Us
                </p>
              </div>
            </div>

            {/* Heading & Description */}
            <div className="space-y-3 sm:space-y-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight tracking-tight">
                The Standard for <br className="hidden sm:block" />
                Healthcare Distribution
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                Excellence in every aspect of our service. Partner with us for reliability, quality, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Scroll Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {accessories.map((accessory, index) => {
              const isVisible = visibleCards.has(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={accessory.id}
                  data-index={index}
                  data-scroll-card
                  className="scroll-card-container min-h-auto md:min-h-[500px] lg:min-h-[600px]"
                >
                  {/* Alternating Layout - Stack on mobile, alternate on desktop */}
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center md:items-start lg:items-center`}
                  >
                    {/* Content Side */}
                    <div
                      className={`w-full md:flex-1 transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : isEven
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Icon & Title */}
                        <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#212C5F]/20 to-[#4A5B9F]/10 flex items-center justify-center border border-[#212C5F]/20">
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-[#212C5F]">
                              {accessory.icon}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                              {accessory.name}
                            </h3>
                          </div>
                        </div>

                        {/* Accent Line */}
                        <div className="w-12 h-1 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] rounded-full" />

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                          {accessory.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side - Full width on mobile, flex on desktop */}
                    <div
                      className={`w-full md:flex-1 relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-12"
                      }`}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden group shadow-lg sm:shadow-xl md:shadow-2xl shadow-teal-900/10 border border-gray-200/50">
                        <FadeImage
                          src={accessory.image}
                          alt={accessory.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority={index === 0}
                        />

                        {/* Premium Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Accent Bottom Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#212C5F] via-[#4A5B9F] to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote & Stats Section */}
       
      </div>

      {/* Premium Scroll Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-card-container {
          animation: slideInUp 0.6s ease-out;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .scroll-card-container {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}