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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4A5B9F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#212C5F]/5 rounded-full blur-3xl" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Circular progress loader */}
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            style={{
              filter: "drop-shadow(0 0 20px rgba(33, 44, 95, 0.1))",
            }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="56"
              fill="none"
              stroke="#F0F0F0"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="56"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="351.86"
              initial={{ strokeDashoffset: 351.86 }}
              animate={{ strokeDashoffset: 351.86 * (1 - progress / 100) }}
              strokeLinecap="round"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#212C5F" />
                <stop offset="50%" stopColor="#4A5B9F" />
                <stop offset="100%" stopColor="#7b8ec8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Progress number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <motion.span
                key={currentStep}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="block text-3xl font-bold bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] bg-clip-text text-transparent"
              >
                {currentStep}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xl font-regular text-gray-900 mb-2 tracking-tight">
            Panasea Healthcare
          </h2>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-gray-500 tracking-widest uppercase font-light"
          >
            Loading Premium Quality...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
