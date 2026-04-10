"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT: Info */}
        <div>
          <p className="text-xs font-bold text-gray-600 tracking-widest mb-4 uppercase" style={{ color: '#212C5F' }}>Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Talk About <br /> Your Requirements
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-normal">
            Whether you're looking for a specific product, exploring a distribution partnership, or need a custom supply arrangement - we're here to help.
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0" style={{ background: '#212C5F15' }}>
                <svg width="1.5em" height="1.5em" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</div>
                <div className="text-base font-semibold text-gray-900">+91 876 543 210</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0" style={{ background: '#212C5F15' }}>
                <svg width="1.5em" height="1.5em" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none"/></svg>
              </span>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</div>
                <div className="text-base font-semibold text-gray-900">panaseahealthcare@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0" style={{ background: '#212C5F15' }}>
                <svg width="1.5em" height="1.5em" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14" fill="none"/></svg>
              </span>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Support</div>
                <div className="text-base font-semibold text-gray-900">24/7 Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form className="space-y-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2 tracking-widest">Your Name</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:border-transparent focus:ring-2" style={{ focusRingColor: '#212C5F33' }} placeholder="Dr. Anita Sharma" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2 tracking-widest">Phone</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:border-transparent focus:ring-2" style={{ focusRingColor: '#212C5F33' }} placeholder="+91 98765 43210" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2 tracking-widest">Email</label>
              <input type="email" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:border-transparent focus:ring-2" style={{ focusRingColor: '#212C5F33' }} placeholder="you@hospital.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2 tracking-widest">Organization</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:border-transparent focus:ring-2" style={{ focusRingColor: '#212C5F33' }} placeholder="Apollo Hospital..." />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-2 tracking-widest">Message</label>
              <textarea className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:border-transparent focus:ring-2 min-h-[100px]" style={{ focusRingColor: '#212C5F33' }} placeholder="Tell us what you're looking for..."></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full md:w-auto text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg text-base" style={{ background: 'linear-gradient(135deg, #212C5F 0%, #1A2250 100%)' }}>
              Send Enquiry →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}