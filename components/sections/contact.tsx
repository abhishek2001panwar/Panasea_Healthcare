"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section id="contact" className="relative py-10 bg-white overflow-hidden flex flex-col">
      {/* Premium Animated Background Elements */}
        <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-[#212C5F]/20 to-[#4A5B9F]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-linear-to-tr from-[#212C5F]/15 to-[#4A5B9F]/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div> */}

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 pb-8 md:pb-12 max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mx-auto"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full ">
                <p className="text-xs font-bold uppercase tracking-widest text-[#212C5F]">
                  Get In Touch
                </p>
              </div>
            </motion.div>

            {/* Heading */}
            {/* <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Ready to Partner with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#212C5F] to-[#4A5B9F]">
                Panasea Healthcare?
              </span>
            </motion.h2> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg max-w-2xl mx-auto font-light"
            >
              Let's discuss how we can strengthen your supply chain
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            {/* LEFT: Contact Form - Premium Compact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 w-full"
            >
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                    <span className="w-1 h-8 bg-linear-to-b from-[#212C5F] to-[#4A5B9F] rounded-full" />
                    Send us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    {/* Name Field */}
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                        placeholder="Dr. Anita Sharma"
                      />
                    </motion.div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                          placeholder="+91 98765 43210"
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                          placeholder="you@hospital.com"
                        />
                      </motion.div>
                    </div>

                    {/* Organization & Type Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                          Organization *
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                          placeholder="Apollo Hospital..."
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                          Inquiry Type
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                        >
                          <option value="">Select Type</option>
                          <option value="partnership">Partnership</option>
                          <option value="bulk_order">Bulk Order</option>
                          <option value="support">Support</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </motion.div>
                    </div>

                    {/* How did you find us */}
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                        How did you find us?
                      </label>
                      <select
                        name="way"
                        value={formData.way}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20"
                      >
                        <option value="website">Website</option>
                        <option value="search_engine">Search Engine</option>
                        <option value="social_media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5 tracking-widest">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 text-sm transition-all duration-300 focus:outline-none focus:border-[#212C5F] focus:ring-2 focus:ring-[#212C5F]/20 resize-none"
                        placeholder="Tell us what you're looking for..."
                      />
                    </motion.div>

                    {/* Submit Button - Premium */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all duration-300 bg-linear-to-r from-[#212C5F] to-[#4A5B9F] hover:from-[#1A2250] hover:to-[#3a4a8f] shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Send Enquiry →"}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center pt-1">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </div>
            </motion.div>

            {/* RIGHT: Info Cards - Premium Compact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 w-full flex flex-col gap-4"
            >
              {/* Contact Info Grid - Compact Colorful */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone - Blue */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="group relative p-5 rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-50/30 hover:border-blue-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-[#212C5F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100/30 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Phone</p>
                    <a href="tel:+918765432100" className="text-sm font-bold text-gray-900 hover:text-[#212C5F] transition-colors">
                      +91 876 543 2100
                    </a>
                  </div>
                </motion.div>

                {/* Email - Purple */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="group relative p-5 rounded-xl border border-purple-200/50 bg-gradient-to-br from-purple-50 to-purple-50/30 hover:border-purple-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-[#4A5B9F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-12 h-12 bg-purple-100/30 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:panaseahealthcare@gmail.com" className="text-sm font-bold text-gray-900 hover:text-[#212C5F] transition-colors truncate">
                      panasea@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Address - Green */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="group relative p-5 rounded-xl border border-green-200/50 bg-gradient-to-br from-green-50 to-green-50/30 hover:border-green-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-12 h-12 bg-green-100/30 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Address</p>
                    <p className="text-sm font-bold text-gray-900">
                      177 Giant Hill Road, South City
                    </p>
                  </div>
                </motion.div>

                {/* Support - Amber */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="group relative p-5 rounded-xl border border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-50/30 hover:border-amber-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-12 h-12 bg-amber-100/30 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">Support</p>
                    <p className="text-sm font-bold text-gray-900">24/7 Available</p>
                  </div>
                </motion.div>
              </div>

              {/* Map Container - Compact */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-56 md:h-64 rounded-xl border border-gray-200/60 overflow-hidden shadow-lg hover:shadow-xl group"
              >
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
              </motion.div>
            </motion.div>
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