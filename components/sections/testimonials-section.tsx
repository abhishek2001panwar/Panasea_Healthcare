"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Healthcare Background Image */}
        <Image
          src="https://media.istockphoto.com/id/1413600685/photo/focused-serious-medical-scientists-analyzing-research-scans-on-a-computer-working-late-in-the.jpg?s=612x612&w=0&k=20&c=qu3PN_aGTpb8Bb9EjMrPZQt-PjRUXtJdOyAXz3lTMAc="
          alt="Healthcare background"
          fill
          className="object-cover object-center "
          priority
        />

        {/* Premium Multi-Layer Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
        
        {/* Gradient Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/50" style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
        }} />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-10 left-5 w-72 h-72 rounded-full blur-3xl"
        style={{ background: '#212C5F10', pointerEvents: 'none' }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: '#212C5F08', pointerEvents: 'none' }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-sm border border-white/30"
            style={{ background: 'rgba(33, 44, 95, 0.3)', color: '#fff' }}
          >
            Take the Next Step
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-center text-white"
        >
          Ready to Strengthen Your
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-white bg-clip-text text-transparent"
          >
            Supply Chain?
          </motion.span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center mb-12 font-light"
        >
          Join hundreds of hospitals, pharmacies, and distributors who trust{" "}
          <span className="font-semibold text-white">Panasea Healthcare</span> for
          consistent, quality-assured medical supplies. Let's build a more reliable
          healthcare ecosystem together.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.a
          href="/#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#212C5F]/50 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, #212C5F 0%, #4A5B9F 100%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get a Quote Today
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-500" />
          </motion.button>
        </motion.a>
      </div>
    </section>
  );
}
