"use client";

import { useParams } from "next/navigation";
import features from "@/lib/data"; // adjust path
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const category = features.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Category not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Products</span>
            <span className="text-gray-300">/</span>
            <span className="text-xs font-semibold text-[#212C5F] uppercase tracking-widest">{category.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
            {category.title}
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {category.items.map((item, idx) => (
            <div
              key={item.name}
              className={`group transition-all duration-700 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${(idx + 1) * 80}ms`,
              }}
            >
              <div className="h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-500">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Product Name */}
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-[#212C5F] transition-colors duration-300">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">
                    {item.description}
                  </p>

                  {/* CTA */}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}