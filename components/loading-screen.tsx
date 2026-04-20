"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment steps 1-5
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < 5) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);

    // Update progress circle based on step
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 20; // Each step is 20% (5 steps = 100%)
        }
        return 100;
      });
    }, 400);

    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }, 2500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  const steps = [
    "Initializing",
    "Loading Data",
    "Processing",
    "Optimizing",
    "Ready"
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 25%, #FFFFFF 50%, #F8FAFC 75%, #FFFFFF 100%)",
        backgroundSize: "400% 400%"
      }}
    >
      <motion.div
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 25%, #FFFFFF 50%, #F8FAFC 75%, #FFFFFF 100%)",
          backgroundSize: "400% 400%"
        }}
      />

      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4A5B9F]/20 via-[#7b8ec8]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#212C5F]/20 via-[#4A5B9F]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#4A5B9F]/15 to-[#7b8ec8]/15 rounded-full blur-3xl"
        />
      </div>

      {/* Premium card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-12 px-8 md:px-16 py-12 md:py-16 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 60px rgba(33, 44, 95, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.8)"
        }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #4A5B9F 50%, transparent 100%)"
          }}
        />

        {/* Circular progress loader */}
        <div className="relative w-48 h-48">
          {/* Outer rings */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              filter: "drop-shadow(0 0 40px rgba(74, 91, 159, 0.4))",
            }}
          >
            <defs>
              <radialGradient id="outerGlow">
                <stop offset="0%" stopColor="#4A5B9F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7b8ec8" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A5B9F" />
                <stop offset="50%" stopColor="#7b8ec8" />
                <stop offset="100%" stopColor="#96C5FF" />
              </linearGradient>
            </defs>

            {/* Background rings */}
            <circle cx="50%" cy="50%" r="95" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.5" />
            <circle cx="50%" cy="50%" r="75" fill="none" stroke="#D1D5DB" strokeWidth="1" opacity="0.3" />

            {/* Outer glow circle */}
            <circle
              cx="50%"
              cy="50%"
              r="95"
              fill="none"
              stroke="url(#outerGlow)"
              strokeWidth="3"
              opacity="0.6"
            />

            {/* Progress circle */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="90"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeDasharray="565.48"
              initial={{ strokeDashoffset: 565.48, rotate: 0 }}
              animate={{ 
                strokeDashoffset: 565.48 * (1 - progress / 100),
                rotate: 360
              }}
              strokeLinecap="round"
              transition={{ strokeDashoffset: { duration: 0.5, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
              style={{ transformOrigin: "50% 50%" }}
            />
          </motion.svg>

          {/* Center number with glow */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background: "linear-gradient(135deg, #4A5B9F 0%, #7b8ec8 100%)",
                  transform: "scale(1.5)"
                }}
              />
              <motion.span
                key={currentStep}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -20, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative block text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A5B9F] via-[#7b8ec8] to-[#96C5FF] bg-clip-text text-transparent"
              >
                {currentStep}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Brand info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center max-w-md"
        >
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 tracking-tight font-regular">
            Panasea Healthcare
          </h2>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs md:text-sm text-[#4A5B9F] tracking-widest uppercase font-light"
          >
            {steps[currentStep - 1]}
          </motion.p>
        </motion.div>

        {/* Animated progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-3"
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: index + 1 <= currentStep ? [1, 1.2, 1] : 1,
                opacity: index + 1 <= currentStep ? 1 : 0.4,
                backgroundColor: index + 1 <= currentStep ? "#4A5B9F" : "#334155"
              }}
              transition={{ duration: 0.5 }}
              className="w-3 h-3 rounded-full shadow-lg"
              style={{
                boxShadow: index + 1 <= currentStep ? "0 0 15px rgba(74, 91, 159, 0.6)" : "none"
              }}
            />
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm text-gray-400 tracking-[0.15em] font-semibold uppercase"
        >
          Delivering Excellence
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #4A5B9F 50%, transparent 100%)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
