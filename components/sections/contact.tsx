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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
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
      if (
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.organization ||
        !formData.message
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Submit to Supabase
      await addContactMessage({
        ...formData,
        type: formData.type || "general",
        way: formData.way || "website",
      });

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been received. We'll get back to you within 24 hours.",
      );

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
      setSubmitMessage(
        error.message || "Failed to send message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-5 bg-[#1E2B5F] overflow-hidden flex flex-col"
    >
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-[#212C5F]/20 to-[#4A5B9F]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-[#212C5F]/15 to-[#4A5B9F]/5 rounded-full blur-3xl"
        />
        {/* Additional decorative blobs */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full"
          style={{ background: "rgba(100,130,255,0.06)" }} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-52 h-52 rounded-full"
          style={{ background: "rgba(80,200,180,0.05)" }} />
      </div>

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
            {/* Badge with blur background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6 relative"
            >
              <motion.span
                className="text-[11px] font-regular tracking-[0.4em] uppercase text-[#4A5B9F] block py-1 px-4 border rounded-full" 
  style={{ color: "#96C5FF", borderColor: "rgba(150,197,255,0.35)" }}                whileHover={{ letterSpacing: "0.5em" }}
                transition={{ duration: 0.3 }}
              >
                Get In Touch
              </motion.span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl capitalize font-regular tracking-tighter leading-tight text-white mb-6"
            >
              Let's Talk About 
              Your Requirements
            </motion.h2>

            {/* Separator line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ originX: "center" }}
              className="w-12 h-1 bg-gradient-to-r from-[#4A5B9F] to-[#7b8ec8] mx-auto mb-6 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Whether you're looking for a specific product, exploring a
              distribution partnership, or need a custom supply arrangement -
              we're here to help.
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 max-w-7xl mx-auto px-2 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
            {/* LEFT: Contact Form - Premium Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 w-full"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border p-8 md:p-10" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.2)" }}>
                <h3 className="text-lg md:text-2xl font-regular tracking-tight text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-[#212C5F] to-[#4A5B9F] rounded-full" />
                  Send us a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5"
                >
                  {/* Name Field */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none"
                      style={{ borderColor: "rgba(150,197,255,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
                      onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                      placeholder="Dr. Anita Sharma"
                    />
                  </motion.div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "rgba(150,197,255,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                        placeholder="+91 98765 43210"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "rgba(150,197,255,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                        placeholder="you@hospital.com"
                      />
                    </motion.div>
                  </div>

                  {/* Organization & Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "rgba(150,197,255,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                        placeholder="Apollo Hospital..."
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                        Inquiry Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border text-white text-sm transition-all duration-300 focus:outline-none cursor-pointer appearance-none"
                        style={{ 
                          borderColor: "rgba(150,197,255,0.2)", 
                          backgroundColor: "rgba(255,255,255,0.02)",
                          backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"rgba(150,197,255,0.5)\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.5rem center",
                          backgroundSize: "1.5em 1.5em",
                          paddingRight: "2.5rem"
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                      >
                        <option value="" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Select Type</option>
                        <option value="partnership" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Partnership</option>
                        <option value="bulk_order" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Bulk Order</option>
                        <option value="support" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Support</option>
                        <option value="general" style={{ backgroundColor: "#1E2B5F", color: "white" }}>General Inquiry</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* How did you find us */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                      How did you find us?
                    </label>
                    <select
                      name="way"
                      value={formData.way}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border text-white text-sm transition-all duration-300 focus:outline-none cursor-pointer appearance-none"
                      style={{ 
                        borderColor: "rgba(150,197,255,0.2)", 
                        backgroundColor: "rgba(255,255,255,0.02)",
                        backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"rgba(150,197,255,0.5)\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.5rem center",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem"
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                    >
                      <option value="website" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Website</option>
                      <option value="search_engine" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Search Engine</option>
                      <option value="social_media" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Social Media</option>
                      <option value="referral" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Referral</option>
                      <option value="other" style={{ backgroundColor: "#1E2B5F", color: "white" }}>Other</option>
                    </select>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs font-regular uppercase mb-2 tracking-widest" style={{ color: "rgba(150,197,255,0.7)" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border bg-white/5 text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none resize-none" style={{ borderColor: "rgba(150,197,255,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
                      onFocus={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.5)"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "rgba(150,197,255,0.2)"}
                      placeholder="Tell us what you're looking for..."
                    />
                  </motion.div>

                  {/* Submit Button - Premium */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 mt-2 rounded-lg font-semibold text-white text-sm transition-all duration-300 bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] hover:shadow-xl hover:from-[#212C5F] hover:to-[#4A5B9F] border border-white/20 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitting ? "Sending..." : "Send Enquiry →"}
                    </span>
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center pt-2">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>

            {/* RIGHT: Info Cards - Premium Glassmorphic */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 w-full flex flex-col gap-5"
            >
              {/* Contact Info Grid - Compact Colorful */}
              <div className="flex flex-col gap-4">
                {/* Phone - Blue */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-xl border overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.3)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(150,197,255,0.08)" }} />
                  <div className="relative z-10">
                    <p className="text-xs font-regular uppercase tracking-widest mb-3" style={{ color: "rgba(150,197,255,0.7)" }}>
                      Phone
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+919686495574"
                        className="text-sm font-semibold text-white hover:text-blue-300 transition-colors duration-300"
                      >
                        +91-9686495574
                      </a>
                      <a
                        href="tel:+917022443765"
                        className="text-sm font-semibold text-white hover:text-blue-300 transition-colors duration-300"
                      >
                        +91-7022443765
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Email - Purple - Full Width */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-xl border overflow-hidden w-full"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.3)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(150,197,255,0.08)" }} />
                  <div className="relative z-10">
                    <p className="text-xs font-regular uppercase tracking-widest mb-3" style={{ color: "rgba(150,197,255,0.7)" }}>
                      Email
                    </p>
                    <a
                      href="mailto:panaseahealthcare@gmail.com"
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors duration-300 break-all"
                    >
                      panaseahealthcare@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Address - Full Width */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-xl border overflow-hidden w-full"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.3)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(150,197,255,0.08)" }} />
                <div className="relative z-10">
                  <p className="text-xs font-regular uppercase tracking-widest mb-3" style={{ color: "rgba(150,197,255,0.7)" }}>
                    Address
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "rgba(200,215,255,0.8)" }}>
                    Benson Police Station, 31, Coles Road, Frazer Town, Benson
                    Town, Bengaluru, Karnataka 560046
                  </p>
                </div>
              </motion.div>

              {/* Map Container - Compact */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-56 md:h-64 rounded-xl border overflow-hidden shadow-lg hover:shadow-2xl group"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(150,197,255,0.3)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6844638844753!2d77.60049632346947!3d13.00274869065947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a79e99b7749%3A0xd4e51c123c4b8b!2sBenson%20Police%20Station!5e0!3m2!1sen!2sin!4v1234567890"
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sending Your Message...
                  </h3>
                  <p className="text-sm text-gray-600">
                    Please wait while we process your request
                  </p>
                </div>
              </div>
            )}

            {/* Success State */}
            {submitStatus === "success" && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-green-100 opacity-20" />
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600">{submitMessage}</p>
                </div>

                {/* Success Progress Bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"
                    style={{
                      animation: "progress-bar 3s ease-out forwards",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Error State */}
            {submitStatus === "error" && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-red-100 opacity-20" />
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Something Went Wrong
                  </h3>
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
