"use client";
import React, { useState } from "react";
import { addContactMessage } from "@/lib/supabase";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
    type: "",
    way: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setSubmitting(true);

    try {
      // Validate all required fields
      if (!formData.name || !formData.phone || !formData.email || !formData.organization || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Submit to Supabase
      await addContactMessage({
        ...formData,
        type: formData.type || "general",
        way: formData.way || "website",
      });

      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your message has been received. We'll get back to you within 24 hours.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        organization: "",
        message: "",
        type: "",
        way: "",
      });

      // Auto-close success overlay after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error: any) {
      setSubmitStatus("error");
      setSubmitMessage(error.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-white via-[#212C5F]/5 to-white overflow-hidden flex flex-col">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#212C5F]/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-[#212C5F]/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8  pb-6 sm:pb-8 md:pb-10 max-w-7xl mx-auto w-full">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E8EAFD] border border-[#212C5F]/30">
                <div className="w-2 h-2 bg-[#212C5F] rounded-full animate-pulse" />
                <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-[#212C5F]">
                  Get In Touch
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Contact Us for Guidance, <br className="hidden sm:block" />
              Support, and Solutions
            </h2>
          </div>
        </div>

        {/* Main Content Grid - Form Left, Info+Map Right */}
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 md:pb-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* LEFT: Contact Form */}
            <div className="w-full">
              <div className="p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200/50 bg-gradient-to-br from-white/70 via-white/60 to-white/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-fit">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                      placeholder="Dr. Anita Sharma"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                        placeholder="you@hospital.com"
                      />
                    </div>
                  </div>

                  {/* Organization Field */}
                  <div>
                    <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                      placeholder="Apollo Hospital..."
                    />
                  </div>

                  {/* Type & Way Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                        Inquiry Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                      >
                        <option value="">Select Type</option>
                        <option value="partnership">Partnership</option>
                        <option value="bulk_order">Bulk Order</option>
                        <option value="support">Support</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                        How did you find us?
                      </label>
                      <select
                        name="way"
                        value={formData.way}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400"
                      >
                        <option value="website">Website</option>
                        <option value="search_engine">Search Engine</option>
                        <option value="social_media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-600 uppercase mb-1.5 sm:mb-2 tracking-widest">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 text-xs sm:text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 hover:border-gray-400 resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1 sm:pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base text-white transition-all duration-300 transform hover:shadow-xl hover:scale-105 active:scale-95 bg-gradient-to-r from-[#212C5F] to-[#1A2250] hover:from-[#1A2250] hover:to-[#15182F] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {submitting ? "Sending..." : "Send Enquiry →"}
                    </button>
                  </div>

                  <p className="text-[0.55rem] sm:text-[0.6rem] md:text-xs text-gray-500 text-center pt-1">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT: Info Cards (Top) & Map (Bottom) */}
            <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10">
              {/* Contact Info Cards - Top */}
              <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Phone */}
                <div className="group p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-200/50 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm hover:border-[#212C5F]/20 hover:bg-gradient-to-br hover:from-[#212C5F]/5 hover:to-white/50 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ background: '#212C5F15' }}>
                      <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}>
                        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.55rem] sm:text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">Phone</div>
                      <a href="tel:+918765432100" className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-[#212C5F] transition-colors truncate">
                        +91 876 543 2100
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-200/50 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm hover:border-[#212C5F]/20 hover:bg-gradient-to-br hover:from-[#212C5F]/5 hover:to-white/50 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ background: '#212C5F15' }}>
                      <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" fill="none" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.55rem] sm:text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">Email</div>
                      <a href="mailto:panaseahealthcare@gmail.com" className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-[#212C5F] transition-colors truncate">
                        panasea@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-200/50 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm hover:border-[#212C5F]/20 hover:bg-gradient-to-br hover:from-[#212C5F]/5 hover:to-white/50 transition-all duration-300">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mt-0.5" style={{ background: '#212C5F15' }}>
                      <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.55rem] sm:text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">Address</div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                        177 Giant Hill Road, South City
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="group p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-200/50 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm hover:border-[#212C5F]/20 hover:bg-gradient-to-br hover:from-[#212C5F]/5 hover:to-white/50 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ background: '#212C5F15' }}>
                      <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#212C5F' }}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" fill="none" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.55rem] sm:text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">Support</div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container - Bottom */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-xl group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.41941592346934!3d37.77492957102104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4701%3A0xb10ed6d9b5050b69!2s177%20Giant%20Hill%20Road!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Overlay */}
      {submitStatus !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-sm mx-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Loading State */}
            {submitStatus === "loading" && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#212C5F] border-r-[#212C5F] animate-spin" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Sending Your Message...</h3>
                  <p className="text-sm text-gray-600">Please wait while we process your request</p>
                </div>
              </div>
            )}

            {/* Success State */}
            {submitStatus === "success" && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-green-100 opacity-20" />
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-600">{submitMessage}</p>
                </div>

                {/* Success Progress Bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse" style={{
                    animation: "progress-bar 3s ease-out forwards"
                  }} />
                </div>
              </div>
            )}

            {/* Error State */}
            {submitStatus === "error" && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-red-100 opacity-20" />
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Something Went Wrong</h3>
                  <p className="text-sm text-gray-600 mb-4">{submitMessage}</p>
                </div>

                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#212C5F] to-[#1A2250] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}