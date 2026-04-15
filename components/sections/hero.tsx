"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeEditor } from "./code-editor";
import { useRouter } from "next/navigation";


export function Hero() {
    const router = useRouter();
  return (
    <section className="relative min-h-screen w-full overflow-hidden ">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-[120px] md:-left-32 md:-top-32 md:h-96 md:w-96" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[120px] md:-bottom-32 md:-right-32 md:h-96 md:w-96" />
      <div className="absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-indigo-500/10 blur-[100px] md:right-1/4 md:top-1/3 md:h-64 md:w-64" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:gap-16 ">
        {/* Left side - Content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-sm text-black/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#212C5F] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#212C5F]" />
            </span>
           India's Trusted Healthcare Distributor


          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-balance text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Healthcare{" "}
            <span className=" bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] bg-clip-text text-transparent">
              Supply
            </span>
            , You Can <br />
            Count On
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 max-w-xl text-pretty text-md text-black/50 sm:text-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From pharmaceuticals and surgical equipment to diagnostics and
            medical disposables we deliver quality-assured medical products to
            hospitals, clinics, and pharmacies across India and beyond.{" "}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          > 
            <Button
              size="lg"
              className="h-12  bg-gradient-to-r from-[#212C5F] to-[#4A5B9F] px-8 text-base font-semibold text-white hover:from-indigo-500 hover:to-violet-500"
              onClick={() => {
                // Handle explore products click
                router.push("/#products");
              }}
            >
              Explore Products
            </Button>
            <Button
            onClick={()=>{
                router.push('/#contact')
            }}
              variant="ghost"
              size="lg"
              className="h-12 gap-2 border border-black/10 px-6 text-base text-black/80 hover:bg-black/5 hover:text-black"
            >
              <Play className="h-4 w-4 fill-current" />
              Partner With Us
            </Button>
          </motion.div>

        
        </motion.div>

        {/* Right side - Code Editor */}
        <motion.div
          className="flex flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <CodeEditor />
        </motion.div>
      </div>
    </section>
  );
}
