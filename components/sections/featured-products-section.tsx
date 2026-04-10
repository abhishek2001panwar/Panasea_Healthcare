// "use client";

// import { FadeImage } from "@/components/fade-image";

// const features = [
//   {
//     title: "Pharmaceuticals",
//     description:
//       "A broad range of prescription medicines, life-saving drugs, OTC products, and wellness supplements - fully compliant with drug regulatory standards.",
//     icon: "💊",
//     cta: "Request catalog →",
//     image: "/product1.png",
//   },
//   {
//     title: "Medical Disposables",
//     description:
//       "Hospital-grade gloves, syringes, IV sets, surgical masks, drapes, and protective equipment for clinics, hospitals, and diagnostic labs.",
//     icon: "🩺",
//     cta: "Request catalog →",
//     image: "/product2.png",
//   },
//   {
//     title: "Diagnostic Equipment",
//     description:
//       "High-performance imaging, monitoring, and diagnostic instruments from globally trusted brands, supporting precision in patient care.",
//     icon: "🔭",
//     cta: "Request catalog →",
//     image: "/product3.png",
//   },
//   {
//     title: "Surgical Instruments & OT Equipment",
//     description:
//       "Modern OT tables, surgical lighting, sterile instrument sets, and patient monitoring systems for advanced surgical environments.",
//     icon: "🏥",
//     cta: "Request catalog →",
//     image: "/product4.png",
//   },
//   {
//     title: "Lab Reagents & Test Kits",
//     description:
//       "Specialized diagnostic consumables, lab reagents, rapid test kits, and sample collection supplies for pathology and research labs.",
//     icon: "🧪",
//     cta: "Request catalog →",
//     image: "/product5.png",
//   },
//   {
//     title: "HVAC & Clean Room Solutions",
//     description:
//       "Hospital-grade HEPA filtration systems and climate control solutions designed to maintain sterile conditions in critical care environments.",
//     icon: "🌡️",
//     cta: "Request catalog →",
//     image: "/product6.png",
//   },
// ];

// export function FeaturedProductsSection() {
//   return (
//     <section id="technology" className="bg-background">
//       {/* Section Title */}
//       <div className="px-6 text-left md:px-12  lg:px-20  mb-10">
//         <p className="mx-auto mt-6 uppercase  text-sm text-muted-foreground">
//           Our Products
//         </p>
//         <h2 className="mt-1 text-2xl  tracking-tight text-foreground md:text-3xl lg:text-4xl">
//           A Complete Portfolio of 
          
//          Medical Supplies

//         </h2>
       
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 gap-4 px-6  md:grid-cols-3 max-w-8xl mx-16">
//         {features.map((feature) => (
//           <div key={feature.title} className="group">
//             {/* Image */}
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <FadeImage
//                 src={feature.image || "/placeholder.svg"}
//                 alt={feature.title}
//                 fill
//                 className="object-cover  overflow-hidden rounded-2xl transition-transform duration-500"
//               />
             
//             </div>

//             {/* Content */}
//             <div className="py-6">
//               <h3 className="text-foreground text-xl mb-2 ">
//                 {feature.title}
//               </h3>
//               <p className=" text-sm    text-muted-foreground">
//                 {feature.description}
//               </p>
//                 <div className="mt-5">
//                   <a
//                     href="#products"
//                     className="text-black text-sm underline underline-offset-4 hover:text-neutral-700 transition-colors duration-150 p-0 bg-transparent border-none shadow-none"
//                     style={{padding:0, background:'none', border:'none', boxShadow:'none'}}
//                   >
//                     Explore
//                   </a>
//                 </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Link */}
     
//     </section>
//   );
// }


import React from 'react'
import ProductPage from '../../app/products/page';

function FeaturedProductsSection() {
  return (
    <div 
      id="products"
    >
      <ProductPage />
    </div>
  )
}

export default FeaturedProductsSection