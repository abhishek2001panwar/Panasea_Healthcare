"use client";

import { FadeImage } from "@/components/fade-image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// const accessories = [
//   {
//     id: 1,
//     name: "Wireless Charging Stand",
//     description: "Induction charging dock for effortless power",
//     price: "$89",
//     image: "/images/accessory-charger.png",
//   },
//   {
//     id: 2,
//     name: "Protective Silicone Sleeve",
//     description: "Textured grip sleeve for enhanced durability",
//     price: "$45",
//     image: "/images/accessory-sleeve.png",
//   },
//   {
//     id: 3,
//     name: "Carbon Fiber Bike Mount",
//     description: "Ultra-light mounting system for cycling",
//     price: "$129",
//     image: "/images/accessory-bike-mount.png",
//   },
//   {
//     id: 4,
//     name: "Premium Carry Strap",
//     description: "Adjustable strap with quick-release clips",
//     price: "$39",
//     image: "/images/accessory-strap.png",
//   },
//   {
//     id: 5,
//     name: "Carabiner Clip System",
//     description: "Secure attachment for hands-free carrying",
//     price: "$29",
//     image: "/images/accessory-carabiner.png",
//   },
//   {
//     id: 6,
//     name: "Bluetooth Speaker Base",
//     description: "High-fidelity audio dock with grip stabilizers",
//     price: "$149",
//     image: "/images/accessory-speaker-base.png",
//   },
// ];
const accessories = [
  {
    id: 1,
    name: "A Partner, Not Just a Vendor",
    description:
      "We invest in long-term relationships with every client. From your first order to your thousandth, you'll have a dedicated point of contact who knows your business.",
    icon: "01",
    image: "https://media.istockphoto.com/id/1461343540/photo/happy-bank-manager-shaking-hands-with-a-client-after-successful-agreement-in-the-office.jpg?s=612x612&w=0&k=20&c=WaKSQ3HEo_rGP1pVU4H1Ri3SKLyhBgdry3cffut12ts=",
  },
  {
    id: 2,
    name: "Uncompromising Quality Standards",
    description:
      "Every batch we distribute is verified for authenticity, expiry, and storage compliance. Our quality checks happen before products leave the warehouse - not after a complaint.",
    icon: "02",
    image: "https://media.istockphoto.com/id/184955398/photo/certified-quality-sign.jpg?s=612x612&w=0&k=20&c=a5eth8DkkpI7tvxg0R0qCqc_RfIongmyOO02HOFET2Y=",
  },
  {
    id: 3,
    name: "Technology-Enabled Speed",
    description:
      "Our digital order management system ensures fast turnarounds, real-time tracking, and automated reorder alerts - so your shelves are never empty when patients need you.",
    icon: "03",
    image: "https://media.istockphoto.com/id/2242323627/photo/medical-professional-analyzes-health-data-with-digital-technology-in-a-futuristic-clinic.jpg?s=612x612&w=0&k=20&c=cjEvLeRMqMf-LgJGfba6rPSC8PCM-_BHDZ1LdKquFgA=",
  },
  {
    id: 4,
    name: "Pan-India Reach with Global Capability",
    description:
      "We distribute across India and handle international trade with full regulatory expertise, making us a single source for both domestic needs and import/export requirements.",
    icon: "04",
    image: "https://media.istockphoto.com/id/2185219083/photo/india-health-and-medical-insurance-concept-healthcare-system-india-doctor-holding-stethoscope.jpg?s=612x612&w=0&k=20&c=h_EUtozeS2LFGoOEt7T9-J52So_fL4frCXHzOlCTEFM=",
  },
];

export function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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
    <section id="why-choose-us" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Why Choose Us
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory, index) => {
            const isVisible = visibleCards.has(index);
            return (
            <motion.div
              key={accessory.id}
              data-index={index}
              data-scroll-card
              className="group flex-shrink-0 w-[75vw] snap-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.icon}
                  </span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory, index) => {
            const isVisible = visibleCards.has(index);
            return (
            <motion.div
              key={accessory.id}
              data-index={index}
              data-scroll-card
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/4] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.icon}
                  </span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
