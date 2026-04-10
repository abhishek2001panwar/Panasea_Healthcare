"use client";

import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Authentic, Certified Products",
    desc: "Every product in our catalog is sourced directly from licensed, GMP-certified manufacturers - zero compromises on authenticity.",
    icon: "🧾",
  },
  {
    title: "Cold-Chain Integrity",
    desc: "Our temperature-controlled logistics infrastructure safeguards sensitive pharmaceuticals from storage through last-mile delivery.",
    icon: "❄️",
  },
  {
    title: "Reliable, On-Time Delivery",
    desc: "Our distribution network is built around speed, accuracy, and dependability - because healthcare cannot wait.",
    icon: "🚚",
  },
  {
    title: "End-to-End Compliance",
    desc: "Full regulatory documentation, traceability, and quality assurance at every step of the supply chain.",
    icon: "🛡️",
  },
];

const stats = [
  { value: "500+", label: "Healthcare Partners" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support Available" },
];

function useFadeInOnView(delay = 0, yFrom = 60) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  
  const style = {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : `translateY(${yFrom}px)`,
    transition: `opacity 0.8s ${delay}ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s ${delay}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };
  
  return [ref, style] as const;
}

const AboutSection: React.FC = () => {
  const [sectionRef, sectionAnim] = useFadeInOnView(0, 0);
  const [headingRef, headingAnim] = useFadeInOnView(100, 40);
  const [descRef, descAnim] = useFadeInOnView(200, 40);

  return (
    <section 
    id="about"
      className="relative w-full overflow-hidden py-10 bg-[]"
      ref={sectionRef}
      style={sectionAnim}
    >
      {/* Animated Background */}
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#212C5F]/3 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        
      
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SECTION */}
          <div>
            <div className="space-y-5">
              <div className="inline-flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#212C5F] rounded-full" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#212C5F]">
                    About Us    
                  </p>
                </div>
              </div>

              <div className="space-y-4 max-w-3xl">
                <h2 
                  ref={headingRef}
                  style={headingAnim}
                  className="text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
                >
                  We Don't Just Deliver Medicine
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, var(--teal) 0%, #212C5F 100%)' }}>
                    We Deliver Trust
                  </span>
                </h2>

                <p 
                  ref={descRef}
                  style={descAnim}
                  className="text-lg text-gray-600 font-light leading-relaxed max-w-xl"
                >
                  Panasea Healthcare is a premier pharmaceutical and medical supplies
                distributor, connecting certified manufacturers with healthcare
                providers who depend on reliable, uninterrupted supply chains.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((item, i) => {
                const [cardRef, cardAnim] = useFadeInOnView(300 + i * 100, 40);
                return (
                  <div
                    key={i}
                    ref={cardRef}
                    style={cardAnim}
                    className="group relative"
                  >
                    {/* Glassmorphism Card */}
                    <div className="relative flex gap-4 p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon Container */}
                      <div className="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-lg">
                        <span className="text-2xl">{item.icon}</span>
                      </div>

                      {/* Content */}
                      <div className="relative flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed ">
                          {item.desc}
                        </p>
                      </div>

                      {/* Accent Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#212C5F] via-[#4A5B9F] to-[#6B7EC9] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-r" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative lg:sticky lg:top-24">
            
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

            {/* Main Card */}
            <div className="relative">
              {/* Glassmorphism Container */}
              <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden group">
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#212C5F]/10 via-[#4A5B9F]/10 to-[#6B7EC9]/10 blur-xl" />
                </div>

                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--teal) 0%, #212C5F 100%)' }} />

                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                    Why Healthcare Providers Choose{" "}
                    <span className="text-primary">Panasea</span>
                  </h3>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We've built lasting relationships with hospitals, diagnostic
                    chains, and pharmacies by consistently delivering what matters
                    most - the right product, on time, every time.
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-4">
                    {[
                      "Authorized distributor for leading pharmaceutical brands",
                      "ISO-compliant warehousing and logistics facilities",
                      "Dedicated account managers for every partner",
                      "Transparent pricing with no hidden costs",
                      "Rapid order processing and real-time tracking",
                    ].map((item, i) => {
                      const [listRef, listAnim] = useFadeInOnView(400 + i * 80, 20);
                      return (
                        <li 
                          key={i} 
                          ref={listRef}
                          style={listAnim}
                          className="flex items-start gap-3 group/item"
                        >
                          <span
                            className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-bold mt-0.5 group-hover/item:scale-110 transition-all duration-300"
                            style={{
                              background: 'linear-gradient(135deg, var(--teal) 60%, #212C5F 100%)',
                              boxShadow: '0 2px 8px 0 #212C5F33',
                            }}
                          >
                            ✓
                          </span>
                          <span className="text-foreground/80 text-sm md:text-base font-medium leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-50" />
                </div>
              </div>

              {/* Floating Card Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#212C5F]/10 via-[#4A5B9F]/10 to-[#6B7EC9]/10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 -z-10" />
            </div>

          </div>

        </div>
      </div>

      {/* Custom Animations */}
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;