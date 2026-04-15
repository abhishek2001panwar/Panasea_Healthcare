'use client'
import React, { useEffect, useRef, useState } from "react";

function useCountUp(to: number, duration = 1200, format?: (n: number) => string) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>();
  useEffect(() => {
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
      else setValue(to);
    }
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [to, duration]);
  return format ? format(value) : value;
}

const stats = [
  { to: 500, label: "Partners", suffix: "+" },
  { to: 5000, label: "Products", suffix: "+" },
  { to: 98, label: "On-time Delivery", suffix: "%" },
  { to: 24, label: "Support", suffix: "/7" },
];

// Animation utility hook
function useFadeIn(delay = 0, yFrom = 60) {
  const [show, setShow] = useState(false);
  const style = {
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : `translateY(${yFrom}px)`,
    transition: `opacity 0.7s ${delay}ms cubic-bezier(.4,1,.7,1), transform 0.7s ${delay}ms cubic-bezier(.4,1,.7,1)`
  };
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return style;
}

const Hero: React.FC = () => {
  // Animations for each element
  const labelAnim = useFadeIn(100, 40);
  const headingAnim = useFadeIn(300, 60);
  const descAnim = useFadeIn(500, 60);
  const btnAnim = useFadeIn(700, 60);
  const cardAnim = useFadeIn(900, 80);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="pt-4 md:pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-6" style={labelAnim}>
            <span className="w-2 h-2 rounded-full bg-[#212C5F] inline-block"></span>
            <span className="text-xs md:text-sm tracking-widest text-[#212C5F] font-semibold uppercase">India's Trusted Healthcare Distributor</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-4 md:mb-6" style={headingAnim}>
            Healthcare <span className="text-[#212C5F]">Supply</span>
            <br />You Can Count On
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg" style={descAnim}>
            From pharmaceuticals and surgical equipment to diagnostics and medical disposables - we deliver quality-assured medical products to hospitals, clinics, and pharmacies across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4" style={btnAnim}>
            <button className="bg-[#212C5F] text-white px-6 py-3 rounded-lg hover:bg-[#1A2250] transition text-sm md:text-base">
              Explore Our Products
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm md:text-base">
              Partner With Us
            </button>
          </div>
        </div>
        {/* RIGHT STATS CARD */}
        <div className="relative flex justify-center lg:justify-end mt-8 md:mt-0" style={cardAnim}>
          {/* Glow background */}
          <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] bg-gradient-to-br from-[#E8EAFD] via-[#F0F4FF] to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl">
            <div className="text-xs text-center mb-6 md:mb-8">
              <span className="px-3 py-1 border border-[#212C5F] text-[#212C5F] rounded-full font-semibold tracking-wider bg-white/80 text-xs md:text-sm">
                Certified Distributor
              </span>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {stats.map((stat, i) => {
                const val = useCountUp(stat.to, 1200 + i * 200, n =>
                  stat.to === 5000 ? n.toLocaleString() : n.toString()
                );
                return (
                  <div key={stat.label} className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#212C5F] mb-1 flex items-end justify-center min-h-[2em] md:min-h-[2.5em]">
                      {val}
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#4A5B9F] ml-1">{stat.suffix}</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* Unique Divider Line */}
            <div className="mt-6 md:mt-8 h-[2px] bg-gradient-to-r from-transparent via-[#4A5B9F] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;