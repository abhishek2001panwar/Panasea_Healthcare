"use client";

import { FadeImage } from "@/components/fade-image";
import { useEffect, useRef, useState } from "react";

const accessories = [
  {
    id: 1,
    name: "A Partner, Not Just a Vendor",
    description:
      "We invest in long-term relationships with every client. From your first order to your thousandth, you'll have a dedicated point of contact who knows your business.",
    icon: "🤝",
    image: "/why1.png",
  },
  {
    id: 2,
    name: "Uncompromising Quality Standards",
    description:
      "Every batch we distribute is verified for authenticity, expiry, and storage compliance. Our quality checks happen before products leave the warehouse - not after a complaint.",
    icon: "✅",
    image: "/why2.png",
  },
  {
    id: 3,
    name: "Technology-Enabled Speed",
    description:
      "Our digital order management system ensures fast turnarounds, real-time tracking, and automated reorder alerts - so your shelves are never empty when patients need you.",
    icon: "⚡",
    image: "/why3.png",
  },
  {
    id: 4,
    name: "Pan-India Reach with Global Capability",
    description:
      "We distribute across India and handle international trade with full regulatory expertise, making us a single source for both domestic needs and import/export requirements.",
    icon: "🌍",
    image: "/why4.png",
  },
];

export function CollectionSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
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
        <div className="absolute top-0 right-1/2 w-80 h-80 bg-[#212C5F]/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#212C5F]/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Premium Section Header */}
        <div className="px-6 md:px-8 lg:px-12 mb-16 md:mb-20 max-w-7xl mx-auto">
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                  Why Choose Us
                </p>
              </div>
            </div>

            {/* Heading & Description */}
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                The Standard for <br className="hidden md:block" />
                Healthcare Distribution
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                Excellence in every aspect of our service. Partner with us for reliability, quality, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Scroll Cards Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-16 md:space-y-10">
            {accessories.map((accessory, index) => {
              const isVisible = visibleCards.has(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={accessory.id}
                  data-index={index}
                  data-scroll-card
                  className="scroll-card-container min-h-[500px] md:min-h-[600px]"
                >
                  {/* Alternating Layout */}
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 md:gap-16 items-center`}
                  >
                    {/* Content Side */}
                    <div
                      className={`flex-1 transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : isEven
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="space-y-6">
                        {/* Icon & Title */}
                        <div className="flex items-start gap-4">
                          <span className="text-5xl md:text-6xl flex-shrink-0 animate-bounce-slow">
                            {accessory.icon}
                          </span>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                              {accessory.name}
                            </h3>
                          </div>
                        </div>

                        {/* Accent Line */}
                        <div className="w-0 h-1.5 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] rounded-full" />

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed font-light max-w-lg">
                          {accessory.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div
                      className={`flex-1 relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-32"
                      }`}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden group shadow-2xl shadow-teal-900/10 border border-gray-200/50">
                        <FadeImage
                          src={accessory.image}
                          alt={accessory.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Premium Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Accent Bottom Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#212C5F] via-[#4A5B9F] to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote & Stats Section */}
        <div className=" border-t border-gray-200/50 pt-5">
          <div className="px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-5">
            {/* Premium Quote */}
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed max-w-3xl mx-auto italic">
                "Access to quality medicines and medical supplies is not a luxury- it's a fundamental pillar of healthcare delivery."
              </p>
            </div>

         
          </div>
        </div>
      </div>

      {/* Premium Scroll Animations */}
      <style jsx>{`
        @keyframes bounceSlowly {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounceSlowly 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}