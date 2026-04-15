"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";

// const features = [
//   {
//     title: "Smart Temperature Control",
//     description: "Innovation",
//     image: "/images/d18fe616-5596-4559-90f5-a90f5397d0d8.png",
//   },
//   {
//     title: "Ultra-Light Carbon Frame",
//     description: "Performance",
//     image: "/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png",
//   },
//   {
//     title: "Weather-Resistant Design",
//     description: "Durability",
//     image: "/images/car.jpg",
//   },
//   {
//     title: "Integrated GPS Tracking",
//     description: "Navigation",
//     image: "/images/204cee22-9e85-49e8-9303-1d309af626b0.png",
//   },
//   {
//     title: "Built-In LED Flashlight",
//     description: "Visibility",
//     image: "/images/led-flashlight-bottle.png",
//   },
//   {
//     title: "Self-Heating Technology",
//     description: "Comfort",
//     image: "/images/heating-campfire.png",
//   },
// ];

const features = [
  {
    title: "Pharmaceuticals",
    description:
      "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements - fully compliant with drug regulatory standards.",
    image: "https://media.istockphoto.com/id/1174079947/photo/many-nutritional-health-supplements-and-vitamins-in-capsules-and-tablets-in-a-hand-before.jpg?s=612x612&w=0&k=20&c=_nzpRMQLIOJcth3_nkANZTYC7q7JfwaL0wBssu48KPU=",
    slug: "pharmaceuticals",
  },
  {
    title: "Medical Disposables",
    description:
      "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
    image: "https://media.istockphoto.com/id/1203224882/photo/medical-bandages-and-gloves-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=SD7n1UV-m3sYfyQAydTK--E2Z1p9SCgG3j1ybJKVaM0=",
    slug: "medical-disposables",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
    image: "https://media.istockphoto.com/id/592647720/photo/vigilantly-monitoring-his-patients-vitals.jpg?s=612x612&w=0&k=20&c=cKQ6XPw8X98Z-9XQDR0DqnpTdvFsiHiXzYptGbKdD40=",
    slug: "diagnostic-equipment",
  },
  {
    title: "Surgical Instruments & OT Equipment",
    description:
      "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
    image: "https://media.istockphoto.com/id/2217138396/photo/featuring-two-round-ot-lights-with-double-dome-led-technology-this-setup-offers-enhanced.jpg?s=612x612&w=0&k=20&c=SBwfbHGDAURTxcz5upDlEs-wHbNhoSFX5wdkBlpcXVI=",
    slug: "surgical-instruments-ot-equipment",
  },
  {
    title: "Lab Reagents & Test Kits",
    description:
      "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
    image: "https://media.istockphoto.com/id/2256032231/photo/cute-arabian-girl-elementary-student-kid-wearing-lab-coat-standing-near-microscope-hold-glass.jpg?s=612x612&w=0&k=20&c=r_-8boEtI5HjTTXFdMQgNnD5iMIaWr20whkB_KRj4ek=",
    slug: "lab-reagents-test-kits",
  },
  {
    title: "HVAC & Clean Room Solutions",
    description:
      "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
    image: "https://media.istockphoto.com/id/466333546/photo/solar-panel-manufacturing.jpg?s=612x612&w=0&k=20&c=OSmaIQu266M6p5U1ZUGjr8D-VKEYUS8kLtncExBz3xs=",
    slug: "hvac-clean-room-solutions",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Complete Portfolio of <br />
          Medical Supplies{" "}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          OUR PRODUCTS
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              {/* <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p> */}
              <div className="flex items-center justify-between gap-3 group/title">
                <h3 className="text-foreground text-xl font-semibold flex-1">
                  {feature.title}
                </h3>
                <Link
                  href={`/products/${feature.slug}`}
                  className="flex items-center justify-center  text-foreground transition-all duration-300 flex-shrink-0  "
                  aria-label={`View ${feature.title}`}
                >
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20"></div>
    </section>
  );
}
