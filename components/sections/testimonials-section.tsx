"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="border-b relative py-1 flex flex-col items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-5 w-72 h-72 rounded-full blur-3xl" style={{ background: '#212C5F10', pointerEvents: 'none' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: '#212C5F08', pointerEvents: 'none' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full" style={{ background: '#212C5F15', color: '#212C5F' }}>
            Take the Next Step
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900 text-center">
          Ready to Strengthen Your 
          <br />
          <span style={{ background: 'linear-gradient(120deg, #212C5F 0%, #4A5B9F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Supply Chain?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center mb-12 font-light">
          Join hundreds of hospitals, pharmacies, and distributors who trust <span className="font-semibold text-gray-900">Panasea Healthcare</span> for consistent, quality-assured medical supplies. Let's build a more reliable healthcare ecosystem together.
        </p>

        {/* Primary CTA Buttons */}
        <a href="/#contact" className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            className="group relative px-8 py-4 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#212C5F]/40 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #212C5F 0%, #1A2250 100%)' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
               Get a Quote Today
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-500" />
          </button>

         
        </a>

        {/* Email Newsletter Section */}
        {/* <div className="mt-16 pt-12 border-t border-gray-200/50">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-6 text-center font-semibold">
            Get the latest updates
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-2xl mx-auto">
            <div className="flex-1 relative group">
              <input
                type="email"
                required
                className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-2 border-gray-200 transition-all duration-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-0"
                style={{ focusBorderColor: '#212C5F', focusRingColor: '#212C5F33' }}
                placeholder="Enter your email..."
              />
              <div className="absolute inset-0 rounded-xl opacity-0 pointer-events-none transition-opacity duration-300 group-focus-within:opacity-100" style={{ background: '#212C5F08', boxShadow: '0 0 20px #212C5F20' }} />
            </div>
            <button
              type="submit"
              className="sm:px-8 px-6 py-4 rounded-xl font-semibold text-white text-lg whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #212C5F 0%, #1A2250 100%)' }}
            >
              Subscribe 
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">No spam, just industry-leading insights delivered weekly.</p>
        </div> */}
      </div>
    </section>
  );
}
