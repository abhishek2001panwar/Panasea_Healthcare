// "use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Pharmaceuticals",
    description:
      "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements - fully compliant with drug regulatory standards.",
    icon: "💊",
    slug: "pharmaceuticals",
  },
  {
    title: "Medical Disposables",
    description:
      "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
    icon: "🩺",
    slug: "medical-disposables",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
    icon: "🔭",
    slug: "diagnostic-equipment",
  },
  {
    title: "Surgical Instruments & OT Equipment",
    description:
      "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
    icon: "🏥",
    slug: "surgical-instruments",
  },
  {
    title: "Lab Reagents & Test Kits",
    description:
      "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
    icon: "🧪",
    slug: "lab-reagents",
  },
  {
    title: "HVAC & Clean Room Solutions",
    description:
      "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
    icon: "🌡️",
    slug: "hvac-solutions",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">
              our products
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            a complete portfolio of medical supplies
          </h2>
          <p className="text-gray-600 font-light max-w-2xl">
            from pharmaceuticals to diagnostic equipment, everything your healthcare facility needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((product, idx) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group h-full flex flex-col"
            >
              {/* Product Card */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/50 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300">
                {/* Icon Box */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden group-hover:from-gray-200 group-hover:to-gray-100 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-6xl md:text-7xl"
                  >
                    {product.icon}
                  </motion.div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Product Title (as small label) */}
                  <p className="text-xs md:text-sm text-gray-600 font-light lowercase mb-2 line-clamp-2">
                    {product.title.toLowerCase()}
                  </p>

                  {/* Product Description (as heading) */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 lowercase leading-snug group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {product.description.toLowerCase().substring(0, 80)}...
                  </h3>

                  {/* Explore Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:text-gray-700 group/btn transition-all duration-300"
                  >
                    <span>explore</span>
                    <motion.svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="group-hover/btn:translate-x-1 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </Link>
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}